import './globals.css'
import NavigationBar from "@/app/components/NavigationBar";
import Footer from "@/app/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavigationBar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
