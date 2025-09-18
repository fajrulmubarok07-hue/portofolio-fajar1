"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Star, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-24 lg:py-40 bg-gradient-to-br from-secondary/30 via-background to-muted/20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10 animate-fade-in">
            <div className="relative inline-block">
              <img
                src="/profile-formal.png"
                alt="Muhammad Fajar Al Mubarok"
                className="w-36 h-36 lg:w-48 lg:h-48 rounded-3xl mx-auto mb-6 border-4 border-primary/20 shadow-2xl object-cover hover-lift"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>

          <div className="animate-slide-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
              Assalamu'alaikum,
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Muhammad Fajar Al Mubarok
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 text-pretty max-w-4xl mx-auto leading-relaxed">
              Guru Tahfidz Al-Quran dan Bahasa Arab yang berdedikasi untuk membimbing umat dalam memahami dan menghafal
              Al-Quran serta menguasai bahasa Arab dengan baik dan benar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
            <Button size="lg" onClick={scrollToAbout} className="text-lg px-10 py-4 rounded-xl hover-lift">
              Pelajari Lebih Lanjut
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center gap-3 text-muted-foreground bg-card/50 px-6 py-3 rounded-xl border">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium">Dipercaya 20+ siswa</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto animate-slide-up">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover-lift">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                5
              </div>
              <div className="text-base text-muted-foreground font-medium">Bulan Pengalaman</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover-lift">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                20+
              </div>
              <div className="text-base text-muted-foreground font-medium">Siswa Dibimbing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
