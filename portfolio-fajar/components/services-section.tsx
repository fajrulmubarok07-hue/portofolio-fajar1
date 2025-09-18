"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageCircle, Users, Clock } from "lucide-react"

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Layanan Pembelajaran</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Berbagai program pembelajaran yang disesuaikan dengan kebutuhan dan tingkat kemampuan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Tahfidz Al-Quran</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Program menghafal Al-Quran dengan metode yang mudah dipahami, mulai dari juz 30 hingga 30 juz lengkap.
                  Dilengkapi dengan teknik muraja'ah yang efektif.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Metode tahfidz bertahap</li>
                  <li>• Teknik muraja'ah harian</li>
                  <li>• Evaluasi berkala</li>
                  <li>• Sertifikat kelulusan</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full">
                  Daftar Sekarang
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Bahasa Arab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Pembelajaran bahasa Arab dari dasar hingga mahir, mencakup nahwu, sharaf, dan percakapan sehari-hari.
                  Cocok untuk semua tingkatan.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Nahwu dan Sharaf</li>
                  <li>• Percakapan praktis</li>
                  <li>• Membaca kitab kuning</li>
                  <li>• Materi interaktif</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full">
                  Daftar Sekarang
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Kelas Kelompok</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Pembelajaran dalam kelompok kecil (3-5 siswa) yang memungkinkan interaksi lebih baik dan biaya lebih
                  terjangkau.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Maksimal 5 siswa</li>
                  <li>• Diskusi interaktif</li>
                  <li>• Biaya terjangkau</li>
                  <li>• Jadwal fleksibel</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full">
                  Daftar Sekarang
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Les Private</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Pembelajaran one-on-one yang disesuaikan sepenuhnya dengan kebutuhan dan kecepatan belajar siswa.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Pembelajaran personal</li>
                  <li>• Jadwal fleksibel</li>
                  <li>• Materi custom</li>
                  <li>• Progress lebih cepat</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full">
                  Daftar Sekarang
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Tilawah & Tajwid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Perbaikan bacaan Al-Quran dengan kaidah tajwid yang benar, mulai dari makhorijul huruf hingga lagu
                  tilawah.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Makhorijul huruf</li>
                  <li>• Kaidah tajwid lengkap</li>
                  <li>• Lagu tilawah</li>
                  <li>• Praktek intensif</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full">
                  Daftar Sekarang
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">Konsultasi Gratis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Konsultasi gratis untuk menentukan program pembelajaran yang paling sesuai dengan kebutuhan dan
                  kemampuan Anda.
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                  <li>• Evaluasi kemampuan</li>
                  <li>• Rekomendasi program</li>
                  <li>• Jadwal pembelajaran</li>
                  <li>• Tanpa biaya</li>
                </ul>
                <Button onClick={scrollToContact} className="w-full">
                  Konsultasi Sekarang
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
