import type React from "react"
import type { Movie } from "@/lib/movies"
import { MovieCard } from "./movie-card"
import { cn } from "@/lib/utils"

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-pretty text-xl font-semibold tracking-tight md:text-2xl">{children}</h2>
}

export function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <section className="space-y-3">
      <SectionTitle>{title}</SectionTitle>
      <div className={cn("group/row relative")}>
        <div className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {movies.map((m) => (
            <div key={m.id} className="snap-start">
              <MovieCard movie={m} />
            </div>
          ))}
        </div>
        {/* Soft edge gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background" />
      </div>
    </section>
  )
}

export function MovieGrid({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <section className="space-y-3">
      <SectionTitle>{title}</SectionTitle>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} size="sm" />
        ))}
      </div>
    </section>
  )
}
