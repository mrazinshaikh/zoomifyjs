export default class Config {
  static ALLOWED_OPTIONS = ['selector', 'transitionDuration', 'easing', 'scale', 'clickToZoom', 'buttonText'];

  static DEFAULT_SETTINGS = {
    selector: '.zoomifyJs',
    transitionDuration: 300,
    easing: 'ease-in-out',
    scale: 2,
    clickToZoom: false,
    buttonText: 'Click to zoom'
  };

  /**
   * @param {string|Object} options
   * @returns {Object}
   */
  constructor(options) {
    const settings = Config.DEFAULT_SETTINGS;
    const userSettings = options;

    switch (typeof options) {
      case 'string':
        settings.selector = options;
        break;
      default:
        for (const option in userSettings) {
          if (typeof option === 'string' && Config.ALLOWED_OPTIONS.includes(option)) {
            settings[option] = userSettings[option];
          }
        }
    }

    return settings;
  }
}
