"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, MapPin, Twitter, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion, useReducedMotion, Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20  sm:py-0 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Left Side */}
          <motion.div 
            className="text-center lg:text-left space-y-8 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-2"
                variants={itemVariants}
              >
                <MapPin className="text-orange-500 w-5 h-5" />
                <span className="text-muted-foreground">Bangladesh</span>
              </motion.div>
              
              <motion.h1 
                className="text-2xl sm:text-3xl lg:text-5xl xl:text-5xl font-bold leading-tight"
                variants={itemVariants}
              >
                Hi, I&apos;m{" "}
                <span className="text-gradient  bg-clip-text ">
                  Sohan Talukder
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl sm:text-2xl text-muted-foreground"
                variants={itemVariants}
              >
                Full Stack Developer 👋
              </motion.p>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                variants={itemVariants}
              >
                A passionate and dedicated TypeScript Developer based in Dhaka, Bangladesh. With expertise in TypeScript, I strive to create efficiently and innovative web and app solutions, constantly staying up-to-date with the latest industry trends.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" onClick={() => scrollToSection('#projects')} className="bg-black text-white dark:bg-white dark:text-black font-medium cursor-pointer">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/sohan-talukder-cv.pdf" 
                  download="Sohan_Talukder_CV.pdf"
                  target="_blank"
                >
                  <Button size="lg" variant="outline" className="font-medium cursor-pointer">
                    <Download className="w-4 h-4" />
                    Download CV
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start gap-8"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  target="_blank"
                  href="https://github.com/sohantalukder" 
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  target="_blank"
                  href="https://linkedin.com/in/sohantalukder" 
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  target="_blank"
                  href="https://twitter.com/sohantalukder0" 
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div 
            className="flex items-center justify-center w-full lg:w-auto order-1 lg:order-2"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Floating particles — hidden when reduced motion is preferred */}
              {!reduceMotion && (
              <motion.div 
                className="absolute -inset-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-orange-400 rounded-full absolute top-8 left-8"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="w-1 h-1 bg-amber-400 rounded-full absolute top-16 right-12"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.2
                  }}
                />
                <motion.div 
                  className="w-3 h-3 bg-orange-300 rounded-full absolute bottom-12 left-16"
                  animate={{ 
                    y: [0, -8, 0],
                    x: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.4
                  }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 bg-amber-300 rounded-full absolute bottom-8 right-8"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6
                  }}
                />
              </motion.div>
              )}
              
              {/* Main Image with Morphing Animation */}
              <motion.div 
                className="hero-img mx-auto"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 