import React from 'react'
import { motion } from 'framer-motion'
import { Target, Code, Zap, Clock } from 'lucide-react'

const Challenges = () => {
  const mockChallenges = [
    {
      id: 1,
      title: 'Hello World Quest',
      description: 'Write your first program and greet the magical world',
      difficulty: 'Beginner',
      language: 'JavaScript',
      xpReward: 50,
      estimatedTime: '5 min'
    },
    {
      id: 2,
      title: 'Loop Master Challenge',
      description: 'Master the art of loops and repetition',
      difficulty: 'Beginner',
      language: 'Python',
      xpReward: 100,
      estimatedTime: '15 min'
    },
    {
      id: 3,
      title: 'Function Wizard Trial',
      description: 'Create powerful functions to solve complex problems',
      difficulty: 'Intermediate',
      language: 'JavaScript',
      xpReward: 200,
      estimatedTime: '30 min'
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success-light border-success-light'
      case 'Intermediate': return 'text-semantic-warning border-semantic-warning'
      case 'Advanced': return 'text-semantic-error border-semantic-error'
      default: return 'text-foreground-muted border-foreground-muted'
    }
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold mb-2">
          <span className="text-gradient">Coding Challenges</span>
        </h1>
        <p className="text-foreground-muted">
          Embark on coding quests to level up your skills and earn XP
        </p>
      </motion.div>

      <div className="grid gap-6">
        {mockChallenges.map((challenge, index) => (
          <motion.div
            key={challenge.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:glow-effect transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <Target className="w-5 h-5 text-accent-gold" />
                  <h3 className="text-xl font-semibold">{challenge.title}</h3>
                  <span className={`skill-badge ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                
                <p className="text-foreground-muted mb-4">{challenge.description}</p>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <Code className="w-4 h-4" />
                    <span>{challenge.language}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="w-4 h-4 text-accent-gold" />
                    <span>{challenge.xpReward} XP</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{challenge.estimatedTime}</span>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary ml-4">
                Start Challenge
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Challenges