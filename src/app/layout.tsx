import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finca App",
  description: "La Finca Tours - Travel experiences in Costa Rica",
  authors: [{ name: "La Finca Tours" }],
  openGraph: {
    title: "Finca App",
    description: "La Finca Tours - Travel experiences in Costa Rica",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
