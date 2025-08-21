// Code Editor Integration System
export class CodeEditor {
    constructor() {
        this.panel = document.getElementById('code-editor-panel');
        this.languageSelector = document.getElementById('language-selector');
        this.castButton = document.getElementById('cast-spell');
        this.closeButton = document.getElementById('close-editor');
        this.output = document.getElementById('code-output');
        this.currentChallenge = null;
        this.currentLanguage = 'python';
        
        this.setupEventListeners();
        this.initializeEditor();
    }

    setupEventListeners() {
        this.castButton.addEventListener('click', () => this.executeCode());
        this.closeButton.addEventListener('click', () => this.close());
        this.languageSelector.addEventListener('change', (e) => {
            this.currentLanguage = e.target.value;
            this.updateEditorLanguage();
        });
    }

    initializeEditor() {
        // Simple textarea for now - in production, integrate Monaco Editor
        const editorContainer = document.getElementById('monaco-editor');
        editorContainer.innerHTML = `
            <textarea id="code-textarea" 
                style="width:100%;height:100%;background:#1e1e1e;color:#fff;border:none;padding:10px;font-family:'Courier New',monospace;font-size:14px;resize:none;outline:none;"
                placeholder="Write your magical code here..."></textarea>
        `;
    }

    show(challenge, language = 'python') {
        this.currentChallenge = challenge;
        this.currentLanguage = language;
        this.languageSelector.value = language;
        
        // Load starter code
        const textarea = document.getElementById('code-textarea');
        textarea.value = challenge.starterCode || this.getDefaultCode(language);
        
        this.panel.classList.remove('hidden');
        textarea.focus();
    }

    close() {
        this.panel.classList.add('hidden');
        this.currentChallenge = null;
        this.output.textContent = '';
    }

    updateEditorLanguage() {
        const textarea = document.getElementById('code-textarea');
        if (!this.currentChallenge) {
            textarea.value = this.getDefaultCode(this.currentLanguage);
        }
    }

    getDefaultCode(language) {
        const defaults = {
            python: `# Python Magic Spell
print("Hello, magical world!")

# Your spell here...`,
            cpp: `// C++ Sorcery Spell
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, magical world!" << endl;
    
    // Your spell here...
    
    return 0;
}`,
            java: `// Java Enchantment Spell
public class MagicSpell {
    public static void main(String[] args) {
        System.out.println("Hello, magical world!");
        
        // Your spell here...
    }
}`
        };
        return defaults[language] || '';
    }

    executeCode() {
        const textarea = document.getElementById('code-textarea');
        const code = textarea.value;
        
        try {
            const result = this.simulateExecution(code, this.currentLanguage);
            this.displayResult(result);
            
            if (this.currentChallenge) {
                this.checkChallengeSolution(code, result);
            }
        } catch (error) {
            this.displayError(error.message);
        }
    }

    simulateExecution(code, language) {
        // Basic code simulation - in production, use web workers or server execution
        switch (language) {
            case 'python':
                return this.simulatePython(code);
            case 'cpp':
                return this.simulateCpp(code);
            case 'java':
                return this.simulateJava(code);
            default:
                throw new Error('Unsupported language');
        }
    }

    simulatePython(code) {
        let output = '';
        
        // Simple print simulation
        const printMatches = code.match(/print\((.*?)\)/g);
        if (printMatches) {
            printMatches.forEach(match => {
                const content = match.match(/print\((.*?)\)/)[1];
                // Remove quotes and evaluate simple expressions
                let value = content.replace(/['"]/g, '');
                
                // Handle simple variables and expressions
                if (value.includes('range(')) {
                    const rangeMatch = code.match(/for\s+\w+\s+in\s+range\((\d+),?\s*(\d+)?\)/);
                    if (rangeMatch) {
                        const start = rangeMatch[2] ? parseInt(rangeMatch[1]) : 1;
                        const end = rangeMatch[2] ? parseInt(rangeMatch[2]) : parseInt(rangeMatch[1]) + 1;
                        for (let i = start; i < end; i++) {
                            output += i + '\n';
                        }
                        return output.trim();
                    }
                }
                
                output += value + '\n';
            });
        }
        
        // Handle function definitions and calls
        if (code.includes('def ') && code.includes('return')) {
            const funcMatch = code.match(/def\s+(\w+)\s*\([^)]*\):\s*return\s+(.+)/);
            if (funcMatch) {
                output += 'Function defined successfully\n';
                
                // Look for function calls
                const callMatch = code.match(new RegExp(funcMatch[1] + '\\s*\\([^)]*\\)'));
                if (callMatch) {
                    output += 'Function executed\n';
                }
            }
        }
        
        return output.trim() || 'Code executed successfully!';
    }

    simulateCpp(code) {
        let output = '';
        
        // Simple cout simulation
        const coutMatches = code.match(/cout\s*<<\s*[^;]+/g);
        if (coutMatches) {
            coutMatches.forEach(match => {
                const content = match.replace(/cout\s*<<\s*/, '').replace(/\s*<<\s*endl/, '');
                let value = content.replace(/['"]/g, '');
                output += value + '\n';
            });
        }
        
        // Check for basic syntax
        if (code.includes('#include') && code.includes('int main()') && code.includes('return 0;')) {
            if (!output) output = 'C++ program compiled and executed successfully!';
        } else {
            throw new Error('Missing required C++ structure (includes, main function, or return statement)');
        }
        
        return output.trim();
    }

    simulateJava(code) {
        let output = '';
        
        // Simple System.out.println simulation
        const printMatches = code.match(/System\.out\.println\s*\([^)]+\)/g);
        if (printMatches) {
            printMatches.forEach(match => {
                const content = match.match(/System\.out\.println\s*\(([^)]+)\)/)[1];
                let value = content.replace(/['"]/g, '');
                output += value + '\n';
            });
        }
        
        // Check for basic Java structure
        if (code.includes('public class') && code.includes('public static void main')) {
            if (!output) output = 'Java program compiled and executed successfully!';
        } else {
            throw new Error('Missing required Java structure (class declaration or main method)');
        }
        
        return output.trim();
    }

    checkChallengeSolution(code, result) {
        if (!this.currentChallenge) return;
        
        let isCorrect = false;
        let feedback = '';
        
        // Check based on challenge type
        switch (this.currentChallenge.id) {
            case 'loop_sprite_1':
                isCorrect = result.includes('1') && result.includes('10') && 
                           code.includes('for') && code.includes('range');
                feedback = isCorrect ? 
                    'Excellent! Your loop spell works perfectly!' : 
                    'The Loop Sprite needs to see numbers 1 through 10. Try using a for loop with range(1, 11).';
                break;
                
            case 'function_wizard_1':
                isCorrect = code.includes('def') && code.includes('return') && 
                           code.includes('healing_potion');
                feedback = isCorrect ? 
                    'Magnificent! Your healing function is ready for battle!' : 
                    'The Function Wizard needs a proper function definition with a return statement.';
                break;
                
            case 'memory_guardian_1':
                isCorrect = code.includes('*') && code.includes('&') && 
                           result.includes('200');
                feedback = isCorrect ? 
                    'Outstanding! You have mastered pointer magic!' : 
                    'The Memory Guardian needs to see proper pointer usage with * and & operators.';
                break;
                
            case 'class_noble_1':
                isCorrect = code.includes('class') && code.includes('private') && 
                           code.includes('public');
                feedback = isCorrect ? 
                    'Splendid! Your class design shows true nobility!' : 
                    'The Class Noble requires proper encapsulation with private and public members.';
                break;
                
            default:
                isCorrect = result.length > 0 && !result.includes('error');
                feedback = isCorrect ? 
                    'Well done! Your spell has been cast successfully!' : 
                    'Your spell needs more work. Check for errors and try again.';
        }
        
        this.displayFeedback(feedback, isCorrect);
        
        if (isCorrect && this.onChallengeComplete) {
            this.onChallengeComplete(this.currentChallenge, this.currentLanguage);
        }
    }

    displayResult(result) {
        this.output.style.color = '#00ff00';
        this.output.textContent = result;
    }

    displayError(error) {
        this.output.style.color = '#ff6b6b';
        this.output.textContent = `Spell Error: ${error}`;
    }

    displayFeedback(feedback, isSuccess) {
        const color = isSuccess ? '#00ff00' : '#ffd93d';
        this.output.style.color = color;
        this.output.textContent += '\n\n' + feedback;
    }

    setOnChallengeComplete(callback) {
        this.onChallengeComplete = callback;
    }
}