import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from "@/components/ui/theme-provider"
import DockDemo from "@/components/global/Dock";
import PageParticles from "@/components/global/PageParticles";



const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Aadil's Portfolio",
  description: "Aadil's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <DockDemo />
              <main className="min-h-screen">
                <PageParticles />
                {children}
              </main>
              {/* <Footer /> */}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
