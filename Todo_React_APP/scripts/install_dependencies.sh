#!/bin/bash
set -e

# Navigate to the app directory
TARGET_DIR="/var/www/my-react-app"
cd "$TARGET_DIR"

# Install Node.js dependencies
npm install

echo "Dependencies installed successfully."
