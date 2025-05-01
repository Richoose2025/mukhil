"use client"

import Image from "next/image"
import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import SkillsSection from "@/components/skills-section"
import CertificationsSection from "@/components/certifications-section"
import EducationSection from "@/components/education-section"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import ParticleBackground from "@/components/particle-background"
import AnimatedCursor from "@/components/animated-cursor"
import DigitalShapes from "@/components/digital-shapes"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxY = scrollY * 0.5

  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      <AnimatedCursor />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <ParticleBackground />
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-center opacity-10 z-0"></div>
        <DigitalShapes />

        <div className="z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mukhil S
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Computer Applications Graduate & Technology Enthusiast
            </motion.p>
  
<motion.div
  className="flex space-x-4 pt-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.6 }}
>
  <Button
    variant="cyan"
    size="pill"
    className="hover:scale-105 transition-all duration-300 group"
    onClick={() => {
      navigator.clipboard.writeText("yourname@example.com");
      // Optional: You could add a toast notification here
    }}
  >
    <Mail className="text-cyan-300 group-hover:text-white transition-colors" />
    <span className="relative overflow-hidden">
      <span className="relative z-10 group-hover:text-white transition-colors">Contact Me</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
    </span>
  </Button>
  
  <Button
    variant="purple"
    size="pill"
    className="hover:scale-105 transition-all duration-300 group"
    asChild
  >
    <a 
      href="https://github.com/mukhils074" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Github className="text-purple-300 group-hover:text-white transition-colors" />
      <span className="relative overflow-hidden">
        <span className="relative z-10 group-hover:text-white transition-colors">GitHub</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
      </span>
    </a>
  </Button>
  
  <Button
    variant="blue"
    size="pill"
    className="hover:scale-105 transition-all duration-300 group"
    asChild
  >
    <a 
      href="https://www.linkedin.com/in/mukhil-s-101628363" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Linkedin className="text-blue-300 group-hover:text-white transition-colors" />
      <span className="relative overflow-hidden">
        <span className="relative z-10 group-hover:text-white transition-colors">LinkedIn</span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
      </span>
    </a>
  </Button>
</motion.div>

          </motion.div>

          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-lg shadow-cyan-500/20"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.2)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 z-10 animate-pulse"></div>
            <div
              className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-purple-500/10 z-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <Image src="/placeholder.svg?height=320&width=320" alt="Mukhil S" fill className="object-cover" priority />
            <motion.div
              className="absolute inset-0 border-8 border-transparent rounded-full"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(6, 182, 212, 0.5) inset",
                  "0 0 20px rgba(168, 85, 247, 0.5) inset",
                  "0 0 10px rgba(6, 182, 212, 0.5) inset",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-white" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-purple-900/10 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" }}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              I am a Computer Applications graduate with a passion for technology and programming. My journey in the
              tech world has equipped me with a diverse set of skills ranging from programming languages like C, C++,
              Java, and Python to web development technologies. I am particularly interested in artificial intelligence
              and deep learning, as evidenced by my certifications. I am constantly looking to expand my knowledge and
              take on new challenges in the ever-evolving tech landscape.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-purple-900/10 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

            <form className="space-y-6 relative z-10">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
      />
    </motion.div>
  </div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
      Message
    </label>
    <textarea
      id="message"
      rows={5}
      className="w-full px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
    ></textarea>
  </motion.div>
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.6 }}
  >
    <Button className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20">
      <span className="relative z-10">Send Message</span>
      <span className="absolute inset-0 rounded-lg overflow-hidden">
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600"></span>
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
      </span>
    </Button>
  </motion.div>
</form>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Digital Product Solutions © {new Date().getFullYear()} Mukhil S. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </main>
  )
}
