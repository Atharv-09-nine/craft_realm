import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { store } from './store/store'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#2A2A2A',
              color: '#E8E8E8',
              border: '1px solid #FFD700',
            },
            success: {
              iconTheme: {
                primary: '#4CAF50',
                secondary: '#E8E8E8',
              },
            },
            error: {
              iconTheme: {
                primary: '#F44336',
                secondary: '#E8E8E8',
              },
            },
          }}
        />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)