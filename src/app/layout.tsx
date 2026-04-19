import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { BootScreen } from "@/components/layout/boot-screen";
import { getIdentity, getAbout, getSkills, getLinks } from "@/lib/data";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const identity = getIdentity();
  const about = getAbout();
  const title = `${identity.handle} — ${identity.title}`;
  const description = about.paragraphs[0];
  const url = `https://${identity.domain}`;

  return {
    title,
    description,
    metadataBase: new URL(url),
    authors: [{ name: identity.name, url }],
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: identity.domain,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const identity = getIdentity();
  const skills = getSkills();
  const links = getLinks();

  const knowsAbout = skills.groups.flatMap((g) => g.items);
  const sameAs = links.items.map((l) => l.url);

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: identity.name,
    url: `https://${identity.domain}`,
    email: identity.email,
    jobTitle: identity.title,
    sameAs,
    knowsAbout,
  });

  return (
    <html lang="en" className={jetbrains.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      </head>
      <body className="font-mono">
        <BootScreen />
        {children}
      </body>
    </html>
  );
}
