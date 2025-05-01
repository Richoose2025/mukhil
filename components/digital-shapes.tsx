"use client"

import { motion } from "framer-motion"

export default function DigitalShapes() {
  const shapes = [
    {
      type: "circle",
      size: 120,
      x: "10%",
      y: "20%",
      delay: 0,
      duration: 20,
      color: "rgba(6, 182, 212, 0.1)",
    },
    {
      type: "circle",
      size: 80,
      x: "85%",
      y: "15%",
      delay: 2,
      duration: 25,
      color: "rgba(168, 85, 247, 0.1)",
    },
    {
      type: "square",
      size: 100,
      x: "75%",
      y: "70%",
      delay: 1,
      duration: 22,
      color: "rgba(6, 182, 212, 0.1)",
    },
    {
      type: "triangle",
      size: 90,
      x: "20%",
      y: "80%",
      delay: 3,
      duration: 18,
      color: "rgba(168, 85, 247, 0.1)",
    },
    {
      type: "square",
      size: 60,
      x: "40%",
      y: "30%",
      delay: 2.5,
      duration: 23,
      color: "rgba(59, 130, 246, 0.1)",
    },
    {
      type: "circle",
      size: 150,
      x: "60%",
      y: "40%",
      delay: 1.5,
      duration: 28,
      color: "rgba(6, 182, 212, 0.05)",
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
            backgroundColor: shape.color,
            borderRadius: shape.type === "circle" ? "50%" : shape.type === "square" ? "0%" : "0%",
            clipPath: shape.type === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none",
            opacity: 0.8,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            delay: shape.delay,
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}

      {/* Digital grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0,rgba(0,0,0,0)_70%)]"></div>

      {/* Animated border */}
      <motion.div
        className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-cyan-500/10 rounded-lg"
        animate={{
          boxShadow: [
            "0 0 0px rgba(6, 182, 212, 0) inset",
            "0 0 30px rgba(6, 182, 212, 0.1) inset",
            "0 0 0px rgba(6, 182, 212, 0) inset",
          ],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Digital circuit lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,100 Q150,50 300,100 T600,100"
          fill="none"
          stroke="rgba(6, 182, 212, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,200 Q150,150 300,200 T600,200"
          fill="none"
          stroke="rgba(168, 85, 247, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,300 Q150,250 300,300 T600,300"
          fill="none"
          stroke="rgba(59, 130, 246, 0.1)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}
