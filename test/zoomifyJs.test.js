/**
 * @jest-environment jsdom
 */

import ZoomifyJs from '../src/zoomifyJs';
import InvalidHTMLImageElementError from '../src/invalidElementError';
import { jest } from '@jest/globals';

beforeAll(() => {
  const img = document.createElement('img');
  img.alt = 'Car-Image';
  img.classList.add('zoomifyJs');


  const dummyPicture = document.createElement('picture');
  dummyPicture.classList.add('image-container');
  dummyPicture.appendChild(img);

  // Mock document.querySelector to return the picture element
  document.querySelector = jest.fn().mockReturnValue(img);
});

test('should throw InvalidHTMLImageElementError if the element is not an HTML image element', () => {
  // Attempt to create ZoomifyJs with a non-image element
  //const zoomify = new ZoomifyJs();
  document.querySelector = jest.fn().mockReturnValue(null);
  expect(() => new ZoomifyJs()).toThrow(InvalidHTMLImageElementError);
});