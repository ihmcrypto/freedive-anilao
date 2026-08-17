import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://freediveanilao.com";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Freedive Anilao | Ocean Experiences in Batangas",
    template: "%s | Freedive Anilao",
  },
  description:
    "Thoughtfully guided freediving and ocean days for travelers in Anilao, Mabini, Batangas, Philippines.",
  applicationName: "Freedive Anilao",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Freedive Anilao",
    title: "Freedive Anilao | Ocean Experiences in Batangas",
    description:
      "Thoughtfully guided freediving and ocean days for travelers in Anilao, Mabini, Batangas, Philippines.",
    images: [
      {
        url: "/images/mabini-sunset.png",
        alt: "Sunset over the water in Mabini, Batangas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freedive Anilao | Ocean Experiences in Batangas",
    description:
      "Thoughtfully guided freediving and ocean days for travelers in Anilao, Mabini, Batangas, Philippines.",
    images: ["/images/mabini-sunset.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BZ2MLGXS5D"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BZ2MLGXS5D');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
