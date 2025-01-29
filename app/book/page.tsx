"use client"

import { motion } from "framer-motion"
import { GradientHeading } from "@/app/components/ui/GradientHeading"
import { BookingForm } from "@/app/components/BookingForm"

export default function BookService() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <GradientHeading className="text-center mb-8">Book Your Service</GradientHeading>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Fill out the form below to book your desired service. We'll get back to you as soon as possible to confirm
            your booking.
          </p>
          <BookingForm />
        </motion.div>
      </div>
    </div>
  )
}

