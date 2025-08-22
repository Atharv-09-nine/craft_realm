import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard'
import Challenges from './pages/Challenges'
import Profile from './pages/Profile'
import Leaderboard from './pages/Leaderboard'
import Community from './pages/Community'
import Settings from './pages/Settings'
import Welcome from './pages/Welcome'
import GameWorld from './components/Game/GameWorld'

function App() {
  const { isAuthenticated } = useSelector(state => state.auth)

  if (!isAuthenticated) {
    return <Welcome />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/game" element={<GameWorld />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App