import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextLoom — AI Automation & IT Consulting",
  description: site.description,
  openGraph: {
    title: "NextLoom — AI Automation & IT Consulting",
    description: "We weave AI into the way your business works: AI agents, workflow automation, ML and data solutions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0f1a" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fc" },
  ],
};

// Runs before paint: marks JS as available (for .reveal) and applies the saved theme,
// falling back to the visitor's system preference. Key must match THEME_KEY in ThemeToggle.tsx.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');var t;try{t=localStorage.getItem('nextloom-theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.dataset.theme=t})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
