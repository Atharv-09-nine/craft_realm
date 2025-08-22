import React from 'react'
import { motion } from 'framer-motion'
import { Gamepad2, Map, Sword, Zap, Star, Trophy } from 'lucide-react'

const GameWorld = () => {
  return (
    <div className="min-h-screen bg-background-primary p-6">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{backgroundImage: 'radial-gradient(circle, #00FFFF 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
      </div>
      
      <div className="relative z-10 space-y-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-pixel text-pixel-white mb-4">
            <span className="text-pixel-yellow animate-pulse">GAME WORLD</span>
          </h1>
          <p className="text-lg font-pixel text-pixel-cyan">
            EXPLORE THE 8-BIT REALM OF CODECRAFTS
          </p>
        </motion.div>

        {/* Pixel Art Game Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-background-secondary border-4 border-pixel-cyan p-8 text-center"
        >
          <div className="relative w-full h-64 bg-pixel-black border-4 border-pixel-white mb-6 overflow-hidden">
            {/* 8-bit Game Scene */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Pixel Character */}
                <div className="w-16 h-20 bg-pixel-blue border-2 border-pixel-white mx-auto mb-4 relative animate-retro-bounce">
                  <div className="w-4 h-4 bg-pixel-yellow border border-pixel-white absolute top-1 left-6"></div>
                  <div className="w-8 h-2 bg-pixel-red border border-pixel-white absolute top-6 left-4"></div>
                </div>
                
                {/* Floating Items */}
                <div className="absolute -top-8 -left-8 w-8 h-8 bg-pixel-yellow border-2 border-pixel-white animate-pixel-float">
                  <Star className="w-4 h-4 text-pixel-black m-1" />
                </div>
                <div className="absolute -top-8 right-8 w-8 h-8 bg-pixel-green border-2 border-pixel-white animate-pixel-float" style={{animationDelay: '1s'}}>
                  <Zap className="w-4 h-4 text-pixel-black m-1" />
                </div>
                <div className="absolute top-8 -right-12 w-8 h-8 bg-pixel-magenta border-2 border-pixel-white animate-pixel-float" style={{animationDelay: '2s'}}>
                  <Trophy className="w-4 h-4 text-pixel-white m-1" />
                </div>
              </div>
            </div>
            
            {/* Pixel Platforms */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-pixel-green border-t-2 border-pixel-white"></div>
            <div className="absolute bottom-8 left-1/4 w-16 h-4 bg-pixel-yellow border-2 border-pixel-white"></div>
            <div className="absolute bottom-16 right-1/4 w-20 h-4 bg-pixel-red border-2 border-pixel-white"></div>
          </div>
          
          <Gamepad2 className="w-16 h-16 mx-auto mb-4 text-pixel-yellow animate-retro-bounce" />
          <h2 className="text-2xl font-pixel text-pixel-white mb-4">GAME WORLD LOADING...</h2>
          <p className="text-lg font-pixel text-pixel-cyan mb-6">
            INTERACTIVE 2D WORLD, NPCS, QUESTS,<br />
            AND MULTIPLAYER ADVENTURES COMING SOON!
          </p>
          
          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto bg-pixel-black border-4 border-pixel-white h-8 relative overflow-hidden">
            <div className="h-full bg-pixel-green animate-pulse" style={{width: '75%'}}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-pixel text-pixel-black text-sm">75% COMPLETE</span>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-background-secondary border-4 border-pixel-blue p-6 text-center"
          >
            <Map className="w-12 h-12 mx-auto mb-4 text-pixel-blue animate-retro-bounce" />
            <h3 className="text-lg font-pixel text-pixel-white mb-2">WORLD MAP</h3>
            <p className="text-sm font-pixel text-pixel-cyan">
              EXPLORE DIFFERENT CODING REALMS
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-background-secondary border-4 border-pixel-red p-6 text-center"
          >
            <Sword className="w-12 h-12 mx-auto mb-4 text-pixel-red animate-retro-bounce" />
            <h3 className="text-lg font-pixel text-pixel-white mb-2">BOSS BATTLES</h3>
            <p className="text-sm font-pixel text-pixel-cyan">
              DEFEAT CODING CHALLENGES
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-background-secondary border-4 border-pixel-yellow p-6 text-center"
          >
            <Trophy className="w-12 h-12 mx-auto mb-4 text-pixel-yellow animate-retro-bounce" />
            <h3 className="text-lg font-pixel text-pixel-white mb-2">ACHIEVEMENTS</h3>
            <p className="text-sm font-pixel text-pixel-cyan">
              UNLOCK CODING BADGES
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default GameWorld