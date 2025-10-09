import { SiteFooter } from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

export default function MovieDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // const movie = MOVIES[0];
  // if (!movie) return notFound()

  // const related = MOVIES.filter((m) => m.id !== movie.id)

  return (
    <main>
      <NavBar />
      {/* <section className="relative h-[50vh] w-full overflow-hidden">
        <img
          src={movie. || "/placeholder.svg"}
          alt={`${movie.title} backdrop`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-4 pb-8 md:px-6">
          <h1 className="text-3xl font-semibold md:text-5xl">{movie.title}</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 text-accent" /> {movie.rating.toFixed(1)}
            </span>
            <span>•</span>
            <span>{movie.genres.join(" • ")}</span>
          </div>
          <div className="mt-4">
            <Button asChild size="lg" className="gap-2">
              <Link href={`/watch/${movie.id}`}>
                <Play className="h-5 w-5" />
                Play Movie
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 md:px-6">
        <div className="max-w-3xl text-pretty text-muted-foreground">{movie.description}</div>
        <div>
          <h2 className="text-lg font-semibold">Cast</h2>
          <div className="mt-2 text-sm text-muted-foreground">{movie.cast.join(", ")}</div>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Related</h2>
          <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {related.map((r) => (
              <Link key={r.id} href={`/movie/${r.id}`} className="group">
                <img
                  src={r.poster || "/placeholder.svg"}
                  alt={`${r.title} poster`}
                  width={200}
                  height={300}
                  className="h-[300px] w-[200px] rounded object-cover"
                />
                <div className="mt-2 text-sm text-foreground group-hover:text-primary">{r.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      <SiteFooter />
    </main>
  );
}
