import Providers from "@/lib/config/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume Demis Rincon",
  description: "Resume Demis Rincon - Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
