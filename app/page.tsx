import Link from "next/link"
import {
  ArrowRight,
  Mountain,
  Flower,
  MoonStar,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/reui/badge"
import { Frame, FramePanel } from "@/components/reui/frame"
import { IconTile } from "@/components/reui/icon-tile"
import { Rating } from "@/components/reui/rating"
import { programs, stats, testimonials, association } from "@/lib/data"

const practices = [
  {
    icon: Flower,
    title: "Classical Hatha",
    description:
      "Traditional asana and pranayama taught in unbroken lineage since 1972.",
  },
  {
    icon: Mountain,
    title: "Himalayan Silence",
    description:
      "Practice facing the foothills and the Ganga — the very cradle of yoga.",
  },
  {
    icon: MoonStar,
    title: "Meditation & Kriya",
    description:
      "Structured pranayama and kriya retreats for deep inner stillness.",
  },
  {
    icon: Sparkles,
    title: "Teacher Training",
    description:
      "Certified 200-hour programs recognised by our global community.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="from-primary/10 via-primary/5 to-transparent absolute inset-0 bg-gradient-to-b" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-24">
          <div className="space-y-6">
            <Badge variant="primary-light" size="lg">
              {association.established} · Rishikesh, India
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              The Rishikesh Yoga Association
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg">
              A living community of practitioners and teachers keeping the
              classical yoga of the Himalayan foothills alive — on the banks of
              the Ganga since 1972.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" render={<Link href="/member" />}>
                Meet the Members{' '}
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button variant="outline" size="lg" render={<Link href="/about" />}>
                Our Story
              </Button>
            </div>
          </div>

          <Frame variant="inverse" spacing="lg" className="h-fit">
            <FramePanel className="space-y-4">
              <div className="flex items-center gap-3">
                <IconTile variant="elevated" size="lg">
                  <Users className="size-5" aria-hidden />
                </IconTile>
                <div>
                  <p className="text-2xl font-semibold">{stats[0].value}</p>
                  <p className="text-muted-foreground text-sm">
                    practitioners in our community
                  </p>
                </div>
              </div>
              <div className="bg-muted/60 flex items-center justify-between rounded-lg border py-3 pl-4 pr-3">
                <Badge variant="success-light">50+ years</Badge>
                <span className="text-muted-foreground text-sm">
                  eternal tradition
                </span>
              </div>
              <div className="bg-muted/60 flex items-center justify-between rounded-lg border py-3 pl-4 pr-3">
                <Badge variant="info-light">180</Badge>
                <span className="text-muted-foreground text-sm">
                  certified teachers
                </span>
              </div>
            </FramePanel>
          </Frame>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border px-4 py-10 sm:px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background px-4 py-6">
              <p className="text-3xl font-semibold">{stat.value}</p>
              <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Practices */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <Badge variant="secondary">What we practice</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Four paths, one tradition
          </h2>
          <p className="text-muted-foreground mt-3">
            From physical alignment to silent meditation, our programs honour
            the diversity inside a single lineage.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {practices.map((practice) => (
            <Frame key={practice.title}>
              <FramePanel>
                <IconTile variant="soft" size="sm">
                  <practice.icon className="size-4" aria-hidden />
                </IconTile>
                <div className="mt-4">
                  <h3 className="font-medium">{practice.title}</h3>
                  <p className="text-muted-foreground mt-1.5 text-sm">
                    {practice.description}
                  </p>
                </div>
              </FramePanel>
            </Frame>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="bg-muted/40 border-y">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <Badge variant="primary-light">Upcoming programs</Badge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Retreats, trainings &amp; workshops
              </h2>
            </div>
            <Button variant="ghost" render={<Link href="/member" />}>
                View members <ArrowRight className="size-4" aria-hidden />
              </Button>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {programs.map((program) => (
              <Frame key={program.title}>
                <FramePanel>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-medium">{program.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {program.description}
                      </p>
                    </div>
                    <Badge variant="outline">{program.style}</Badge>
                  </div>
                  <div className="text-muted-foreground mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm">
                    <span>{program.duration}</span>
                    <span>{program.level}</span>
                  </div>
                </FramePanel>
              </Frame>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <Badge variant="secondary">Voices of the community</Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            What seekers say
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Frame key={testimonial.name}>
              <FramePanel className="flex flex-col gap-4">
                <Rating rating={testimonial.rating} size="sm" />
                <p className="text-sm leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </FramePanel>
            </Frame>
          ))}
        </div>
      </section>
    </>
  )
}