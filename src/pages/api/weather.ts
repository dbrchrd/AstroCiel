import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const lat = url.searchParams.get("lat");
  const lon = url.searchParams.get("lon");
  const API_KEY = process.env.OPENWEATHER_API_KEY;

  if (!lat || !lon) return new Response(null, { status: 400 });

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`,
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Fetch failed" }), {
      status: 500,
    });
  }
};
