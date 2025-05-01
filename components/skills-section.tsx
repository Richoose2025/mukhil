"use client"

import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Skill {
  name: string
  category: string
  proficiency: number
}

export default function SkillsSection() {
  const skills: Skill[] = [
    // Programming Languages
    { name: "C", category: "Programming Languages", proficiency: 85 },
    { name: "C++", category: "Programming Languages", proficiency: 80 },
    { name: "Java", category: "Programming Languages", proficiency: 75 },
    { name: "Python", category: "Programming Languages", proficiency: 70 },

    // Web Development
    { name: "HTML5", category: "Web Development", proficiency: 85 },
    { name: "CSS3", category: "Web Development", proficiency: 80 },
    { name: "JavaScript", category: "Web Development", proficiency: 65 },

    // Database Management
    { name: "MySQL", category: "Database Management", proficiency: 70 },

    // Other Tools & Frameworks
    { name: "Git & GitHub", category: "Other Tools & Frameworks", proficiency: 65 },
  ]

  const categories = Array.from(new Set(skills.map((skill) => skill.category)))

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10 z-0"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 shadow-xl relative overflow-hidden"
              variants={itemVariants}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              whileHover={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)" }}
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>

              <motion.h3
                className="text-xl font-semibold mb-6 text-cyan-400 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {category}
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 relative z-10">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <div className="w-20 h-20 mb-3 relative">
                        <div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"
                          style={{ animationDuration: "3s" }}
                        ></div>
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          className="absolute inset-0 rounded-full border border-cyan-500/30"
                          style={{ borderRadius: "50%" }}
                        />
                        <CircularProgressbar
                          value={0}
                          text={`${skill.proficiency}%`}
                          styles={buildStyles({
                            textSize: "1.5rem",
                            pathColor: `rgba(${skill.proficiency < 70 ? "124, 58, 237" : "6, 182, 212"}, ${skill.proficiency / 100})`,
                            textColor: "#fff",
                            trailColor: "#1f2937",
                            backgroundColor: "#3e3e3e",
                          })}
                        />
                        <motion.div
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: skill.proficiency / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                          className="absolute inset-0"
                        >
                          <CircularProgressbar
                            value={skill.proficiency}
                            text=""
                            styles={buildStyles({
                              pathColor: `rgba(${skill.proficiency < 70 ? "124, 58, 237" : "6, 182, 212"}, ${skill.proficiency / 100})`,
                              trailColor: "transparent",
                            })}
                          />
                        </motion.div>
                      </div>
                      <motion.span
                        className="text-gray-300 text-sm font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        {skill.name}
                      </motion.span>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
