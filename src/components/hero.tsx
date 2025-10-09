import { Button } from "@/components/ui/button";
import type { Movie } from "@/lib/movies";
import { getMovieImage } from "@/lib/tmdb/helpers";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero({ movie }: { movie: Movie }) {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden rounded-b-xl">
      <Image
        src={getMovieImage(movie.poster_path) || "/placeholder.svg"}
        alt={`${movie.id} backdrop`}
        fill
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Gradient + glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />

      <div
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-4 md:px-6",
          "flex min-h-[70vh] items-end"
        )}
      >
        <div className="w-full pb-10 md:pb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex flex-wrap gap-2">
              {movie.genre_ids.map((g) => (
                <span
                  key={g}
                  className="rounded-full bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {g}
                </span>
              ))}
            </div>
            <h1 className="text-pretty text-4xl font-semibold leading-tight md:text-6xl">
              {movie.title}
            </h1>
            <p className="text-pretty text-sm text-muted-foreground md:text-base">
              {movie.overview}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Button asChild size="lg" className="gap-2 font-medium">
                <Link href={`/watch/${movie.id}`}>
                  <Play className="h-5 w-5" />
                  Watch Now
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={`/movie/${movie.id}`}>More Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
