import { MeiliSearch } from "meilisearch";
const client = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST as string,
  // apiKey: process.env.MEILISEARCH_API_KEY,
});

export const studentIndex = client.index("students");
