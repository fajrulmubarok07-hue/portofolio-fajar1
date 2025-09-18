import { BookOpen, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <div>
                <h3 className="text-lg font-bold">Muhammad Fajar Al Mubarok</h3>
                <p className="text-sm opacity-90">Guru Tahfidz & Bahasa Arab</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Membimbing umat dalam memahami dan menghafal Al-Quran serta menguasai bahasa Arab dengan metode yang mudah
              dipahami dan penuh kasih sayang.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Program Pembelajaran</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Tahfidz Al-Quran</li>
              <li>Bahasa Arab</li>
              <li>Tilawah & Tajwid</li>
              <li>Les Private</li>
              <li>Kelas Kelompok</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <a
                href="mailto:fajrulmubarok07@gmail.com"
                className="flex items-center space-x-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                <span>fajrulmubarok07@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/fajrmubrk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm opacity-90 hover:opacity-100 transition-opacity"
              >
                <Instagram className="h-4 w-4" />
                <span>@fajrmubrk</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Muhammad Fajar Al Mubarok. Semua hak dilindungi.
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            Dibuat dengan ❤️ untuk pendidikan Islam
          </p>
        </div>
      </div>
    </footer>
  )
}
