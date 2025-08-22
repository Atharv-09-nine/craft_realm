// CodeRealm Game - Main Entry Point
import { GameEngine } from './game/gameEngine.js';

// Initialize game when page loads
window.addEventListener('load', () => {
    new GameEngine();
});