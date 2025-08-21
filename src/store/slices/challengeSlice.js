import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentChallenge: null,
  availableChallenges: [],
  completedChallenges: [],
  challengeProgress: {},
  codeEditor: {
    isOpen: false,
    language: 'javascript',
    code: '',
    output: '',
    isExecuting: false
  },
  filters: {
    difficulty: 'all',
    language: 'all',
    category: 'all'
  },
  isLoading: false,
  error: null
}

const challengeSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    setChallenges: (state, action) => {
      state.availableChallenges = action.payload
    },
    
    setCurrentChallenge: (state, action) => {
      state.currentChallenge = action.payload
      if (action.payload) {
        state.codeEditor.code = action.payload.starterCode || ''
        state.codeEditor.language = action.payload.language || 'javascript'
      }
    },
    
    completeChallenge: (state, action) => {
      const { challengeId, solution, score } = action.payload
      
      // Add to completed challenges
      const completedChallenge = {
        id: challengeId,
        solution,
        score,
        completedAt: new Date().toISOString()
      }
      
      state.completedChallenges.push(completedChallenge)
      
      // Update progress
      state.challengeProgress[challengeId] = {
        completed: true,
        bestScore: Math.max(state.challengeProgress[challengeId]?.bestScore || 0, score),
        attempts: (state.challengeProgress[challengeId]?.attempts || 0) + 1
      }
    },
    
    updateChallengeProgress: (state, action) => {
      const { challengeId, progress } = action.payload
      state.challengeProgress[challengeId] = {
        ...state.challengeProgress[challengeId],
        ...progress
      }
    },
    
    openCodeEditor: (state, action) => {
      state.codeEditor.isOpen = true
      if (action.payload) {
        state.codeEditor = { ...state.codeEditor, ...action.payload }
      }
    },
    
    closeCodeEditor: (state) => {
      state.codeEditor.isOpen = false
      state.codeEditor.output = ''
      state.codeEditor.isExecuting = false
    },
    
    updateCode: (state, action) => {
      state.codeEditor.code = action.payload
    },
    
    setCodeLanguage: (state, action) => {
      state.codeEditor.language = action.payload
    },
    
    setCodeOutput: (state, action) => {
      state.codeEditor.output = action.payload
    },
    
    setCodeExecuting: (state, action) => {
      state.codeEditor.isExecuting = action.payload
    },
    
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
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
  setChallenges,
  setCurrentChallenge,
  completeChallenge,
  updateChallengeProgress,
  openCodeEditor,
  closeCodeEditor,
  updateCode,
  setCodeLanguage,
  setCodeOutput,
  setCodeExecuting,
  setFilters,
  setLoading,
  setError,
  clearError
} = challengeSlice.actions

export default challengeSlice.reducer