import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-6 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <div className="font-medium text-foreground">About</div>
            <p className="leading-relaxed">
              CINEMAX delivers a premium cinematic streaming experience. Always ad‑free.
            </p>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-foreground">Company</div>
            <ul className="grid gap-2">
              <li>
                <Link className="hover:text-primary" href="#">
                  Help
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="#">
                  Terms
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="#">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-foreground">Follow</div>
            <ul className="grid gap-2">
              <li>
                <Link className="hover:text-primary" href="#">
                  X/Twitter
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="#">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary" href="#">
                  YouTube
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} CINEMAX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
