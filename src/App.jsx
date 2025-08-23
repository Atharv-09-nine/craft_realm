import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Navigation Component
const Navigation = ({ activeSection, setActiveSection }) => (
  <nav className="retro-nav-vertical mb-6">
    <div className="flex flex-col space-y-2 max-w-xs">
      {[
        { id: 'dashboard', label: 'DASHBOARD', icon: '🏠' },
        { id: 'challenges', label: 'CHALLENGES', icon: '⚔️' },
        { id: 'profile', label: 'PROFILE', icon: '👤' },
        { id: 'achievements', label: 'ACHIEVEMENTS', icon: '🏆' },
        { id: 'community', label: 'COMMUNITY', icon: '👥' }
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveSection(item.id)}
          className={`retro-nav-btn-vertical ${activeSection === item.id ? 'active' : ''}`}
        >
          <span className="text-lg mr-3">{item.icon}</span>
          <span className="text-sm">{item.label}</span>
        </button>
      ))}
    </div>
  </nav>
)

// Dashboard Component
const Dashboard = () => (
  <div>
    {/* Header Banner */}
    <div className="retro-header-banner mb-8">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2" style={{color: 'var(--adventure-text)'}}>CODECRAFTS ADVENTURES</h1>
        <h2 className="text-sm mb-3" style={{color: 'var(--adventure-purple)'}}>INTERACTIVE CODING RPG</h2>
        <p className="text-xs" style={{color: 'var(--adventure-text-dim)'}}>Transform programming education into an immersive, addictive gaming experience ⋆˙⟡</p>
      </div>
    </div>

    {/* Player Stats - Full Width */}
    <div className="grid grid-cols-6 gap-6 mb-12">
      <div className="retro-stat-card">
        <div className="text-center p-6">
          <div className="text-4xl mb-3">⭐</div>
          <div className="text-2xl font-bold" style={{color: 'var(--adventure-text)'}}>1,250</div>
          <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>XP</div>
        </div>
      </div>
      <div className="retro-stat-card">
        <div className="text-center p-6">
          <div className="text-4xl mb-3">🎯</div>
          <div className="text-2xl font-bold" style={{color: 'var(--adventure-text)'}}>Level 15</div>
          <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Frontend Warrior</div>
        </div>
      </div>
      <div className="retro-stat-card">
        <div className="text-center p-6">
          <div className="text-4xl mb-3">🔥</div>
          <div className="text-2xl font-bold" style={{color: 'var(--adventure-text)'}}>7 Days</div>
          <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Streak</div>
        </div>
      </div>
      <div className="retro-stat-card">
        <div className="text-center p-6">
          <div className="text-4xl mb-3">🏆</div>
          <div className="text-2xl font-bold" style={{color: 'var(--adventure-text)'}}>23</div>
          <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Achievements</div>
        </div>
      </div>
      <div className="retro-stat-card">
        <div className="text-center p-6">
          <div className="text-4xl mb-3">⚡</div>
          <div className="text-2xl font-bold" style={{color: 'var(--adventure-text)'}}>42</div>
          <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Challenges</div>
        </div>
      </div>
      <div className="retro-stat-card">
        <div className="text-center p-6">
          <div className="text-4xl mb-3">👥</div>
          <div className="text-2xl font-bold" style={{color: 'var(--adventure-text)'}}>156</div>
          <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Guild Rank</div>
        </div>
      </div>
    </div>

    {/* Languages Section */}
    <div className="text-center mb-6">
      <h3 className="text-lg font-bold" style={{color: 'var(--adventure-text)'}}>Character Classes & Specializations</h3>
      <p className="text-sm mt-2" style={{color: 'var(--adventure-text-dim)'}}>Choose your path and master the arts of code</p>
    </div>

    {/* Language Grid - Character Classes - Full Width */}
    <div className="grid grid-cols-4 gap-6">
      {[
        { name: 'Frontend Warrior', icon: '⚔️', desc: 'HTML, CSS, JavaScript' },
        { name: 'Backend Mage', icon: '🧙‍♂️', desc: 'Python, Node.js, Databases' },
        { name: 'DevOps Rogue', icon: '🥷', desc: 'Docker, CI/CD, Cloud' },
        { name: 'Data Sage', icon: '📊', desc: 'ML, Analytics, Algorithms' },
        { name: 'Mobile Paladin', icon: '📱', desc: 'React Native, Flutter' },
        { name: 'Security Guardian', icon: '🛡️', desc: 'Cybersecurity, Encryption' },
        { name: 'Full Stack Wizard', icon: '🧙‍♀️', desc: 'Complete mastery of all domains' },
        { name: 'AI Engineer', icon: '🤖', desc: 'Machine Learning, Neural Networks' }
      ].map((lang, index) => (
        <div key={index} className="retro-lang-card">
          <div className="text-center p-8">
            <div className="text-5xl mb-4">{lang.icon}</div>
            <div className="text-lg font-bold mb-2" style={{color: 'var(--adventure-text)'}}>{lang.name}</div>
            <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>{lang.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Challenges Component
const Challenges = () => (
  <div>
    <div className="retro-header-banner mb-8">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2" style={{color: 'var(--adventure-text)'}}>QUEST BOARD</h1>
        <p className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Choose your coding adventure and earn XP</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-8">
      {[
        { title: 'Tutorial Quest', difficulty: 'Beginner', xp: 50, icon: '📚', desc: 'Learn the basics' },
        { title: 'Algorithm Battle', difficulty: 'Intermediate', xp: 150, icon: '⚔️', desc: 'Solve complex problems' },
        { title: 'Debug Dungeon', difficulty: 'Advanced', xp: 300, icon: '🐛', desc: 'Fix mysterious bugs' },
        { title: 'Boss Challenge', difficulty: 'Expert', xp: 500, icon: '👹', desc: 'Epic final battle' },
        { title: 'Speed Coding', difficulty: 'Intermediate', xp: 200, icon: '⚡', desc: 'Race against time' },
        { title: 'Code Review', difficulty: 'Advanced', xp: 250, icon: '👁️', desc: 'Improve others code' },
        { title: 'Hackathon Hero', difficulty: 'Expert', xp: 400, icon: '🏆', desc: 'Build in 48 hours' },
        { title: 'Open Source', difficulty: 'Advanced', xp: 350, icon: '🌟', desc: 'Contribute to projects' },
        { title: 'Code Golf', difficulty: 'Intermediate', xp: 175, icon: '⛳', desc: 'Shortest solution wins' }
      ].map((challenge, index) => (
        <div key={index} className="retro-challenge-card">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">{challenge.icon}</div>
              <div>
                <div className="text-lg font-bold mb-1" style={{color: 'var(--adventure-text)'}}>{challenge.title}</div>
                <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>{challenge.desc}</div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>{challenge.difficulty}</div>
              <div className="text-sm font-bold" style={{color: 'var(--adventure-yellow)'}}>+{challenge.xp} XP</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Profile Component
const Profile = () => (
  <div>
    <div className="retro-header-banner mb-8">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2" style={{color: 'var(--adventure-text)'}}>PLAYER PROFILE</h1>
        <p className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Your coding journey and achievements</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-8">
      <div className="retro-profile-card">
        <div className="p-8 text-center">
          <div className="text-8xl mb-6">🧙‍♂️</div>
          <div className="text-2xl font-bold mb-3" style={{color: 'var(--adventure-text)'}}>CodeMaster</div>
          <div className="text-lg mb-6" style={{color: 'var(--adventure-text-dim)'}}>Frontend Warrior • Level 15</div>
          <div className="retro-progress-bar mb-3">
            <div className="retro-progress-fill" style={{width: '75%'}}></div>
          </div>
          <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>750/1000 XP to Level 16</div>
        </div>
      </div>

      <div className="retro-profile-card">
        <div className="p-8">
          <h3 className="text-lg font-bold mb-6" style={{color: 'var(--adventure-text)'}}>Skill Tree Progress</h3>
          <div className="space-y-4">
            {[
              { skill: 'JavaScript', level: 8, max: 10 },
              { skill: 'React', level: 6, max: 10 },
              { skill: 'Node.js', level: 4, max: 10 },
              { skill: 'Python', level: 7, max: 10 },
              { skill: 'Algorithms', level: 5, max: 10 },
              { skill: 'DevOps', level: 3, max: 10 }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium" style={{color: 'var(--adventure-text)'}}>{skill.skill}</span>
                  <span className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>{skill.level}/{skill.max}</span>
                </div>
                <div className="retro-progress-bar">
                  <div className="retro-progress-fill" style={{width: `${(skill.level/skill.max)*100}%`}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="retro-profile-card">
        <div className="p-8">
          <h3 className="text-lg font-bold mb-6" style={{color: 'var(--adventure-text)'}}>Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'Completed Algorithm Battle', time: '2 hours ago', xp: '+150 XP' },
              { action: 'Unlocked React Mastery', time: '1 day ago', xp: '+200 XP' },
              { action: 'Joined JavaScript Jedis Guild', time: '3 days ago', xp: '+50 XP' },
              { action: 'Earned Bug Hunter Badge', time: '1 week ago', xp: '+100 XP' }
            ].map((activity, index) => (
              <div key={index} className="flex justify-between items-center p-3 rounded-lg" style={{background: 'var(--adventure-medium)'}}>
                <div>
                  <div className="text-sm font-medium" style={{color: 'var(--adventure-text)'}}>{activity.action}</div>
                  <div className="text-xs" style={{color: 'var(--adventure-text-dim)'}}>{activity.time}</div>
                </div>
                <div className="text-sm font-bold" style={{color: 'var(--adventure-green)'}}>{activity.xp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Achievements Component
const Achievements = () => (
  <div>
    <div className="retro-header-banner mb-8">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2" style={{color: 'var(--adventure-text)'}}>HALL OF FAME</h1>
        <p className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Your coding accomplishments and badges</p>
      </div>
    </div>

    <div className="grid grid-cols-6 gap-6">
      {[
        { name: 'First Steps', icon: '👶', desc: 'Complete first tutorial', earned: true },
        { name: 'Speed Demon', icon: '⚡', desc: 'Complete 10 challenges in 1 hour', earned: true },
        { name: 'Bug Hunter', icon: '🐛', desc: 'Fix 50 bugs', earned: true },
        { name: 'Code Warrior', icon: '⚔️', desc: 'Win 10 coding battles', earned: false },
        { name: 'Mentor', icon: '👨‍🏫', desc: 'Help 25 other players', earned: true },
        { name: 'Perfectionist', icon: '💎', desc: 'Get 100% on 20 challenges', earned: false },
        { name: 'Night Owl', icon: '🦉', desc: 'Code for 100 hours after midnight', earned: false },
        { name: 'Team Player', icon: '🤝', desc: 'Complete 10 group projects', earned: true },
        { name: 'Streak Master', icon: '🔥', desc: '30 day coding streak', earned: false },
        { name: 'Open Source Hero', icon: '🌟', desc: '50 contributions', earned: true },
        { name: 'Algorithm Master', icon: '🧠', desc: 'Solve 100 algorithms', earned: false },
        { name: 'Full Stack Legend', icon: '🏆', desc: 'Master all tech stacks', earned: false }
      ].map((achievement, index) => (
        <div key={index} className={`retro-achievement-card ${achievement.earned ? 'earned' : 'locked'}`}>
          <div className="p-6 text-center">
            <div className="text-4xl mb-3">{achievement.icon}</div>
            <div className="text-sm font-bold mb-2" style={{color: achievement.earned ? 'var(--adventure-text)' : 'var(--adventure-light)'}}>{achievement.name}</div>
            <div className="text-xs" style={{color: achievement.earned ? 'var(--adventure-text-dim)' : 'var(--adventure-light)'}}>{achievement.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

// Community Component
const Community = () => (
  <div>
    <div className="retro-header-banner mb-8">
      <div className="text-center">
        <h1 className="text-xl font-bold mb-2" style={{color: 'var(--adventure-text)'}}>GUILD HALL</h1>
        <p className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Connect with fellow coders and join forces</p>
      </div>
    </div>

    <div className="grid grid-cols-3 gap-8">
      <div className="retro-community-card">
        <div className="p-8">
          <h3 className="text-lg font-bold mb-6" style={{color: 'var(--adventure-text)'}}>Global Leaderboard</h3>
          <div className="space-y-3">
            {[
              { rank: 1, name: 'CodeNinja', xp: '15,420', icon: '🥇' },
              { rank: 2, name: 'ByteMaster', xp: '14,890', icon: '🥈' },
              { rank: 3, name: 'ScriptWizard', xp: '13,750', icon: '🥉' },
              { rank: 4, name: 'You', xp: '1,250', icon: '👤' },
              { rank: 5, name: 'DevGuru', xp: '1,180', icon: '5️⃣' },
              { rank: 6, name: 'CodeMaster', xp: '1,050', icon: '6️⃣' }
            ].map((player, index) => (
              <div key={index} className="flex items-center justify-between p-3 retro-leaderboard-item">
                <div className="flex items-center">
                  <span className="text-lg mr-3">{player.icon}</span>
                  <span className="text-sm font-medium" style={{color: 'var(--adventure-text)'}}>{player.name}</span>
                </div>
                <span className="text-sm font-bold" style={{color: 'var(--adventure-yellow)'}}>{player.xp} XP</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="retro-community-card">
        <div className="p-8">
          <h3 className="text-lg font-bold mb-6" style={{color: 'var(--adventure-text)'}}>Active Guilds</h3>
          <div className="space-y-4">
            {[
              { name: 'JavaScript Jedis', members: 1247, icon: '⚔️', color: 'var(--adventure-yellow)' },
              { name: 'Python Pythons', members: 892, icon: '🐍', color: 'var(--adventure-green)' },
              { name: 'React Rangers', members: 654, icon: '⚛️', color: 'var(--adventure-blue)' },
              { name: 'Node Ninjas', members: 423, icon: '🥷', color: 'var(--adventure-purple)' },
              { name: 'DevOps Dragons', members: 321, icon: '🐲', color: 'var(--adventure-red)' },
              { name: 'AI Architects', members: 198, icon: '🤖', color: 'var(--adventure-green)' }
            ].map((guild, index) => (
              <div key={index} className="retro-guild-item p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-lg mr-3">{guild.icon}</span>
                    <span className="text-sm font-bold" style={{color: 'var(--adventure-text)'}}>{guild.name}</span>
                  </div>
                  <span className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>{guild.members} members</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="retro-community-card">
        <div className="p-8">
          <h3 className="text-lg font-bold mb-6" style={{color: 'var(--adventure-text)'}}>Live Events</h3>
          <div className="space-y-4">
            {[
              { event: 'Weekly Hackathon', time: 'Starts in 2h', participants: '156 joined' },
              { event: 'Algorithm Tournament', time: 'Tomorrow 9 AM', participants: '89 registered' },
              { event: 'Code Review Session', time: 'Friday 3 PM', participants: '23 attending' },
              { event: 'Open Source Sprint', time: 'Next Week', participants: '45 interested' }
            ].map((event, index) => (
              <div key={index} className="p-4 rounded-lg" style={{background: 'var(--adventure-medium)'}}>
                <div className="text-sm font-bold mb-1" style={{color: 'var(--adventure-text)'}}>{event.event}</div>
                <div className="text-xs mb-2" style={{color: 'var(--adventure-text-dim)'}}>{event.time}</div>
                <div className="text-xs" style={{color: 'var(--adventure-green)'}}>{event.participants}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Introduction/Login Component
const IntroPage = ({ onLogin, onClassSelect, selectedClass, setSelectedClass }) => {
  const [username, setUsername] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const classes = [
    { id: 'frontend', name: 'Frontend Warrior', icon: '⚔️', desc: 'Master of HTML, CSS, JavaScript', color: 'var(--adventure-blue)' },
    { id: 'backend', name: 'Backend Mage', icon: '🧙‍♂️', desc: 'Python, Node.js, Database wizard', color: 'var(--adventure-purple)' },
    { id: 'devops', name: 'DevOps Rogue', icon: '🥷', desc: 'Docker, CI/CD, Cloud ninja', color: 'var(--adventure-green)' },
    { id: 'data', name: 'Data Sage', icon: '📊', desc: 'ML, Analytics, Algorithm master', color: 'var(--adventure-yellow)' },
    { id: 'mobile', name: 'Mobile Paladin', icon: '📱', desc: 'React Native, Flutter guardian', color: 'var(--adventure-red)' },
    { id: 'security', name: 'Security Guardian', icon: '🛡️', desc: 'Cybersecurity, Encryption shield', color: 'var(--adventure-accent)' },
    { id: 'fullstack', name: 'Full Stack Wizard', icon: '🧙‍♀️', desc: 'Complete mastery of all domains', color: 'var(--adventure-purple)' },
    { id: 'ai', name: 'AI Engineer', icon: '🤖', desc: 'Machine Learning, Neural Networks', color: 'var(--adventure-blue)' }
  ]

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true)
    }
  }

  const handleStartAdventure = () => {
    if (selectedClass && username.trim()) {
      onLogin(username, selectedClass)
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen" style={{background: 'var(--adventure-bg)'}}>
        <div className="blur-background"></div>
        <div className="intro-modal">
          <div className="retro-header-banner w-full max-w-2xl">
            <div className="text-center p-12">
              <div className="text-8xl mb-8">🎮</div>
              <h1 className="text-4xl font-bold mb-4" style={{color: 'var(--adventure-text)'}}>CODECRAFTS ADVENTURES</h1>
              <h2 className="text-xl mb-6" style={{color: 'var(--adventure-purple)'}}>INTERACTIVE CODING RPG</h2>
              <p className="text-lg mb-8" style={{color: 'var(--adventure-text-dim)'}}>
                Embark on an epic coding journey ⋆˙⟡<br/>
                Level up your skills, earn XP, and become a legendary developer!
              </p>
              
              <div className="mb-8 space-y-12">
                <input
                  type="text"
                  placeholder="Enter your adventurer name..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-8 py-4 text-xl rounded-xl border-2"
                  style={{
                    background: 'var(--adventure-card)',
                    border: '2px solid var(--adventure-border)',
                    color: 'var(--adventure-text)'
                  }}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <button
                  onClick={handleLogin}
                  disabled={!username.trim()}
                  className="retro-btn w-full text-xl px-8 py-4 rounded-xl disabled:opacity-50 transition-transform duration-200 hover:scale-105"
                >
                  BEGIN ADVENTURE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{background: 'var(--adventure-bg)'}}>
      <div className="blur-background"></div>
      <div className="intro-modal">
        <div className="max-w-6xl w-full">
          <div className="retro-header-banner mb-8">
            <div className="text-center p-8">
              <h1 className="text-3xl font-bold mb-4" style={{color: 'var(--adventure-text)'}}>
                Welcome, {username}! 🎉
              </h1>
              <p className="text-lg" style={{color: 'var(--adventure-text-dim)'}}>
                Choose your character class to begin your coding adventure
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {classes.map((cls) => (
              <div
                key={cls.id}
                onClick={() => setSelectedClass(cls)}
                className={`retro-lang-card cursor-pointer transition-all duration-300 ${
                  selectedClass?.id === cls.id ? 'ring-4 ring-opacity-50' : ''
                }`}
                style={{
                  borderColor: selectedClass?.id === cls.id ? cls.color : 'var(--adventure-border)',
                  ringColor: selectedClass?.id === cls.id ? cls.color : 'transparent'
                }}
              >
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">{cls.icon}</div>
                  <div className="text-lg font-bold mb-2" style={{color: 'var(--adventure-text)'}}>{cls.name}</div>
                  <div className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>{cls.desc}</div>
                  {selectedClass?.id === cls.id && (
                    <div className="mt-4 text-sm font-bold" style={{color: cls.color}}>
                      ✓ SELECTED
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleStartAdventure}
              disabled={!selectedClass}
              className="retro-btn text-xl px-12 py-4 disabled:opacity-50"
            >
              START YOUR QUEST
            </button>
            {selectedClass && (
              <p className="mt-4 text-lg" style={{color: 'var(--adventure-text-dim)'}}>
                Ready to begin as a <span style={{color: selectedClass.color}}>{selectedClass.name}</span>!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [isIntroComplete, setIsIntroComplete] = useState(false)
  const [playerData, setPlayerData] = useState(null)
  const [selectedClass, setSelectedClass] = useState(null)

  const handleLogin = (username, characterClass) => {
    setPlayerData({ username, class: characterClass })
    setIsIntroComplete(true)
  }

  const renderSection = () => {
    switch(activeSection) {
      case 'challenges': return <Challenges />
      case 'profile': return <Profile playerData={playerData} />
      case 'achievements': return <Achievements />
      case 'community': return <Community />
      default: return <Dashboard playerData={playerData} />
    }
  }

  if (!isIntroComplete) {
    return (
      <IntroPage 
        onLogin={handleLogin}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />
    )
  }

  return (
    <div className="min-h-screen font-mono flex" style={{background: 'var(--adventure-bg)'}}>
      {/* Sidebar Navigation */}
      <div className="w-80 p-6 border-r border-gray-700">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2" style={{color: 'var(--adventure-text)'}}>CODECRAFTS</h1>
          <p className="text-sm" style={{color: 'var(--adventure-text-dim)'}}>Adventure Awaits ⋆˙⟡</p>
          {playerData && (
            <div className="mt-4 p-3 rounded-lg" style={{background: 'var(--adventure-card)'}}>
              <div className="text-sm font-bold" style={{color: 'var(--adventure-text)'}}>{playerData.username}</div>
              <div className="text-xs flex items-center" style={{color: playerData.class.color}}>
                <span className="mr-1">{playerData.class.icon}</span>
                {playerData.class.name}
              </div>
            </div>
          )}
        </div>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {renderSection()}
        </div>
      </div>
    </div>
  )
}

export default App