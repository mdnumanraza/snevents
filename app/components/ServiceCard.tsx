"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-lg"
    >
      <Link href={href}>
        <div className="relative aspect-[4/3]">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

