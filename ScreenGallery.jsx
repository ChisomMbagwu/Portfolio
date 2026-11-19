import fs from "node:fs";
import path from "node:path";

// Shows screenshots from /public/screens/<slug>/ (png, jpg, webp). Renders nothing if the folder is empty.
export default function ScreenGallery({ slug, title }) {
  const dir = path.join(process.cwd(), "public", "screens", slug);
  let files = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
      .sort();
  } catch {
    return null;
  }
  const hasVideo = fs.existsSync(path.join(dir, "demo.mp4"));
  const hasPoster = fs.existsSync(path.join(process.cwd(), "public", "screens", `${slug}-poster.jpg`));
  if (!files.length && !hasVideo) return null;
  const cols = files.length + (hasVideo ? 1 : 0) >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
  return (
    <section aria-label={`${title} screenshots`} className="wrap py-12">
      <p className="eyebrow mb-5">Screens</p>
      <div className={`grid gap-5 ${cols}`}>
        {files.map((f) => (
          <figure key={f} className="overflow-hidden rounded-2xl border border-line bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/screens/${slug}/${f}`} alt={`${title}: ${f.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}`} loading="lazy" className="h-auto w-full" />
          </figure>
        ))}
        {hasVideo && (
          <figure className="overflow-hidden rounded-2xl border border-line bg-card">
            <video
              controls
              playsInline
              preload="metadata"
              poster={hasPoster ? `/screens/${slug}-poster.jpg` : undefined}
              className="h-full w-full object-cover"
              aria-label={`${title}: screen recording of the prototype`}
            >
              <source src={`/screens/${slug}/demo.mp4`} type="video/mp4" />
            </video>
          </figure>
        )}
      </div>
    </section>
  );
}
