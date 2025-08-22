import React from 'react'
import { motion } from 'framer-motion'
import { Gamepad2, Map, Sword } from 'lucide-react'

const GameWorld = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Game World</span>
        </h1>
        <p className="text-foreground-muted">
          Explore the magical realm of CodeCrafts
        </p>
      </motion.div>

      <div className="card text-center">
        <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-accent-gold" />
        <h2 className="text-xl font-semibold mb-2">Game World Coming Soon</h2>
        <p className="text-foreground-muted">
          Interactive 2D world, NPCs, quests, and multiplayer adventures will be available here.
        </p>
      </div>
    </div>
  )
}

export default GameWorld