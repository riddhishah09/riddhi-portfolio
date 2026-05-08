import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/ui/ClientWrapper";

export const metadata: Metadata = {
  title: "Riddhi Shah — Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Riddhi Shah — Full Stack Developer & AI Enthusiast based in Mumbai, India. Building elegant, user-friendly web applications with modern technologies.",
  keywords: [
    "Riddhi Shah",
    "Full Stack Developer",
    "AI Enthusiast",
    "Mumbai",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Riddhi Shah", url: "https://github.com/riddhishah09" }],
  openGraph: {
    type: "website",
    title: "Riddhi Shah — Full Stack Developer & AI Enthusiast",
    description: "Portfolio of Riddhi Shah — building elegant web experiences.",
    siteName: "Riddhi Shah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riddhi Shah — Full Stack Developer",
    description: "Portfolio of Riddhi Shah — building elegant web experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
