"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="Presensys Logo" 
                width={56} 
                height={56}
                className="w-16 h-16 md:w-20 md:h-20"
              />
              <span className="text-lg font-semibold text-foreground">
                Presensys
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Registro de presença digital por QR Code
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link href="#como-funciona" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Como Funciona
            </Link>
            <Link href="#beneficios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Benefícios
            </Link>
            <Link href="#para-quem" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Para Quem
            </Link>
            <Link href="#diferenciais" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Diferenciais
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} Presensys. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
