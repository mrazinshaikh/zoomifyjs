#!/bin/bash

# Run ESLint to fix linting issues in src/zoomifyJs.js
eslint --fix src/

# Run Vite build
vite build

# Copy the generated UMD file to docs/assets
cp dist/zoomifyjs.umd.js docs/assets/zoomifyjs.umd.js

# Sync docs licence with licence in root
cp -f ./LICENCE ./docs/LICENCE