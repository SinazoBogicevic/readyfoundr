import "./globals.css";

export const metadata = {
  title: "Ready Foundr",
  description: "Building MVPs for non-tech founders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
