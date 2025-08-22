import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Retro Gaming Catalog style components
const Dashboard = () => (
  <div className="min-h-screen p-8 font-mono" style={{background: '#8B8B7A'}}>
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <div className="text-left mb-6" style={{color: '#2D2D1F'}}>
          <p className="text-sm mb-4">An app to catalog your coding skills and challenges and level up with friends.</p>
          <h2 className="text-sm font-bold mb-4">All Your Favorite Languages</h2>
        </div>
        
        {/* Console Icons Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
          {[
            { name: 'JavaScript', icon: '🟨', desc: 'JS' },
            { name: 'Python', icon: '🐍', desc: 'PY' },
            { name: 'Java', icon: '☕', desc: 'JAVA' },
            { name: 'C++', icon: '⚡', desc: 'C++' },
            { name: 'React', icon: '⚛️', desc: 'REACT' },
            { name: 'Node', icon: '🟢', desc: 'NODE' }
          ].map((lang, index) => (
            <div key={index} className="retro-console-icon p-3 text-center">
              <div className="text-2xl mb-1">{lang.icon}</div>
              <div className="text-xs" style={{color: '#2D2D1F'}}>{lang.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Phone Mockup */}
        <div className="flex justify-center">
          <div className="retro-phone">
            <div className="retro-phone-screen">
              <div className="retro-phone-header">
                <div className="flex justify-center items-center mb-4">
                  <div className="text-2xl">🎮</div>
                </div>
                <div className="text-center mb-6">
                  <h1 className="text-lg font-bold mb-2" style={{color: '#2D2D1F'}}>RETRO GAMING CATALOG</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Library Section */}
        <div>
          <p className="text-sm mb-4" style={{color: '#2D2D1F'}}>Hundreds of challenges for each language...</p>
          
          <div className="retro-library-container">
            <div className="retro-library-header">
              <div className="flex items-center justify-between p-3" style={{borderBottom: '2px solid #2D2D1F'}}>
                <div className="flex items-center space-x-2">
                  <div className="text-sm">☰</div>
                  <div className="text-sm font-bold">Library</div>
                </div>
                <div className="text-sm">👤</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-0">
              {/* Left Panel - Challenge List */}
              <div className="retro-library-panel p-4">
                <div className="mb-4">
                  <div className="retro-console-small mb-2">🎮</div>
                </div>
                
                <div className="space-y-1 text-xs" style={{color: '#2D2D1F'}}>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{background: '#4A4A3A'}}></div>
                    <div>Variables & Functions</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{background: '#4A4A3A'}}></div>
                    <div>Arrays & Objects</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{background: '#4A4A3A'}}></div>
                    <div>DOM Manipulation</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{background: '#4A4A3A'}}></div>
                    <div>Async Programming</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{background: '#4A4A3A'}}></div>
                    <div>API Integration</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{background: '#4A4A3A'}}></div>
                    <div>React Components</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{background: '#4A4A3A'}}></div>
                    <div>State Management</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full" style={{background: '#4A4A3A'}}></div>
                    <div>Testing & Debugging</div>
                  </div>
                </div>
              </div>
              
              {/* Right Panel - Game Details */}
              <div className="retro-library-panel p-4">
                <div className="retro-game-cover mb-4">
                  <div className="retro-game-image">
                    <div className="text-center p-4">
                      <div className="text-lg mb-2">🏆</div>
                      <div className="text-xs font-bold">Array Methods Challenge</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-1 text-xs" style={{color: '#2D2D1F'}}>
                  <div><strong>RELEASED:</strong> Jan 1, 1995</div>
                  <div><strong>MSRP:</strong> 24.99 XP</div>
                  <div><strong>RATING:</strong> E for Everyone</div>
                  <div><strong>GENRE:</strong> Platformer</div>
                  <div><strong>PUBLISHER:</strong> CodeCrafts</div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-2" style={{borderTop: '1px solid #4A4A3A'}}>
                  <button className="retro-btn-small">WISHLIST</button>
                  <button className="retro-btn-small">CATALOG</button>
                  <button className="retro-btn-small">TRADE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Challenges = () => (
  <div className="min-h-screen bg-black p-8 font-mono">
    <div className="retro-container p-6 mb-8">
      <h1 className="text-4xl mb-4 text-center text-yellow-400" style={{textShadow: '0 0 20px var(--neon-yellow)'}}>
        🎯 CODING CHALLENGES
      </h1>
      <div className="text-center text-sm text-cyan-400">SELECT YOUR QUEST AND PROVE YOUR SKILLS</div>
    </div>

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "HELLO WORLD", difficulty: "BEGINNER", xp: 10, language: "JavaScript", icon: "🌟" },
          { title: "ARRAY METHODS", difficulty: "INTERMEDIATE", xp: 50, language: "JavaScript", icon: "🔥" },
          { title: "API INTEGRATION", difficulty: "ADVANCED", xp: 100, language: "JavaScript", icon: "⚡" },
          { title: "ALGORITHM CHALLENGE", difficulty: "EXPERT", xp: 200, language: "Python", icon: "💎" },
          { title: "DATA STRUCTURES", difficulty: "INTERMEDIATE", xp: 75, language: "Java", icon: "🎯" },
          { title: "RECURSION MASTER", difficulty: "ADVANCED", xp: 150, language: "C++", icon: "🚀" }
        ].map((challenge, index) => (
          <div key={index} className="retro-card p-6">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2" style={{animation: 'pixelBounce 2s ease-in-out infinite'}}>{challenge.icon}</div>
              <h3 className="text-xl text-white mb-2">{challenge.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className={`px-2 py-1 text-xs border ${
                challenge.difficulty === 'BEGINNER' ? 'border-green-400 text-green-400' :
                challenge.difficulty === 'INTERMEDIATE' ? 'border-yellow-400 text-yellow-400' :
                challenge.difficulty === 'ADVANCED' ? 'border-red-400 text-red-400' :
                'border-purple-400 text-purple-400'
              }`} style={{background: 'rgba(0,0,0,0.5)'}}>
                {challenge.difficulty}
              </span>
              <span className="px-2 py-1 text-xs border border-cyan-400 text-cyan-400" style={{background: 'rgba(0,0,0,0.5)'}}>
                {challenge.language}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 text-sm">⭐ {challenge.xp} XP</span>
              <button className="retro-btn">
                START
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

const Profile = () => (
  <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
    <h1 className="text-4xl mb-8 text-center text-yellow-400">👤 PLAYER PROFILE</h1>
    <div className="max-w-4xl mx-auto">
      <div className="bg-gray-900 border-2 border-green-400 p-8 text-center mb-8">
        <div className="text-6xl mb-4">🦸‍♂️</div>
        <h2 className="text-2xl text-white mb-2">CODEWARRIOR</h2>
        <div className="text-yellow-400 mb-4">FRONTEND WARRIOR • LEVEL 15</div>
        <div className="bg-black border border-green-400 h-4 mb-2">
          <div className="bg-green-400 h-full" style={{width: '75%'}}></div>
        </div>
        <div className="text-sm">750/1000 XP TO NEXT LEVEL</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900 border-2 border-green-400 p-6">
          <h3 className="text-xl text-yellow-400 mb-4">📊 SKILLS</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Frontend</span>
              <span className="text-yellow-400">Level 8</span>
            </div>
            <div className="flex justify-between">
              <span>Backend</span>
              <span className="text-yellow-400">Level 5</span>
            </div>
            <div className="flex justify-between">
              <span>DevOps</span>
              <span className="text-yellow-400">Level 3</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 border-2 border-green-400 p-6">
          <h3 className="text-xl text-yellow-400 mb-4">🏆 ACHIEVEMENTS</h3>
          <div className="grid grid-cols-3 gap-2">
            {['🏆', '⚡', '🎯', '🔥', '💎', '🌟'].map((emoji, index) => (
              <div key={index} className="bg-yellow-900 border border-yellow-400 p-2 text-center">
                <div className="text-2xl">{emoji}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Navigation = () => (
  <nav className="retro-nav">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="retro-logo">🎮 CODECRAFTS</div>
      <div className="flex space-x-6">
        <a href="/" className="retro-nav-link">DASHBOARD</a>
        <a href="/challenges" className="retro-nav-link">CHALLENGES</a>
        <a href="/profile" className="retro-nav-link">PROFILE</a>
      </div>
    </div>
  </nav>
)

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App