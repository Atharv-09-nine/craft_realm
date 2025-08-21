// World and Environment Management
export class World {
    constructor() {
        this.regions = {
            pythonForest: new PythonForest(),
            cppCitadel: new CppCitadel(),
            javaArchipelago: new JavaArchipelago()
        };
        this.currentRegion = 'pythonForest';
    }

    getCurrentRegion() {
        return this.regions[this.currentRegion];
    }

    switchRegion(regionName) {
        if (this.regions[regionName]) {
            this.currentRegion = regionName;
            return true;
        }
        return false;
    }

    render(ctx, canvas) {
        this.getCurrentRegion().render(ctx, canvas);
    }
}

class PythonForest {
    constructor() {
        this.name = "Python Forest";
        this.backgroundColor = "#1a4d1a";
        this.trees = this.generateTrees();
    }

    generateTrees() {
        const trees = [];
        for (let i = 0; i < 15; i++) {
            trees.push({
                x: Math.random() * 800,
                y: Math.random() * 600 + 100,
                size: Math.random() * 30 + 20
            });
        }
        return trees;
    }

    render(ctx, canvas) {
        // Background
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Trees
        this.trees.forEach(tree => {
            ctx.fillStyle = "#2d5016";
            ctx.fillRect(tree.x, tree.y, 15, tree.size);
            ctx.fillStyle = "#4d7c0f";
            ctx.beginPath();
            ctx.arc(tree.x + 7, tree.y - 10, tree.size * 0.6, 0, Math.PI * 2);
            ctx.fill();
        });

        // Magical particles
        this.renderMagicalParticles(ctx);
    }

    renderMagicalParticles(ctx) {
        const time = Date.now() * 0.001;
        for (let i = 0; i < 20; i++) {
            const x = (Math.sin(time + i) * 100) + (i * 40);
            const y = (Math.cos(time * 0.5 + i) * 50) + 200;
            
            ctx.fillStyle = `rgba(144, 238, 144, ${0.3 + Math.sin(time + i) * 0.3})`;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

class CppCitadel {
    constructor() {
        this.name = "C++ Citadel";
        this.backgroundColor = "#2c2c54";
        this.structures = this.generateStructures();
    }

    generateStructures() {
        return [
            { x: 200, y: 300, width: 100, height: 150, type: 'tower' },
            { x: 400, y: 250, width: 150, height: 200, type: 'fortress' },
            { x: 600, y: 320, width: 80, height: 130, type: 'tower' }
        ];
    }

    render(ctx, canvas) {
        // Background
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Stone structures
        this.structures.forEach(structure => {
            ctx.fillStyle = "#6c7b7f";
            ctx.fillRect(structure.x, structure.y, structure.width, structure.height);
            
            // Windows
            ctx.fillStyle = "#ffd700";
            for (let i = 0; i < 3; i++) {
                ctx.fillRect(structure.x + 20, structure.y + 30 + (i * 40), 15, 15);
                ctx.fillRect(structure.x + structure.width - 35, structure.y + 30 + (i * 40), 15, 15);
            }
        });

        // Lightning effects
        this.renderLightning(ctx);
    }

    renderLightning(ctx) {
        const time = Date.now() * 0.003;
        if (Math.sin(time) > 0.8) {
            ctx.strokeStyle = "#87ceeb";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(100, 50);
            ctx.lineTo(120 + Math.random() * 20, 100);
            ctx.lineTo(140 + Math.random() * 20, 150);
            ctx.stroke();
        }
    }
}

class JavaArchipelago {
    constructor() {
        this.name = "Java Archipelago";
        this.backgroundColor = "#1e3a8a";
        this.islands = this.generateIslands();
        this.bridges = this.generateBridges();
    }

    generateIslands() {
        return [
            { x: 150, y: 200, radius: 80 },
            { x: 400, y: 300, radius: 100 },
            { x: 650, y: 250, radius: 70 },
            { x: 300, y: 450, radius: 60 }
        ];
    }

    generateBridges() {
        return [
            { from: 0, to: 1 },
            { from: 1, to: 2 },
            { from: 1, to: 3 }
        ];
    }

    render(ctx, canvas) {
        // Water background
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Water waves
        this.renderWaves(ctx, canvas);

        // Bridges
        this.bridges.forEach(bridge => {
            const island1 = this.islands[bridge.from];
            const island2 = this.islands[bridge.to];
            
            ctx.strokeStyle = "#8b4513";
            ctx.lineWidth = 8;
            ctx.beginPath();
            ctx.moveTo(island1.x, island1.y);
            ctx.lineTo(island2.x, island2.y);
            ctx.stroke();
        });

        // Islands
        this.islands.forEach(island => {
            ctx.fillStyle = "#22c55e";
            ctx.beginPath();
            ctx.arc(island.x, island.y, island.radius, 0, Math.PI * 2);
            ctx.fill();
            
            // Palm trees
            ctx.fillStyle = "#16a34a";
            ctx.fillRect(island.x - 5, island.y - 30, 10, 25);
            ctx.beginPath();
            ctx.arc(island.x, island.y - 35, 15, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    renderWaves(ctx, canvas) {
        const time = Date.now() * 0.002;
        ctx.strokeStyle = "rgba(59, 130, 246, 0.5)";
        ctx.lineWidth = 2;
        
        for (let y = 0; y < canvas.height; y += 30) {
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x += 10) {
                const waveY = y + Math.sin((x + time * 100) * 0.01) * 5;
                if (x === 0) ctx.moveTo(x, waveY);
                else ctx.lineTo(x, waveY);
            }
            ctx.stroke();
        }
    }
}