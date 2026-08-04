import { useEffect, useState } from "react"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export function SectionDots() {
  const [active, setActive] = useState(sections[0].id)

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (mostVisible) setActive(mostVisible.target.id)
      },
      { threshold: [0.5, 0.6, 0.7] }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-4 z-40 flex -translate-y-1/2 flex-col gap-4 sm:right-6"
    >
      {sections.map((section) => {
        const isActive = active === section.id
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={`Go to ${section.label} section`}
            aria-current={isActive}
            className="group relative flex size-4 items-center justify-center"
          >
            <span
              className={`size-2 rounded-full border border-foreground/40 transition-all duration-300 group-hover:border-foreground ${
                isActive
                  ? "scale-125 border-foreground bg-foreground"
                  : "bg-transparent"
              }`}
            />
          </a>
        )
      })}
    </nav>
  )
}
