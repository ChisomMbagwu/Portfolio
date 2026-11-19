import { site } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { href: site.linkedin, label: "LinkedIn" },
    { href: site.medium, label: "Medium" },
    site.github && { href: site.github, label: "GitHub" },
    { href: `mailto:${site.email}`, label: "Email" },
  ].filter(Boolean);
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name}, {site.role}.
        </p>
        <ul className="flex flex-wrap gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="focus-ring underline-offset-4 hover:text-ink hover:underline" target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p>&copy; {year}</p>
      </div>
    </footer>
  );
}
