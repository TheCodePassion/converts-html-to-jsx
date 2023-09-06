import './globals.css'
import { Nunito } from 'next/font/google'

const inter = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'JSX Wizard (Converts HTML to JSX)',
  description: 'Converts HTML to JSX ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
