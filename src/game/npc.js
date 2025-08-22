// NPC System for CodeRealm
export class NPC {
    constructor(x, y, name, language, dialogues, challenges = []) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.language = language;
        this.dialogues = dialogues;
        this.challenges = challenges;
        this.currentDialogue = 0;
        this.isInteracting = false;
        this.completed = false;
        this.size = 25;
        this.animationFrame = 0;
    }

    interact(player) {
        this.isInteracting = true;
        
        if (this.completed) {
            return {
                type: 'dialogue',
                text: this.getCompletedDialogue(),
                npc: this
            };
        }
        
        if (this.currentDialogue < this.dialogues.length) {
            const dialogue = this.dialogues[this.currentDialogue];
            this.currentDialogue++;
            
            if (this.currentDialogue >= this.dialogues.length && this.challenges.length > 0) {
                return {
                    type: 'challenge',
                    challenge: this.challenges[0],
                    npc: this
                };
            }
            
            return {
                type: 'dialogue',
                text: dialogue,
                npc: this
            };
        }
        
        return null;
    }

    completeChallenge() {
        this.completed = true;
        this.currentDialogue = 0;
    }

    getCompletedDialogue() {
        const completedDialogues = {
            'Loop Sprite': "Your loop magic grows stronger! Keep practicing iteration spells.",
            'Memory Guardian': "Excellent pointer work! You understand the essence of memory.",
            'Class Noble': "Magnificent class design! You truly grasp object-oriented magic.",
            'Function Wizard': "Your functions are elegant! Reusable magic is powerful magic.",
            'Interface Ambassador': "Perfect contract implementation! Your code is truly portable."
        };
        
        return completedDialogues[this.name] || "Well done, young sorcerer!";
    }

    update() {
        this.animationFrame += 0.1;
    }

    draw(ctx) {
        // NPC shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y + this.size/2 + 3, this.size/2, this.size/4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Floating animation
        const floatOffset = Math.sin(this.animationFrame) * 3;
        const drawY = this.y + floatOffset;
        
        // NPC body based on type
        this.drawNPCBody(ctx, drawY);
        
        // Completion indicator
        if (this.completed) {
            ctx.fillStyle = '#00ff00';
            ctx.beginPath();
            ctx.arc(this.x + this.size/2, drawY - this.size/2, 8, 0, Math.PI * 2);
            ctx.fill();
            
            // Checkmark
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(this.x + this.size/2 - 3, drawY - this.size/2);
            ctx.lineTo(this.x + this.size/2 - 1, drawY - this.size/2 + 2);
            ctx.lineTo(this.x + this.size/2 + 3, drawY - this.size/2 - 2);
            ctx.stroke();
        }
        
        // Interaction indicator
        if (this.isInteracting) {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.beginPath();
            ctx.arc(this.x, drawY - this.size - 10, 5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Name label
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(this.name, this.x, drawY - this.size - 20);
        
        // Language indicator
        ctx.fillStyle = this.getLanguageColor();
        ctx.font = '10px Arial';
        ctx.fillText(this.language.toUpperCase(), this.x, drawY + this.size + 15);
        ctx.textAlign = 'left';
    }

    drawNPCBody(ctx, drawY) {
        switch(this.name) {
            case 'Loop Sprite':
                this.drawLoopSprite(ctx, drawY);
                break;
            case 'Memory Guardian':
                this.drawMemoryGuardian(ctx, drawY);
                break;
            case 'Class Noble':
                this.drawClassNoble(ctx, drawY);
                break;
            case 'Function Wizard':
                this.drawFunctionWizard(ctx, drawY);
                break;
            case 'Interface Ambassador':
                this.drawInterfaceAmbassador(ctx, drawY);
                break;
            default:
                this.drawDefaultNPC(ctx, drawY);
        }
    }

    drawLoopSprite(ctx, drawY) {
        // Ethereal sprite body
        ctx.fillStyle = 'rgba(144, 238, 144, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, drawY, this.size/2, 0, Math.PI * 2);
        ctx.fill();
        
        // Spiral pattern
        ctx.strokeStyle = '#90EE90';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i < 20; i++) {
            const angle = (i / 20) * Math.PI * 4 + this.animationFrame;
            const radius = (i / 20) * this.size/2;
            const x = this.x + Math.cos(angle) * radius;
            const y = drawY + Math.sin(angle) * radius;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    drawMemoryGuardian(ctx, drawY) {
        // Armored guardian
        ctx.fillStyle = '#708090';
        ctx.fillRect(this.x - this.size/2, drawY - this.size/2, this.size, this.size);
        
        // Helmet
        ctx.fillStyle = '#2F4F4F';
        ctx.fillRect(this.x - this.size/2 + 2, drawY - this.size/2 + 2, this.size - 4, this.size/2);
        
        // Visor
        ctx.fillStyle = '#000';
        ctx.fillRect(this.x - this.size/2 + 4, drawY - this.size/2 + 6, this.size - 8, 6);
        
        // Memory symbols (pointer arrows)
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x - 8, drawY);
        ctx.lineTo(this.x - 2, drawY);
        ctx.moveTo(this.x - 4, drawY - 2);
        ctx.lineTo(this.x - 2, drawY);
        ctx.lineTo(this.x - 4, drawY + 2);
        ctx.stroke();
    }

    drawClassNoble(ctx, drawY) {
        // Noble robes
        ctx.fillStyle = '#4B0082';
        ctx.fillRect(this.x - this.size/2, drawY - this.size/2, this.size, this.size);
        
        // Crown
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(this.x - this.size/2 + 3, drawY - this.size/2 - 5, this.size - 6, 8);
        
        // Jewels on crown
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(this.x - 5, drawY - this.size/2 - 1, 2, 0, Math.PI * 2);
        ctx.arc(this.x + 5, drawY - this.size/2 - 1, 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Class diagram symbol
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x - 6, drawY - 3, 12, 6);
        ctx.beginPath();
        ctx.moveTo(this.x - 6, drawY - 1);
        ctx.lineTo(this.x + 6, drawY - 1);
        ctx.stroke();
    }

    drawFunctionWizard(ctx, drawY) {
        // Wizard robes
        ctx.fillStyle = '#800080';
        ctx.fillRect(this.x - this.size/2, drawY - this.size/2, this.size, this.size);
        
        // Wizard hat
        ctx.fillStyle = '#4B0082';
        ctx.beginPath();
        ctx.moveTo(this.x, drawY - this.size/2 - 15);
        ctx.lineTo(this.x - 8, drawY - this.size/2);
        ctx.lineTo(this.x + 8, drawY - this.size/2);
        ctx.closePath();
        ctx.fill();
        
        // Stars on hat
        ctx.fillStyle = '#FFD700';
        for (let i = 0; i < 3; i++) {
            const starX = this.x - 4 + i * 4;
            const starY = drawY - this.size/2 - 8 + i * 2;
            this.drawStar(ctx, starX, starY, 2);
        }
        
        // Function symbol f(x)
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('f(x)', this.x, drawY + 2);
        ctx.textAlign = 'left';
    }

    drawInterfaceAmbassador(ctx, drawY) {
        // Diplomatic attire
        ctx.fillStyle = '#000080';
        ctx.fillRect(this.x - this.size/2, drawY - this.size/2, this.size, this.size);
        
        // Formal collar
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(this.x - this.size/2 + 2, drawY - this.size/2 + 2, this.size - 4, 6);
        
        // Tie
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x - 2, drawY - this.size/2 + 8, 4, 8);
        
        // Interface symbol (contract scroll)
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x - 4, drawY + 2, 8, 6);
        ctx.beginPath();
        ctx.moveTo(this.x - 2, drawY + 4);
        ctx.lineTo(this.x + 2, drawY + 4);
        ctx.moveTo(this.x - 2, drawY + 6);
        ctx.lineTo(this.x + 2, drawY + 6);
        ctx.stroke();
    }

    drawDefaultNPC(ctx, drawY) {
        ctx.fillStyle = this.completed ? '#00ff00' : '#ff6b6b';
        ctx.fillRect(this.x - this.size/2, drawY - this.size/2, this.size, this.size);
    }

    drawStar(ctx, x, y, size) {
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const angle = (i * 144 - 90) * Math.PI / 180;
            const x1 = x + Math.cos(angle) * size;
            const y1 = y + Math.sin(angle) * size;
            if (i === 0) ctx.moveTo(x1, y1);
            else ctx.lineTo(x1, y1);
        }
        ctx.closePath();
        ctx.fill();
    }

    getLanguageColor() {
        const colors = {
            python: '#3776ab',
            cpp: '#00599c',
            java: '#ed8b00'
        };
        return colors[this.language] || '#ffffff';
    }
}