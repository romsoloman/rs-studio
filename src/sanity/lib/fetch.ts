import { client } from "./client";
import { type QueryParams } from "next-sanity";
import { projectId } from "../env";

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}) {
  // Fallback for development/testing when Sanity is not yet configured
  if (projectId === "replace-me" || projectId === "dummy-project-id") {
    return [] as unknown as QueryResponse;
  }

  return client.fetch<QueryResponse>(query, params, {
    next: {
      tags,
      revalidate: 60, // revalidate every 60 seconds
    },
  });
}
