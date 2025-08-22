import React from 'react'
import { motion } from 'framer-motion'
import { User, Trophy, Target, Calendar } from 'lucide-react'

const Profile = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Your Profile</span>
        </h1>
        <p className="text-foreground-muted">
          Track your progress and customize your character
        </p>
      </motion.div>

      <div className="card text-center">
        <User className="w-16 h-16 mx-auto mb-4 text-accent-gold" />
        <h2 className="text-xl font-semibold mb-2">Profile Coming Soon</h2>
        <p className="text-foreground-muted">
          Character customization, detailed stats, and achievement showcase will be available here.
        </p>
      </div>
    </div>
  )
}

export default Profile