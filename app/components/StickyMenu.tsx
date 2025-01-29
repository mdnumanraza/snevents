"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, ArrowUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyMenu() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCall = () => {
    window.location.href = "tel:+919876543210"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210", "_blank")
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50 flex flex-col gap-3"
    >
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={handleScrollTop}
            className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 text-white shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
      <motion.button
        onClick={handleWhatsApp}
        className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 text-white shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
      <motion.button
        onClick={handleCall}
        className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 text-white shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </motion.div>
  )
}

