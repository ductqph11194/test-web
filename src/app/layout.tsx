import "./globals.css";

export const metadata = {
  title: "NetProxy.io",
  description: "Residential Proxies P2P - The Best Proxy Solution",
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
