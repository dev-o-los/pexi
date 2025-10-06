import { tmdbFetch } from "@/lib/tmdb/tmdb-client";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const data = await tmdbFetch("/trending/movie/day");
    return NextResponse.json(data);
  } catch (error) {
    const e = error as Error;
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
};
