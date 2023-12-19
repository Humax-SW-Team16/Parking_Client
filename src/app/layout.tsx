import Head from "next/head";
import { Inter } from "next/font/google";
import { UserLocationProvider } from "./context/userLocationContext";
import "./globals.css";
import NavigationBar from "@/app/components/NavigationBar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserLocationProvider>
      <div>
        <Head>
          <title>Humax Parking App</title>
          <meta name="description" content="humax parking app by Team 16" />
          <meta
            http-equiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
        </Head>
        <NavigationBar />
        {children}
        <Footer />
      </div>
    </UserLocationProvider>
  );
}
