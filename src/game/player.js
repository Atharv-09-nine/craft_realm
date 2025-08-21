// Player Management System
export class Player {
    constructor(x = 100, y = 100) {
        this.x = x;
        this.y = y;
        this.level = 1;
        this.experience = 0;
        this.experienceToNext = 100;
        this.size = 20;
        this.speed = 5;
        this.inventory = new Inventory();
        this.skills = {
            python: 0,
            cpp: 0,
            java: 0
        };
        this.completedChallenges = new Set();
        this.currentRegion = 'pythonForest';
    }

    move(dx, dy) {
        this.x += dx * this.speed;
        this.y += dy * this.speed;
        
        // Keep player on screen with boundaries
        this.x = Math.max(this.size, Math.min(window.innerWidth - this.size, this.x));
        this.y = Math.max(this.size, Math.min(window.innerHeight - this.size, this.y));
    }

    isNear(target, distance = 50) {
        const dx = this.x - target.x;
        const dy = this.y - target.y;
        return Math.sqrt(dx * dx + dy * dy) < distance;
    }

    gainExperience(amount, language = null) {
        this.experience += amount;
        
        // Language-specific skill progression
        if (language && this.skills[language] !== undefined) {
            this.skills[language] += Math.floor(amount / 10);
        }
        
        // Level up check
        while (this.experience >= this.experienceToNext) {
            this.levelUp();
        }
    }

    levelUp() {
        this.experience -= this.experienceToNext;
        this.level++;
        this.experienceToNext = this.level * 100;
        
        // Notify level up
        this.showLevelUpEffect();
    }

    showLevelUpEffect() {
        // Visual effect for leveling up
        console.log(`Level Up! Now level ${this.level}`);
    }

    completeChallenge(challengeId, language, reward = 50) {
        if (!this.completedChallenges.has(challengeId)) {
            this.completedChallenges.add(challengeId);
            this.gainExperience(reward, language);
            return true;
        }
        return false;
    }

    canAccessRegion(regionName) {
        const requirements = {
            pythonForest: () => true, // Always accessible
            cppCitadel: () => this.skills.python >= 50,
            javaArchipelago: () => this.skills.python >= 30 && this.skills.cpp >= 30
        };
        
        return requirements[regionName] ? requirements[regionName]() : false;
    }

    draw(ctx) {
        // Player shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(this.x, this.y + this.size/2 + 5, this.size/2, this.size/4, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Player body
        ctx.fillStyle = '#4a90e2';
        ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        
        // Player robe details
        ctx.fillStyle = '#2c5aa0';
        ctx.fillRect(this.x - this.size/2 + 2, this.y - this.size/2 + 2, this.size - 4, this.size - 4);
        
        // Wizard hat
        ctx.fillStyle = '#1e3a8a';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.size/2 - 15);
        ctx.lineTo(this.x - 8, this.y - this.size/2);
        ctx.lineTo(this.x + 8, this.y - this.size/2);
        ctx.closePath();
        ctx.fill();
        
        // Staff
        ctx.strokeStyle = '#8b4513';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.x + this.size/2 + 5, this.y - this.size/2);
        ctx.lineTo(this.x + this.size/2 + 5, this.y + this.size/2 + 10);
        ctx.stroke();
        
        // Staff orb
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(this.x + this.size/2 + 5, this.y - this.size/2 - 3, 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Level indicator
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Lv.${this.level}`, this.x, this.y - this.size/2 - 25);
        ctx.textAlign = 'left';
    }

    drawUI(ctx, canvas) {
        // Experience bar background
        const barWidth = 200;
        const barHeight = 20;
        const barX = 20;
        const barY = 20;
        
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(barX - 5, barY - 5, barWidth + 10, barHeight + 30);
        
        // Experience bar
        ctx.fillStyle = '#333';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        
        const expProgress = this.experience / this.experienceToNext;
        ctx.fillStyle = '#4a90e2';
        ctx.fillRect(barX, barY, barWidth * expProgress, barHeight);
        
        // Text
        ctx.fillStyle = '#fff';
        ctx.font = '14px Arial';
        ctx.fillText(`Level ${this.level}`, barX, barY - 8);
        ctx.font = '12px Arial';
        ctx.fillText(`${this.experience}/${this.experienceToNext} XP`, barX, barY + barHeight + 15);
        
        // Skills display
        const skillY = barY + 50;
        ctx.fillText('Skills:', barX, skillY);
        ctx.fillText(`Python: ${this.skills.python}`, barX, skillY + 20);
        ctx.fillText(`C++: ${this.skills.cpp}`, barX, skillY + 40);
        ctx.fillText(`Java: ${this.skills.java}`, barX, skillY + 60);
        
        // Instructions
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = '14px Arial';
        ctx.fillText('Arrow keys to move, SPACE to interact', 20, canvas.height - 30);
    }
}

class Inventory {
    constructor() {
        this.items = [];
        this.maxSize = 20;
    }

    addItem(item) {
        if (this.items.length < this.maxSize) {
            this.items.push(item);
            return true;
        }
        return false;
    }

    removeItem(itemId) {
        const index = this.items.findIndex(item => item.id === itemId);
        if (index !== -1) {
            return this.items.splice(index, 1)[0];
        }
        return null;
    }

    hasItem(itemId) {
        return this.items.some(item => item.id === itemId);
    }
}