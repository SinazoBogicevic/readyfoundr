import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Ready Foundr",
  description:
    "Ready Foundr helps non-technical founders build successful MVPs quickly and efficiently. Turn your vision into reality with our expert development services.",
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
