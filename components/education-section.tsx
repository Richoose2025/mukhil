"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function EducationSection() {
  const courseItems = [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Web Development",
    "Computer Networks",
    "Software Engineering",
  ]

  return (
    <motion.section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-cyan-900/10 z-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Academic Achievement
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)" }}
        >
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

            <motion.div
              className="absolute inset-0 border border-transparent"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(168, 85, 247, 0) inset",
                  "0 0 20px rgba(168, 85, 247, 0.2) inset",
                  "0 0 0px rgba(168, 85, 247, 0) inset",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            <CardHeader className="pb-2 relative z-10">
              <CardTitle className="text-2xl text-purple-400">Bachelor of Computer Applications (BCA)</CardTitle>
              <CardDescription className="text-gray-400 text-lg">Computer Science</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">CGPA</span>
                <motion.span
                  className="text-xl font-semibold text-cyan-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  7.42
                </motion.span>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "74.2%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                ></motion.div>
              </div>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h4 className="text-lg font-medium text-gray-300 mb-2">Key Courses</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                  {courseItems.map((course, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-400 flex items-center"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    >
                      <motion.span
                        className={`w-2 h-2 ${index % 2 === 0 ? "bg-cyan-500" : "bg-purple-500"} rounded-full mr-2`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                      ></motion.span>
                      {course}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
