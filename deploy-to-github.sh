#!/bin/bash

# Navigate to project directory
cd "/Users/lennardmeyer/Berneby Solutions/Code-Space/Intern/BernebyWeb"

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
fi

# Add remote if not exists, otherwise update it
if git remote get-url origin > /dev/null 2>&1; then
    echo "Updating remote URL..."
    git remote set-url origin https://github.com/lmbernebysolutions/bernebyweb.git
else
    echo "Adding remote..."
    git remote add origin https://github.com/lmbernebysolutions/bernebyweb.git
fi

# Add all files
echo "Adding all files..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Initial commit: Berneby Solutions Website - Complete redesign with new components" || echo "No changes to commit"

# Set main branch
echo "Setting main branch..."
git branch -M main

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

echo "✅ Code successfully pushed to GitHub!"
