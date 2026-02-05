import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ViewTransitions } from "next-view-transitions";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caroline Assis - Psicóloga Clínica",
  description: "Psicóloga Caroline Assis - Terapia cognitivo-comportamental e atendimento a brasileiros no exterior.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="pt-BR" suppressHydrationWarning>
        <body
          className={`${manrope.variable} ${inter.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
