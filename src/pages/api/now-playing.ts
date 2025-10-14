// src/pages/api/now-playing.ts

import type { APIRoute } from "astro";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

export const GET: APIRoute = async () => {
  try {
    const clientId = import.meta.env.PUBLIC_CLIENT_ID;
    const clientSecret = import.meta.env.SECRET_CLIENT_SECRET;
    const refreshToken = import.meta.env.SECRET_REFRESH_TOKEN;

    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const body = new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });

    const tokenRes = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    const { access_token } = await tokenRes.json();

    const nowPlayingRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
      return new Response(
        JSON.stringify({ isPlaying: false }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const song = await nowPlayingRes.json();

    const albumImageUrl = song.item.album.images[0].url;
    // @ts-ignore
    const artist = song.item.artists.map((artist) => artist.name).join(", ");
    const title = song.item.name;

    return new Response(
      JSON.stringify({
        albumImageUrl,
        artist,
        title,
        isPlaying: song.is_playing,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};