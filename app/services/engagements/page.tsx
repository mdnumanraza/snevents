"use client"

import { motion } from "framer-motion"
import { ImageCarousel } from "@/app/components/ImageCarousel"
import { Gallery } from "@/app/components/Gallery"
import { GradientButton } from "@/app/components/ui/GradientButton"
import { GradientHeading } from "@/app/components/ui/GradientHeading"

const engagementImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-89APwx91mmd60mpo3ALjxxMBiUYQqp.jpeg",
    alt: "Engagement Decoration with Floral Theme",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0048.jpg-auHAvIgWjpmLs0olQiRoyVVRtlgQIU.jpeg",
    alt: "Engagement Setup with Red and White Flowers",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0031.jpg-E9VqMloscgjGlPehc4oyPpdDDyDIhQ.jpeg",
    alt: "Modern Engagement Decoration",
  },
]

const packages = [
  {
    title: "Intimate Engagement Package",
    originalPrice: 25000,
    discountedPrice: 21999,
    discount: 12,
    features: [
      "Elegant floral decoration",
      "Basic backdrop setup",
      "Seating arrangement for up to 50 guests",
      "Basic lighting",
      "3 hours setup time",
    ],
  },
  {
    title: "Classic Engagement Package",
    originalPrice: 40000,
    discountedPrice: 33999,
    discount: 15,
    features: [
      "Premium floral decoration",
      "Custom themed backdrop",
      "Seating arrangement for up to 100 guests",
      "Enhanced lighting setup",
      "Photo booth area",
      "4 hours setup time",
    ],
  },
  {
    title: "Grand Engagement Package",
    originalPrice: 60000,
    discountedPrice: 49999,
    discount: 17,
    features: [
      "Luxury floral decoration",
      "Premium themed backdrop with special effects",
      "Seating arrangement for up to 200 guests",
      "Professional lighting and sound setup",
      "Custom photo booth with props",
      "Stage decoration",
      "5 hours setup time",
    ],
  },
]

export default function EngagementService() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative">
        <ImageCarousel images={engagementImages} className="max-h-[600px]" />
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
            <GradientHeading>Engagement Decoration Services</GradientHeading>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Make your engagement day truly special with our exquisite decoration services. We create romantic and
              elegant settings that perfectly capture the love and commitment you're celebrating.
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
          <Gallery images={engagementImages} />
        </div>
      </section>
    </div>
  )
}

