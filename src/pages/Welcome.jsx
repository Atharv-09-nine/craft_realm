import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { Sword, Shield, Zap, Code, Users, Trophy } from 'lucide-react'
import { loginSuccess } from '../store/slices/authSlice'
import { setPlayer } from '../store/slices/gameSlice'

const Welcome = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [selectedClass, setSelectedClass] = useState('Frontend Warrior')

  const characterClasses = [
    {
      id: 'frontend-warrior',
      name: 'Frontend Warrior',
      description: 'Masters HTML, CSS, and JavaScript to craft beautiful user interfaces',
      icon: Sword,
      color: 'from-blue-500 to-cyan-500',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'UI/UX']
    },
    {
      id: 'backend-mage',
      name: 'Backend Mage',
      description: 'Wields server-side magic with databases and APIs',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      skills: ['Node.js', 'Databases', 'APIs', 'Server Architecture']
    },
    {
      id: 'devops-rogue',
      name: 'DevOps Rogue',
      description: 'Stealthy deployment master who conquers infrastructure',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      skills: ['Docker', 'CI/CD', 'Cloud', 'Monitoring']
    }
  ]

  const handleStartAdventure = () => {
    if (!username.trim()) return

    // Simulate user creation
    const user = {
      id: Date.now(),
      email: `${username}@codecrafts.dev`,
      username: username.trim(),
      createdAt: new Date().toISOString()
    }

    const player = {
      id: user.id,
      username: user.username,
      level: 1,
      xp: 0,
      xpToNext: 100,
      class: selectedClass,
      avatar: {
        base: selectedClass.toLowerCase().replace(' ', '-'),
        customization: {}
      },
      stats: {
        totalChallengesCompleted: 0,
        totalXpEarned: 0,
        streakDays: 0,
        favoriteLanguage: 'javascript'
      }
    }

    dispatch(loginSuccess(user))
    dispatch(setPlayer(player))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-primary via-background-secondary to-background-primary flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gradient mb-4"
          >
            CodeCrafts Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-foreground-secondary max-w-2xl mx-auto"
          >
            Transform your programming journey into an epic RPG adventure. 
            Learn, code, and conquer challenges with fellow developers worldwide.
          </motion.p>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <div className="card text-center">
            <Code className="w-12 h-12 text-accent-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Interactive Coding</h3>
            <p className="text-foreground-muted">Real-time code editor with instant feedback and validation</p>
          </div>
          <div className="card text-center">
            <Users className="w-12 h-12 text-accent-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Multiplayer Learning</h3>
            <p className="text-foreground-muted">Collaborate, compete, and learn together with the community</p>
          </div>
          <div className="card text-center">
            <Trophy className="w-12 h-12 text-accent-gold mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Achievement System</h3>
            <p className="text-foreground-muted">Unlock badges, level up skills, and track your progress</p>
          </div>
        </motion.div>

        {/* Character Creation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="card max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Create Your Character</h2>
          
          {/* Username Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Choose Your Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your adventurer name..."
              className="input-field w-full"
              maxLength={20}
            />
          </div>

          {/* Class Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-4">Select Your Class</label>
            <div className="grid gap-4">
              {characterClasses.map((charClass) => {
                const Icon = charClass.icon
                return (
                  <motion.button
                    key={charClass.id}
                    onClick={() => setSelectedClass(charClass.name)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedClass === charClass.name
                        ? 'border-accent-gold bg-background-tertiary'
                        : 'border-background-tertiary hover:border-foreground-muted'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${charClass.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{charClass.name}</h3>
                        <p className="text-foreground-muted text-sm mb-2">{charClass.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {charClass.skills.map((skill) => (
                            <span key={skill} className="skill-badge border-foreground-muted text-foreground-muted">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Start Button */}
          <motion.button
            onClick={handleStartAdventure}
            disabled={!username.trim()}
            className="btn-primary w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: username.trim() ? 1.02 : 1 }}
            whileTap={{ scale: username.trim() ? 0.98 : 1 }}
          >
            Begin Your Adventure
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Welcome