import Link from "next/link";
import { notFound } from "next/navigation";
import ScreenGallery from "@/components/ScreenGallery";
import { caseStudies } from "@/data/content";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = caseStudies.find((x) => x.slug === params.slug);
  if (!c) return {};
  return { title: c.title, description: c.summary, openGraph: { title: c.title, description: c.summary } };
}

export default function CaseStudy({ params }) {
  const index = caseStudies.findIndex((x) => x.slug === params.slug);
  if (index === -1) notFound();
  const c = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article>
      <header className="wrap pb-12 pt-12 sm:pt-16">
        <Link href="/#work" className="focus-ring text-sm text-muted underline-offset-4 hover:text-ink hover:underline">
          &larr; All work
        </Link>
        <p className="eyebrow mb-4 mt-8">{c.kicker}</p>
        <h1 className="h-display max-w-4xl text-4xl sm:text-6xl">{c.title}</h1>
        <p className="mt-6 max-w-prose text-xl leading-relaxed text-muted">{c.summary}</p>
        <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.meta.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{m.label}</dt>
              <dd className="mt-1.5 font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>
        {c.link && (
          <a href={c.link.href} target="_blank" rel="noreferrer" className="btn btn-ghost focus-ring mt-6">
            {c.link.label} &#8599;
          </a>
        )}
      </header>

      <div className="wrap space-y-14 pb-8 sm:space-y-20">
        {c.beats.map((b) => (
          <section
            key={b.label}
            className={`grid gap-4 md:grid-cols-[12rem_1fr] md:gap-10 ${b.highlight ? "rounded-3xl bg-sage/70 p-6 sm:p-10 md:-mx-4" : ""}`}
          >
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-ember md:pt-2">{b.label}</h2>
            <div className="max-w-prose space-y-4 text-lg leading-relaxed">
              {b.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {b.bullets && (
                <ul className="space-y-3">
                  {b.bullets.map((x) => (
                    <li key={x.t || x} className="flex gap-3">
                      <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                      {x.t ? (
                        <span><strong className="font-semibold">{x.t}</strong> {x.d}</span>
                      ) : (
                        <span>{x}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {b.after && <p>{b.after}</p>}
              {b.note && <p className="text-base italic text-muted">{b.note}</p>}
            </div>
          </section>
        ))}
      </div>

      <ScreenGallery slug={c.slug} title={c.title} />

      <section className="wrap pb-4">
        <ul className="flex flex-wrap gap-2">
          {c.stack.map((s) => (
            <li key={s} className="chip">{s}</li>
          ))}
        </ul>
      </section>

      <nav aria-label="Next case study" className="wrap py-16">
        <Link
          href={`/work/${next.slug}`}
          className="focus-ring group block rounded-3xl border border-line bg-card p-8 transition-colors hover:border-ink"
        >
          <p className="eyebrow mb-2">Next case study</p>
          <p className="font-serif text-2xl font-semibold sm:text-3xl">
            {next.title} <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
          </p>
        </Link>
      </nav>
    </article>
  );
}
