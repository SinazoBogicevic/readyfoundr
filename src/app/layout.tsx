import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Ready Foundr | Learn How to Sell Your Product",
  description:
    "Learn practical steps and tools to turn your product idea into revenue. Get expert guidance on product validation, sales strategies, and customer acquisition.",
  keywords: [
    "startup sales",
    "product validation",
    "founder sales",
    "customer acquisition",
    "startup revenue",
    "product-market fit",
    "sales strategy",
    "startup growth",
  ],
  openGraph: {
    title: "Ready Foundr | Learn How to Sell Your Product",
    description:
      "Learn practical steps and tools to turn your product idea into revenue. Get expert guidance on product validation, sales strategies, and customer acquisition.",
    type: "website",
    locale: "en_US",
    url: "https://readyfoundr.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ready Foundr | Learn How to Sell Your Product",
    description:
      "Learn practical steps and tools to turn your product idea into revenue. Get expert guidance on product validation, sales strategies, and customer acquisition.",
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
