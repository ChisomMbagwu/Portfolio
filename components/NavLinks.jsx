"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icons";

const links = [
  { id: "about", label: "About" },
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "case-studies", label: "Case Studies" },
  { id: "teardown", label: "Product Teardown" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
];

export default function NavLinks() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= line) current = l.id;
      }
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const cls = (id) =>
    `focus-ring block rounded-full px-3 py-1.5 transition-colors ${
      active === id ? "bg-ember/15 font-semibold text-ember" : "text-muted hover:bg-sage hover:text-ink"
    }`;

  return (
    <>
      <nav aria-label="Primary" className="hidden rounded-full border border-line bg-card/90 px-2 py-1.5 backdrop-blur xl:block">
        <ul className="flex items-center gap-0.5 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <Link href={`/#${l.id}`} className={cls(l.id)} aria-current={active === l.id ? "true" : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <details className="group relative xl:hidden">
        <summary className="focus-ring flex h-12 cursor-pointer list-none items-center gap-2 rounded-full border border-line bg-card/90 px-5 text-base backdrop-blur [&::-webkit-details-marker]:hidden">
          <Icon name="menu" size={20} /> Menu
        </summary>
        <ul className="absolute left-0 mt-2 w-56 rounded-2xl border border-line bg-card p-2 shadow-lg">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                href={`/#${l.id}`}
                className={`block rounded-xl px-4 py-2.5 ${active === l.id ? "bg-ember/15 font-semibold text-ember" : "text-muted hover:bg-sage hover:text-ink"}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
