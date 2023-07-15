export default class Zoomify {
  constructor(selector = '.zoomify', options = {}) {
    // Zoomify
    this.config = {};
    this.selector = selector;

    // flag to check if zoom enabled or not
    this.zoom = false;

    // to check if zoomed in or not
    this.zoomedIn = false;
    this.resolveConfig(options);
    this.handleFocusZoom = e => this.focusZoom.call(this, e);
    this.handleFocusZoomOut = e => this.focusZoomOut.call(this, e);

    this.init();
  }

  resolveConfig(options) {
    const settings = {
      transitionDuration: 300,
      easing: 'ease-in-out'
    };

    const userSettings = options;
    for (const attrName in userSettings) {
      settings[attrName] = userSettings[attrName];
    }

    this.config = settings;
    return settings;
  }

  init() {
    this.setZoomEvents();
  }

  zoomIn() {
    const elm = document.querySelector(this.selector);
    // default style first to avoid jerk on first click on mobile
    elm.style.transition = `scale ${this.config.transitionDuration}ms ${this.config.easing}`;
    this.focusZoom({ target: elm }, true);
  }

  zoomOut() {
    const elm = document.querySelector(this.selector);
    this.focusZoomOut({ target: elm });
  }

  enableZoom(value) {
    this.zoom = value;
    return value ? this.zoomIn() : this.zoomOut();
  }

  setZoomEvents(detach = false) {
    const elm = document.querySelector(this.selector)

    ;['touchstart'].forEach(name => {
      if (detach) {
        elm.removeEventListener(name, () => this.enableZoom(!this.zoom));
      }
      else {
        elm.addEventListener(name, () => this.enableZoom(true), { passive: true });
      }
    })
    ;['mousemove', 'touchmove'].forEach(name => {
      if (detach) {
        elm.removeEventListener(name, this.handleFocusZoom);
      }
      else {
        elm.addEventListener(name, this.handleFocusZoom, { passive: true });
      }
    })
    ;['mouseleave'].forEach(name => {
      if (detach) {
        elm.removeEventListener(name, this.handleFocusZoomOut);
      }
      else {
        elm.addEventListener(name, this.handleFocusZoomOut, {
          passive: true,
        });
      }
    });
    if (detach) {
      this.focusZoomOut({ target: elm });
      elm.removeEventListener('contextmenu', this.preventContextMenu);
      if (
        elm.tagName === 'IMG' &&
            elm.parentElement.tagName === 'PICTURE'
      ) {
        setTimeout(() => {
          elm.parentElement.style.removeProperty('display');
          elm.parentElement.style.removeProperty('overflow');
          elm.style.removeProperty('transition');
        }, this.config.transitionDuration);
      }
    }
    else {
      elm.addEventListener('contextmenu', this.preventContextMenu);
      elm.style.transition = `scale ${this.config.transitionDuration}ms ${this.config.easing}`;
      if (
        elm.tagName === 'IMG' &&
            elm.parentElement.tagName === 'PICTURE'
      ) {
        elm.parentElement.style.display = 'block';
        elm.parentElement.style.overflow = 'hidden';
      }
    }
    // document.querySelector(this.selector).zoomify = this
  }

  preventContextMenu(e) {
    e.preventDefault();
  }

  static inBoundaries(bounds, x, y) {
    const l = bounds.left;
    const t = bounds.top;
    const h = bounds.height;
    const w = bounds.width;
    const maxX = l + w;
    const maxY = t + h;
    return (y <= maxY && y >= t) && (x <= maxX && x >= l);
  }

  focusZoom(e, force = false) {
    const img = e.target;
    const imgRect = img.getBoundingClientRect();
    let pageX = e.pageX;
    let pageY = e.pageY;
    if (e.constructor.name === 'TouchEvent') {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
    }

    // prevent image move when cursor is out of bound
    if (!force && !Zoomify.inBoundaries(imgRect, pageX, pageY)) { return; }
    const offsetX = ((pageX - imgRect.left) / imgRect.width) * 100;
    const offsetY = ((pageY - imgRect.top) / imgRect.height) * 100;
    img.style.scale = 1.6;
    img.style.transformOrigin = `${offsetX}% ${offsetY}%`;
    this.zoomedIn = true;
  }

  focusZoomOut(e) {
    const img = e.target;
    img.style.removeProperty('scale');
    setTimeout(() => {
      img.style.removeProperty('transform-origin');
    }, this.config.transitionDuration);
    this.zoomedIn = false;
  }

  destroy() {
    this.zoomOut();
    this.setZoomEvents(true);
  }
}
