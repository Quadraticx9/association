import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Compass, Heart, Mountain, Sprout } from "lucide-react"
import { association, stats, timeline } from "@/lib/data"

const values = [
  {
    icon: Sprout,
    title: "Rooted in lineage",
    description:
      "Every practice traces back to the Himalayan teachers who shaped modern yoga.",
  },
  {
    icon: Mountain,
    title: "Place of stillness",
    description:
      "The Ganga and the foothills of Rishikesh are inseparable from our practice.",
  },
  {
    icon: Heart,
    title: "Service to seekers",
    description:
      "We teach with patience, honouring each practitioner's level and pace.",
  },
  {
    icon: Compass,
    title: "Faithful, not frozen",
    description:
      "The tradition endures precisely because it is lived and interpreted with care.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6">
        <div className="max-w-3xl space-y-6">
          <Badge variant="primary-light" size="lg">
            {association.established}
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Fifty years on the banks of the Ganga
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {association.name} began as a handful of students gathered around a
            master in {association.city}. Today it is a worldwide community
            devoted to the practice, preservation, and sincere teaching of
            classical yoga.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/40 border-y">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <Badge variant="secondary">What guides us</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Our values
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent>
                  <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-xl">
                    <value.icon className="size-4" aria-hidden />
                  </span>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium">{value.title}</h3>
                    <p className="text-muted-foreground mt-1.5 text-sm">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border px-0 py-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background px-6 py-6">
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <Badge variant="secondary">The journey</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            A timeline of the association
          </h2>
        </div>
        <div className="space-y-0">
          {timeline.map((entry, index) => (
            <div key={entry.year} className="relative pl-8 pb-10 last:pb-0">
              {index < timeline.length - 1 && (
                <Separator
                  orientation="vertical"
                  className="bg-muted-foreground/20 absolute top-2 bottom-0 left-[7px] h-auto"
                />
              )}
              <span className="border-background bg-primary text-primary-foreground absolute top-1.5 left-0 size-4 rounded-full border-2" />
              <Badge variant="outline" size="sm">
                {entry.year}
              </Badge>
              <h3 className="mt-2 font-medium">{entry.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {entry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border bg-muted/40 p-8 text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            Want to walk this path with us?
          </h3>
          <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
            Become part of a community that has trained teachers &amp; seekers
            from over thirty countries.
          </p>
          <Button size="lg" className="mt-6" render={<Link href="/member" />} nativeButton={false}>
              Meet the Members <ArrowRight className="size-4" aria-hidden />
            </Button>
        </div>
      </section>
    </>
  )
}