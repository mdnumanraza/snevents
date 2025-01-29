"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ImageCarousel } from "./components/ImageCarousel"
import { ServiceCard } from "./components/ServiceCard"
import { GradientHeading } from "./components/ui/GradientHeading"
import { GradientButton } from "./components/ui/GradientButton"

const carouselImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0049.jpg-OenX3p1eQOglsH1c0FW4gCtejibzo4.jpeg",
    alt: "Birthday Decoration with Blue Theme",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0029.jpg-2MRFcws3T5GubR9tFjGRKbQtu2zGIg.jpeg",
    alt: "Traditional Naming Ceremony Decoration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-Xrcs2RInJkWbgXo63Fzn77jK24faPx.jpeg",
    alt: "Birthday Setup with Unicorn Theme",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-89APwx91mmd60mpo3ALjxxMBiUYQqp.jpeg",
    alt: "Floral Birthday Decoration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0048.jpg-auHAvIgWjpmLs0olQiRoyVVRtlgQIU.jpeg",
    alt: "Birthday Decoration with Flowers",
  },
]

const services = [
  {
    title: "Birthday",
    description: "Create unforgettable birthday celebrations with our stunning decorations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0049.jpg-OenX3p1eQOglsH1c0FW4gCtejibzo4.jpeg",
    href: "/services/birthday",
  },
  {
    title: "Naming Ceremony",
    description: "Welcome your little one with beautiful traditional decorations.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0029.jpg-2MRFcws3T5GubR9tFjGRKbQtu2zGIg.jpeg",
    href: "/services/naming-ceremony",
  },
  {
    title: "Baby Shower",
    description: "Celebrate new life with our charming baby shower setups.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-Xrcs2RInJkWbgXo63Fzn77jK24faPx.jpeg",
    href: "/services/baby-shower",
  },
  {
    title: "Engagements",
    description: "Set the perfect scene for your special moment with our engagement decor.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-89APwx91mmd60mpo3ALjxxMBiUYQqp.jpeg",
    href: "/services/engagements",
  },
  {
    title: "Balloons & Flower Decoration",
    description: "Transform any space with our beautiful balloon and flower arrangements.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0048.jpg-auHAvIgWjpmLs0olQiRoyVVRtlgQIU.jpeg",
    href: "/services/decoration",
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <ImageCarousel images={carouselImages} className="absolute inset-0" />
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Crafting Unforgettable Experiences</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Premium event management services tailored to your vision
            </p>
            <GradientButton href="/book" className="text-lg">
              Book Your Service
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <GradientHeading className="text-center mb-16">Our Services</GradientHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-400 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today to start planning your next event.
          </p>
          <GradientButton href="/book" variant="outline" className="text-lg">
            Book Now
          </GradientButton>
        </div>
      </section>
    </div>
  )
}

