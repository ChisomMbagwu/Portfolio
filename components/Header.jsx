import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 pt-5 sm:pt-6">
      <div className="wrap flex items-center justify-between gap-3">
        <NavLinks />
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
