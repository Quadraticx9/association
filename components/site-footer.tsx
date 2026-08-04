import Link from "next/link"
import { Flower2 } from "lucide-react"
import { association } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-xl">
              <Flower2 className="size-5" aria-hidden />
            </span>
            <span className="text-sm font-semibold">{association.name}</span>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm">
            {association.description}
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
            <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
            <li><Link href="/member" className="text-muted-foreground hover:text-foreground">Members</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Programs</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Teacher Training</li>
            <li>Retreats</li>
            <li>Meditation</li>
            <li>Workshops</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>{association.city}</li>
            <li>hello@rya.in</li>
            <li>+91 135 244 0000</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="text-muted-foreground mx-auto max-w-6xl px-4 py-6 text-center text-xs sm:px-6">
          © {new Date().getFullYear()} {association.name}. {association.established} · All
          rights reserved.
        </div>
      </div>
    </footer>
  )
}