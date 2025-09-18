"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Users, Award, ChevronLeft, ChevronRight } from "lucide-react"

const certificates = [
  {
    id: 1,
    title: "Sertifikat Institut Tafaqquh (ITAF)",
    description: "Sertifikat penyelesaian program studi Islam dari Institut Tafaqquh",
    image: "/certificates/itaf-certificate.jpg",
    year: "2025",
  },
  {
    id: 2,
    title: "Sertifikat Hafidz Al-Quran",
    description: "Sertifikat hafalan Al-Quran 30 Juz dari Daar Al Ilmi EMIISc Boarding",
    image: "/certificates/hifz-certificate.jpg",
    year: "2025",
  },
  {
    id: 3,
    title: "Ijazah Tuhfat Al-Atfal",
    description: "Ijazah dalam ilmu tajwid untuk anak-anak (Tuhfat Al-Atfal)",
    image: "/certificates/tuhfah-certificate.jpg",
    year: "2022",
  },
  {
    id: 4,
    title: "TOAFL - Test of Arabic Language",
    description: "Sertifikat kemampuan bahasa Arab dengan skor 583 (Sangat Baik)",
    image: "/certificates/toafl-certificate.jpg",
    year: "2025",
  },
]

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1))
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? certificates.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === certificates.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Tentang Saya</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Perjalanan saya dalam dunia pendidikan Islam dimulai dari kecintaan mendalam terhadap Al-Quran dan bahasa
              Arab
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/teaching-tahfidz.jpg"
                alt="Suasana pembelajaran tahfidz"
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Filosofi Mengajar</h3>
              <p className="text-muted-foreground leading-relaxed">
                Saya percaya bahwa setiap siswa memiliki potensi unik dalam mempelajari Al-Quran dan bahasa Arab. Dengan
                pendekatan yang sabar, penuh kasih sayang, dan metode yang disesuaikan dengan kebutuhan individual, saya
                berkomitmen untuk membantu setiap siswa mencapai tujuan mereka dalam menghafal Al-Quran dan menguasai
                bahasa Arab.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pengalaman mengajar selama 5 bulan telah memberikan saya pemahaman mendalam tentang berbagai metode
                pembelajaran yang efektif, mulai dari anak-anak hingga dewasa.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Metode Terpercaya</h4>
                <p className="text-sm text-muted-foreground">
                  Menggunakan metode pembelajaran yang telah terbukti efektif
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Penuh Kasih Sayang</h4>
                <p className="text-sm text-muted-foreground">
                  Pendekatan yang sabar dan penuh perhatian kepada setiap siswa
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Pembelajaran Personal</h4>
                <p className="text-sm text-muted-foreground">
                  Disesuaikan dengan kemampuan dan kebutuhan masing-masing siswa
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-foreground mb-2">Hasil Terbukti</h4>
                <p className="text-sm text-muted-foreground">
                  Telah mencetak puluhan hafidz dan siswa yang mahir berbahasa Arab
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Sertifikat & Prestasi
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Sertifikat & Kualifikasi</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Berbagai sertifikat dan kualifikasi yang mendukung kompetensi dalam mengajar tahfidz dan bahasa Arab
              </p>
            </div>

            {/* Certificate Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-2xl border">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {certificates.map((certificate) => (
                    <div key={certificate.id} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Certificate Image */}
                        <div className="relative">
                          <div className="aspect-[4/3] relative rounded-xl overflow-hidden shadow-lg">
                            <Image
                              src={certificate.image || "/placeholder.svg"}
                              alt={certificate.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* Certificate Info */}
                        <div className="flex flex-col justify-center">
                          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit">
                            {certificate.year}
                          </div>
                          <h4 className="text-2xl font-bold text-foreground mb-4">{certificate.title}</h4>
                          <p className="text-muted-foreground text-lg leading-relaxed">{certificate.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg"
                onClick={goToPrevious}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background shadow-lg"
                onClick={goToNext}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-amber-500 w-8" : "bg-muted hover:bg-muted-foreground/20"
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
