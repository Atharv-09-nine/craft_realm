import React from 'react'
import { motion } from 'framer-motion'
import { Settings as SettingsIcon, Palette, Volume2 } from 'lucide-react'

const Settings = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Settings</span>
        </h1>
        <p className="text-foreground-muted">
          Customize your CodeCrafts experience
        </p>
      </motion.div>

      <div className="card text-center">
        <SettingsIcon className="w-16 h-16 mx-auto mb-4 text-accent-gold" />
        <h2 className="text-xl font-semibold mb-2">Settings Coming Soon</h2>
        <p className="text-foreground-muted">
          Theme customization, notification preferences, and account settings will be available here.
        </p>
      </div>
    </div>
  )
}

export default Settings