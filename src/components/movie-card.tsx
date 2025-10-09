"use client";

import { Card } from "@/components/ui/card";
import type { Movie } from "@/lib/movies";
import { cn } from "@/lib/utils";
import { Play, Star } from "lucide-react";
import Link from "next/link";

export function MovieCard({
  movie,
  size = "md",
}: {
  movie: Movie;
  size?: "sm" | "md";
}) {
  const width = size === "sm" ? 160 : 200;
  const height = size === "sm" ? 240 : 300;

  return (
    <Link href={`/movie/${movie.id}`} className="group block">
      <Card
        className={cn(
          "relative overflow-hidden border-0 bg-secondary/30 shadow-none"
        )}
      >
        <img
          src={movie.backdrop_path || "/placeholder.svg"}
          alt={`${movie.title} poster`}
          width={width}
          height={height}
          className="h-[var(--h)] w-[var(--w)] object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          style={{
            ["--w" as any]: `${width}px`,
            ["--h" as any]: `${height}px`,
          }}
        />
        {/* Hover overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="p-3 w-full">
            <div className="flex items-center justify-between gap-2">
              <div className="text-xs text-muted-foreground">
                {/* {movie.genres.join(" • ")} */}
              </div>
              <div className="flex items-center text-xs">
                <Star className="h-3.5 w-3.5 text-accent" />
                <span className="ml-1">{movie.popularity.toFixed(1)}</span>
              </div>
            </div>
            <div className="mt-1 font-medium leading-tight">{movie.title}</div>
          </div>
        </div>
        {/* Play badge */}
        <div className="absolute right-2 top-2 rounded-full bg-background/70 backdrop-blur p-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Play className="h-4 w-4 text-primary" />
        </div>
      </Card>
    </Link>
  );
}
