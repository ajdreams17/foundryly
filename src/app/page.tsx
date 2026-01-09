import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070B14]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-emerald-300 text-[#070B14] font-black">
              F
            </div>
            <span className="text-lg font-extrabold tracking-tight">Foundryly</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#how">
              How it works
            </a>
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a
              className="rounded-xl bg-white px-4 py-2 font-bold text-[#070B14] hover:opacity-90"
              href="#waitlist"
            >
              Join waitlist
            </a>
          </nav>

          <a
            className="md:hidden rounded-xl bg-white px-4 py-2 text-sm font-bold text-[#070B14]"
            href="#waitlist"
          >
            Join
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-violet-500/30 blur-3xl" />
          <div className="absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-emerald-400/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
              For founders and small teams
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Build smarter from day one.
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              Foundryly helps you set up workflows, templates, and an operating
              system that scales — without the chaos.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="rounded-2xl bg-gradient-to-br from-violet-500 to-sky-300 px-5 py-3 font-extrabold text-[#070B14] hover:opacity-95"
              >
                Join the waitlist
              </a>
              <a
                href="#features"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-extrabold text-white hover:bg-white/10"
              >
                See features
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { big: "Fast", small: "setup" },
                { big: "Simple", small: "pricing" },
                { big: "Built", small: "to scale" },
              ].map((x) => (
                <div
                  key={x.big}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <div className="text-sm font-extrabold">{x.big}</div>
                  <div className="text-xs text-white/70">{x.small}</div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs leading-relaxed text-white/60">
              Foundryly provides business tools and education and does not
              provide legal advice. If legal services are offered, they are
              separate and provided only through a law firm engagement.
            </p>
          </div>

          {/* Mock card */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(0,0,0,.45)]">
              <div className="flex items-center gap-2 border-b border-white/10 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
                <span className="ml-2 text-xs font-semibold text-white/70">
                  Founder Dashboard
                </span>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div className="text-xs text-white/70">This week</div>
                <div className="text-lg font-extrabold">4 workflows</div>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  { name: "Onboarding checklist", tag: "Ready" },
                  { name: "Client intake", tag: "In progress" },
                  { name: "Ops playbook", tag: "Ready" },
                  { name: "Templates library", tag: "New" },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3"
                  >
                    <span className="text-sm font-semibold">{row.name}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-white/80">
                      {row.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-violet-500/25 to-emerald-300/15 blur-3xl" />
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-black tracking-tight">How it works</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            A simple system to get your business organized and running.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "Start with your stage",
                d: "Pick your business type and growth stage to get the right roadmap.",
              },
              {
                t: "Build your operating system",
                d: "Deploy workflows, SOPs, and templates tailored to how you work.",
              },
              {
                t: "Keep it moving",
                d: "Track what’s done, what’s next, and what to standardize as you scale.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-extrabold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-black tracking-tight">What you get</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Built to feel premium, simple, and scalable.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                t: "Template library",
                d: "Operations docs, onboarding, client intake, meeting notes, and more.",
              },
              {
                t: "Workflow playbooks",
                d: "Step-by-step systems for recurring work—so nothing lives in your head.",
              },
              {
                t: "Founder checklist",
                d: "A clean roadmap that updates as your company evolves.",
              },
              {
                t: "Optional expert support",
                d: "Add sessions when you need deeper help (separately scoped).",
              },
            ].map((f) => (
              <div
                key={f.t}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-extrabold">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {f.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-black tracking-tight">Pricing</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Simple tiers to start. (Placeholder—change anytime.)
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <PricingCard
              title="Starter"
              price="$29"
              perks={["Core templates", "Founder checklist", "Email support"]}
              cta="Get Starter"
            />
            <PricingCard
              title="Growth"
              price="$79"
              featured
              perks={["Everything in Starter", "Workflow playbooks", "Priority support"]}
              cta="Get Growth"
            />
            <PricingCard
              title="Teams"
              price="$149"
              perks={["Team templates + SOPs", "Shared structure", "Monthly check-in"]}
              cta="Talk to us"
            />
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section
        id="waitlist"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight">
                Join the waitlist
              </h2>
              <p className="mt-2 max-w-xl text-white/70">
                Get early access, launch perks, and the first playbooks. No spam.
              </p>
            </div>

            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">Foundryly</span>. All rights
            reserved.
          </div>
          <div className="flex gap-5 text-sm text-white/70">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white" href="#waitlist">
              Waitlist
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PricingCard({
  title,
  price,
  perks,
  cta,
  featured,
}: {
  title: string;
  price: string;
  perks: string[];
  cta: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative rounded-3xl border p-6",
        featured
          ? "border-violet-400/30 bg-gradient-to-b from-violet-500/15 to-white/5"
          : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      {featured && (
        <div className="absolute right-4 top-4 rounded-full border border-violet-400/30 bg-violet-500/15 px-3 py-1 text-xs font-extrabold text-white/90">
          Most popular
        </div>
      )}

      <h3 className="text-lg font-extrabold">{title}</h3>
      <div className="mt-3 text-4xl font-black tracking-tight">
        {price}
        <span className="ml-1 align-middle text-sm font-bold text-white/60">
          /mo
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {perks.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-white/40" />
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <a
        href="#waitlist"
        className={[
          "mt-6 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 font-extrabold",
          featured
            ? "bg-white text-[#070B14] hover:opacity-90"
            : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        ].join(" ")}
      >
        {cta}
      </a>
    </div>
  );
}
