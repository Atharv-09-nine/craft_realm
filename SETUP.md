# 🚀 CodeCrafts Adventures - Setup Guide

## Why is `node_modules` not included?

The `node_modules` folder contains all the project dependencies and is typically **380MB+** in size. It's excluded from GitHub repositories because:

1. **Size Limits**: GitHub has file size limits
2. **Platform Differences**: Dependencies may vary between operating systems
3. **Version Control**: Dependencies are managed through `package.json`
4. **Standard Practice**: All Node.js projects work this way

## 📋 Prerequisites

Before you can run CodeCrafts Adventures, you need:

### 1. Node.js (Required)
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Version**: 16.0.0 or higher
- **Includes**: npm (Node Package Manager)

### 2. Git (Optional, for cloning)
- **Download**: [https://git-scm.com/](https://git-scm.com/)

## 🛠️ Installation Methods

### Method 1: Automatic Setup (Recommended)

**For Windows:**
1. Download the project
2. Double-click `setup.bat`
3. Follow the prompts

**For Mac/Linux:**
1. Download the project
2. Open terminal in project folder
3. Run: `./setup.sh`

### Method 2: Manual Setup

1. **Install Node.js** from [nodejs.org](https://nodejs.org/)

2. **Download the project**
   ```bash
   git clone https://github.com/yourusername/codecrafts-adventures.git
   cd codecrafts-adventures
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   *This downloads ~380MB of dependencies*

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Troubleshooting

### "npm is not recognized" (Windows)
1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Restart your command prompt/PowerShell
3. If still not working, run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

### "Permission denied" (Mac/Linux)
```bash
sudo npm install
```

### White screen in browser
1. Check that `npm install` completed successfully
2. Make sure you're using Node.js 16+
3. Check browser console (F12) for errors

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

## 📁 What Gets Downloaded

When you run `npm install`, these packages are downloaded:

### Core Dependencies (~200MB)
- **React** - UI framework
- **Vite** - Build tool
- **Monaco Editor** - Code editor
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management

### Development Dependencies (~180MB)
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Testing framework

## 🚀 Available Commands

After setup, you can use these commands:

```bash
# Start development server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## 🌐 Deployment

To deploy your project:

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting service

## ❓ FAQ

**Q: Why is the download so big after npm install?**
A: Modern web applications require many dependencies. This is normal for React projects.

**Q: Can I delete node_modules?**
A: Yes, you can delete it anytime and run `npm install` again to restore it.

**Q: Do I need to upload node_modules to my own GitHub?**
A: No! Always exclude it with `.gitignore`. Others will run `npm install` to get dependencies.

**Q: What if npm install fails?**
A: Try:
- Check your internet connection
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

## 🆘 Need Help?

If you're still having trouble:
1. Check that Node.js is properly installed: `node --version`
2. Make sure npm works: `npm --version`
3. Try running the setup script again
4. Check the browser console for errors (F12)

---

**Happy Coding!** 🎮✨