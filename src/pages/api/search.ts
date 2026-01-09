import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const q = url.searchParams.get("q");

  const API_KEY = process.env.OPENWEATHER_API_KEY;

  console.log("Recherche pour:", q);
  console.log("Clé utilisée:", API_KEY ? "Détectée ✅" : "VIDE ❌");

  if (!API_KEY) {
    return new Response(
      JSON.stringify({ error: "Clé API manquante sur le serveur" }),
      { status: 500 },
    );
  }

  if (!q) return new Response(JSON.stringify([]));

  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${API_KEY}`,
    );

    const data = await response.json();

    if (data.cod && data.cod !== 200) {
      return new Response(JSON.stringify(data), { status: data.cod });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Erreur réseau" }), {
      status: 500,
    });
  }
};
