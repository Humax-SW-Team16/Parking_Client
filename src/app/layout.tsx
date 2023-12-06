import './globals.css'
import NavigationBar from "@/app/components/NavigationBar";

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
      </body>
    </html>
  )
}
