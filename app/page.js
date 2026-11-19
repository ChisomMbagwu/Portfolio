import Link from "next/link";
import Reveal from "@/components/Reveal";
import Headshot from "@/components/Headshot";
import Icon from "@/components/Icons";
import {
  site, hero, about, caseStudies, thinking, builds,
  experience, skills, education, credentials, beyond, cv, contact,
} from "@/data/content";

/* Section wrapper: consistent spacing, a divider line and alternating backgrounds so each section is easy to spot. */
function Section({ id, tone = "paper", children }) {
  const bg = tone === "sage" ? "bg-sage" : tone === "card" ? "bg-card" : "";
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line py-16 sm:py-24 ${bg}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/* Section header: icon, title and section number. */
function SectionHead({ icon, num, title, intro, tone }) {
  return (
    <div className="mb-10 border-b border-line pb-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-line text-ember ${tone === "card" ? "bg-paper" : "bg-card"}`}>
            <Icon name={icon} size={24} />
          </span>
          <h2 className="h-display text-3xl text-ember sm:text-5xl">{title}</h2>
        </div>
      </div>
      {intro && <p className="mt-4 max-w-prose text-lg text-muted">{intro}</p>}
    </div>
  );
}

/* Sub-heading inside a larger section. */
function SubHead({ id, icon, title, intro }) {
  return (
    <div id={id} className="mb-6 mt-16 scroll-mt-24 first:mt-0">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ember/15 text-ember">
          <Icon name={icon} size={20} />
        </span>
        <h3 className="font-serif text-2xl font-semibold sm:text-3xl">{title}</h3>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
      {intro && <p className="mt-3 max-w-prose text-muted">{intro}</p>}
    </div>
  );
}

const card = "rounded-3xl border border-line bg-card p-7 sm:p-8";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="wrap grid items-center gap-8 py-6 lg:h-[calc(100svh-5rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="inline-block rounded-full bg-card px-3 py-1 text-xs text-ink/90">{hero.badge}</p>
          <h1 className="mt-5 font-sans font-bold tracking-tight">
            <span className="block text-4xl leading-[1.02] sm:text-6xl">{site.name}</span>
            <span className="mt-2 block text-xl font-medium text-ember sm:text-2xl">{site.role}</span>
          </h1>
          <div className="mt-5 max-w-prose space-y-2 text-lg leading-relaxed text-muted">
            {hero.sub.split("\n").map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className="mt-7">
            <Link href="/#projects" className="btn btn-primary focus-ring">
              See my work <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
        <Headshot className="mx-auto h-[26rem] w-auto max-w-full lg:ml-auto lg:h-[min(36rem,calc(100svh-9rem))]" />
      </section>

      {/* 01 ABOUT */}
      <Section id="about" tone="sage">
        <SectionHead icon="user" num="01" title={about.title} />
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
          {about.body.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
        <div id="cv" className="mt-10 flex scroll-mt-24 flex-col gap-5 rounded-3xl border border-ember/60 bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ember/15 text-ember">
              <Icon name="file" size={24} />
            </span>
            <div>
              <h3 className="font-serif text-2xl font-semibold">{cv.title}</h3>
              <p className="text-muted">{cv.intro}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={cv.file} target="_blank" rel="noreferrer" className="btn btn-primary focus-ring">
              <Icon name="file" size={18} /> Read my CV
            </a>
            <a href={cv.file} download={cv.downloadName} className="btn btn-ghost focus-ring">
              <Icon name="download" size={18} /> Download my CV
            </a>
          </div>
        </div>
      </Section>

      {/* 03 CASE FILES: projects, case studies, teardown */}
      <Section id="projects">
        <SectionHead icon="layers" num="02" title={builds.title} />
        <div className="grid gap-5 sm:grid-cols-2">
          {builds.items.map((b) => (
            <Reveal key={b.name} className={`${card} flex h-full flex-col`}>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{b.type}</p>
              <h4 className="mt-2 font-serif text-2xl font-semibold">{b.name}</h4>
              <p className="mt-3 text-muted">{b.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {b.tags.map((t) => (
                  <li key={t} className="chip">{t}</li>
                ))}
              </ul>
              {b.href && (
                <a href={b.href} target="_blank" rel="noreferrer" className="focus-ring mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ember underline underline-offset-4">
                  {b.cta} <Icon name="out" size={16} />
                </a>
              )}
            </Reveal>
          ))}
        </div>

      </Section>

      {/* CASE STUDIES */}
      <Section id="case-studies" tone="sage">
        <SectionHead icon="book" num="03" title="Case Studies" />
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((c) => (
            <Reveal key={c.slug} className="h-full">
              <Link
                href={`/work/${c.slug}`}
                className={`focus-ring group flex h-full flex-col transition-colors hover:border-ink ${card}`}
              >
                <p className="eyebrow">{c.kicker}</p>
                <h4 className="mt-3 font-serif text-2xl font-semibold leading-snug">{c.title}</h4>
                <p className="mt-3 max-w-prose text-muted">{c.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.chips.map((x) => (
                    <li key={x} className="chip">{x}</li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ember">
                  Read case study <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

      </Section>

      {/* PRODUCT TEARDOWN */}
      <Section id="teardown">
        <SectionHead icon="search" num="03" title="Product Teardown" intro={thinking.intro} />
        {thinking.miro && (
          <a href={thinking.miro.href} target="_blank" rel="noreferrer" className="btn btn-ghost focus-ring mb-8">
            <Icon name="board" size={18} /> {thinking.miro.label} <Icon name="out" size={16} />
          </a>
        )}
        <Reveal className={card}>
          <h4 className="font-serif text-2xl font-semibold">{thinking.approach.title}</h4>
          <ul className="mt-5 space-y-3">
            {thinking.approach.points.map((p) => (
              <li key={p.t} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                <span><strong>{p.t}</strong> <span className="text-muted">{p.d}</span></span>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10 space-y-10">
          {thinking.figures.map((f) => (
            <figure key={f.src} className="max-w-4xl">
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
        <h4 className="mt-14 font-serif text-2xl font-semibold sm:text-3xl">{thinking.findingsTitle}</h4>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {thinking.findings.map((f, i) => (
            <Reveal key={f.t} className={`${card} !p-7`}>
              <p className="font-mono text-sm text-ember">0{i + 1}</p>
              <h5 className="mt-2 font-serif text-xl font-semibold leading-snug">{f.t}</h5>
              <p className="mt-3 text-muted">{f.d}</p>
              <p className="mt-4 border-t border-line pt-4 text-sm"><span className="font-semibold text-ember">What it means: </span>{f.so}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Reveal className={`${card} !p-7`}>
            <h4 className="font-serif text-2xl font-semibold">{thinking.strengthsTitle}</h4>
            <ul className="mt-4 space-y-3">
              {thinking.strengths.map((s) => (
                <li key={s.t}><strong>{s.t}.</strong> <span className="text-muted">{s.d}</span></li>
              ))}
            </ul>
          </Reveal>
          <Reveal className={`${card} !p-7`}>
            <h4 className="font-serif text-2xl font-semibold">{thinking.risksTitle}</h4>
            <ul className="mt-4 space-y-3">
              {thinking.risks.map((s) => (
                <li key={s.t}><strong>{s.t}.</strong> <span className="text-muted">{s.d}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className={`mt-5 ${card} !p-7`}>
          <h4 className="font-serif text-2xl font-semibold">{thinking.learnedTitle}</h4>
          <ul className="mt-4 space-y-2 text-muted">
            {thinking.learned.map((o) => (
              <li key={o} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 04 EXPERIENCE */}
      <Section id="experience" tone="sage">
        <SectionHead icon="briefcase" num="03" title="Work experience" />
        <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((e) => (
            <li key={e.org} className="relative">
              <span aria-hidden="true" className="absolute -left-[2.55rem] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ember bg-paper sm:-left-[3.05rem]" />
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">{e.period}</p>
              <h3 className="mt-1 font-serif text-2xl font-semibold">
                {e.role} <span className="text-muted">at {e.org}</span>
              </h3>
              {e.note && <p className="mt-1 text-sm italic text-muted">{e.note}</p>}
              <ul className="mt-4 space-y-2.5">
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
      </Section>

      {/* 05 SKILLS */}
      <Section id="skills">
        <SectionHead icon="zap" num="04" title="Skills" />
        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((g) => (
            <div key={g.group} className={card}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember/15 text-ember">
                  <Icon name={g.group === "Product" ? "target" : g.group === "Technical" ? "code" : "wrench"} size={22} />
                </span>
                <h3 className="font-serif text-2xl font-semibold">{g.group}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 06 EDUCATION AND CERTIFICATIONS */}
      <Section id="education" tone="sage">
        <SectionHead icon="cap" num="05" title="Education and certifications" />
        <ul className="grid gap-3 sm:grid-cols-2">
          {[...credentials].reverse().map((c) => (
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
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-ember">
                    View certificate <Icon name="out" size={15} />
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
          <li>
            <div className="flex h-full items-center gap-4 rounded-2xl border border-ember bg-ember px-5 py-4 text-paper">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-paper/20">
                <Icon name="cap" size={24} />
              </span>
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.14em]">Degree</span>
                <span className="mt-0.5 block font-bold leading-snug">{education.degree}</span>
                <span className="block text-sm opacity-80">{education.school}</span>
              </div>
            </div>
          </li>
        </ul>
      </Section>

      {/* 07 BEYOND WORK */}
      <Section id="beyond">
        <SectionHead icon="heart" num="06" title={beyond.title} intro={beyond.intro} />
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
      </Section>

      {/* 08 CONTACT */}
      <Section id="contact" tone="card">
        <SectionHead icon="mail" num="07" title={contact.title} intro={contact.text} tone="card" />
        <ul className="flex flex-wrap gap-3">
          <li>
            <a className="btn btn-ghost focus-ring" href={`mailto:${site.email}`}>
              <Icon name="mail" size={18} /> {site.email}
            </a>
          </li>
          <li>
            <a className="btn btn-ghost focus-ring" href={site.linkedin} target="_blank" rel="noreferrer">
              <Icon name="linkedin" size={18} /> LinkedIn
            </a>
          </li>
          <li>
            <a className="btn btn-ghost focus-ring" href={site.medium} target="_blank" rel="noreferrer">
              <Icon name="medium" size={18} /> Medium
            </a>
          </li>
        </ul>
      </Section>
    </>
  );
}
