import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import MainLayout from './Components/MainLayout'

const fira = localFont({
  src: './fonts/FiraCode-VF.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Muhammad Hamza',
  description: 'A great engineer who treaded the path of the unknown.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
