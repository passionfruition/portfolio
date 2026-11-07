import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/Nav"
import { SectionDots } from "@/components/SectionDots"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Projects } from "@/components/sections/Projects"
import { Contact } from "@/components/sections/Contact"

function App() {
  return (
    <ThemeProvider>
      <Nav />
      <SectionDots />
      <main className="h-svh snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}

export default App
