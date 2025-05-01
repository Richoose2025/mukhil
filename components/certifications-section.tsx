"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface Certification {
  title: string
  issuer: string
  date: string
  description: string
  skills: string[]
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
    {
      title: "Deep Learning with Python Introduction",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive introduction to deep learning concepts and practical implementation using Python.",
      skills: ["Deep Learning", "Python", "Neural Networks", "AI Fundamentals"],
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "Udemy",
      date: "2022",
      description: "Gained practical insights into AI and its working principles, applications, and implementation.",
      skills: ["Artificial Intelligence", "Machine Learning", "Data Analysis"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <motion.section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 to-purple-900/10 z-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div>

                <motion.div
                  className="absolute inset-0 border border-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-lg"
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(6, 182, 212, 0) inset",
                      "0 0 20px rgba(168, 85, 247, 0.2) inset",
                      "0 0 0px rgba(6, 182, 212, 0) inset",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-cyan-400">{cert.title}</CardTitle>
                  <CardDescription className="text-gray-400">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, staggerChildren: 0.1 }}
                  >
                    {cert.skills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-purple-900/20 text-purple-300 border-purple-500/50 hover:bg-purple-800/30 transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
                <CardFooter className="relative z-10">
                  <motion.button
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors relative group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Certificate →
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </motion.button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
