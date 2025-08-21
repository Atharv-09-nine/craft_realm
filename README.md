# CodeCrafts Adventures

🎮 **Transform programming education into an immersive RPG adventure**

An innovative gamified coding education platform that makes learning to code as engaging as playing your favorite RPG. Build skills, complete quests, and join a global community of developers.

## ✨ Features

- **🎯 Interactive Challenges**: Real-time code editor with instant feedback
- **🏆 RPG Progression**: Level up, unlock achievements, and customize your character
- **👥 Multiplayer Learning**: Collaborate, compete, and learn together
- **🎨 Beautiful UI**: Modern, responsive design with smooth animations
- **📊 Progress Tracking**: Detailed analytics and personalized learning paths

## 🚀 Quick Start

### Prerequisites
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/codecrafts-adventures.git
cd codecrafts-adventures
```

2. **Install dependencies**
```bash
npm install
```
*This will download all required packages (~380MB) into a `node_modules` folder*

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:3000`

### Other Commands
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint code
npm run lint
```

### Troubleshooting

**If you get "npm not recognized" error on Windows:**
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Restart your terminal/command prompt
3. Run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` (PowerShell only)

**If the site shows a white screen:**
- Make sure all dependencies installed successfully (`npm install`)
- Check the browser console for errors (F12)
- Ensure you're using Node.js version 16+

## 🏗️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Monaco Editor** - Professional code editor

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Fast unit testing
- **TypeScript** - Type safety (optional)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components (Header, Sidebar)
│   ├── CodeEditor/     # Monaco editor integration
│   ├── Game/           # Game-specific components
│   └── UI/             # Generic UI components
├── pages/              # Route pages
├── store/              # Redux store and slices
├── styles/             # Global styles and Tailwind config
├── utils/              # Utility functions
└── main.jsx           # Application entry point
```

## 🎮 Game Features

### Character System
- **Multiple Classes**: Frontend Warrior, Backend Mage, DevOps Rogue, etc.
- **Skill Trees**: 5 main branches with 20+ skills each
- **Customization**: 50+ avatar options and unlockable cosmetics

### Challenge System
- **Progressive Difficulty**: From beginner to expert levels
- **Multiple Languages**: JavaScript, Python, Java, C++
- **Real-time Validation**: Automated testing and feedback
- **Achievement Rewards**: Unlock badges and XP bonuses

### Social Features
- **Community Hub**: Forums, chat, and collaboration
- **Leaderboards**: Global and category-specific rankings
- **Mentorship**: Connect with experienced developers
- **Team Challenges**: Collaborative coding projects

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

### Environment Setup

1. **Node.js**: Version 16 or higher
2. **Package Manager**: npm or yarn
3. **Editor**: VS Code recommended with extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Prettier - Code formatter

## 🎯 Roadmap

### Phase 1: Foundation ✅
- [x] React application setup
- [x] Basic UI components
- [x] Redux state management
- [x] Monaco editor integration
- [x] Character creation system

### Phase 2: Core Features (In Progress)
- [ ] Challenge system implementation
- [ ] Code execution environment
- [ ] Achievement system
- [ ] Progress tracking
- [ ] Mobile responsiveness

### Phase 3: Advanced Features
- [ ] Multiplayer functionality
- [ ] Real-time collaboration
- [ ] AI-powered assistance
- [ ] Advanced analytics
- [ ] External integrations

### Phase 4: Polish & Launch
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Comprehensive testing
- [ ] Documentation
- [ ] Marketing materials

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Support

- ⭐ Star this repository if you find it helpful
- 🐛 Report bugs via GitHub Issues
- 💡 Suggest features via GitHub Discussions
- 📧 Contact us at hello@codecrafts.dev

---

**Ready to start your coding adventure?** 🚀

Join thousands of developers who are leveling up their skills with CodeCrafts Adventures!