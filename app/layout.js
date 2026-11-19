import "./globals.css";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/content";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://chisom-mbagwu.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description: site.description,
    type: "website",
    locale: "en_NG",
  },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.role}`, description: site.description },
};

export const viewport = { themeColor: "#121212" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
