"use client"

import { X, Check } from "lucide-react"

const comparisons = [
  {
    feature: "Tempo de registro",
    traditional: "5-10 minutos",
    presensys: "3 segundos"
  },
  {
    feature: "Instalação de app",
    traditional: "Sim, obrigatório",
    presensys: "Não precisa"
  },
  {
    feature: "Hardware especial",
    traditional: "Relógio de ponto, leitor biométrico",
    presensys: "Nenhum"
  },
  {
    feature: "Risco de fraude",
    traditional: "Alto (assinatura por terceiros)",
    presensys: "Baixo (validação digital)"
  },
  {
    feature: "Relatórios",
    traditional: "Manuais, trabalhosos",
    presensys: "Automáticos"
  },
  {
    feature: "Tempo de implementação",
    traditional: "Semanas",
    presensys: "Minutos"
  }
]

export function Comparison() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Presensys vs. Métodos Tradicionais
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Compare e veja por que empresas e instituições estão migrando
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="p-3 md:p-4">
              <span className="text-sm font-medium text-muted-foreground">Característica</span>
            </div>
            <div className="p-3 md:p-4 rounded-t-xl bg-muted/50 text-center">
              <span className="text-sm font-medium text-muted-foreground">Tradicional</span>
            </div>
            <div className="p-3 md:p-4 rounded-t-xl bg-primary text-center">
              <span className="text-sm font-medium text-primary-foreground">Presensys</span>
            </div>
          </div>

          {/* Rows */}
          <div className="rounded-2xl border border-border overflow-hidden bg-card">
            {comparisons.map((row, index) => (
              <div 
                key={row.feature}
                className={`grid grid-cols-3 gap-4 ${
                  index !== comparisons.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="p-3 md:p-4 flex items-center">
                  <span className="text-sm font-medium text-foreground">{row.feature}</span>
                </div>
                <div className="p-3 md:p-4 bg-muted/30 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-destructive shrink-0 hidden md:block" />
                    <span className="text-xs md:text-sm text-muted-foreground text-center">{row.traditional}</span>
                  </div>
                </div>
                <div className="p-3 md:p-4 bg-primary/5 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent shrink-0 hidden md:block" />
                    <span className="text-xs md:text-sm text-foreground font-medium text-center">{row.presensys}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
