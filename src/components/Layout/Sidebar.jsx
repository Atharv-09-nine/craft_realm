import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import {
  Home,
  Target,
  Gamepad2,
  User,
  Trophy,
  Users,
  Settings,
  BookOpen,
  Zap
} from 'lucide-react'

const Sidebar = () => {
  const { player } = useSelector(state => state.game)

  const navigationItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/challenges', icon: Target, label: 'Challenges' },
    { path: '/game', icon: Gamepad2, label: 'Game World' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/community', icon: Users, label: 'Community' },
    { path: '/settings', icon: Settings, label: 'Settings' }
  ]

  return (
    <div className="w-64 bg-background-secondary border-r border-background-tertiary h-screen flex flex-col">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-background-tertiary">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-gold to-accent-gold-dark rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-background-primary" />
          </div>
          <div>
            <h2 className="font-bold text-lg text-gradient">CodeCrafts</h2>
            <p className="text-xs text-foreground-muted">Adventures</p>
          </div>
        </div>
      </div>

      {/* Player Info */}
      <div className="p-4 border-b border-background-tertiary">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-success-primary to-success-light rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-medium truncate">{player.username}</div>
            <div className="text-xs text-foreground-muted">{player.class}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-accent-gold">Lv.{player.level}</div>
          </div>
        </div>
        
        {/* Mini XP Bar */}
        <div className="w-full bg-background-tertiary rounded-full h-1.5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-gold to-accent-gold-dark"
            initial={{ width: 0 }}
            animate={{ width: `${(player.xp / player.xpToNext) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-xs text-foreground-muted mt-1 text-center">
          {player.xp} / {player.xpToNext} XP
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-accent-gold text-background-primary font-medium'
                      : 'text-foreground-secondary hover:bg-background-tertiary hover:text-foreground-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 bg-background-primary rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            )
          })}
        </div>
      </nav>

      {/* Quick Stats */}
      <div className="p-4 border-t border-background-tertiary">
        <div className="text-xs text-foreground-muted mb-2">Quick Stats</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-background-tertiary rounded p-2 text-center">
            <div className="font-bold text-success-light">{player.stats.totalChallengesCompleted}</div>
            <div className="text-foreground-muted">Completed</div>
          </div>
          <div className="bg-background-tertiary rounded p-2 text-center">
            <div className="font-bold text-accent-gold">{player.stats.streakDays}</div>
            <div className="text-foreground-muted">Day Streak</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar