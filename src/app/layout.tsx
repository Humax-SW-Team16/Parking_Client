import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserLocationProvider } from "./context/userLocationContext";
import "./globals.css";
import NavigationBar from "@/app/components/NavigationBar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Humax Parking App",
  description: "humax parking app by Team 16",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserLocationProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavigationBar />
          {children}
          <Footer />
        </body>
      </html>
    </UserLocationProvider>
  );
}
