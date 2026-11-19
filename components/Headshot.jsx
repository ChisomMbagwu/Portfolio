import fs from "node:fs";
import path from "node:path";

// Drop your photo at /public/headshot.jpg (or .jpeg/.png/.webp). Until it exists, a clean monogram shows instead.
function findPhoto() {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", `headshot.${ext}`))) return `/headshot.${ext}`;
  }
  return null;
}

export default function Headshot({ className = "" }) {
  const src = findPhoto();
  return (
    <div className={`relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-sage ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="Portrait of Chisom Mbagwu" className="h-full w-full object-cover object-[50%_0%]" />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="font-serif text-7xl font-semibold text-ember/80">CM</span>
        </div>
      )}
    </div>
  );
}
