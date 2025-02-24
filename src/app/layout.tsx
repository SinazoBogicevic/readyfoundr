import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Ready Foundr | Learn How to Sell Your Product",
  description:
    "Learn practical steps and tools to turn your product idea into revenue. Get expert guidance on product validation, sales strategies, and customer acquisition.",
  metadataBase: new URL("https://readyfoundr.com"),
  keywords: [
    "startup sales",
    "product validation",
    "founder sales",
    "customer acquisition",
    "startup revenue",
    "product-market fit",
    "sales strategy",
    "startup growth",
    "MVP development",
    "no-code tools",
    "startup validation",
    "tech startup",
  ],
  openGraph: {
    title: "Ready Foundr | Learn How to Sell Your Product",
    description:
      "Learn practical steps and tools to turn your product idea into revenue. Get expert guidance on product validation, sales strategies, and customer acquisition.",
    type: "website",
    locale: "en_US",
    url: "https://readyfoundr.com",
    siteName: "Ready Foundr",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ready Foundr - Learn How to Sell Your Product",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ready Foundr | Learn How to Sell Your Product",
    description:
      "Learn practical steps and tools to turn your product idea into revenue. Get expert guidance on product validation, sales strategies, and customer acquisition.",
    creator: "@readyfoundr",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5Q4DJ0F9T8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5Q4DJ0F9T8');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
