import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Gamepad2, 
  Wrench, 
  ArrowRight, 
  Star, 
  Users, 
  BookOpen,
  Zap,
  Target,
  Trophy,
  Heart
} from 'lucide-react'

const Landing = () => {
  const learningPaths = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Build beautiful websites and web apps with HTML, CSS, and JavaScript',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-400/20 to-cyan-400/20',
      features: ['HTML & CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      id: 'data-science',
      title: 'Data Science',
      description: 'Unlock the power of data with Python, statistics, and machine learning',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      gradient: 'from-purple-400/20 to-pink-400/20',
      features: ['Python', 'Statistics', 'Machine Learning', 'Data Visualization']
    },
    {
      id: 'game-dev',
      title: 'Game Development',
      description: 'Create amazing games with Unity, C#, and game design principles',
      icon: Gamepad2,
      color: 'from-green-500 to-emerald-500',
      gradient: 'from-green-400/20 to-emerald-400/20',
      features: ['Unity', 'C#', 'Game Design', '3D Modeling']
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      description: 'Master essential tools like Git, Docker, and cloud platforms',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      gradient: 'from-orange-400/20 to-red-400/20',
      features: ['Git & GitHub', 'Docker', 'Cloud Platforms', 'CI/CD']
    }
  ]

  const stats = [
    { number: '50K+', label: 'Active Learners', icon: Users },
    { number: '500+', label: 'Interactive Lessons', icon: BookOpen },
    { number: '95%', label: 'Success Rate', icon: Trophy },
    { number: '24/7', label: 'Community Support', icon: Heart }
  ]

  return (
    <div className="min-h-screen bg-background-primary overflow-hidden relative">
      {/* Retro CRT Scanlines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pixel-cyan/5 to-transparent animate-scanline opacity-30"></div>
      </div>
      
      {/* Pixel Art Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 8-bit Stars */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-pixel-yellow animate-pixel-blink" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-pixel-cyan animate-pixel-blink" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-60 left-1/4 w-2 h-2 bg-pixel-green animate-pixel-blink" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-80 right-1/3 w-3 h-3 bg-pixel-magenta animate-pixel-blink" style={{animationDelay: '1.5s'}}></div>
        
        {/* Pixel Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #00FFFF 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        
        {/* 8-bit Mountains */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 400 100" className="w-full h-32">
            <polygon points="0,100 0,60 20,60 20,40 40,40 40,20 60,20 60,40 80,40 80,60 100,60 100,80 120,80 120,60 140,60 140,40 160,40 160,60 180,60 180,80 200,80 200,60 220,60 220,40 240,40 240,20 260,20 260,40 280,40 280,60 300,60 300,80 320,80 320,60 340,60 340,40 360,40 360,60 380,60 380,80 400,80 400,100" fill="#16213E" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-pixel-yellow border-2 border-pixel-white flex items-center justify-center animate-retro-bounce">
              <Code className="w-6 h-6 text-pixel-black" />
            </div>
            <div>
              <h1 className="text-xl font-pixel text-pixel-yellow">CODEQUEST</h1>
              <p className="text-xs font-pixel text-pixel-cyan">ADVENTURES</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#courses" className="font-pixel text-sm text-pixel-cyan hover:text-pixel-yellow transition-colors">COURSES</a>
            <a href="#community" className="font-pixel text-sm text-pixel-cyan hover:text-pixel-yellow transition-colors">COMMUNITY</a>
            <a href="#pricing" className="font-pixel text-sm text-pixel-cyan hover:text-pixel-yellow transition-colors">PRICING</a>
            <button className="px-6 py-3 bg-pixel-green border-2 border-pixel-white text-pixel-black font-pixel text-sm hover:bg-pixel-yellow transition-all transform hover:scale-105 shadow-lg">
              START GAME
            </button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-pixel-blue/20 border-2 border-pixel-cyan">
                  <Star className="w-4 h-4 text-pixel-yellow animate-pixel-blink" />
                  <span className="text-sm font-pixel text-pixel-cyan">JOIN 50,000+ CODERS!</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-pixel text-pixel-white leading-tight">
                  BEGIN YOUR{' '}
                  <span className="text-pixel-yellow animate-pulse">
                    CODING QUEST
                  </span>
                </h1>
                
                <p className="text-lg font-pixel text-pixel-cyan leading-relaxed">
                  LEARN CODING THROUGH 8-BIT ADVENTURES.
                  <br />MASTER PROGRAMMING WITH RETRO QUESTS!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-pixel-green border-4 border-pixel-white text-pixel-black font-pixel text-lg hover:bg-pixel-yellow transition-all shadow-lg"
                  >
                    START QUEST
                    <ArrowRight className="inline ml-2 w-5 h-5" />
                  </motion.button>
                  
                  <button className="px-8 py-4 border-4 border-pixel-cyan text-pixel-cyan font-pixel hover:bg-pixel-cyan hover:text-pixel-black transition-all">
                    WATCH DEMO
                  </button>
                </div>
                
                <div className="flex items-center space-x-6 text-sm font-pixel">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-pixel-blue border border-pixel-white"></div>
                      <div className="w-6 h-6 bg-pixel-green border border-pixel-white"></div>
                      <div className="w-6 h-6 bg-pixel-red border border-pixel-white"></div>
                    </div>
                    <span className="text-pixel-cyan">50K+ PLAYERS</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-pixel-yellow fill-current" />
                    <Star className="w-3 h-3 text-pixel-yellow fill-current" />
                    <Star className="w-3 h-3 text-pixel-yellow fill-current" />
                    <Star className="w-3 h-3 text-pixel-yellow fill-current" />
                    <Star className="w-3 h-3 text-pixel-yellow fill-current" />
                    <span className="ml-1 text-pixel-cyan">5/5 STARS</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-background-secondary border-4 border-pixel-cyan overflow-hidden">
                {/* Retro Computer Terminal */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* CRT Monitor */}
                    <div className="w-56 h-40 bg-pixel-gray border-4 border-pixel-white relative">
                      <div className="absolute inset-3 bg-pixel-black flex items-center justify-center">
                        <div className="text-center space-y-2">
                          <div className="text-pixel-green text-sm font-pixel animate-pixel-blink">&gt; HELLO_WORLD.EXE</div>
                          <div className="text-pixel-cyan text-xs font-pixel">&gt; READY_TO_CODE?</div>
                          <div className="text-pixel-yellow text-xs font-pixel animate-pulse">&gt; PRESS_START_</div>
                        </div>
                      </div>
                      {/* CRT Glow Effect */}
                      <div className="absolute inset-0 bg-pixel-cyan/10 animate-pulse"></div>
                    </div>
                    
                    {/* Monitor Stand */}
                    <div className="w-20 h-6 bg-pixel-gray border-2 border-pixel-white mx-auto -mt-1"></div>
                    <div className="w-32 h-4 bg-pixel-gray border-2 border-pixel-white mx-auto"></div>
                    
                    {/* Floating 8-bit Icons */}
                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-pixel-yellow border-2 border-pixel-white flex items-center justify-center animate-pixel-float">
                      <Code className="w-6 h-6 text-pixel-black" />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-pixel-green border-2 border-pixel-white flex items-center justify-center animate-pixel-float" style={{animationDelay: '1s'}}>
                      <Zap className="w-6 h-6 text-pixel-black" />
                    </div>
                    <div className="absolute top-1/2 -right-8 w-8 h-8 bg-pixel-magenta border-2 border-pixel-white flex items-center justify-center animate-retro-bounce">
                      <Target className="w-4 h-4 text-pixel-white" />
                    </div>
                  </div>
                </div>
                
                {/* 8-bit Particles */}
                <div className="absolute top-10 left-10 w-4 h-4 bg-pixel-yellow animate-pixel-blink"></div>
                <div className="absolute top-20 right-16 w-3 h-3 bg-pixel-cyan animate-pixel-blink" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-20 left-16 w-3 h-3 bg-pixel-green animate-pixel-blink" style={{animationDelay: '1s'}}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pixel-blue border-4 border-pixel-white flex items-center justify-center mx-auto mb-4 animate-retro-bounce">
                  <stat.icon className="w-8 h-8 text-pixel-yellow" />
                </div>
                <div className="text-2xl font-pixel text-pixel-white mb-2">{stat.number}</div>
                <div className="text-sm font-pixel text-pixel-cyan">{stat.label.toUpperCase()}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section id="courses" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-pixel text-pixel-white mb-4">
              CHOOSE YOUR{' '}
              <span className="text-pixel-yellow animate-pulse">
                QUEST PATH
              </span>
            </h2>
            <p className="text-lg font-pixel text-pixel-cyan max-w-3xl mx-auto">
              EMBARK ON 8-BIT CODING ADVENTURES!
              <br />LEVEL UP FROM NOOB TO MASTER CODER!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="p-6 bg-background-secondary border-4 border-pixel-cyan hover:border-pixel-yellow transition-all duration-300">
                  <div className="w-16 h-16 bg-pixel-blue border-4 border-pixel-white flex items-center justify-center mb-6 group-hover:animate-retro-bounce">
                    <path.icon className="w-8 h-8 text-pixel-yellow" />
                  </div>
                  
                  <h3 className="text-lg font-pixel text-pixel-white mb-3">{path.title.toUpperCase()}</h3>
                  <p className="text-sm font-pixel text-pixel-cyan mb-6 leading-relaxed">{path.description.toUpperCase()}</p>
                  
                  <div className="space-y-2">
                    {path.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-pixel-yellow border border-pixel-white"></div>
                        <span className="text-xs font-pixel text-pixel-cyan">{feature.toUpperCase()}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="mt-6 w-full py-3 bg-pixel-green border-2 border-pixel-white text-pixel-black font-pixel hover:bg-pixel-yellow transition-all">
                    START QUEST
                    <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-background-secondary border-4 border-pixel-magenta p-12"
          >
            <h2 className="text-3xl font-pixel text-pixel-white mb-6">
              READY TO START YOUR{' '}
              <span className="text-pixel-yellow animate-pulse">
                EPIC QUEST?
              </span>
            </h2>
            <p className="text-lg font-pixel text-pixel-cyan mb-8 max-w-2xl mx-auto">
              JOIN THOUSANDS OF CODERS WHO LEVELED UP
              <br />THROUGH OUR RETRO GAMING PLATFORM!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-pixel-green border-4 border-pixel-white text-pixel-black font-pixel text-lg hover:bg-pixel-yellow transition-all shadow-lg"
              >
                START FREE TRIAL
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </motion.button>
              <button className="px-8 py-4 border-4 border-pixel-cyan text-pixel-cyan font-pixel hover:bg-pixel-cyan hover:text-pixel-black transition-all">
                VIEW ALL QUESTS
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t-4 border-pixel-cyan bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-pixel-yellow border-2 border-pixel-white flex items-center justify-center animate-retro-bounce">
                  <Code className="w-6 h-6 text-pixel-black" />
                </div>
                <div>
                  <h3 className="text-lg font-pixel text-pixel-yellow">CODEQUEST</h3>
                  <p className="text-sm font-pixel text-pixel-cyan">ADVENTURES</p>
                </div>
              </div>
              <p className="text-sm font-pixel text-pixel-cyan mb-4">
                LEARN CODING THROUGH 8-BIT ADVENTURES!
              </p>
            </div>
            
            <div>
              <h4 className="text-pixel-white font-pixel mb-4">QUESTS</h4>
              <ul className="space-y-2 text-pixel-cyan font-pixel text-sm">
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">WEB DEV</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">DATA SCI</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">GAME DEV</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">DEV TOOLS</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-pixel-white font-pixel mb-4">GUILD</h4>
              <ul className="space-y-2 text-pixel-cyan font-pixel text-sm">
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">DISCORD</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">FORUMS</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">EVENTS</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">BLOG</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-pixel-white font-pixel mb-4">INFO</h4>
              <ul className="space-y-2 text-pixel-cyan font-pixel text-sm">
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">ABOUT</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">CAREERS</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">CONTACT</a></li>
                <li><a href="#" className="hover:text-pixel-yellow transition-colors">PRIVACY</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t-2 border-pixel-cyan mt-8 pt-8 text-center">
            <p className="font-pixel text-pixel-cyan text-sm">&copy; 2024 CODEQUEST ADVENTURES. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
