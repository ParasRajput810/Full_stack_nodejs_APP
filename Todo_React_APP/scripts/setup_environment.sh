#!/bin/bash
set -e

# Define the target directory
TARGET_DIR="/var/www/my-react-app"

# Check if the directory exists
if [ -d "$TARGET_DIR" ]; then
  echo "Directory $TARGET_DIR exists. Cleaning up..."
  rm -rf "$TARGET_DIR"  # Remove the entire directory
fi

# Recreate the target directory
mkdir -p "$TARGET_DIR"

# Clone the repository into the target directory
GIT_REPO="https://github.com/ParasRajput810/Todo_React_APP.git"
git clone "$GIT_REPO" "$TARGET_DIR"

echo "Setup environment completed. Repository cloned to $TARGET_DIR."
