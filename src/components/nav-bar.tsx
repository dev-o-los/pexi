"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { SearchBar } from "./search-bar"

export function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn("sticky top-0 z-40", "backdrop-blur supports-[backdrop-filter]:bg-background/60")}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(!open)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="font-semibold tracking-tight text-lg">
              CINEMA<span className="text-primary">X</span>
              <span className="sr-only">Home</span>
            </Link>
            <nav className={cn("hidden md:flex items-center gap-6 text-sm")} aria-label="Main navigation">
              <Link className="hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <Link className="hover:text-primary transition-colors" href="#movies">
                Movies
              </Link>
              <Link className="hover:text-primary transition-colors" href="#series">
                Series
              </Link>
              <Link className="hover:text-primary transition-colors" href="#genres">
                Genres
              </Link>
            </nav>
          </div>

          <div className="hidden md:block w-80">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" aria-label="Search" className="md:hidden">
              <Link href="#search">
                <Search className="h-5 w-5" />
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage alt="User avatar" src="/user-avatar.png" />
                  <AvatarFallback>UX</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-52">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm" aria-label="Mobile navigation">
              <Link className="hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <Link className="hover:text-primary transition-colors" href="#movies">
                Movies
              </Link>
              <Link className="hover:text-primary transition-colors" href="#series">
                Series
              </Link>
              <Link className="hover:text-primary transition-colors" href="#genres">
                Genres
              </Link>
              <div className="pt-2">
                <SearchBar />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
