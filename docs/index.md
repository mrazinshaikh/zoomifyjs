---
layout: page
---

Zoomifyjs is a lightweight (only 1kb gzipped) image zoom plugin with no dependencies and no styling. As Brad Frost once said "do that shit yourself". It is 100% open source and [available on Github](https://github.com/mrazinshaikh/zoomifyjs). It is free to use on personal and commercial projects. Use it with your favourite module bundler or by manually injecting the script into your project.

<a href="https://github.com/mrazinshaikh/zoomifyjs/releases" class="btn">Download ZoomifyJs from Github</a>

1. [Installation](#installation)
2. [Options](#options)
3. [API](#api)
4. [Example](#example)
5. [Contributing](#contributing)
6. [Roadmap](#roadmap)
7. [extra](#extra)

## Installation

Setup is easy. A little bit of markup...

```html
<picture>
    <img 
        src="./assets/car-image-300x300.webp"
        zoomify="./assets/car-image.webp"
        alt="Car-Image"
        id="zoomifyJs"
    >
</picture>
```

If you are using a module bundler like Webpack or Vite...

```bash
npm install zoomifyjs
```
Or from yarn
 
```bash
yarn add zoomifyjs # Available soon....
```

```js
import ZoomifyJs from "zoomifyjs";
new ZoomifyJs();
```

Or include from cdn
```
<script src="https://unpkg.com/zoomifyjs@latest/dist/zoomifyjs.umd.js"></script>
```

...or manually inject the minified script into your website.

```html
<script src="zoomifyjs.umd.js"></script>
<script>
  new ZoomifyJs();
</script>
```

## Options

ZoomifyJs comes with a few (optional) settings that you can change by passing an object as an argument. Default values are presented below.

```js
new ZoomifyJs({
  selector: '.zoomifyJs',
  transitionDuration: 300,
  easing: 'ease-in-out',
  scale: 2,
  clickToZoom: true
});
```

**`selector`** (string)  
The selector to use as a carousel. Make sure to set proper sizing on image element (which will be used on parent element as max sizing to prevent image overflowing on scale)

**`transitionDuration`** (number)  
Zoom transition duration in milliseconds.

**`easing`** (string)  
It is like a CSS `transition-timing-function` — describes acceleration curve.

**`scale`** (number)  
The number of zoom scale amount.

**`clickToZoom`** (boolean)  
Enable zoom after click on the image.

## Api

**`destroy`** (function)  
Remove zoom instance from the element.

## Example

```html
<picture>
    <img 
        src="./assets/car-image-300x300.webp"
        zoomify="./assets/car-image.webp"
        alt="Car-Image"
        id="zoomifyJs"
    >
</picture>
```

```js
const zoomifyJs = new ZoomifyJs();
```
### Example 1

<picture class="image-container">
    <img 
        src="./assets/car-image-300x300.webp"
        zoomify="./assets/car-image.webp"
        alt="Car-Image"
        class="zoomifyJs"
        width="400"
        height="266"
        loading="lazy"
    >
</picture>

<style>
  .zoomifyJs {
    width: 400px;
  }
</style>

<script>
  const zoomifyJs = new ZoomifyJs();
</script>

### Example 2 (Click to zoom)

<picture class="image-container">
    <img 
        src="./assets/car-image-300x300.webp"
        zoomify="./assets/car-image.webp"
        alt="Car-Image"
        class="zoomifyJs-click-to-zoom"
        width="400"
        height="266"
        loading="lazy"
    >
</picture>

<script>
  const zoomifyJs2 = new ZoomifyJs({selector: '.zoomifyJs-click-to-zoom', clickToZoom: true});
</script>

<style>
  .image-container:has(.zoomifyJs-click-to-zoom) {
    display: block;
    max-width: 400px;
  }
  .zoomifyJs-click-to-zoom{
    width: 400px;
  }
</style>

## More examples

```
Coming soon...
```

## Contribution

```
Coming soon...
```

## Roadmap

- [x] Register on npm package registry 
- [] Register on yarn package registry 
- [] Register for cdn.
- [] Enable zoom on multiple image with single instance  
- [] Allow DOMElement for selector value
- [] Image parent element styling improvement (needs basic styling on instance initialization, before clickToZoom)
- [] Change image source bug fix
- [] Allow customizing click to zoom button stylings
- [] Codepen collection for more examples

## Extra

- Code structure and initial docs on github-pages using jekyll is inspired from [siema](https://pawelgrzybek.github.io/siema/) a carousel plugin.

## License

Made with ❤️

Published under [MIT License](./LICENCE).