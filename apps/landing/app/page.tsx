import { ArrowRight, BarChart3, MapPin, Timer } from "lucide-react";

import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";

const features = [
  {
    title: "Log every run",
    description:
      "Capture distance, pace, route, and how the effort felt — in a few taps.",
    icon: MapPin,
  },
  {
    title: "See your progress",
    description:
      "Weekly mileage, pace trends, and personal bests, all on one dashboard.",
    icon: BarChart3,
  },
  {
    title: "Stay consistent",
    description:
      "Plan training blocks and keep streaks alive without spreadsheets.",
    icon: Timer,
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary" aria-hidden="true" />
          <span className="text-lg font-semibold tracking-tight">runni</span>
        </div>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="#features">Features</a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="http://localhost:3000">Open dashboard</a>
          </Button>
        </nav>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pt-16 pb-24 text-center sm:pt-24">
        <Badge variant="secondary" className="mb-6">
          Now in early preview
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Log runs. See progress. Keep going.
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl text-lg">
          runni is a focused training dashboard for runners who like data —
          without the bloat. Track your kilometers, pace, and form with one
          clean view.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <a href="http://localhost:3000">
              Get started
              <ArrowRight />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="http://localhost:3001">Read the docs</a>
          </Button>
        </div>
      </section>

      <section
        id="features"
        className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2
            id="features-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="text-muted-foreground mt-4 text-base">
            Built around a simple loop: log a run, review the trend, plan the
            next one.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <Card key={title}>
              <CardHeader>
                <div className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-lg">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0" asChild>
                  <a href="http://localhost:3001">
                    Learn more
                    <ArrowRight />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-border/60 border-t">
        <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} runni. Built as a portfolio project.</p>
          <p className="font-mono text-xs">v0.1.0</p>
        </div>
      </footer>
    </main>
  );
}
