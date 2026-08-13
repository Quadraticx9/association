import { Suspense } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MemberGrid } from "@/components/member-grid"
import { stats } from "@/lib/data"

export default function MemberPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-4">
            <Badge variant="primary-light" size="lg">
              The community
            </Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Our members
            </h1>
            <p className="text-muted-foreground text-lg">
              Teachers, researchers, and lifelong students — a directory of the
              association&apos;s active community in and around Rishikesh.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {stats.slice(0, 3).map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="min-w-28">
                  <p className="text-xl font-semibold">{stat.value}</p>
                  <p className="text-muted-foreground text-xs">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <Suspense
            fallback={
              <div className="text-muted-foreground py-20 text-center text-sm">
                Loading members...
              </div>
            }
          >
            <MemberGrid />
          </Suspense>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6">
        <div className="rounded-xl border bg-background p-8 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Become a member
          </h2>
          <p className="text-muted-foreground mx-auto mt-2 max-w-md text-sm">
            Membership is open to certified teachers and devoted practitioners
            who wish to contribute to the tradition.
          </p>
          <Button size="lg" className="mt-6">
            Request Membership
          </Button>
        </div>
      </section>
    </>
  )
}