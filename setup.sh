#!/bin/bash

echo "========================================"
echo "   CodeCrafts Adventures Setup"
echo "========================================"
echo

echo "Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install Node.js from: https://nodejs.org/"
    echo "Then run this setup script again."
    exit 1
fi

echo "Node.js found! Version:"
node --version

echo
echo "Installing dependencies..."
echo "This may take a few minutes..."
npm install

if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install dependencies!"
    echo "Please check your internet connection and try again."
    exit 1
fi

echo
echo "========================================"
echo "   Setup Complete!"
echo "========================================"
echo
echo "To start the development server, run:"
echo "  npm run dev"
echo
echo "Then open your browser to: http://localhost:3000"
echo