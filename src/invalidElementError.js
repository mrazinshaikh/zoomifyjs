export default class InvalidHTMLImageElementError extends Error {
  constructor(message = 'Invalid element given. Element should be valid HTMLImageElement.') {
    super(message);
    this.name = 'InvalidHTMLImageElementError';
  }
}
