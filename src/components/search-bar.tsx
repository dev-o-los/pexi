"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SearchBar({ className }: { className?: string }) {
  // const [q, setQ] = React.useState("")
  // const results = React.useMemo(() => {
  //   const t = q.trim().toLowerCase()
  //   if (!t) return []
  //   return MOVIES.filter(
  //     (m) => m.title.toLowerCase().includes(t) || m.genres.join(" ").toLowerCase().includes(t),
  //   ).slice(0, 6)
  // }, [q])

  return (
    <div id="search" className={cn("relative", className)}>
      <Input
        // value={q}
        // onChange={(e) => setQ(e.target.value)}
        placeholder="Search movies and series..."
        aria-label="Search movies"
        className="bg-secondary/60 placeholder:text-muted-foreground"
      />
      {/* {q && (
        <div
          role="listbox"
          className="absolute z-30 mt-2 w-full rounded-lg border bg-popover/95 backdrop-blur p-2 shadow-lg"
        >
          {results.length === 0 && <div className="px-3 py-2 text-sm text-muted-foreground">No results</div>}
          {results.map((r) => (
            <Link
              key={r.id}
              role="option"
              href={`/movie/${r.id}`}
              className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-secondary/60"
            >
              <img
                src={r.poster || "/placeholder.svg"}
                alt={`${r.title} poster`}
                width={32}
                height={48}
                className="h-12 w-8 rounded object-cover"
              />
              <div className="text-sm">
                <div className="font-medium">{r.title}</div>
                <div className="text-muted-foreground">{r.genres.join(" • ")}</div>
              </div>
            </Link>
          ))}
        </div>
      )} */}
    </div>
  );
}
