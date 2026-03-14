"use client"

import { Smartphone, Globe, Rocket, FileText, Coins, Lock } from "lucide-react"

const differentials = [
  {
    icon: Smartphone,
    title: "Sem app para instalar",
    description: "Ninguém precisa baixar aplicativo. Funciona direto pelo navegador do celular."
  },
  {
    icon: Globe,
    title: "Qualquer celular",
    description: "Compatível com Android e iPhone. Basta ter câmera e acesso à internet."
  },
  {
    icon: Rocket,
    title: "Pronto em minutos",
    description: "Configure suas salas e comece a usar imediatamente. Sem instalação de hardware."
  },
  {
    icon: FileText,
    title: "Relatórios prontos",
    description: "Exporte dados de presença organizados automaticamente em PDF ou Excel."
  },
  {
    icon: Coins,
    title: "Custo acessível",
    description: "Muito mais barato que relógios de ponto e soluções tradicionais de controle."
  },
  {
    icon: Lock,
    title: "Anti-fraude",
    description: "Validação por horário e localização impede registros indevidos."
  }
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Diferenciais do Presensys
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            O que torna nossa solução única no mercado
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {differentials.map((diff, index) => (
            <div 
              key={diff.title}
              className={`relative p-5 md:p-6 rounded-2xl border border-border bg-card hover:bg-secondary/50 transition-colors duration-300 ${
                index === 0 || index === 5 ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 text-primary mb-4">
                <diff.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {diff.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
