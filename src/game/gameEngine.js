// Main Game Engine
import { Player } from './player.js';
import { NPC } from './npc.js';
import { World } from './world.js';
import { CodeEditor } from './codeEditor.js';
import { pythonChallenges, pythonNPCs } from '../challenges/python-challenges.js';
import { javaChallenges, javaNPCs } from '../challenges/java-challenges.js';
import { cppChallenges, cppNPCs } from '../challenges/cpp-challenges.js';

export class GameEngine {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.player = new Player(100, 100);
        this.world = new World();
        this.codeEditor = new CodeEditor();
        this.npcs = [];
        this.challenges = new Map();
        this.gameState = 'exploring'; // exploring, coding, dialogue
        this.currentDialogue = null;
        this.keys = {};
        
        this.setupCanvas();
        this.setupEventListeners();
        this.initializeGame();
        this.gameLoop();
    }

    setupCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    setupEventListeners() {
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
            this.handleKeyDown(e);
        });
        
        document.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });
        
        // Window resize
        window.addEventListener('resize', () => this.setupCanvas());
        
        // Code editor callback
        this.codeEditor.setOnChallengeComplete((challenge, language) => {
            this.handleChallengeComplete(challenge, language);
        });
    }

    handleKeyDown(e) {
        if (this.gameState === 'exploring') {
            switch(e.key) {
                case ' ':
                    e.preventDefault();
                    this.checkInteractions();
                    break;
                case 'Escape':
                    this.codeEditor.close();
                    break;
            }
        } else if (this.gameState === 'dialogue') {
            if (e.key === ' ' || e.key === 'Enter') {
                this.advanceDialogue();
            }
        } else if (this.gameState === 'coding') {
            if (e.key === 'Escape') {
                this.codeEditor.close();
                this.gameState = 'exploring';
            }
        }
    }

    initializeGame() {
        this.loadChallenges();
        this.loadNPCs();
    }

    loadChallenges() {
        // Load all challenges into a map for easy access
        [...pythonChallenges, ...javaChallenges, ...cppChallenges].forEach(challenge => {
            this.challenges.set(challenge.id, challenge);
        });
    }

    loadNPCs() {
        // Load NPCs based on current region
        const allNPCs = [...pythonNPCs, ...javaNPCs, ...cppNPCs];
        
        allNPCs.forEach(npcData => {
            const npc = new NPC(
                npcData.position.x,
                npcData.position.y,
                npcData.name,
                this.getLanguageFromNPC(npcData.name),
                npcData.dialogue,
                npcData.challenges
            );
            this.npcs.push(npc);
        });
    }

    getLanguageFromNPC(npcName) {
        const languageMap = {
            'Loop Sprite': 'python',
            'Function Wizard': 'python',
            'List Guardian': 'python',
            'Memory Guardian': 'cpp',
            'Class Architect': 'cpp',
            'Class Noble': 'java',
            'Interface Ambassador': 'java'
        };
        return languageMap[npcName] || 'python';
    }

    checkInteractions() {
        for (let npc of this.npcs) {
            if (this.player.isNear(npc)) {
                const interaction = npc.interact(this.player);
                if (interaction) {
                    this.handleInteraction(interaction);
                }
                break;
            }
        }
    }

    handleInteraction(interaction) {
        switch (interaction.type) {
            case 'dialogue':
                this.startDialogue(interaction.text, interaction.npc);
                break;
            case 'challenge':
                this.startChallenge(interaction.challenge, interaction.npc);
                break;
        }
    }

    startDialogue(text, npc) {
        this.gameState = 'dialogue';
        this.currentDialogue = {
            text: text,
            npc: npc,
            displayedText: '',
            charIndex: 0
        };
    }

    advanceDialogue() {
        if (this.currentDialogue.charIndex < this.currentDialogue.text.length) {
            // Skip to end of current text
            this.currentDialogue.displayedText = this.currentDialogue.text;
            this.currentDialogue.charIndex = this.currentDialogue.text.length;
        } else {
            // End dialogue
            this.gameState = 'exploring';
            this.currentDialogue = null;
        }
    }

    startChallenge(challengeId, npc) {
        const challenge = this.challenges.get(challengeId);
        if (challenge) {
            this.gameState = 'coding';
            this.codeEditor.show(challenge, npc.language);
        }
    }

    handleChallengeComplete(challenge, language) {
        const success = this.player.completeChallenge(challenge.id, language, 50);
        if (success) {
            // Find and mark NPC as completed
            const npc = this.npcs.find(n => n.challenges.includes(challenge.id));
            if (npc) {
                npc.completeChallenge();
            }
        }
        
        this.codeEditor.close();
        this.gameState = 'exploring';
    }

    update() {
        // Handle continuous movement
        if (this.gameState === 'exploring') {
            let dx = 0, dy = 0;
            
            if (this.keys['ArrowLeft'] || this.keys['a']) dx = -1;
            if (this.keys['ArrowRight'] || this.keys['d']) dx = 1;
            if (this.keys['ArrowUp'] || this.keys['w']) dy = -1;
            if (this.keys['ArrowDown'] || this.keys['s']) dy = 1;
            
            if (dx !== 0 || dy !== 0) {
                this.player.move(dx, dy);
            }
        }
        
        // Update NPCs
        this.npcs.forEach(npc => npc.update());
        
        // Update dialogue animation
        if (this.currentDialogue && this.currentDialogue.charIndex < this.currentDialogue.text.length) {
            this.currentDialogue.charIndex += 0.5;
            this.currentDialogue.displayedText = this.currentDialogue.text.substring(0, Math.floor(this.currentDialogue.charIndex));
        }
    }

    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Render world
        this.world.render(this.ctx, this.canvas);
        
        // Render NPCs
        this.npcs.forEach(npc => npc.draw(this.ctx));
        
        // Render player
        this.player.draw(this.ctx);
        
        // Render UI
        this.renderUI();
        
        // Render dialogue
        if (this.currentDialogue) {
            this.renderDialogue();
        }
    }

    renderUI() {
        // Player UI
        this.player.drawUI(this.ctx, this.canvas);
        
        // Region indicator
        const region = this.world.getCurrentRegion();
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(this.canvas.width - 220, 20, 200, 40);
        
        this.ctx.fillStyle = '#fff';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(region.name, this.canvas.width - 120, 45);
        this.ctx.textAlign = 'left';
        
        // Interaction hints
        const nearbyNPC = this.npcs.find(npc => this.player.isNear(npc));
        if (nearbyNPC && this.gameState === 'exploring') {
            this.ctx.fillStyle = 'rgba(74, 144, 226, 0.9)';
            this.ctx.fillRect(this.canvas.width/2 - 150, this.canvas.height - 80, 300, 50);
            
            this.ctx.fillStyle = '#fff';
            this.ctx.font = '14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Press SPACE to talk to ${nearbyNPC.name}`, this.canvas.width/2, this.canvas.height - 50);
            this.ctx.textAlign = 'left';
        }
    }

    renderDialogue() {
        if (!this.currentDialogue) return;
        
        // Dialogue box
        const boxHeight = 120;
        const boxY = this.canvas.height - boxHeight - 20;
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        this.ctx.fillRect(20, boxY, this.canvas.width - 40, boxHeight);
        
        this.ctx.strokeStyle = '#4a90e2';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(20, boxY, this.canvas.width - 40, boxHeight);
        
        // NPC name
        this.ctx.fillStyle = '#4a90e2';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText(this.currentDialogue.npc.name, 40, boxY + 25);
        
        // Dialogue text
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '14px Arial';
        this.wrapText(this.currentDialogue.displayedText, 40, boxY + 50, this.canvas.width - 80, 20);
        
        // Continue indicator
        if (this.currentDialogue.charIndex >= this.currentDialogue.text.length) {
            this.ctx.fillStyle = '#ffd93d';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Press SPACE to continue', this.canvas.width - 40, boxY + boxHeight - 10);
            this.ctx.textAlign = 'left';
        }
    }

    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let currentY = y;
        
        for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + ' ';
            const metrics = this.ctx.measureText(testLine);
            const testWidth = metrics.width;
            
            if (testWidth > maxWidth && n > 0) {
                this.ctx.fillText(line, x, currentY);
                line = words[n] + ' ';
                currentY += lineHeight;
            } else {
                line = testLine;
            }
        }
        this.ctx.fillText(line, x, currentY);
    }

    gameLoop() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.gameLoop());
    }
}