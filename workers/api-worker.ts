export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const source = url.searchParams.get("source") ?? "local";

  if (source === "local") {
    return new Response(JSON.stringify({ status: "ok", message: "Local threat feed API" }), {
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=120" },
    });
  }

  return new Response(JSON.stringify({ error: "Source not supported" }), { status: 400 });
}

addEventListener("fetch", (event) => {
  const fetchEvent = event as any;
  fetchEvent.respondWith(handleRequest(fetchEvent.request));
});
