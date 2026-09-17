import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "@/app/globals.css";
import "flag-icons/css/flag-icons.min.css";
import AppHeader from "@/layout/header";
import Footer from "@/layout/footer";
import I18nProvider from "@/components/I18nProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raceSport = localFont({
  src: "../../../public/font/Race Sport.ttf",
  variable: "--font-race-sport",
});

const hanuman = localFont({
  src: "../../../public/font/Hanuman.ttf",
  variable: "--font-hanuman",
});

import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL("https://porfolioseangsang.wenowkh.online/"),
    
    title: {
      default: dict.seo.title,
      template: "%s | Seang Sang",
    },
    description: dict.seo.description,
    
    keywords: [
      "Seang Sang",
      "Developer Portfolio",
      "Full-Stack Developer",
      "Frontend Developer",
      "Next.js",
      "React",
      "Web Developer",
      "Software Engineer"
    ],
    
    authors: [{ name: "Seang Sang", url: "https://porfolioseangsang.wenowkh.online/" }],
    creator: "Seang Sang",
    publisher: "Seang Sang",
    
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en-US': '/en',
        'km-KH': '/kh',
      },
    },
    
    openGraph: {
      title: dict.seo.og_title,
      description: dict.seo.og_description,
      url: `https://porfolioseangsang.wenowkh.online/${locale}`,
      siteName: "Seang Sang Portfolio",
      images: [
        {
          url: "/opengraph-image.jpg", // Add a 1200x630 image to your public or app folder
          width: 1200,
          height: 630,
          alt: dict.seo.title,
        },
      ],
      locale: locale === 'en' ? 'en_US' : 'km_KH',
      type: "website",
    },
    
    twitter: {
      card: "summary_large_image",
      title: dict.seo.og_title,
      description: dict.seo.og_description,
      creator: "@seangsang",
      images: ["/twitter-image.jpg"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${raceSport.variable} ${hanuman.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Seang Sang",
              url: "https://porfolioseangsang.wenowkh.online",
              jobTitle: "Full-Stack Developer",
              alumniOf: "Build Bright University",
              sameAs: [
                "https://github.com/SeangSang12",
                "https://www.linkedin.com/in/seang-sang-462947306/",
                "https://www.facebook.com/seang.sang.12"
              ]
            })
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider locale={locale}>
            <AppHeader locale={locale} />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
