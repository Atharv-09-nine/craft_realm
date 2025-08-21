import React from 'react'
import { motion } from 'framer-motion'

const XpBar = ({ current, max, showText = true, className = '' }) => {
  const percentage = Math.min((current / max) * 100, 100)

  return (
    <div className={`xp-bar ${className}`}>
      <motion.div
        className="xp-fill"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      {showText && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-background-primary mix-blend-difference">
            {current.toLocaleString()} / {max.toLocaleString()} XP
          </span>
        </div>
      )}
    </div>
  )
}

export default XpBar