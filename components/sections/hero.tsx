"use client"

import { QrCode, Clock, Users, Smartphone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 md:mb-8">
            <QrCode className="w-4 h-4" />
            <span>Registro de presença simplificado</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Substitua listas de papel por um{" "}
            <span className="text-primary">QR Code</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed text-pretty">
            O Presensys é um sistema digital que transforma o registro de presença 
            em poucos segundos. Sem papel, sem chamadas orais, sem planilhas manuais.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            <StatCard 
              icon={<Clock className="w-5 h-5" />}
              value="3 seg"
              label="Para registrar"
            />
            <StatCard 
              icon={<Smartphone className="w-5 h-5" />}
              value="0"
              label="Apps necessários"
            />
            <StatCard 
              icon={<Users className="w-5 h-5" />}
              value="100%"
              label="Digital"
            />
            <StatCard 
              icon={<QrCode className="w-5 h-5" />}
              value="1"
              label="QR Code por sala"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ 
  icon, 
  value, 
  label 
}: { 
  icon: React.ReactNode
  value: string
  label: string 
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 md:p-6 rounded-2xl bg-card border border-border shadow-sm">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <span className="text-2xl md:text-3xl font-bold text-foreground">{value}</span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  )
}
