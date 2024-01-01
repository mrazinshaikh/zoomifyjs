#!/bin/bash

# Run ESLint to fix linting issues in src/zoomifyJs.js
eslint --fix src/zoomifyJs.js

# Run Vite build
vite build

# Read version from package.json
VERSION=$(node -pe "require('./package.json').version")

# Add JSDoc block to UMD file
UMD_CONTENT="/**"
UMD_CONTENT+="\n * @fileOverview"
UMD_CONTENT+="\n * This is a Universal Module Definition (UMD) file for the ZoomifyJs JavaScript library."
UMD_CONTENT+="\n * It can be used in both browser environments and CommonJS/AMD environments."
UMD_CONTENT+="\n *"
UMD_CONTENT+="\n * @version $VERSION"
UMD_CONTENT+="\n * @see {@link https://github.com/mrazinshaikh/zoomifyjs/} for the latest version and documentation."
UMD_CONTENT+="\n *"
UMD_CONTENT+="\n * @description"
UMD_CONTENT+="\n * ZoomifyJs is a versatile JavaScript library that provides image zoom capabilities."
UMD_CONTENT+="\n * This UMD file is suitable for usage in various environments, making it flexible for different project setups."
UMD_CONTENT+="\n * It supports both asynchronous module loading (AMD) and CommonJS (Node.js) environments."
UMD_CONTENT+="\n *"
UMD_CONTENT+="\n * @module ZoomifyJs"
UMD_CONTENT+="\n * @license MIT"
UMD_CONTENT+="\n */"
UMD_CONTENT+="\n"

# Append original content to UMD file
echo -e "$UMD_CONTENT\n$(cat dist/zoomifyjs.umd.js)" > dist/zoomifyjs.umd.js

# Add JSDoc block to MJS file
MJS_CONTENT="/**"
MJS_CONTENT+="\n * @fileOverview"
MJS_CONTENT+="\n * This is an ECMAScript module (ESM) file for the ZoomifyJs JavaScript library."
MJS_CONTENT+="\n * It is designed for usage in modern JavaScript environments, supporting ECMAScript modules."
MJS_CONTENT+="\n *"
MJS_CONTENT+="\n * @version $VERSION"
MJS_CONTENT+="\n * @see {@link https://github.com/mrazinshaikh/zoomifyjs/} for the latest version and documentation."
MJS_CONTENT+="\n *"
MJS_CONTENT+="\n * @description"
MJS_CONTENT+="\n * ZoomifyJs is a versatile JavaScript library that provides image zoom capabilities."
MJS_CONTENT+="\n * This ECMAScript module is suitable for modern web development, leveraging native module syntax"
MJS_CONTENT+="\n * and allowing for a more modular code structure."
MJS_CONTENT+="\n *"
MJS_CONTENT+="\n * @module ZoomifyJs"
MJS_CONTENT+="\n * @license MIT"
MJS_CONTENT+="\n */"
MJS_CONTENT+="\n"

# Append original content to MJS file
echo -e "$MJS_CONTENT\n$(cat dist/zoomifyjs.mjs)" > dist/zoomifyjs.mjs

# Unset variables to release memory
unset UMD_CONTENT
unset MJS_CONTENT

# Copy the generated UMD file to docs/assets
cp dist/zoomifyjs.umd.js docs/assets/zoomifyjs.umd.js

# Sync docs licence with licence in root
cp -f ./LICENCE ./docs/LICENCE