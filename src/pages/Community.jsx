import React from 'react'
import { motion } from 'framer-motion'
import { Users, MessageCircle, Heart } from 'lucide-react'

const Community = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Community</span>
        </h1>
        <p className="text-foreground-muted">
          Connect, collaborate, and learn with fellow developers
        </p>
      </motion.div>

      <div className="card text-center">
        <Users className="w-16 h-16 mx-auto mb-4 text-accent-gold" />
        <h2 className="text-xl font-semibold mb-2">Community Coming Soon</h2>
        <p className="text-foreground-muted">
          Forums, chat rooms, mentorship programs, and collaborative coding will be available here.
        </p>
      </div>
    </div>
  )
}

export default Community