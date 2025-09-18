"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, BookOpen } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass-effect animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-primary/10">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Muhammad Fajar Al Mubarok</h1>
              <p className="text-sm text-muted-foreground">Guru Tahfidz & Bahasa Arab</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
            >
              Tentang
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
            >
              Testimoni
            </button>
            <Button onClick={() => scrollToSection("contact")} size="sm" className="ml-4">
              Kontak
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-slide-up">
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Tentang
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Layanan
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
              >
                Testimoni
              </button>
              <Button onClick={() => scrollToSection("contact")} className="mx-4 mt-2" size="sm">
                Kontak
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
