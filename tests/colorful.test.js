import { expect } from 'chai';

import Colorful from '../dist/colorful.esm.js';

describe('Colorful', () => {

  it('should handle valid 3-digit hex color', () => {
    const color = new Colorful('#abc');

    expect(color.hex).to.equal('#aabbcc');
  });

  it('should handle valid 6-digit hex color', () => {
    const color = new Colorful('#abcdef');
    expect(color.hex).to.equal('#abcdef');
  });

  it('should handle valid 4-digit hex color', () => {
    const color = new Colorful('#abcd');
    expect(color.hex).to.equal('#aabbccdd');
  });

  it('should handle valid 8-digit hex color', () => {
    const color = new Colorful('#abcdefaa');
    expect(color.hex).to.equal('#abcdefaa');
  });

  it('should handle valid RGB color', () => {
    const color = new Colorful('rgb(255, 0, 0)');
    expect(color.rgb).to.deep.equal([255, 0, 0, 1]);
  });

  it('should handle valid RGBA color', () => {
    const color = new Colorful('rgba(0, 255, 0, 0.5)');
    expect(color.rgb).to.deep.equal([0, 255, 0, 0.5]);
  });

  it('should handle valid HSL color', () => {
    const color = new Colorful('hsl(240, 100%, 50%)');
    expect(color.hsl).to.deep.equal([240, 100, 50, 1]);
  });

  it('should handle valid HSLA color', () => {
    const color = new Colorful('hsla(120, 100%, 50%, 0.75)');
    expect(color.hsl).to.deep.equal([120, 100, 50, 0.75]);
  });

  it('should handle valid HSV color', () => {
    const color = new Colorful('hsv(60, 100%, 100%)');
    expect(color.hsv).to.deep.equal([60, 100, 100, 1]);
  });

  it('should handle valid HSVA color', () => {
    const color = new Colorful('hsva(180, 100%, 100%, 0.5)');
    expect(color.hsv).to.deep.equal([180, 100, 100, 0.5]);
  });

  it('should handle maximum RGB values', () => {
    const color = new Colorful('rgb(255, 255, 255)');
    expect(color.rgb).to.deep.equal([255, 255, 255, 1]);
  });

  it('should handle minimum RGB values', () => {
    const color = new Colorful('rgb(0, 0, 0)');
    expect(color.rgb).to.deep.equal([0, 0, 0, 1]);
  });

  it('should throw error for invalid hex color format (missing #)', () => {
    expect(() => new Colorful('abcdef')).to.throw(Error);
  });

  it('should throw error for invalid hex color format (too many characters)', () => {
    expect(() => new Colorful('#abcdefgh')).to.throw(Error);
  });

  it('should throw error for invalid RGB color (out of range)', () => {
    expect(() => new Colorful('rgb(256, 0, 0)')).to.throw(Error);
  });

  it('should throw error for invalid HSL color (saturation out of range)', () => {
    expect(() => new Colorful('hsl(360, 110%, 50%)')).to.throw(Error);
  });

  it('should throw error for invalid HSL color (lightness out of range)', () => {
    expect(() => new Colorful('hsl(360, 50%, 110%)')).to.throw(Error);
  });

  it('should throw error for non-color string input', () => {
    expect(() => new Colorful('not a color')).to.throw(Error);
  });

  it('should throw error for empty string input', () => {
    expect(() => new Colorful('')).to.throw(Error);
  });

  it('should throw error for null input', () => {
    expect(() => new Colorful(null)).to.throw(Error);
  });

  it('should throw error for undefined input', () => {
    expect(() => new Colorful(undefined)).to.throw(Error);
  });

  it('should handle leading and trailing spaces in RGB', () => {
    const color = new Colorful('  rgb( 255 , 0 , 0 )  ');
    expect(color.rgb).to.deep.equal([255, 0, 0, 1]);
  });

  it('should handle leading and trailing spaces in hex', () => {
    const color = new Colorful('  #abc  ');
    expect(color.hex).to.equal('#aabbcc');
  });
});

describe('Colorful.hexToRgb', () => {
  it('should convert 6-digit hex to RGB', () => {
    const rgb = Colorful.hexToRgb('#abcdef');
    expect(rgb).to.deep.equal([171, 205, 239]);
  });

  it('should convert 3-digit hex to RGB with full opacity', () => {
    const rgb = Colorful.hexToRgb('#abc');
    expect(rgb).to.deep.equal([170, 187, 204]);
  });

  it('should convert 8-digit hex to RGB with alpha', () => {
    const rgb = Colorful.hexToRgb('#abcdef01');
    expect(rgb.slice(0, 3)).to.deep.equal([171, 205, 239]);
    expect(rgb[3]).to.be.closeTo(0.004, 0.0005);
  });

  it('should convert 8-digit hex to RGB with alpha 1', () => {
    const rgb = Colorful.hexToRgb('#abcdefFF');
    expect(rgb).to.deep.equal([171, 205, 239]);
  });

  it('should convert 8-digit hex to RGB with full transparency', () => {
    const rgb = Colorful.hexToRgb('#00000000');
    expect(rgb).to.deep.equal([0, 0, 0, 0]);
  });

  it('should convert 8-digit hex to RGB with opaque white', () => {
    const rgb = Colorful.hexToRgb('#FFFFFFFF');
    expect(rgb).to.deep.equal([255, 255, 255]);
  });

  it('should throw an error for invalid hex color format', () => {
    expect(() => Colorful.hexToRgb('invalidHex')).to.throw(Error);
  });

  it('should throw an error for invalid hex color format (too short)', () => {
    expect(() => Colorful.hexToRgb('#12')).to.throw(Error);
  });

  it('should throw an error for invalid hex color format (too long)', () => {
    expect(() => Colorful.hexToRgb('#123456789')).to.throw(Error);
  });

  it('should throw an error for empty string input', () => {
    expect(() => Colorful.hexToRgb('')).to.throw(Error);
  });

  it('should handle leading and trailing spaces in hex', () => {
    const rgb = Colorful.hexToRgb('  #abc  ');
    expect(rgb).to.deep.equal([170, 187, 204]);
  });
});

describe('Colorful.rgbToHsl', () => {
    
  it('should convert RGB to HSL for bright red', () => {
      const hsl = Colorful.rgbToHsl([255, 0, 0]);
      expect(hsl).to.deep.equal([0, 100, 50]);
  });

  it('should convert RGB to HSL for green', () => {
      const hsl = Colorful.rgbToHsl([0, 255, 0]);
      expect(hsl).to.deep.equal([120, 100, 50]);
  });

  it('should convert RGB to HSL for blue', () => {
      const hsl = Colorful.rgbToHsl([0, 0, 255]);
      expect(hsl).to.deep.equal([240, 100, 50]);
  });

  it('should convert RGB to HSL for cyan', () => {
      const hsl = Colorful.rgbToHsl([0, 255, 255]);
      expect(hsl).to.deep.equal([180, 100, 50]);
  });

  it('should convert RGB to HSL for magenta', () => {
      const hsl = Colorful.rgbToHsl([255, 0, 255]);
      expect(hsl).to.deep.equal([300, 100, 50]);
  });

  it('should convert RGB to HSL for white', () => {
      const hsl = Colorful.rgbToHsl([255, 255, 255]);
      expect(hsl).to.deep.equal([0, 0, 100]);
  });

  it('should convert RGB to HSL for black', () => {
      const hsl = Colorful.rgbToHsl([0, 0, 0]);
      expect(hsl).to.deep.equal([0, 0, 0]);
  });

  it('should convert RGB to HSL for gray', () => {
      const hsl = Colorful.rgbToHsl([128, 128, 128]);
      expect(hsl).to.deep.equal([0, 0, 50]);
  });

  it('should convert RGB to HSL with alpha', () => {
      const hsl = Colorful.rgbToHsl([255, 128, 0, 0.5]);
      expect(hsl).to.deep.equal([30, 100, 50, 0.5]);
  });

  it('should handle invalid RGB values', () => {
      expect(() => Colorful.rgbToHsl([-1, 256, 0])).to.throw(Error);
      expect(() => Colorful.rgbToHsl([255, 255, 255, 1.5])).to.throw(Error);
  });
});


describe('Colorful.hslToHsv', () => {
    
  it('should convert HSL to HSV for bright red', () => {
      const hsv = Colorful.hslToHsv([0, 100, 50]);
      expect(hsv).to.deep.equal([0, 100, 100]);
  });

  it('should convert HSL to HSV for bright green', () => {
      const hsv = Colorful.hslToHsv([120, 100, 50]);
      expect(hsv).to.deep.equal([120, 100, 100]);
  });

  it('should convert HSL to HSV for bright blue', () => {
      const hsv = Colorful.hslToHsv([240, 100, 50]);
      expect(hsv).to.deep.equal([240, 100, 100]);
  });

  it('should convert HSL to HSV for yellow', () => {
      const hsv = Colorful.hslToHsv([60, 100, 50]);
      expect(hsv).to.deep.equal([60, 100, 100]);
  });

  it('should convert HSL to HSV for purple', () => {
      const hsv = Colorful.hslToHsv([300, 100, 50]);
      expect(hsv).to.deep.equal([300, 100, 100]);
  });

  it('should convert HSL to HSV for gray', () => {
      const hsv = Colorful.hslToHsv([0, 0, 50]);
      expect(hsv).to.deep.equal([0, 0, 50]);
  });

  it('should convert HSL to HSV for white', () => {
      const hsv = Colorful.hslToHsv([0, 0, 100]);
      expect(hsv).to.deep.equal([0, 0, 100]);
  });

  it('should convert HSL to HSV for black', () => {
      const hsv = Colorful.hslToHsv([0, 0, 0]);
      expect(hsv).to.deep.equal([0, 0, 0]);
  });

  it('should convert HSL to HSV with alpha', () => {
      const hsv = Colorful.hslToHsv([240, 100, 50, 0.5]);
      expect(hsv).to.deep.equal([240, 100, 100, 0.5]);
  });

  it('should handle invalid HSL values', () => {
      expect(() => Colorful.hslToHsv([-1, 100, 50])).to.throw(Error);
      expect(() => Colorful.hslToHsv([0, -1, 50])).to.throw(Error);
      expect(() => Colorful.hslToHsv([0, 101, 50])).to.throw(Error);
      expect(() => Colorful.hslToHsv([0, 100, -1])).to.throw(Error);
      expect(() => Colorful.hslToHsv([0, 100, 101])).to.throw(Error);
      expect(() => Colorful.hslToHsv([0, 100, 50, 1.5])).to.throw(Error);
  });
});

describe('Colorful.hslToRgb', () => {
  it('should convert HSL (0, 100, 50) to RGB (255, 0, 0)', () => {
      const rgb = Colorful.hslToRgb([0, 100, 50]);
      expect(rgb).to.deep.equal([255, 0, 0]);
  });

  it('should convert HSL (120, 100, 50) to RGB (0, 255, 0)', () => {
      const rgb = Colorful.hslToRgb([120, 100, 50]);
      expect(rgb).to.deep.equal([0, 255, 0]);
  });

  it('should convert HSL (240, 100, 50) to RGB (0, 0, 255)', () => {
      const rgb = Colorful.hslToRgb([240, 100, 50]);
      expect(rgb).to.deep.equal([0, 0, 255]);
  });

  it('should convert HSL (60, 100, 50) to RGB (255, 255, 0)', () => {
      const rgb = Colorful.hslToRgb([60, 100, 50]);
      expect(rgb).to.deep.equal([255, 255, 0]);
  });

  it('should convert HSL (0, 0, 50) to RGB (128, 128, 128)', () => {
      const rgb = Colorful.hslToRgb([0, 0, 50]);
      expect(rgb).to.deep.equal([128, 128, 128]);
  });

  it('should convert HSL (240, 100, 0) to RGB (0, 0, 0)', () => {
      const rgb = Colorful.hslToRgb([240, 100, 0]);
      expect(rgb).to.deep.equal([0, 0, 0]);
  });

  it('should convert HSL (240, 100, 100) to RGB (255, 255, 255)', () => {
      const rgb = Colorful.hslToRgb([240, 100, 100]);
      expect(rgb).to.deep.equal([255, 255, 255]);
  });

  it('should convert HSL (180, 50, 50) to RGB (64, 191, 191)', () => {
      const rgb = Colorful.hslToRgb([180, 50, 50]);
      expect(rgb).to.deep.equal([64, 191, 191]);
  });

  it('should convert HSL (300, 100, 50) to RGB (255, 0, 255)', () => {
      const rgb = Colorful.hslToRgb([300, 100, 50]);
      expect(rgb).to.deep.equal([255, 0, 255]);
  });

  it('should convert HSL (0, 100, 50, 0.5) to RGB with alpha', () => {
      const rgb = Colorful.hslToRgb([0, 100, 50, 0.5]);
      expect(rgb).to.deep.equal([255, 0, 0, 0.5]);
  });

  it('should handle invalid input by throwing an error', () => {
      expect(() => Colorful.hslToRgb([0, -1, 50])).to.throw(Error);
      expect(() => Colorful.hslToRgb([0, 101, 50])).to.throw(Error);
      expect(() => Colorful.hslToRgb([0, 100, -1])).to.throw(Error);
      expect(() => Colorful.hslToRgb([0, 100, 101])).to.throw(Error);
      expect(() => Colorful.hslToRgb([0, 100, 50, 1.5])).to.throw(Error);
  });
});

describe('Colorful.rgbToHex', () => {
  it('should convert RGB (255, 0, 0) to hex #ff0000', () => {
      const hex = Colorful.rgbToHex([255, 0, 0]);
      expect(hex).to.equal('#ff0000');
  });

  it('should convert RGB (0, 255, 0) to hex #00ff00', () => {
      const hex = Colorful.rgbToHex([0, 255, 0]);
      expect(hex).to.equal('#00ff00');
  });

  it('should convert RGB (0, 0, 255) to hex #0000ff', () => {
      const hex = Colorful.rgbToHex([0, 0, 255]);
      expect(hex).to.equal('#0000ff');
  });

  it('should convert RGB (255, 255, 0) to hex #ffff00', () => {
      const hex = Colorful.rgbToHex([255, 255, 0]);
      expect(hex).to.equal('#ffff00');
  });

  it('should convert RGB (0, 255, 255) to hex #00ffff', () => {
      const hex = Colorful.rgbToHex([0, 255, 255]);
      expect(hex).to.equal('#00ffff');
  });

  it('should convert RGB (255, 0, 255) to hex #ff00ff', () => {
      const hex = Colorful.rgbToHex([255, 0, 255]);
      expect(hex).to.equal('#ff00ff');
  });

  it('should convert RGB (128, 128, 128) to hex #808080', () => {
      const hex = Colorful.rgbToHex([128, 128, 128]);
      expect(hex).to.equal('#808080');
  });

  it('should convert RGB (0, 0, 0) to hex #000000', () => {
      const hex = Colorful.rgbToHex([0, 0, 0]);
      expect(hex).to.equal('#000000');
  });

  it('should convert RGB (255, 255, 255) to hex #ffffff', () => {
      const hex = Colorful.rgbToHex([255, 255, 255]);
      expect(hex).to.equal('#ffffff');
  });

  it('should convert RGBA (255, 0, 0, 0.5) to hex #ff00007f', () => {
      const hex = Colorful.rgbToHex([255, 0, 0, 0.5]);
      expect(hex).to.equal('#ff000080');
  });

  it('should convert RGBA (0, 255, 0, 1) to hex #00ff00', () => {
      const hex = Colorful.rgbToHex([0, 255, 0, 1]);
      expect(hex).to.equal('#00ff00');
  });

  it('should handle out-of-range values by throwing an error', () => {
      expect(() => Colorful.rgbToHex([256, 0, 0])).to.throw(Error);
      expect(() => Colorful.rgbToHex([-1, 0, 0])).to.throw(Error);
      expect(() => Colorful.rgbToHex([0, 256, 0])).to.throw(Error);
      expect(() => Colorful.rgbToHex([0, -1, 0])).to.throw(Error);
      expect(() => Colorful.rgbToHex([0, 0, 256])).to.throw(Error);
      expect(() => Colorful.rgbToHex([0, 0, -1])).to.throw(Error);
      expect(() => Colorful.rgbToHex([0, 0, 0, 1.5])).to.throw(Error);
  });
});

