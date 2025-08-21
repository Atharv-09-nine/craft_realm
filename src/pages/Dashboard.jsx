import React from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Target, 
  Trophy, 
  Users, 
  Calendar,
  TrendingUp,
  Code,
  Star
} from 'lucide-react'
import XpBar from '../components/UI/XpBar'

const Dashboard = () => {
  const { player, skills, achievements } = useSelector(state => state.game)
  const { completedChallenges } = useSelector(state => state.challenges)

  const stats = [
    {
      label: 'Total XP',
      value: player.stats.totalXpEarned.toLocaleString(),
      icon: Zap,
      color: 'text-accent-gold'
    },
    {
      label: 'Challenges Completed',
      value: completedChallenges.length,
      icon: Target,
      color: 'text-success-light'
    },
    {
      label: 'Achievements',
      value: achievements.length,
      icon: Trophy,
      color: 'text-accent-gold'
    },
    {
      label: 'Streak Days',
      value: player.stats.streakDays,
      icon: Calendar,
      color: 'text-semantic-info'
    }
  ]

  const recentAchievements = achievements.slice(-3)
  const topSkills = Object.entries(skills)
    .sort(([,a], [,b]) => b.level - a.level)
    .slice(0, 3)

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, <span className="text-gradient">{player.username}</span>!
        </h1>
        <p className="text-foreground-muted">
          Ready to continue your coding adventure?
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="card text-center hover:glow-effect transition-all duration-300"
            >
              <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-foreground-muted">{stat.label}</div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Progress Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Level Progress */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Level Progress</h2>
            <div className="text-2xl font-bold text-accent-gold">
              Level {player.level}
            </div>
          </div>
          
          <div className="mb-4">
            <XpBar 
              current={player.xp} 
              max={player.xpToNext}
              className="h-4"
            />
          </div>
          
          <div className="text-center text-sm text-foreground-muted">
            {player.xpToNext - player.xp} XP until next level
          </div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h2 className="text-xl font-semibold mb-4">Top Skills</h2>
          <div className="space-y-3">
            {topSkills.map(([skillName, skill]) => (
              <div key={skillName} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-success-primary to-success-light rounded flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium capitalize">
                      {skillName.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-xs text-foreground-muted">
                      {skill.xp} XP
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold text-accent-gold">
                  {skill.level}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card"
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-accent-gold" />
            Recent Achievements
          </h2>
          
          {recentAchievements.length > 0 ? (
            <div className="space-y-3">
              {recentAchievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-background-tertiary rounded-lg">
                  <Star className="w-6 h-6 text-accent-gold" />
                  <div>
                    <div className="font-medium">{achievement.name}</div>
                    <div className="text-sm text-foreground-muted">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-foreground-muted">
              <Trophy className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Complete challenges to unlock achievements!</p>
            </div>
          )}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card"
        >
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full btn-primary text-left flex items-center space-x-3">
              <Target className="w-5 h-5" />
              <span>Continue Current Quest</span>
            </button>
            <button className="w-full btn-secondary text-left flex items-center space-x-3">
              <Code className="w-5 h-5" />
              <span>Browse Challenges</span>
            </button>
            <button className="w-full btn-secondary text-left flex items-center space-x-3">
              <Users className="w-5 h-5" />
              <span>Join Community</span>
            </button>
            <button className="w-full btn-secondary text-left flex items-center space-x-3">
              <TrendingUp className="w-5 h-5" />
              <span>View Leaderboard</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard