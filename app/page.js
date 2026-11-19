import Link from "next/link";
import Reveal from "@/components/Reveal";
import Headshot from "@/components/Headshot";
import {
  site, hero, about, caseStudies, digitallie, thinking, builds,
  experience, skills, education, credentials, beyond, cv, contact,
} from "@/data/content";

function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="h-display text-3xl sm:text-5xl">{title}</h2>
      {intro && <p className="mt-4 max-w-prose text-lg text-muted">{intro}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="wrap grid items-center gap-12 pb-20 pt-12 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="inline-block rounded-full bg-card px-3 py-1 text-xs text-ink/90">{hero.badge}</p>
          <h1 className="mt-6 font-sans font-bold tracking-tight">
            <span className="block text-5xl leading-[1.02] sm:text-7xl">{site.name}</span>
            <span className="mt-3 block text-2xl font-medium text-ember sm:text-3xl">{site.role}</span>
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted sm:text-xl">{hero.sub}</p>
          <div className="mt-8">
            {site.cv ? (
              <a href={site.cv} className="btn btn-primary focus-ring" target="_blank" rel="noreferrer">Read my CV</a>
            ) : (
              <Link href="/#work" className="btn btn-primary focus-ring">See my work</Link>
            )}
          </div>
        </div>
        <Headshot className="mx-auto w-full max-w-sm sm:max-w-md lg:ml-auto lg:max-w-lg" />
      </section>

      {/* WORK */}
      <section id="work" className="wrap scroll-mt-24 pb-20 sm:pb-28">
        <SectionHead eyebrow="Work" title="Case studies" />
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} className="h-full">
              <Link
                href={`/work/${c.slug}`}
                className="focus-ring group flex h-full flex-col rounded-3xl border border-line bg-card p-7 transition-colors hover:border-ink sm:p-9"
              >
                <div className="flex items-center justify-between">
                  <p className="eyebrow">{c.kicker}</p>
                  <span className="font-mono text-sm text-muted">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug sm:text-3xl">{c.title}</h3>
                <p className="mt-3 max-w-prose text-muted">{c.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.chips.map((x) => (
                    <li key={x} className="chip">{x}</li>
                  ))}
                </ul>
                <span className="mt-auto pt-7 text-sm font-semibold text-ember">
                  Read case study <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-5 rounded-3xl border border-line bg-card p-6 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{digitallie.kicker}</p>
          <h3 className="mt-3 font-serif text-2xl font-semibold sm:text-4xl">{digitallie.title}</h3>
          <div className="mt-5 grid gap-4 text-muted sm:grid-cols-3 sm:gap-8">
            {digitallie.body.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 bg-sage py-20 sm:py-28">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="h-display text-3xl sm:text-5xl">{about.title}</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {about.body.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE + SKILLS */}
      <section id="experience" className="wrap scroll-mt-24 py-20 sm:py-28">
        <SectionHead eyebrow="Career" title="Work experience" />
        <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((e) => (
            <li key={e.org} className="relative">
              <span aria-hidden="true" className="absolute -left-[2.55rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ember bg-paper sm:-left-[3.05rem]" />
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{e.period}</p>
              <h3 className="mt-1 font-serif text-2xl font-semibold">
                {e.role} <span className="text-muted">at {e.org}</span>
              </h3>
              {e.note && <p className="mt-1 text-sm italic text-muted">{e.note}</p>}
              <p className="mb-2 mt-4 text-sm font-semibold">Key achievements</p>
              <ul className="space-y-2.5">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2.5 h-1 w-3 shrink-0 bg-ember" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {e.tags && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.tags.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group}>
              <p className="eyebrow mb-4">{g.group}</p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="chip">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <p className="eyebrow mb-4">Education</p>
          <div className="rounded-3xl border border-ember/60 bg-card p-7 sm:p-10">
            <h3 className="font-serif text-2xl font-semibold sm:text-4xl">{education.degree}</h3>
            <p className="mt-2 text-lg text-ember sm:text-xl">{education.school}</p>
          </div>
        </div>
        <div className="mt-12">
          <p className="eyebrow mb-4">Training and certifications</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {credentials.map((c) => (
              <li key={c.name}>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring group flex h-full flex-col rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-ink"
                  >
                    <span className="font-medium">{c.name}</span>
                    <span className="mt-1 text-sm text-muted">
                      {c.org}{c.period ? `, ${c.period}` : ""}
                    </span>
                    <span className="mt-2 text-sm font-semibold text-ember">
                      View certificate <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">&#8599;</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-card px-5 py-4">
                    <span className="font-medium">{c.name}</span>
                    <span className="mt-1 text-sm text-muted">{c.org}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* THINKING */}
      <section id="thinking" className="py-20 sm:py-28">
        <div className="wrap">
          <SectionHead title={thinking.title} intro={thinking.intro} />
          <Reveal className="rounded-3xl border border-line bg-card p-7 sm:p-9">
            <h3 className="font-serif text-2xl font-semibold">{thinking.approach.title}</h3>
            <ul className="mt-5 space-y-3">
              {thinking.approach.points.map((p) => (
                <li key={p.t} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span><strong>{p.t}</strong> <span className="text-muted">{p.d}</span></span>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="mt-12 space-y-12">
            {thinking.figures.map((f) => (
              <figure key={f.src}>
                <a href={f.src} target="_blank" rel="noreferrer" className="focus-ring block overflow-hidden rounded-2xl border border-line bg-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.src} alt={f.title} loading="lazy" className="h-auto w-full" />
                </a>
                <figcaption className="mt-4 max-w-prose">
                  <p className="font-serif text-xl font-semibold">{f.title}</p>
                  <p className="mt-1 text-muted">{f.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <h3 className="h-display mt-16 text-2xl sm:text-4xl">{thinking.findingsTitle}</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {thinking.findings.map((f, i) => (
              <Reveal key={f.t} className="rounded-3xl border border-line bg-card p-7">
                <p className="font-mono text-sm text-muted">0{i + 1}</p>
                <h4 className="mt-2 font-serif text-xl font-semibold leading-snug">{f.t}</h4>
                <p className="mt-3 text-muted">{f.d}</p>
                <p className="mt-4 border-t border-line pt-4 text-sm"><span className="font-semibold text-ember">What it means: </span>{f.so}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <Reveal className="rounded-3xl border border-line bg-card p-7">
              <h3 className="font-serif text-2xl font-semibold">{thinking.strengthsTitle}</h3>
              <ul className="mt-4 space-y-3">
                {thinking.strengths.map((s) => (
                  <li key={s.t}><strong>{s.t}.</strong> <span className="text-muted">{s.d}</span></li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="rounded-3xl border border-line bg-card p-7">
              <h3 className="font-serif text-2xl font-semibold">{thinking.risksTitle}</h3>
              <ul className="mt-4 space-y-3">
                {thinking.risks.map((s) => (
                  <li key={s.t}><strong>{s.t}.</strong> <span className="text-muted">{s.d}</span></li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="mt-5 rounded-3xl border border-line bg-card p-7">
            <h3 className="font-serif text-2xl font-semibold">{thinking.learnedTitle}</h3>
            <ul className="mt-4 space-y-2 text-muted">
              {thinking.learned.map((o) => (
                <li key={o} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BUILT */}
      <section id="built" className="scroll-mt-24 bg-sage py-20 sm:py-28">
        <div className="wrap">
          <div className="mb-10 max-w-3xl">
            <h2 className="h-display text-3xl sm:text-5xl">{builds.title}</h2>
            {builds.intro && <p className="mt-4 max-w-prose text-lg text-muted">{builds.intro}</p>}
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {builds.items.map((b) => (
              <Reveal key={b.name} className="rounded-3xl border border-line bg-card p-7">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{b.type}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{b.name}</h3>
                <p className="mt-3 text-muted">{b.text}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {b.tags.map((t) => (
                    <li key={t} className="chip">{t}</li>
                  ))}
                </ul>
                {b.href && (
                  <a href={b.href} target="_blank" rel="noreferrer" className="focus-ring mt-5 inline-block text-sm font-semibold text-ember underline underline-offset-4">
                    {b.cta} &#8599;
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND WORK */}
      <section id="beyond" className="wrap scroll-mt-24 py-20 sm:py-28">
        <SectionHead title={beyond.title} intro={beyond.intro} />
        <ul className="divide-y divide-line border-y border-line">
          {beyond.volunteering.map((v) => (
            <li key={v.t} className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-serif text-xl font-semibold">{v.t} <span className="font-sans text-base font-normal text-ember">{v.role}</span></p>
                {v.when && <p className="font-mono text-sm text-muted">{v.when}</p>}
              </div>
              <p className="mt-2 max-w-prose text-muted">{v.d}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* CV */}
      <section id="cv" className="wrap scroll-mt-24 py-20 sm:py-28">
        <SectionHead title={cv.title} intro={cv.intro} />
        <div className="flex flex-wrap gap-3">
          <a href={cv.file} target="_blank" rel="noreferrer" className="btn btn-primary focus-ring">Read my CV</a>
          <a href={cv.file} download={cv.downloadName} className="btn btn-ghost focus-ring">Download my CV</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-line bg-card py-20 sm:py-28">
        <div className="wrap">
          <div className="max-w-3xl">
          <h2 className="h-display text-3xl sm:text-5xl">{contact.title}</h2>
          <p className="mt-4 max-w-prose text-lg text-muted">{contact.text}</p>
          <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-muted">
            <li><a className="focus-ring underline underline-offset-4 hover:text-ink" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><a className="focus-ring underline underline-offset-4 hover:text-ink" href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a className="focus-ring underline underline-offset-4 hover:text-ink" href={site.medium} target="_blank" rel="noreferrer">Medium</a></li>
          </ul>
          </div>
        </div>
      </section>
    </>
  );
}
