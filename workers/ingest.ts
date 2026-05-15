export interface FeedItem {
  id: string;
  title: string;
  severity: string;
  category: string;
  observedAt: string;
  indicators: string[];
  mitigation: string;
  references: string[];
}

export async function fetchFeed(url: string): Promise<FeedItem[]> {
  const response = await fetch(url, { cache: "force-cache" });
  if (!response.ok) {
    throw new Error(`Failed to fetch feed: ${response.statusText}`);
  }
  const payload = await response.json();
  return payload.items as FeedItem[];
}

export async function ingestStaticFeeds(urls: string[]) {
  const feeds = await Promise.all(urls.map((url) => fetchFeed(url).catch(() => [])));
  return feeds.flat();
}
