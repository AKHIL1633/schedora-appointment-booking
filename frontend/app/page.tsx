import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Briefcase,
  CalendarClock,
  CalendarCheck,
  CalendarDays,
  CreditCard,
  Link2,
  Mail,
  Sparkles,
  Clock,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Organizations",
    description:
      "Run multiple businesses from one account, each with its own public booking page.",
  },
  {
    icon: Briefcase,
    title: "Services",
    description:
      "Define what you offer with duration, pricing and descriptions customers can see.",
  },
  {
    icon: CalendarClock,
    title: "Availability",
    description:
      "Set weekly working hours and let Schedora generate bookable slots automatically.",
  },
  {
    icon: CalendarCheck,
    title: "Bookings",
    description:
      "Track every appointment in one place, from confirmation to completion.",
  },
  {
    icon: CreditCard,
    title: "Online Payments",
    description:
      "Collect payments at booking time with Razorpay and get paid out to your bank.",
  },
  {
    icon: CalendarDays,
    title: "Google Calendar",
    description:
      "Sync bookings to Google Calendar with meeting links created for you.",
  },
];

const steps = [
  {
    icon: Building2,
    title: "Create your organization",
    description: "Sign up and set up your business in under a minute.",
  },
  {
    icon: Clock,
    title: "Add services & hours",
    description: "Choose what you offer and when you're available.",
  },
  {
    icon: Link2,
    title: "Share your booking link",
    description: "Customers pick a slot, pay, and get an email confirmation.",
  },
];

const previewSlots = ["09:00", "09:30", "10:00", "11:30", "14:00", "15:30"];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full px-4 sm:px-6 py-3">
        <div className="max-w-6xl mx-auto h-16 bg-background/70 backdrop-blur-xl border border-border shadow-sm rounded-[2rem] px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-[1.2rem] flex items-center justify-center shadow-md group-hover:rotate-[10deg] transition-transform duration-500">
              <Sparkles className="text-primary-foreground w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none">
                Schedora
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.15em] text-muted-foreground mt-1">
                Scheduling Suite
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-2">
            <Link href="/auth/login">
              <Button variant="ghost" className="rounded-xl font-bold">
                Log in
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="rounded-xl font-bold">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-primary/5 blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-20 grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">
                <Sparkles className="w-3.5 h-3.5" />
                Appointment booking, simplified
              </div>

              <h1 className="mt-6 text-5xl sm:text-6xl font-black tracking-tighter leading-[0.95]">
                Let customers book you.
                <span className="block text-muted-foreground">
                  You just show up.
                </span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Schedora gives your business a public booking page, smart
                availability, online payments and calendar sync — everything
                you need to stop managing appointments by hand.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link href="/auth/register">
                  <Button
                    size="lg"
                    className="h-12 px-7 rounded-xl font-bold text-base w-full sm:w-auto"
                  >
                    Create your business account
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/auth/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-7 rounded-xl font-bold text-base w-full sm:w-auto"
                  >
                    Log in to dashboard
                  </Button>
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {["Free to get started", "Razorpay payments", "Google Calendar sync"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-foreground" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Booking preview */}
            <div className="relative">
              <div className="rounded-[2rem] border border-border bg-card shadow-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-muted flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-black tracking-tight">Glow Studio</p>
                      <p className="text-xs text-muted-foreground">
                        schedora.app/booking/glow-studio
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest rounded-full bg-primary text-primary-foreground px-3 py-1">
                    Live
                  </span>
                </div>

                <div className="mt-6 rounded-2xl border border-border p-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold">Haircut & Styling</p>
                    <p className="text-sm text-muted-foreground">
                      45 min · ₹799
                    </p>
                  </div>
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-[0.15em] text-muted-foreground">
                  Thursday, 24 October
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {previewSlots.map((slot, i) => (
                    <div
                      key={slot}
                      className={`rounded-xl py-2.5 text-center text-sm font-bold border ${
                        i === 2
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {slot}
                    </div>
                  ))}
                </div>

                <div className="mt-6 h-12 rounded-xl bg-primary text-primary-foreground font-bold flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Pay & confirm booking
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 rounded-2xl border border-border bg-card shadow-xl px-4 py-3">
                <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-bold">Booking confirmed</p>
                  <p className="text-xs text-muted-foreground">
                    Email sent to customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
            Platform
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tighter">
            Everything to run your appointments
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-border bg-card p-6 hover:bg-muted/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-2xl bg-muted flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-5 text-lg font-black tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
            How it works
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tighter">
            Live in three steps
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-4">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-border p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-5xl font-black tracking-tighter text-muted-foreground/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-black tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
          <div className="rounded-[2.5rem] bg-primary text-primary-foreground px-6 sm:px-12 py-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter">
                Ready to fill your calendar?
              </h2>
              <p className="mt-3 opacity-70 max-w-lg">
                Set up your organization, add your services and start taking
                bookings today.
              </p>
            </div>
            <Link href="/auth/register">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 px-7 rounded-xl font-bold text-base"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold text-foreground">Schedora</span>
            <span>· Scheduling Suite</span>
          </div>
          <span>© {new Date().getFullYear()} Schedora. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
