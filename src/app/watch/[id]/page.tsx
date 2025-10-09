import { NavBar } from "@/components/nav-bar";

export default function WatchPage({ params }: { params: { id: string } }) {
  // const movie = MOVIES.find((m) => m.id === params.id)
  // if (!movie) return notFound()

  return (
    <main>
      <NavBar />
      {/* <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
        <div className="mb-4 text-sm text-muted-foreground">
          <Link href="/">Home</Link> <span className="mx-2">/</span>{" "}
          <Link className="hover:text-primary" href={`/movie/${movie.id}`}>
            {movie.title}
          </Link>
        </div>
        <Player poster={movie.backdrop} />
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">{movie.title}</h1>
          <div className="text-sm text-muted-foreground">
            {movie.year} • {movie.duration} • {movie.genres.join(" • ")}
          </div>
        </div>
      </div> */}
    </main>
  );
}
