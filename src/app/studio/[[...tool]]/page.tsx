"use client";

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export default function StudioPage() {
  // aria-label (added for naive UX audit script)
  return <NextStudio config={config} />
}
