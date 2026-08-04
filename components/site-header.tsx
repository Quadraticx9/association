"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Flower2 } from "lucide-react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/member", label: "Members" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-xl">
            <Flower2 className="size-5" aria-hidden />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Rishikesh Yoga</span>
            <span className="text-muted-foreground text-[0.7rem] uppercase tracking-wide">
              Association
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <Button size="sm" render={<Link href="/member" />}>
          Join Us
        </Button>
      </div>
    </header>
  )
}