import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Nav } from "@/components/Nav"
import { SectionDots } from "@/components/SectionDots"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Nav />
        <SectionDots />
        <main className="scrollbar-hide h-svh snap-y snap-mandatory overflow-y-scroll scroll-smooth">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
