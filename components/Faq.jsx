"use client";
import { useState } from "react";

export default function Faq({ categories, items }) {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(0);
  const shown = items.filter((i) => cat === "All" || i.cat === cat);

  return (
    <div>
      <div role="tablist" aria-label="Filter questions" className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            onClick={() => {
              setCat(c);
              setOpen(0);
            }}
            className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              cat === c ? "border-ink bg-ink text-paper" : "border-line bg-card text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="divide-y divide-line border-y border-line">
        {shown.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <li key={item.q}>
              <button
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="focus-ring flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-serif text-lg font-semibold sm:text-xl">{item.q}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && <p className="max-w-prose pb-6 text-lg leading-relaxed text-muted">{item.a}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
