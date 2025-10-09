"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Player({ poster }: { poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsPlaying(true)
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-background">
      <video ref={ref} className="h-full w-full" poster={poster || "/cinematic-poster.jpg"} controls>
        {/* No source available; demo UI focuses on layout and controls */}
      </video>

      {/* Minimal floating controls example */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-10",
          "bg-gradient-to-t from-background/90 via-background/30 to-transparent",
        )}
      >
        <div className="pointer-events-auto mx-auto flex max-w-5xl items-center gap-2 px-4 pb-4">
          <Button size="sm" variant="secondary" onClick={toggle}>
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <div className="ml-auto text-xs text-muted-foreground">CC • 4K • HDR</div>
        </div>
      </div>
    </div>
  )
}
