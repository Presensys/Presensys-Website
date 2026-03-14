"use client"

import { 
  Clock, 
  FileX, 
  ShieldCheck, 
  BarChart3, 
  Wallet, 
  Zap 
} from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Economize tempo",
    description: "Elimine os 5-10 minutos gastos com chamada oral em cada aula ou reunião. Registro instantâneo por QR Code."
  },
  {
    icon: FileX,
    title: "Sem papel, sem planilhas",
    description: "Abandone listas de papel e planilhas manuais. Tudo digital, organizado e acessível de qualquer lugar."
  },
  {
    icon: ShieldCheck,
    title: "Reduza fraudes",
    description: "QR Codes únicos e validação por horário eliminam registros falsos e presenças indevidas."
  },
  {
    icon: BarChart3,
    title: "Relatórios automáticos",
    description: "Dados de presença organizados automaticamente. Exporte relatórios prontos quando precisar."
  },
  {
    icon: Wallet,
    title: "Baixo custo",
    description: "Sem necessidade de hardware especial ou relógios de ponto caros. Funciona com qualquer celular."
  },
  {
    icon: Zap,
    title: "Implementação rápida",
    description: "Configure em minutos, não em semanas. Comece a usar imediatamente após criar sua conta."
  }
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Por que escolher o Presensys?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Benefícios reais que transformam como você gerencia a presença
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <benefit.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
