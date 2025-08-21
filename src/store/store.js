import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/authSlice'
import gameSlice from './slices/gameSlice'
import challengeSlice from './slices/challengeSlice'
import uiSlice from './slices/uiSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    game: gameSlice,
    challenges: challengeSlice,
    ui: uiSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})