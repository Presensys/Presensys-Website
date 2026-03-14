import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Benefits } from "@/components/sections/benefits"
import { UseCases } from "@/components/sections/use-cases"
import { Differentials } from "@/components/sections/differentials"
import { Comparison } from "@/components/sections/comparison"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Benefits />
      <UseCases />
      <Differentials />
      <Comparison />
      <Footer />
    </main>
  )
}
