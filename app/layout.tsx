import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  title: 'Presensys - Sistema de Registro de Presença por QR Code',
  description: 'Substitua listas de papel, chamadas orais e planilhas por um sistema digital de presença por QR Code. Para universidades e empresas.',
  keywords: ['presença', 'QR Code', 'controle de ponto', 'chamada digital', 'universidade', 'empresa'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export const viewport = {
  themeColor: '#2563EB',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
