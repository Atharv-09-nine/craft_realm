import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, Award } from 'lucide-react'

const Leaderboard = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Leaderboard</span>
        </h1>
        <p className="text-foreground-muted">
          See how you rank against other adventurers
        </p>
      </motion.div>

      <div className="card text-center">
        <Trophy className="w-16 h-16 mx-auto mb-4 text-accent-gold" />
        <h2 className="text-xl font-semibold mb-2">Leaderboard Coming Soon</h2>
        <p className="text-foreground-muted">
          Global rankings, seasonal competitions, and guild battles will be available here.
        </p>
      </div>
    </div>
  )
}

export default Leaderboard