import React from 'react'
import { Bell } from 'lucide-react'
import { motion } from 'framer-motion'

const NotificationBell = ({ count = 0, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative p-2 hover:bg-background-tertiary rounded-lg transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Bell className="w-5 h-5" />
      {count > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 bg-semantic-error text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium"
        >
          {count > 9 ? '9+' : count}
        </motion.div>
      )}
    </motion.button>
  )
}

export default NotificationBell