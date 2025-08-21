import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  player: {
    id: null,
    username: '',
    level: 1,
    xp: 0,
    xpToNext: 100,
    class: 'Frontend Warrior',
    avatar: {
      base: 'warrior',
      customization: {}
    },
    stats: {
      totalChallengesCompleted: 0,
      totalXpEarned: 0,
      streakDays: 0,
      favoriteLanguage: 'javascript'
    }
  },
  skills: {
    frontend: { level: 1, xp: 0 },
    backend: { level: 1, xp: 0 },
    devops: { level: 1, xp: 0 },
    dataScience: { level: 1, xp: 0 },
    mobile: { level: 1, xp: 0 }
  },
  achievements: [],
  inventory: {
    cosmetics: [],
    tools: [],
    badges: []
  },
  currentQuest: null,
  questLog: [],
  isLoading: false,
  error: null
}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      state.player = { ...state.player, ...action.payload }
    },
    
    gainXp: (state, action) => {
      const { amount, skillType } = action.payload
      
      // Add XP to player
      state.player.xp += amount
      state.player.stats.totalXpEarned += amount
      
      // Check for level up
      while (state.player.xp >= state.player.xpToNext) {
        state.player.xp -= state.player.xpToNext
        state.player.level += 1
        state.player.xpToNext = Math.floor(state.player.xpToNext * 1.2)
      }
      
      // Add skill XP if specified
      if (skillType && state.skills[skillType]) {
        state.skills[skillType].xp += amount
        
        // Check for skill level up
        const skillXpRequired = state.skills[skillType].level * 50
        if (state.skills[skillType].xp >= skillXpRequired) {
          state.skills[skillType].xp -= skillXpRequired
          state.skills[skillType].level += 1
        }
      }
    },
    
    unlockAchievement: (state, action) => {
      const achievement = action.payload
      if (!state.achievements.find(a => a.id === achievement.id)) {
        state.achievements.push({
          ...achievement,
          unlockedAt: new Date().toISOString()
        })
      }
    },
    
    addToInventory: (state, action) => {
      const { type, item } = action.payload
      if (state.inventory[type]) {
        state.inventory[type].push(item)
      }
    },
    
    setCurrentQuest: (state, action) => {
      state.currentQuest = action.payload
    },
    
    completeQuest: (state, action) => {
      const questId = action.payload
      if (state.currentQuest && state.currentQuest.id === questId) {
        state.questLog.push({
          ...state.currentQuest,
          completedAt: new Date().toISOString()
        })
        state.currentQuest = null
      }
    },
    
    updateStats: (state, action) => {
      state.player.stats = { ...state.player.stats, ...action.payload }
    },
    
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
    
    setError: (state, action) => {
      state.error = action.payload
    },
    
    clearError: (state) => {
      state.error = null
    }
  }
})

export const {
  setPlayer,
  gainXp,
  unlockAchievement,
  addToInventory,
  setCurrentQuest,
  completeQuest,
  updateStats,
  setLoading,
  setError,
  clearError
} = gameSlice.actions

export default gameSlice.reducer