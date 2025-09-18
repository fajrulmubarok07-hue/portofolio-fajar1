import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Muhammad Fajar Al Mubarok - Guru Tahfidz & Bahasa Arab",
  description:
    "Portfolio Muhammad Fajar Al Mubarok - Guru Tahfidz Al-Quran dan Bahasa Arab yang berpengalaman. Membimbing dengan penuh dedikasi dalam pembelajaran Al-Quran dan bahasa Arab.",
  generator: "v0.app",
  keywords: ["guru tahfidz", "guru bahasa arab", "tahfidz quran", "pembelajaran islam", "muhammad fajar al mubarok"],
  authors: [{ name: "Muhammad Fajar Al Mubarok" }],
  openGraph: {
    title: "Muhammad Fajar Al Mubarok - Guru Tahfidz & Bahasa Arab",
    description: "Guru Tahfidz Al-Quran dan Bahasa Arab yang berpengalaman",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
