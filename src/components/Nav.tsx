import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import Logo from "@/assets/logo.png"

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" aria-label="Home" className="shrink-0 transition-opacity hover:opacity-80">
          <img src={Logo} alt="Logo" className="size-8 rounded-md object-cover" />
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </div>

        <div className="flex items-center gap-1 sm:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col border-t border-border/60 bg-background/95 px-4 py-2 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
