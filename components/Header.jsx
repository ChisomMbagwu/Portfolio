import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icons";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#cv", label: "CV" },
  { href: "/#case-files", label: "Case files" },
  { href: "/#teardown", label: "Teardown" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#beyond", label: "Beyond work" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 pt-5 sm:pt-6">
      <div className="wrap flex items-center justify-between gap-3">
        <nav
          aria-label="Primary"
          className="hidden rounded-full border border-line bg-card/90 px-2 py-1.5 backdrop-blur xl:block"
        >
          <ul className="flex items-center gap-0.5 text-[15px]">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="focus-ring block rounded-full px-4 py-2 text-muted transition-colors hover:bg-sage hover:text-ink"
                >
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
              <li key={l.href}>
                <Link href={l.href} className="block rounded-xl px-4 py-2.5 text-muted hover:bg-sage hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <Link href="/#contact" className="btn btn-primary focus-ring !px-6 !py-3 !text-base">
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
