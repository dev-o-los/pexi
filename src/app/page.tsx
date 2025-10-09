import { SiteFooter } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";
import { MovieGrid, MovieRow } from "@/components/sections";
import {
  MOVIES,
  newReleases,
  topRated,
  trending,
  upcoming,
} from "@/lib/movies";

export default async function Home() {
  // let movies: any[] = [];

  // try {
  //   const data = await fetch(`${process.env.SITE_URL}/api/movies`, {
  //     method: "GET",
  //   }); // ✅ call TMDB directly from server
  //   console.log(await data.json());
  // } catch (err) {
  //   console.error("Failed to fetch movies:", err);
  // }
  return (
    <main>
      <NavBar />
      <Hero movie={MOVIES[0]} />

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 space-y-10">
        <MovieRow title="Trending Now" movies={trending} />
        <MovieGrid title="New Releases" movies={newReleases} />
        <MovieRow title="Top Rated" movies={topRated} />
        <MovieRow title="Upcoming" movies={upcoming} />
        <section id="genres" className="space-y-3">
          <h2 className="text-pretty text-xl font-semibold tracking-tight md:text-2xl">
            Genre Collections
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from(new Set(MOVIES.flatMap((m) => m.genres))).map((g) => (
              <div
                key={g}
                className="rounded-lg border bg-secondary/40 p-4 text-center text-sm text-muted-foreground hover:bg-secondary/60"
              >
                {g}
              </div>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
