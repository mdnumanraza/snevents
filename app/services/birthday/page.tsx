"use client"

import { motion } from "framer-motion"
import { ImageCarousel } from "@/app/components/ImageCarousel"
import { Gallery } from "@/app/components/Gallery"
import { GradientButton } from "@/app/components/ui/GradientButton"
import { GradientHeading } from "@/app/components/ui/GradientHeading"

const birthdayImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0049.jpg-OenX3p1eQOglsH1c0FW4gCtejibzo4.jpeg",
    alt: "Birthday Decoration with Blue Theme",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-Xrcs2RInJkWbgXo63Fzn77jK24faPx.jpeg",
    alt: "Birthday Setup with Unicorn Theme",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0022.jpg-s5HbfYEn9k9ng2s8ZEq5Y1GWLwxoQp.jpeg",
    alt: "Birthday Decoration with Sequin Backdrop",
  },
]

const packages = [
  {
    title: "Basic Birthday Package",
    originalPrice: 15000,
    discountedPrice: 12999,
    discount: 15,
    features: ["Basic balloon decoration", "Name board with lights", "Basic backdrop setup", "2 hours setup time"],
  },
  {
    title: "Premium Birthday Package",
    originalPrice: 25000,
    discountedPrice: 19999,
    discount: 20,
    features: [
      "Premium balloon decoration",
      "Custom theme backdrop",
      "LED name board",
      "Photo booth area",
      "3 hours setup time",
    ],
  },
  {
    title: "Luxury Birthday Package",
    originalPrice: 35000,
    discountedPrice: 29999,
    discount: 25,
    features: [
      "Luxury balloon decoration",
      "Premium themed backdrop",
      "LED name board with effects",
      "Custom photo booth",
      "Flower decorations",
      "4 hours setup time",
    ],
  },
]

export default function BirthdayService() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative">
        <ImageCarousel images={birthdayImages} className="max-h-[600px]" />
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
            <GradientHeading>Birthday Decoration Services</GradientHeading>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              Make your special day truly memorable with our stunning birthday decoration services. We specialize in
              creating magical environments that bring your theme to life, from elegant adult celebrations to fun-filled
              kids' parties.
            </p>
            <GradientButton href="/book" className="mt-8">
              Book Now
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
                    Book This Package
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
          <Gallery
            images={[
              ...birthdayImages,
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0045.jpg-uQv96gO4fHpIrYRfoYWFc67t9qLanU.jpeg",
                alt: "Birthday Setup with Green Theme",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-89APwx91mmd60mpo3ALjxxMBiUYQqp.jpeg",
                alt: "Floral Birthday Decoration",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0048.jpg-auHAvIgWjpmLs0olQiRoyVVRtlgQIU.jpeg",
                alt: "Birthday Decoration with Flowers",
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

