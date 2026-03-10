#!/bin/bash

# RS Studio — Professional Release Script
# This script promotes code from staging to main and creates a SemVer tag.

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}🚀 Starting release process...${NC}"

# 1. Check if we are on staging
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "staging" ]; then
    echo -e "${RED}❌ Error: You must be on the 'staging' branch to run this script.${NC}"
    exit 1
fi

# 2. Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo -e "${RED}❌ Error: You have uncommitted changes. Please commit or stash them first.${NC}"
    exit 1
fi

# 3. Pull latest changes
echo -e "${BLUE}📥 Pulling latest changes...${NC}"
git pull origin staging

# 4. Get last tag
LAST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "v0.0.0")
echo -e "${GREEN}✅ Current version: ${LAST_TAG}${NC}"

# 5. Ask for version increment
echo -e "${YELLOW}Select version increment (1, 2, or 3):${NC}"
echo "1) Patch (v1.0.X)"
echo "2) Minor (v1.X.0)"
echo "3) Major (vX.0.0)"
read -p "Selection: " VERSION_TYPE

# Split version components
VERSION=${LAST_TAG#v}
IFS='.' read -ra ADDR <<< "$VERSION"
MAJOR=${ADDR[0]}
MINOR=${ADDR[1]}
PATCH=${ADDR[2]}

if [ "$VERSION_TYPE" == "1" ]; then
    PATCH=$((PATCH + 1))
elif [ "$VERSION_TYPE" == "2" ]; then
    MINOR=$((MINOR + 1))
    PATCH=0
elif [ "$VERSION_TYPE" == "3" ]; then
    MAJOR=$((MAJOR + 1))
    MINOR=0
    PATCH=0
else
    echo -e "${RED}❌ Invalid selection.${NC}"
    exit 1
fi

NEW_TAG="v${MAJOR}.${MINOR}.${PATCH}"
echo -e "${GREEN}🆙 New version will be: ${NEW_TAG}${NC}"

# 6. Merge staging into main
echo -e "${BLUE}🔄 Merging staging into main...${NC}"
git checkout main
git pull origin main
git merge staging --no-ff -m "chore: release ${NEW_TAG}"

# 7. Create tag
echo -e "${BLUE}🏷️ Creating tag ${NEW_TAG}...${NC}"
git tag -a "$NEW_TAG" -m "Release ${NEW_TAG}"

# 8. Update CHANGELOG.md (Simple version)
echo -e "${BLUE}📝 Updating CHANGELOG.md...${NC}"
DATE=$(date +%Y-%m-%d)
TEMP_CHLOG=$(mktemp)
echo -e "## [${NEW_TAG}] - ${DATE}\n" > "$TEMP_CHLOG"
git log "${LAST_TAG}..HEAD" --oneline --pretty=format:"- %s" >> "$TEMP_CHLOG"
echo -e "\n" >> "$TEMP_CHLOG"

if [ -f CHANGELOG.md ]; then
    cat CHANGELOG.md >> "$TEMP_CHLOG"
fi
mv "$TEMP_CHLOG" CHANGELOG.md

git add CHANGELOG.md
git commit --amend --no-edit

# 9. Push changes
echo -e "${YELLOW}⚠️ Ready to push main and tags to origin? (y/n)${NC}"
read -p "Confirm: " CONFIRM
if [ "$CONFIRM" != "y" ]; then
    echo -e "${RED}❌ Release aborted before push. You are currently on branch 'main'.${NC}"
    exit 0
fi

echo -e "${BLUE}📤 Pushing to main...${NC}"
git push origin main --follow-tags

# 10. Return to staging
echo -e "${BLUE}🔙 Returning to staging...${NC}"
git checkout staging

echo -e "${GREEN}🎉 Release ${NEW_TAG} successfully deployed and tagged!${NC}"
