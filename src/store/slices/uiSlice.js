import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarOpen: true,
  activeModal: null,
  notifications: [],
  loading: {
    global: false,
    challenges: false,
    codeExecution: false
  },
  toast: {
    message: '',
    type: 'info',
    visible: false
  }
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload
    },
    
    openModal: (state, action) => {
      state.activeModal = action.payload
    },
    
    closeModal: (state) => {
      state.activeModal = null
    },
    
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        timestamp: new Date().toISOString(),
        ...action.payload
      })
    },
    
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      )
    },
    
    clearNotifications: (state) => {
      state.notifications = []
    },
    
    setLoading: (state, action) => {
      const { type, value } = action.payload
      state.loading[type] = value
    },
    
    showToast: (state, action) => {
      state.toast = {
        ...action.payload,
        visible: true
      }
    },
    
    hideToast: (state) => {
      state.toast.visible = false
    }
  }
})

export const {
  toggleSidebar,
  setSidebarOpen,
  openModal,
  closeModal,
  addNotification,
  removeNotification,
  clearNotifications,
  setLoading,
  showToast,
  hideToast
} = uiSlice.actions

export default uiSlice.reducer