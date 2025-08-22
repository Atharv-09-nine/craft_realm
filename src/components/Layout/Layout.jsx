import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Sidebar from './Sidebar'
import CodeEditor from '../CodeEditor/CodeEditor'
import { toggleSidebar } from '../../store/slices/uiSlice'

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const { sidebarOpen } = useSelector(state => state.ui)
  const { isOpen: codeEditorOpen } = useSelector(state => state.challenges.codeEditor)

  return (
    <div className="min-h-screen bg-background-primary flex">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed lg:relative z-30 h-full"
          >
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-1 flex">
          {/* Page Content */}
          <div className={`flex-1 transition-all duration-300 ${codeEditorOpen ? 'lg:w-1/2' : 'w-full'}`}>
            <div className="p-6 h-full overflow-auto">
              {children}
            </div>
          </div>

          {/* Code Editor Panel */}
          <AnimatePresence>
            {codeEditorOpen && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed lg:relative right-0 top-0 h-full w-full lg:w-1/2 z-40 bg-background-secondary border-l border-background-tertiary"
              >
                <CodeEditor />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
    </div>
  )
}

export default Layout