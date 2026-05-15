export async function handleRequest(request: Request): Promise<Response> {
  const feedUrl = new URL(request.url).searchParams.get("url");
  if (!feedUrl) {
    return new Response(JSON.stringify({ error: "Missing feed URL" }), { status: 400 });
  }
  // @ts-expect-error cloudflare fetch cache options
  const response = await fetch(feedUrl, { cf: { cacheTtl: 1800 } });
  if (!response.ok) {
    return new Response(JSON.stringify({ error: "Feed fetch failed" }), { status: 502 });
  }
  const text = await response.text();
  return new Response(text, {
    status: 200,
    headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=300" },
  });
}

addEventListener("fetch", (event) => {
  const fetchEvent = event as any;
  fetchEvent.respondWith(handleRequest(fetchEvent.request));
});
