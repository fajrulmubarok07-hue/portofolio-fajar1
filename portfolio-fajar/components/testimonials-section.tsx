"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Ahmad Rizki",
    role: "Siswa Tahfidz",
    content:
      "Alhamdulillah, berkat bimbingan Ustadz Fajar, saya berhasil menghafal 3 juz dalam waktu 4 bulan. Metode mengajarnya sangat mudah dipahami dan sabar dalam membimbing.",
    rating: 5,
  },
  {
    name: "Siti Aisyah",
    role: "Mahasiswa",
    content:
      "Pembelajaran bahasa Arab dengan Ustadz Fajar sangat menyenangkan. Sekarang saya sudah bisa membaca teks Arab dengan lancar. Terima kasih atas bimbingannya!",
    rating: 5,
  },
  {
    name: "Abdullah Rahman",
    role: "Orang Tua Siswa",
    content:
      "Anak saya sangat senang belajar dengan Ustadz Fajar. Dalam 3 bulan, bacaan Al-Qurannya sudah sangat bagus dan mulai menghafal dengan semangat.",
    rating: 5,
  },
  {
    name: "Fatimah Zahra",
    role: "Siswa Bahasa Arab",
    content:
      "Ustadz Fajar mengajar dengan cara yang mudah dimengerti. Nahwu dan sharaf yang dulu sulit, sekarang jadi mudah dipahami. Jazakallahu khairan!",
    rating: 5,
  },
  {
    name: "Muhammad Yusuf",
    role: "Siswa Tahfidz",
    content:
      "Alhamdulillah sudah menyelesaikan hafalan 5 juz dengan bimbingan Ustadz Fajar. Metode muraja'ahnya sangat efektif untuk menjaga hafalan.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Testimoni Siswa</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Dengarkan pengalaman siswa-siswa yang telah merasakan manfaat pembelajaran bersama kami
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-8 pb-8 text-center">
                <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                </div>
              </CardContent>
            </Card>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
