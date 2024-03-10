import Config from '../src/config';

test('should initialize with default settings if no options provided', () => {
  const config = new Config();

  expect(config).toEqual({
    selector: '.zoomifyJs',
    transitionDuration: 300,
    easing: 'ease-in-out',
    scale: 2,
    clickToZoom: false,
    buttonText: 'Click to zoom',
  });
});

test('should initialize with default settings if invalid options provided', () => {
  const config = new Config({ invalidOption: 'value' });

  expect(config).toEqual({
    selector: '.zoomifyJs',
    transitionDuration: 300,
    easing: 'ease-in-out',
    scale: 2,
    clickToZoom: false,
    buttonText: 'Click to zoom',
  });
});

test('should initialize with user-provided options', () => {
  const userOptions = {
    selector: '.custom-selector',
    transitionDuration: 500,
    easing: 'linear',
    scale: 3,
    clickToZoom: true,
    buttonText: 'Zoom In',
  };

  const config = new Config(userOptions);

  expect(config).toEqual(userOptions);
});

test('should handle string options as selector', () => {
  const config = new Config('.custom-selector');

  expect(config).toEqual({
    selector: '.custom-selector',
    transitionDuration: 300,
    easing: 'ease-in-out',
    scale: 2,
    clickToZoom: false,
    buttonText: 'Click to zoom',
  });
});
