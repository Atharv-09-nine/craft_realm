import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { 
  X, 
  Play, 
  RotateCcw, 
  Settings,
  Maximize2,
  Minimize2
} from 'lucide-react'
import * as monaco from 'monaco-editor'
import { 
  closeCodeEditor, 
  updateCode, 
  setCodeLanguage,
  setCodeOutput,
  setCodeExecuting
} from '../../store/slices/challengeSlice'

const CodeEditor = () => {
  const dispatch = useDispatch()
  const editorRef = useRef(null)
  const monacoRef = useRef(null)
  
  const { 
    isOpen, 
    language, 
    code, 
    output, 
    isExecuting 
  } = useSelector(state => state.challenges.codeEditor)
  
  const { currentChallenge } = useSelector(state => state.challenges)

  useEffect(() => {
    if (isOpen && editorRef.current && !monacoRef.current) {
      // Initialize Monaco Editor
      monacoRef.current = monaco.editor.create(editorRef.current, {
        value: code,
        language: getMonacoLanguage(language),
        theme: 'vs-dark',
        fontSize: 14,
        fontFamily: 'JetBrains Mono, Consolas, monospace',
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        wordWrap: 'on',
        lineNumbers: 'on',
        folding: true,
        bracketMatching: 'always',
        autoIndent: 'full',
        formatOnPaste: true,
        formatOnType: true
      })

      // Listen for content changes
      monacoRef.current.onDidChangeModelContent(() => {
        const value = monacoRef.current.getValue()
        dispatch(updateCode(value))
      })
    }

    return () => {
      if (monacoRef.current) {
        monacoRef.current.dispose()
        monacoRef.current = null
      }
    }
  }, [isOpen])

  useEffect(() => {
    if (monacoRef.current && code !== monacoRef.current.getValue()) {
      monacoRef.current.setValue(code)
    }
  }, [code])

  useEffect(() => {
    if (monacoRef.current) {
      monaco.editor.setModelLanguage(
        monacoRef.current.getModel(),
        getMonacoLanguage(language)
      )
    }
  }, [language])

  const getMonacoLanguage = (lang) => {
    const languageMap = {
      javascript: 'javascript',
      python: 'python',
      java: 'java',
      cpp: 'cpp',
      c: 'c',
      html: 'html',
      css: 'css'
    }
    return languageMap[lang] || 'javascript'
  }

  const handleExecuteCode = async () => {
    dispatch(setCodeExecuting(true))
    dispatch(setCodeOutput('Executing code...'))

    try {
      // Simulate code execution
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock execution result
      const result = simulateCodeExecution(code, language)
      dispatch(setCodeOutput(result))
    } catch (error) {
      dispatch(setCodeOutput(`Error: ${error.message}`))
    } finally {
      dispatch(setCodeExecuting(false))
    }
  }

  const simulateCodeExecution = (code, language) => {
    // Basic simulation - in production, this would be handled by a secure backend
    switch (language) {
      case 'javascript':
        if (code.includes('console.log')) {
          const matches = code.match(/console\.log\((.*?)\)/g)
          if (matches) {
            return matches.map(match => {
              const content = match.match(/console\.log\((.*?)\)/)[1]
              return content.replace(/['"]/g, '')
            }).join('\n')
          }
        }
        return 'Code executed successfully!'
        
      case 'python':
        if (code.includes('print')) {
          const matches = code.match(/print\((.*?)\)/g)
          if (matches) {
            return matches.map(match => {
              const content = match.match(/print\((.*?)\)/)[1]
              return content.replace(/['"]/g, '')
            }).join('\n')
          }
        }
        return 'Code executed successfully!'
        
      default:
        return 'Code executed successfully!'
    }
  }

  const handleReset = () => {
    const starterCode = currentChallenge?.starterCode || ''
    dispatch(updateCode(starterCode))
  }

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' }
  ]

  if (!isOpen) return null

  return (
    <div className="h-full flex flex-col bg-background-secondary">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-background-tertiary">
        <div className="flex items-center space-x-4">
          <h3 className="font-semibold">Code Editor</h3>
          <select
            value={language}
            onChange={(e) => dispatch(setCodeLanguage(e.target.value))}
            className="input-field text-sm"
          >
            {languages.map(lang => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleReset}
            className="p-2 hover:bg-background-tertiary rounded transition-colors"
            title="Reset Code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={() => dispatch(closeCodeEditor())}
            className="p-2 hover:bg-background-tertiary rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 min-h-0">
          <div ref={editorRef} className="h-full" />
        </div>

        {/* Controls */}
        <div className="p-4 border-t border-background-tertiary">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleExecuteCode}
              disabled={isExecuting}
              className="btn-primary flex items-center space-x-2 disabled:opacity-50"
            >
              <Play className="w-4 h-4" />
              <span>{isExecuting ? 'Running...' : 'Run Code'}</span>
            </button>
            
            {currentChallenge && (
              <button className="btn-secondary">
                Submit Solution
              </button>
            )}
          </div>

          {/* Output */}
          <div className="bg-background-primary rounded-lg p-4 min-h-[100px]">
            <div className="text-sm text-foreground-muted mb-2">Output:</div>
            <pre className="text-sm font-mono whitespace-pre-wrap">
              {output || 'Run your code to see output here...'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeEditor