import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from "@/components/ui/theme-provider"
import DockDemo from "@/components/global/Dock";
import PageParticles from "@/components/global/PageParticles";
import Footer from "@/components/global/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"



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
        <head>
          {/* CHANGE IMAGES TO BE HOSTED ON THIS SITE INSTEAD*/}
          <meta property="og:url" content="https://portfolio-test-theta.vercel.app/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Aadil's Portfolio"/>
          <meta property="og:description" content="A simple portfolio site explaining me, my work, and passion."/>
          <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/690b884d-209f-4b7c-ac46-e66fc5a9f2e5.png?token=YbadBs_Ji6btCRS3NA9aQnn1RmKjpR6EGcX17RsyqpA&height=675&width=1200&expires=33260796001"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="portfolio-test-theta.vercel.app"/>
          <meta property="twitter:url" content="https://portfolio-test-theta.vercel.app/"/>
          <meta name="twitter:title" content="Aadil's Portfolio"/>
          <meta name="twitter:description" content="A simple portfolio site explaining me, my work, and passion."/>
          <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/690b884d-209f-4b7c-ac46-e66fc5a9f2e5.png?token=YbadBs_Ji6btCRS3NA9aQnn1RmKjpR6EGcX17RsyqpA&height=675&width=1200&expires=33260796001"/>
        </head>
        <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
          <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
              <DockDemo />
              <main className="min-h-screen">
                <PageParticles />
                {children}
                <SpeedInsights />
              </main>
              <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
