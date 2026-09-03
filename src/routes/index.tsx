import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Phone, MapPin, Globe, Instagram, ShieldCheck, Sparkles, Info, X } from "lucide-react";

import { categories, clinic, type Treatment } from "@/data/treatments";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priser & behandlinger | THE SWAN Medical Aesthetic Clinic" },
      {
        name: "description",
        content:
          "Se alle priser hos THE SWAN i Ishøj: PMU, botox, filler, skinbooster, PRP, ansigtsbehandlinger, laser- og SHR-hårfjerning, voks og piercing.",
      },
      { property: "og:title", content: "Priser & behandlinger | THE SWAN Medical Aesthetic Clinic" },
      {
        property: "og:description",
        content:
          "Komplet prisliste for THE SWAN Medical Aesthetic Clinic i Ishøj — permanent makeup, injektionsbehandlinger, hudpleje, hårfjerning og piercing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function normalize(v: string) {
  return v.toLowerCase().trim();
}

function TreatmentCard({ item, index }: { item: Treatment; index: number }) {
  const isFree = item.price.toUpperCase() === "GRATIS";
  return (
    <li
      className="card-lift animate-rise group relative flex flex-col justify-between gap-3 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]"
      style={{ animationDelay: `${Math.min(index, 12) * 35}ms` }}
    >
      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-[image:var(--gradient-gold)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="space-y-1.5">
        <h4 className="font-display text-xl leading-snug text-foreground">{item.name}</h4>
        {item.desc && <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>}
      </div>
      <div className="flex flex-wrap items-end justify-between gap-2 border-t border-border/70 pt-3">
        <span
          className={
            isFree
              ? "rounded-full bg-primary px-3 py-1 text-xs font-medium tracking-widest text-primary-foreground uppercase"
              : "font-display text-2xl font-medium text-primary"
          }
        >
          {item.price}
        </span>
        {item.extra && (
          <span className="rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground">{item.extra}</span>
        )}
      </div>
    </li>
  );
}

function PricingPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("alle");

  const filtered = useMemo(() => {
    const q = normalize(query);
    return categories
      .filter((c) => active === "alle" || c.id === active)
      .map((c) => ({
        ...c,
        groups: c.groups
          .map((g) => ({
            ...g,
            items: q
              ? g.items.filter(
                  (i) =>
                    normalize(i.name).includes(q) ||
                    normalize(i.desc ?? "").includes(q) ||
                    normalize(c.label).includes(q) ||
                    normalize(g.title).includes(q),
                )
              : g.items,
          }))
          .filter((g) => g.items.length > 0),
      }))
      .filter((c) => c.groups.length > 0);
  }, [query, active]);

  const total = filtered.reduce((sum, c) => sum + c.groups.reduce((s, g) => s + g.items.length, 0), 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden bg-[image:var(--gradient-hero)]">
        <div className="mx-auto max-w-6xl px-5 py-16 text-center sm:py-24">
          <p className="animate-rise text-xs tracking-[0.4em] text-muted-foreground uppercase">
            Medical Aesthetic Clinic
          </p>
          <h1 className="animate-rise mt-4 font-display text-5xl leading-[1.05] font-light tracking-tight text-primary sm:text-7xl">
            THE SWAN
          </h1>
          <p
            className="animate-rise mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "80ms" }}
          >
            Samlet oversigt over ydelser og priser. Naturlige resultater, høj hygiejne og personlig rådgivning —
            midt i Ishøj.
          </p>
          <div
            className="animate-rise mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "140ms" }}
          >
            <Button asChild size="lg" className="rounded-full px-7">
              <a href={`tel:${clinic.phoneHref}`}>
                <Phone className="size-4" /> Ring {clinic.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-primary/30 px-7">
              <a href="#priser">Se prislisten</a>
            </Button>
          </div>
          <p className="animate-rise mt-6 text-sm text-muted-foreground" style={{ animationDelay: "200ms" }}>
            <Sparkles className="mr-1 inline size-4 text-gold" /> Gratis og uforpligtende konsultation
          </p>
        </div>
      </header>

      {/* Filters */}
      <section id="priser" className="sticky top-0 z-20 border-y border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto max-w-6xl space-y-3 px-5 py-4">
          <div className="relative">
            <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Søg efter behandling, fx “brows”, “botox”, “laser”…"
              aria-label="Søg efter behandling"
              className="h-12 rounded-full border-border bg-card pr-11 pl-11 text-base shadow-[var(--shadow-soft)]"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Ryd søgning"
                className="absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground transition-colors hover:text-primary"
              >
                <X className="size-4" />
              </button>
            )}
          </div>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[{ id: "alle", label: "Alle behandlinger" }, ...categories.map((c) => ({ id: c.id, label: c.label }))].map(
              (c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActive(c.id)}
                  aria-pressed={active === c.id}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-all duration-300 ${
                    active === c.id
                      ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {c.label}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Lists */}
      <div className="mx-auto max-w-6xl px-5 py-12">
        <p className="mb-10 text-sm text-muted-foreground">
          {total} behandling{total === 1 ? "" : "er"} vist
        </p>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-border bg-card p-12 text-center">
            <p className="font-display text-2xl text-primary">Ingen behandlinger fundet</p>
            <p className="mt-2 text-sm text-muted-foreground">Prøv et andet søgeord eller vælg en anden kategori.</p>
          </div>
        )}

        <div className="space-y-20">
          {filtered.map((cat) => (
            <section key={cat.id} aria-labelledby={`h-${cat.id}`} className="scroll-mt-40">
              <div className="mb-8 border-l-2 border-gold pl-5">
                <h2 id={`h-${cat.id}`} className="font-display text-3xl font-light text-primary sm:text-4xl">
                  {cat.label}
                </h2>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{cat.tagline}</p>
              </div>

              {cat.groups.map((group) => (
                <div key={group.title} className="mb-10">
                  <h3 className="mb-4 text-xs tracking-[0.28em] text-muted-foreground uppercase">{group.title}</h3>
                  {group.note && <p className="mb-4 text-sm text-muted-foreground">{group.note}</p>}
                  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item, i) => (
                      <TreatmentCard key={`${group.title}-${item.name}-${i}`} item={item} index={i} />
                    ))}
                  </ul>
                </div>
              ))}

              {cat.notes?.map((n) => (
                <p
                  key={n}
                  className="flex gap-3 rounded-2xl border border-border bg-secondary/60 p-5 text-sm leading-relaxed text-muted-foreground"
                >
                  <Info className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{n}</span>
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* Trust + notes */}
      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Sikkerhed i topklasse", d: "Høj hygiejne, sterilt udstyr og sterile engangsnåle." },
            { icon: Sparkles, t: "Naturlige resultater", d: "Individuelt design og kvalitetsprodukter til hver enkelt." },
            { icon: Info, t: "Personlig rådgivning", d: "Gratis forundersøgelse og konsultation før behandling." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="card-lift rounded-2xl border border-border bg-card p-6">
              <Icon className="size-5 text-gold" />
              <h3 className="mt-3 font-display text-xl text-primary">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-3xl font-light">{clinic.full}</h2>
          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <p className="flex items-center gap-2">
              <MapPin className="size-4 opacity-70" /> {clinic.address}
            </p>
            <a href={`tel:${clinic.phoneHref}`} className="flex items-center gap-2 transition-opacity hover:opacity-70">
              <Phone className="size-4 opacity-70" /> {clinic.phone}
            </a>
            <a
              href={`https://${clinic.web}`}
              className="flex items-center gap-2 transition-opacity hover:opacity-70"
              target="_blank"
              rel="noreferrer"
            >
              <Globe className="size-4 opacity-70" /> {clinic.web}
            </a>
            <p className="flex items-center gap-2">
              <Instagram className="size-4 opacity-70" /> {clinic.instagram}
            </p>
          </div>
          <p className="mt-10 border-t border-primary-foreground/20 pt-6 text-xs leading-relaxed opacity-70">
            Priserne er vejledende og gælder pr. behandling. The Swan forbeholder sig retten til prisændringer.
            Behandlinger udføres af erfarne og certificerede behandlere efter forudgående konsultation.
          </p>
        </div>
      </footer>
    </main>
  );
}
