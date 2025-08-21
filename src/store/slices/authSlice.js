import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  preferences: {
    theme: 'dark',
    language: 'en',
    notifications: true,
    soundEnabled: true
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true
      state.error = null
    },
    
    loginSuccess: (state, action) => {
      state.isLoading = false
      state.isAuthenticated = true
      state.user = action.payload
      state.error = null
    },
    
    loginFailure: (state, action) => {
      state.isLoading = false
      state.isAuthenticated = false
      state.user = null
      state.error = action.payload
    },
    
    logout: (state) => {
      state.isAuthenticated = false
      state.user = null
      state.error = null
    },
    
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload }
    },
    
    updatePreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload }
    },
    
    clearError: (state) => {
      state.error = null
    }
  }
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateUser,
  updatePreferences,
  clearError
} = authSlice.actions

export default authSlice.reducer