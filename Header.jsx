import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#beyond", label: "Beyond work" },
  { href: "/#cv", label: "CV" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 pt-6 sm:pt-8">
      <div className="wrap flex items-center justify-between gap-3">
        <nav
          aria-label="Primary"
          className="hidden rounded-full border border-line bg-card/90 px-2.5 py-2 backdrop-blur md:block"
        >
          <ul className="flex items-center gap-1 text-base">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="focus-ring block rounded-full px-5 py-2.5 text-muted transition-colors hover:bg-sage hover:text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <Link href="/#contact" className="btn btn-primary focus-ring !px-7 !py-3.5 !text-base">
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
