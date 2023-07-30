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

If you are using a module bundler like Webpack or Browserify...

```bash
npm install zoomifyjs
```
Or from yarn
 
```bash
yarn add zoomifyjs # Available soon....
```

```js
import ZoomifyJs from 'ZoomifyJs';
new ZoomifyJs();
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
Index (zero-based) of the starting slide [(example)](http://codepen.io/pawelgrzybek/pen/vmBLER).

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
#### Example 1

<picture class="image-container">
    <img 
        src="./assets/car-image-300x300.webp"
        zoomify="./assets/car-image.webp"
        alt="Car-Image"
        class="zoomifyJs"
        width="400"
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

#### Example 2 (Click to zoom)

<picture class="image-container">
    <img 
        src="./assets/car-image-300x300.webp"
        zoomify="./assets/car-image.webp"
        alt="Car-Image"
        class="zoomifyJs-click-to-zoom"
        width="400"
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

## Contributing

```
Coming soon...
```

## Roadmap

1. [] Register on npm package registry 
2. [] Register on yarn package registry 
3. [] Register for cdn.
4. [] Enable zoom on multiple image with single instance  
5. [] Allow DOMElement for selector value
6. [] Image parent element styling improvement (needs basic styling on instance initialization, before clickToZoom)
7. [] Change image source bug fix
8. [] Allow customizing click to zoom button stylings
9. [] Codepen collection for more examples