import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/HOC/Provider";
import Footer from "@/components/Home/Footer/Footer";
import GoToTop from "@/components/Helper/GoToTop";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Food Menu Page",
  description: "Simple food menu page by nextjs made by Heema.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} antialiased`}>
        <Provider>
          <ResponsiveNav />
          {children}
          <Footer />
          <GoToTop />
        </Provider>
      </body>
    </html>
  );
}
