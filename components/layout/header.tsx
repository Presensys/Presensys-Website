"use client"

import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.png" 
              alt="Presensys Logo" 
              width={56} 
              height={56}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <span className="text-lg md:text-xl font-semibold text-foreground">
              Presensys
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Como Funciona
            </Link>
            <Link href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Benefícios
            </Link>
            <Link href="#para-quem" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Para Quem
            </Link>
            <Link href="#diferenciais" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Diferenciais
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
