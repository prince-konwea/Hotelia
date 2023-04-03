import {Nunito} from "next/font/google";
import './globals.css'

export const metadata = {
  title: 'Hotelia',
  description: 'hotel booking platform',
}

const font = Nunito({
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
