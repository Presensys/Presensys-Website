"use client"

import { GraduationCap, Building2, CheckCircle2 } from "lucide-react"

const useCases = [
  {
    icon: GraduationCap,
    title: "Universidades e Instituições de Ensino",
    subtitle: "Professores substituem a chamada manual",
    description: "Professores exibem o QR Code na sala de aula e os alunos escaneiam para registrar presença. Sem interrupções, sem listas passando de mão em mão.",
    features: [
      "Elimina fraude de alunos assinando por outros",
      "Economiza até 10 minutos por aula",
      "Histórico completo de frequência por disciplina",
      "Integração com sistemas acadêmicos"
    ],
    gradient: "from-primary/10 to-primary/5"
  },
  {
    icon: Building2,
    title: "Empresas (PMEs)",
    subtitle: "Funcionários registram entrada e saída",
    description: "Substitua relógios de ponto caros e planilhas manuais. Funcionários escaneiam o QR Code no local de trabalho para registrar presença.",
    features: [
      "Substitui relógios de ponto tradicionais",
      "Controle de horas trabalhadas",
      "Relatórios para folha de pagamento",
      "Múltiplos locais com um único sistema"
    ],
    gradient: "from-accent/10 to-accent/5"
  }
]

export function UseCases() {
  return (
    <section id="para-quem" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Para quem é o Presensys?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Soluções específicas para diferentes necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {useCases.map((useCase) => (
            <div 
              key={useCase.title}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${useCase.gradient} p-1`}
            >
              <div className="bg-card rounded-[calc(1.5rem-4px)] p-6 md:p-8 h-full">
                {/* Icon and header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary shrink-0">
                    <useCase.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {useCase.title}
                    </h3>
                    <p className="text-primary text-sm font-medium">
                      {useCase.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {useCase.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
