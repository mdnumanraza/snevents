"use client"

import { motion } from "framer-motion"
import { ImageCarousel } from "@/app/components/ImageCarousel"
import { Gallery } from "@/app/components/Gallery"
import { GradientButton } from "@/app/components/ui/GradientButton"
import { GradientHeading } from "@/app/components/ui/GradientHeading"

const namingImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0029.jpg-2MRFcws3T5GubR9tFjGRKbQtu2zGIg.jpeg",
    alt: "Traditional Naming Ceremony Decoration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0020.jpg-0cILrqi0zxaDvQGZuWJpQpNbxjeNKB.jpeg",
    alt: "Floral Naming Ceremony Setup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0031.jpg-E9VqMloscgjGlPehc4oyPpdDDyDIhQ.jpeg",
    alt: "Modern Naming Ceremony Decoration",
  },
]

const packages = [
  {
    title: "Traditional Package",
    originalPrice: 25000,
    discountedPrice: 19999,
    discount: 20,
    features: [
      "Traditional flower decoration",
      "Rangoli design",
      "Basic backdrop",
      "Traditional seating arrangement",
      "3 hours setup time",
    ],
  },
  {
    title: "Premium Package",
    originalPrice: 35000,
    discountedPrice: 29999,
    discount: 15,
    features: [
      "Premium flower decoration",
      "Custom themed backdrop",
      "LED name board",
      "Photo booth area",
      "Traditional & modern seating",
      "4 hours setup time",
    ],
  },
  {
    title: "Luxury Package",
    originalPrice: 45000,
    discountedPrice: 39999,
    discount: 12,
    features: [
      "Luxury flower decoration",
      "Premium themed backdrop",
      "LED name board with effects",
      "Custom photo booth",
      "Premium seating arrangement",
      "Complete venue decoration",
      "5 hours setup time",
    ],
  },
]

export default function NamingCeremonyService() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative">
        <ImageCarousel images={namingImages} className="max-h-[600px]" />
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
            <GradientHeading>Naming Ceremony Decoration</GradientHeading>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Welcome your little one with a beautiful and traditional naming ceremony decoration. We blend traditional
              elements with modern aesthetics to create a perfect setting for this auspicious occasion.
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
          <Gallery images={namingImages} />
        </div>
      </section>
    </div>
  )
}

