"use client"

import { motion } from "framer-motion"
import { ImageCarousel } from "@/app/components/ImageCarousel"
import { Gallery } from "@/app/components/Gallery"
import { GradientButton } from "@/app/components/ui/GradientButton"
import { GradientHeading } from "@/app/components/ui/GradientHeading"

const decorationImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0048.jpg-auHAvIgWjpmLs0olQiRoyVVRtlgQIU.jpeg",
    alt: "Flower Decoration with Red and White Roses",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0022.jpg-s5HbfYEn9k9ng2s8ZEq5Y1GWLwxoQp.jpeg",
    alt: "Balloon Decoration with Sequin Backdrop",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-89APwx91mmd60mpo3ALjxxMBiUYQqp.jpeg",
    alt: "Floral Decoration with White and Purple Flowers",
  },
]

const packages = [
  {
    title: "Basic Decoration Package",
    originalPrice: 15000,
    discountedPrice: 12999,
    discount: 13,
    features: ["Basic balloon arrangement", "Simple floral centerpieces", "Backdrop decoration", "2 hours setup time"],
  },
  {
    title: "Premium Decoration Package",
    originalPrice: 25000,
    discountedPrice: 21999,
    discount: 12,
    features: [
      "Premium balloon and flower arrangement",
      "Elegant floral centerpieces",
      "Custom themed backdrop",
      "Photo booth area decoration",
      "3 hours setup time",
    ],
  },
  {
    title: "Luxury Decoration Package",
    originalPrice: 40000,
    discountedPrice: 34999,
    discount: 13,
    features: [
      "Luxury balloon and flower arrangement",
      "Premium floral centerpieces and installations",
      "Custom designed backdrop with lighting",
      "Entrance and stage decoration",
      "Full venue decoration",
      "4 hours setup time",
    ],
  },
]

export default function DecorationService() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative">
        <ImageCarousel images={decorationImages} className="max-h-[600px]" />
      </section>

      {/* Service Description */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <GradientHeading>Balloons & Flower Decoration</GradientHeading>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Transform any space into a magical wonderland with our stunning balloon and flower decorations. Whether
              it's a birthday, wedding, or corporate event, we create beautiful and memorable settings that will leave
              your guests in awe.
            </p>
            <GradientButton href="/book" className="mt-8">
              Book This Service
            </GradientButton>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <GradientHeading className="text-center mb-12">Our Packages</GradientHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-teal-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg">
                  {pkg.discount > 0 && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      -{pkg.discount}%
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">₹{pkg.discountedPrice}</span>
                    {pkg.discount > 0 && <span className="ml-2 text-gray-500 line-through">₹{pkg.originalPrice}</span>}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <GradientButton href="/book" className="w-full">
                    Select Package
                  </GradientButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <GradientHeading className="text-center mb-12">Our Gallery</GradientHeading>
          <Gallery images={decorationImages} />
        </div>
      </section>
    </div>
  )
}

