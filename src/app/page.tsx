import { SiteFooter } from "@/components/footer";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";
import { MovieGrid, MovieRow } from "@/components/sections";
import { Movie } from "@/lib/movies";

export default async function Home() {
  const fetchTrending = await fetch(`${process.env.SITE_URL}/api/movies`);
  const trendingMovies =
    ((await fetchTrending.json())?.results as Movie[]) ?? [];

  // console.log(trendingMovies);

  return (
    <main>
      <NavBar />
      <Hero movie={trendingMovies[0]} />

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 space-y-10">
        <MovieRow title="Trending Now" movies={trendingMovies} />
        <MovieGrid title="New Releases" movies={trendingMovies} />
        <MovieRow title="Top Rated" movies={trendingMovies} />
        <MovieRow title="Upcoming" movies={trendingMovies} />
        <section id="genres" className="space-y-3">
          <h2 className="text-pretty text-xl font-semibold tracking-tight md:text-2xl">
            Genre Collections
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {/* {Array.from(new Set(MOVIES.flatMap((m) => m.genres))).map((g) => (
              <div
                key={g}
                className="rounded-lg border bg-secondary/40 p-4 text-center text-sm text-muted-foreground hover:bg-secondary/60"
              >
                {g}
              </div>
            ))} */}
          </div>
        </section>
      </div>

      <SiteFooter />
    </main>
  );
}
