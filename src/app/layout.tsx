import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Connected Creativity - Holistic Design Curriculum',
  description: 'Discover a holistic approach to design that connects mind, body, and creativity through intentional practice and mindful exploration.',
  keywords: ['creativity', 'design', 'holistic', 'mindfulness', 'education', 'curriculum'],
  authors: [{ name: 'Connected Creativity Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#8b5cf6',
  openGraph: {
    title: 'Connected Creativity - Holistic Design Curriculum',
    description: 'Discover a holistic approach to design that connects mind, body, and creativity through intentional practice and mindful exploration.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Connected Creativity - Holistic Design Curriculum',
    description: 'Discover a holistic approach to design that connects mind, body, and creativity through intentional practice and mindful exploration.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}