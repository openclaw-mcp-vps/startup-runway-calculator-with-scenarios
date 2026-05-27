import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup Runway Calculator — Model Cash Runway with Growth Scenarios",
  description: "Calculate your startup's cash runway across hiring and revenue scenarios. Real-time alerts when runway drops below thresholds. Built for founders and CFOs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c354e065-55bb-4943-b844-2f07e2234246"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}