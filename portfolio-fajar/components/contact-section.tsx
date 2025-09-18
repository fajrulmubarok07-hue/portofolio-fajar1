"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Assalamu'alaikum Ustadz Fajar,

Saya ${formData.name} ingin berkonsultasi tentang program pembelajaran.

Detail:
- Email: ${formData.email}
- No. HP: ${formData.phone}
- Pesan: ${formData.message}

Terima kasih.`

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Hubungi Saya</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Siap membantu perjalanan pembelajaran Al-Quran dan bahasa Arab Anda. Jangan ragu untuk menghubungi!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">fajrulmubarok07@gmail.com</p>
                      <a href="mailto:fajrulmubarok07@gmail.com" className="text-primary hover:underline text-sm">
                        Kirim Email
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Instagram className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Instagram</h4>
                      <p className="text-muted-foreground">@fajrmubrk</p>
                      <a
                        href="https://instagram.com/fajrmubrk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        Kunjungi Instagram
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground">Tersedia untuk konsultasi</p>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm"
                      >
                        Chat WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Lokasi</h4>
                      <p className="text-muted-foreground">Tersedia pembelajaran online dan offline</p>
                      <p className="text-sm text-muted-foreground">Wilayah Jabodetabek</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Jam Operasional</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Senin - Jumat</span>
                      <span>08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabtu - Minggu</span>
                      <span>09:00 - 17:00</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      *Jadwal dapat disesuaikan dengan kebutuhan siswa
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nama@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Nomor WhatsApp
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Pesan
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ceritakan program apa yang Anda minati atau pertanyaan yang ingin disampaikan..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Kirim via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Pesan akan dikirim melalui WhatsApp untuk respon yang lebih cepat
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
