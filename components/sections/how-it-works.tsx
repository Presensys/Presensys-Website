"use client"

import { Settings, QrCode, Camera, CheckCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "Configure suas turmas",
    description: "O administrador cria turmas, salas ou equipes no sistema e define os horários permitidos para registro de presença."
  },
  {
    number: "02",
    icon: QrCode,
    title: "Gere o QR Code",
    description: "O Presensys gera automaticamente um QR Code único para cada sala ou local, pronto para ser exibido."
  },
  {
    number: "03",
    icon: Camera,
    title: "Escaneie com o celular",
    description: "Na hora do registro, as pessoas apenas apontam a câmera do celular para o QR Code."
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Presença registrada",
    description: "A presença é registrada automaticamente em poucos segundos, incluindo horário exato e dados da pessoa."
  }
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Como o Presensys funciona
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Em apenas 4 passos simples, você moderniza completamente o controle de presença
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                {/* Step number */}
                <span className="absolute -top-3 -right-3 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                  {step.number}
                </span>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
