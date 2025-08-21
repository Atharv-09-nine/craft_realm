import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, Bell, Settings, User, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { toggleSidebar, openModal } from '../../store/slices/uiSlice'
import XpBar from '../UI/XpBar'
import NotificationBell from '../UI/NotificationBell'

const Header = () => {
  const dispatch = useDispatch()
  const { player } = useSelector(state => state.game)
  const { notifications } = useSelector(state => state.ui)

  return (
    <header className="bg-background-secondary border-b border-background-tertiary px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-2 hover:bg-background-tertiary rounded-lg transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="hidden lg:block">
            <h1 className="text-xl font-bold text-gradient">
              CodeCrafts Adventures
            </h1>
          </div>
        </div>

        {/* Center Section - Player Info */}
        <div className="flex items-center space-x-6">
          {/* Character Avatar */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-gold to-accent-gold-dark rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-background-primary" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-medium">{player.username || 'Adventurer'}</div>
              <div className="text-xs text-foreground-muted">{player.class}</div>
            </div>
          </div>

          {/* Level and XP */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="text-center">
              <div className="text-xs text-foreground-muted">Level</div>
              <div className="text-lg font-bold text-accent-gold">{player.level}</div>
            </div>
            <div className="w-32">
              <XpBar 
                current={player.xp} 
                max={player.xpToNext} 
                showText={false}
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          {/* XP Indicator */}
          <motion.div 
            className="hidden sm:flex items-center space-x-1 bg-background-tertiary px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-accent-gold" />
            <span className="text-sm font-medium">{player.xp.toLocaleString()}</span>
          </motion.div>

          {/* Notifications */}
          <NotificationBell 
            count={notifications.length}
            onClick={() => dispatch(openModal('notifications'))}
          />

          {/* Settings */}
          <button
            onClick={() => dispatch(openModal('settings'))}
            className="p-2 hover:bg-background-tertiary rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile XP Bar */}
      <div className="md:hidden mt-3">
        <XpBar 
          current={player.xp} 
          max={player.xpToNext} 
          showText={true}
        />
      </div>
    </header>
  )
}

export default Header