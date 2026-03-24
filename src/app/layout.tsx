import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberSec Portfolio | Security Professional",
  description: "Cybersecurity professional portfolio showcasing skills, projects, and experience in offensive and defensive security.",
  keywords: ["cybersecurity", "penetration testing", "security", "portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cyber-black min-h-screen grid-bg">
        <div className="scan-line" />
        <div className="crt-overlay" />
        {children}
      </body>
    </html>
  );
}
