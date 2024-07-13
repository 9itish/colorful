class Colorful {
  #hex;
  #rgb;
  #hsl;
  #hsv;

  /**
   * @param {string} hex - A hex value to instantiate the class.
   */
  constructor(hex) {
    this.hex = hex;
  }

  /**
   * Make sure that any valid input HEX value (long or short) is returned in long form.
   *
   * It throws errors in three situations:
   * 1. The input string doesn't begin with '#'.
   * 2. The input string has characters that aren't valid hexadecimal.
   * 3. The number of HEX characters in the input string is neither 3 nor 6.
   *
   * @param {string} hex - The HEX value this method will sanitize.
   * @returns {string} When valid input is provided, the method returns a 7-character HEX value including the `#` at the start.
   */
  static sanitizeHex(hex) {

    if (hex[0] !== "#") {
      throw new Error(`Add a '#' at the beginning of ${hex}!`);
    }

    if (!/^#[a-f0-9]+/i.test(hex)) {
      throw new Error(
        `The input HEX Color ${hex} contains invalid character combination!`
      );
    }

    let sanitizedHex = hex.replace("#", "");

    if (sanitizedHex.length !== 3 && sanitizedHex.length !== 6) {
      throw new Error(
        `The ${sanitizedHex} character length is neither 3 nor 6!`
      );
    }

    // If the input is a 3 character HEX color, duplicate each character to create a 6 character HEX color.
    if (sanitizedHex.length === 3) {
      sanitizedHex = sanitizedHex
        .split("")
        .map((h) => h + h)
        .join("");
    }

    // Prefix `#` that was removed in the beginning for sanitization.
    return `#${sanitizedHex}`;
  }

  /**
   * This method takes a HEX color as input and returns an array that contains the red, green, and blue components of the input HEX color.
   * @param {string} hex - The hex notation of the color you want to convert to rgb() format.
   * @returns {array} - The first, second, and third element in the array are the red, green, and blue components of the color.
   */
  static hexToRgb(hex) {
    hex = Colorful.sanitizeHex(hex).replace("#", "");

    // HEX colors are in Base-16 so I use parseInt() to convert those values to a Base-10 integer.
    let colorInt = parseInt(hex, 16);

    // The Red, Green, and Blue component use 2 HEX digits each to specify their value. This translates to 8 bits each in binary.

    // Do a right shift by 16 bits and then the bitwise AND operation with 255 to isolate the red component.
    let r = (colorInt >> 16) & 255;
    let g = (colorInt >> 8) & 255;
    let b = colorInt & 255;

    return [r, g, b];
  }

  /**
   * This method converts an RGB color value into corresponding HSL color value.
   * @param {array} rgb -  The first, second, and third element in the array are the red, green, and blue components of the color.
   * @returns {array} - The first, second, and third element are the hue, saturation, and lightness of the color.
   */
  static rgbToHsl(rgb) {

    validateRgb(rgb);

    let [r, g, b] = rgb;

    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    // Hue and Saturation become zero because max === min implies all the color components are equal in value.
    if (max === min) {
      h = s = 0;
    } else {
      let diff = max - min;
      s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
      switch (max) {
        case r:
          h = (g - b) / diff + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / diff + 2;
          break;
        case b:
          h = (r - g) / diff + 4;
          break;
      }
      // We divide by 6 to normalize the value and bring it between 0 and 1.
      h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }

  /**
   * This method converts an HSL color value into corresponding HSV color value.
   * @param {array} hsl - The first, second, and third element in the array are the hue, saturation, and lightness of the color.
   * @returns {array} - The first, second, and third element are the hue, saturation, and value of the color.
   */
  static hslToHsv(hsl) {

    validateHslHsv(hsl);

    let [h, s, l] = hsl;

    s /= 100;
    l /= 100;

    let v = l + s * Math.min(l, 1 - l);
    let sv = v === 0 ? 0 : 2 * (1 - l / v);

    return [h, Math.round(sv * 100), Math.round(v * 100)];
  }

  /**
   *
   * @param {array} hsl - The first, second, and third element in the array are the hue, saturation, and lightness of the color.
   * @returns {array} - The first, second, and third element in the array are the red, green, and blue components of the color.
   */
  static hslToRgb(hsl) {
    
    validateHslHsv(hsl);

    let [h, s, l] = hsl;

    // Normalize the values so they all fall in the range 0-1.
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    // Zero saturation means a grayscale color with all components having equal value.
    if (s === 0) {
      r = g = b = l;
    } else {
      // This function converts the hue value to RGB using predefined calculations.
      // The value for `t` is based on Hue. The value for `q` is based on the lightness and saturation. The value for `p` is based on `q`.
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    // Multiplying by 255 scales the values from 0-1 to 0-255.
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  /**
   *
   * @param {array} hsv - The first, second, and third element are the hue, saturation, and value of the color.
   * @returns {array} - The first, second, and third element in the array are the red, green, and blue components of the color.
   */
  static hsvToRgb(hsv) {

    validateHslHsv(hsv);

    let [h, s, v] = hsv;

    s /= 100;
    v /= 100;

    let c = v * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = v - c;

    let rgbPrime;
    if (h >= 0 && h < 60) {
      rgbPrime = [c, x, 0];
    } else if (h >= 60 && h < 120) {
      rgbPrime = [x, c, 0];
    } else if (h >= 120 && h < 180) {
      rgbPrime = [0, c, x];
    } else if (h >= 180 && h < 240) {
      rgbPrime = [0, x, c];
    } else if (h >= 240 && h < 300) {
      rgbPrime = [x, 0, c];
    } else if (h >= 300 && h < 360) {
      rgbPrime = [c, 0, x];
    }

    let [r, g, b] = rgbPrime.map((value) => Math.round((value + m) * 255));

    return [r, g, b];
  }

  /**
   *
   * @param {array} rgb - The first, second, and third element in the array are the red, green, and blue components of the color.
   * @returns {string} - The long form HEX code for the color.
   */
  static rgbToHex(rgb) {

    validateRgb(rgb);

    let [r, g, b] = rgb;

    return (
      "#" +
      [r, g, b]
        .map((x) => {
          return x.toString(16).padStart(2, "0");
        })
        .join("")
    );
  }

  /**
   * This method converts a valid RGB string into a HEX string.
   * @param {string} rgbString - The RGB string you want to convert to a HEX color value.
   * @returns {string} - The long form HEX code for the color.
   */
  static rgbStringToHex(rgbString) {

    const regex = /^rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\s*\)$/;
    let rgb = regex.exec(rgbString);

    if (!rgb) {
        throw new Error('Invalid RGB string format');
    }

    rgb = rgb.slice(1).map((v) => parseInt(v, 10));

    validateRgb(rgb);

    return Colorful.rgbToHex(rgb);
  }


  /**
   * This method will give you the HEX string that represents the new brightness adjusted color.
   *
   * It won't change the original color object. It just gives you a HEX string that you can use to create a new color object if needed.
   * @param {number} percent - The percentage amount by which to brighten or darken the color.
   * @returns {string} - The long form HEX code for the color with adjusted brightness.
   * @throws Will throw an error when the passed percent is not a numerical value.
   * @example
   * // Outputs: #ffb84d
   * console.log(new Colorful('#ff9900').adjustBrightness(30));
   */
  adjustBrightness(percent) {
    if (isNaN(Number(percent))) {
      throw new Error(`Please pass a numerical value!`);
    }

    let [h, s, l] = this.#hsl;

    // We are adjusting amount by percent, therefore we multiply the given percent value with 1/100 to calculate the magnitude by which to adjust the lightness.
    let amount = (percent * l) / 100;
    l += amount;

    // The lightness shouldn't go below 0 (black) or above 100 (white).
    l = Math.max(0, Math.min(l, 100));

    let newColor = Colorful.hslToRgb([h, s, l]);

    return Colorful.rgbToHex(newColor);
  }

  /**
   * This method will give you the HEX string that represents the new saturation adjusted color.
   *
   * It won't change the original color object. It just gives you a HEX string that you can use to create a new color object if needed.
   * @param {number} percent - The percentage amount by which to saturate or desaturate the color.
   * @returns {string} - The long form HEX code for the color with adjusted saturation.
   * @example
   * // Outputs: #5687b8
   * console.log(new Colorful('#6688aa').adjustSaturation(40));
   */
  adjustSaturation(percent) {
    if (isNaN(Number(percent))) {
      throw new Error(`Please pass a numerical value!`);
    }

    let [h, s, l] = this.#hsl;

    let amount = (percent * s) / 100;
    s += amount;

    // The saturation shouldn't go below 0 (grayscale) or above 100 (full saturation).
    // Pure Red is #F00 which gives it 100% saturation. Adding more saturation using this method won't change the the color from #F00 to something else.
    s = Math.max(0, Math.min(s, 100));

    let newColor = Colorful.hslToRgb([h, s, l]);

    return Colorful.rgbToHex(newColor);
  }

  /**
   * This method will give you the HEX string that represents the new hue adjusted color.
   *
   * This method does not change the original color object. It just gives you a HEX string that you can use to create a new color object if needed.
   * @param {number} degrees - The degrees by which to rotate the color's hue.
   * @returns {string} - The long form HEX code for the color with rotated hue.
   * @example
   * // Outputs: #aa647c
   * console.log(new Colorful('#6688aa').rotateHue(130));
   */
  rotateHue(degrees) {
    if (isNaN(Number(degrees))) {
      throw new Error(`Please pass a numerical value!`);
    }

    let [h, s, l] = this.#hsl;

    // h is circular so we can keep it between 0 and 359 without actually affecting the output color.
    h = (h + degrees) % 360;

    // If the degrees are too negative, `h` will be negative after modulo. We can add 360 once to make `h` positive without affecting the color.
    if (h < 0) {
      h += 360;
    }

    let newColor = Colorful.hslToRgb([h, s, l]);

    return Colorful.rgbToHex(newColor);
  }

  /**
   * Calling this method will give you the luminance of given color.
   * @param {string} color - The HEX value of the color.
   * @returns {number} The return value represents the luminance of the color.
   * @example
   * 
   * // Outputs: 0.28927047102101044
   * console.log(Colorful.getLuminance('#B879DA'));
   */
  static getLuminance(hex) {
    hex = Colorful.sanitizeHex(hex);

    let originalRgb = Colorful.hexToRgb(hex);

    // This is a standard algorithm.

    // Normalize the RGB values to be within 0-1 and then reverse the gamma correction that sRGB does to change color values non-linearly based on human perception of color.
    let [r_n, g_n, b_n] = originalRgb.map((value) => {
      value /= 255;
      return value <= 0.03928
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
    });

    // Our eyes are most sensitive to green and least sensitive to blue. Hence, this formula.
    return 0.2126 * r_n + 0.7152 * g_n + 0.0722 * b_n;
  }

  /**
   * This method generates a random HEX color that is AAA accessible when paired with white.
   * @example
   * // Outputs: #275832
   * console.log(Colorful.getWhiteAccessibleColor()); 
   * @returns {string} - The HEX representation of the color with which you want to calculate the contrast.
   */
  static getWhiteAccessibleColor() {

    let color = Colorful.getRandomHexColor();

    while(this.getLuminance(color) >= 0.18) {
        color = Colorful.getRandomHexColor();
    }

    return color;
  }

  /**
   * This method generates a random HEX color that is AAA accessible when paired with black.
   * @example
   * // Outputs: #16cfd3
   * console.log(Colorful.getBlackAccessibleColor());
   * @returns {string} - The HEX representation of the color with which you want to calculate the contrast.
   */
  static getBlackAccessibleColor() {

    let color = Colorful.getRandomHexColor();

    while(this.getLuminance(color) <= 0.4) {
        color = Colorful.getRandomHexColor();
    }

    return color;
  }

  /**
   * This method returns `true` when a color's luminance is more than or equal to 0.5.
   */
  isLight() {
    return Colorful.getLuminance(this.#hex) >= 0.5;
  }

  /**
   * This method returns `false` when a color's luminance is less than 0.5.
   */
  isDark() {
    return Colorful.getLuminance(this.#hex) < 0.5;
  }

  /**
   * This method will give you its contrast with the color represented by the HEX string you provided.
   *
   * @param {string} hex - The HEX representation of the color with which you want to calculate the contrast.
   * @returns {number} - The contrast between the two colors.
   * @example
   * // Outputs: 5.67
   * console.log(new Colorful('#6688aa').getContrast('#000'));
   */
  getContrast(hex) {

    let lumOne = Colorful.getLuminance(this.#hex);

    // getLuminance() sanitizes HEX so no need to sanitize here.
    let lumTwo = Colorful.getLuminance(hex);

    let brighterValue = Math.max(lumOne, lumTwo);
    let dullerValue = Math.min(lumOne, lumTwo);

    // Using the standard formula to calculate contrast after calculating luminance.
    return ((brighterValue + 0.05) / (dullerValue + 0.05)).toFixed(2);
  }

  /**
   * This method will give you the HEX representation for a new color that has at least the provided amount of contrast with the color in the instantiated Colorful object.
   *
   * @param {string} hex - The HEX representation of the color with which you want to calculate the contrast.
   * @returns {number} - The contrast between the two colors.
   * @example
   * // Outputs: #380208
   * console.log(new Colorful('#6688aa').getContrastingColor(4.5));
   */
  getContrastingColor(amount) {
    let contrastingColor = Colorful.getRandomHexColor();

    // Keep generating random colors until their contrast with the base color is at least equal to the given amount.
    while (this.getContrast(contrastingColor) < amount) {
      contrastingColor = Colorful.getRandomHexColor();
    }

    return contrastingColor;
  }

  /**
   * This method will give you the HEX representation for a new color that is complementary to the color representing the instantiated Colorful object.
   *
   * @returns {number} - The HEX representation of the complementary color.
   * @example
   * // Outputs:  #aa8764
   * console.log(new Colorful('#6688aa').getComplementaryColor());
   */
  getComplementaryColor() {
    let [h, s, l] = this.#hsl;

    // We get complementary color by rotating the hue 180 deg. Saturation and luminance stay the same.
    h = (h + 180) % 360;

    const complementaryRgb = Colorful.hslToRgb([h, s, l]);

    return Colorful.rgbToHex(complementaryRgb);
  }

  /**
   * This method will give you the HEX representation for a new color that is inverse of the color representing the instantiated Colorful object.
   *
   * @returns {number} - The HEX representation of the inverse color.
   * @example
   * // Outputs:  #997755
   * console.log(new Colorful('#6688aa').getInverseColor());
   */
  getInverseColor() {
    let [r, g, b] = this.#rgb;

    return Colorful.rgbToHex([255 - r, 255 - g, 255 - b]);
  }

  /**
   * This method will give you the HEX representation for five new colors that have the same hue as the color representing the instantiated Colorful object.
   *
   * @returns {number} - The HEX representation of the inverse color.
   * @example
   * // Outputs:  #997755
   * console.log(new Colorful('#6688aa').getInverseColor());
   */
  getMonochromaticColors() {
    let [h, s, v] = this.#hsv;

    // Use these 6 brightness values to generate monochromatic colors.
    let initVals = [20, 36, 48, 60, 75, 90];

    // Determine the brightness value closest to the original color.
    let closestIdx = 0;
    let closestDiff = Math.abs(initVals[0] - v);

    for (let i = 1; i < initVals.length; i++) {
      let diff = Math.abs(initVals[i] - v);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIdx = i;
      }
    }

    // Create a new array that doesn't have the closest brightness value.
    let finVals = [];

    for (let i = 0; i < initVals.length; i++) {
      if (i != closestIdx) {
        finVals.push(initVals[i]);
      }
    }

    let variations = [];

    // Use a combination of HSL and HSV values to generate the monochromatic colors. I did this because using just HSV seemed to produce darker shades and using just HSL seemed to produce lighter shades.
    for (let finVal of finVals) {
      if (finVal >= 50) {
        variations.push(Colorful.hslToRgb([h, s, finVal]));
      } else {
        variations.push(Colorful.hsvToRgb([h, s, finVal]));
      }
    }

    let monochromaticColors = variations.map((variation) => {
      return Colorful.rgbToHex(variation);
    });

    return monochromaticColors;
  }

  /**
   * This method will give you the HEX representation for two new colors that are split complementary of the color representing the instantiated Colorful object.
   * @returns {array} - Each array element contains the HEX representation for one of the split complementary colors.
   */
  getSplitComplementaryColors() {
    let [h, s, l] = this.#hsl;

    // Generate two hue values that are +/- 30deg from the complementary hue value (i.e, 180deg)
    let h1 = (h + 150) % 360;
    let h2 = (h + 210) % 360;

    const splitRgb1 = Colorful.hslToRgb([h1, s, l]);
    const splitRgb2 = Colorful.hslToRgb([h2, s, l]);

    return [Colorful.rgbToHex(splitRgb1), Colorful.rgbToHex(splitRgb2)];
  }

  /**
   * This method will give you the HEX representation for two new colors that are analogous to the color representing the instantiated Colorful object.
   * @returns {array} - Each array element contains the HEX representation for one of the analogous colors.
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#e69df6", "#9dadf6" ]
   * console.log(myColor.getAnalogousColors());
   */
  getAnalogousColors() {
    let [h, s, l] = this.#hsl;

    // Generate two hue values that are +/- 30deg from the base color hue.
    // A -30 value is equal to -30 + 360 or 330 because hues are circular.
    // Using +330 and then % 360 ensures the value stays positive.
    let h1 = (h + 30) % 360;
    let h2 = (h + 330) % 360;

    const analogousRgb1 = Colorful.hslToRgb([h1, s, l]);
    const analogousRgb2 = Colorful.hslToRgb([h2, s, l]);

    return [Colorful.rgbToHex(analogousRgb1), Colorful.rgbToHex(analogousRgb2)];
  }

  /**
   * This method will give you the HEX representation for two new colors. The hue of these three colors (two new colors and the color representing the instantiated Colorful object) is 120deg apart.
   * @returns {array} - Each array element contains the HEX representation for one of the triad colors.
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#f6b99d", "#9df6b9" ]
   * console.log(myColor.getTriadColors());
   */
  getTriadColors() {
    let [h, s, l] = this.#hsl;

    // Generate two hue values that are +/- 120deg from the base color hue.
    // Doing -120 is same as doing -120 + 360 or 240. Already explained above.
    let h1 = (h + 120) % 360;
    let h2 = (h + 240) % 360;

    const triadRgb1 = Colorful.hslToRgb([h1, s, l]);
    const triadRgb2 = Colorful.hslToRgb([h2, s, l]);

    return [Colorful.rgbToHex(triadRgb1), Colorful.rgbToHex(triadRgb2)];
  }

  /**
   * This method will give you the HEX representation for three new colors. The hue of these four colors (three new colors and the color representing the instantiated Colorful object) is 90deg apart.
   * @returns {array} - Each array element contains the HEX representation for one of the square colors.
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#f69dad", "#daf69d", "#9df6e6" ]
   * console.log(myColor.getSquareColors());
   */
  getSquareColors() {
    let [h, s, l] = this.#hsl;

    // Generate three hue values that are 90deg apart from each other. The base color has a hue rotation of 0 which is basically 360. So, this makes all colors 90deg apart.
    let h1 = (h + 90) % 360;
    let h2 = (h + 180) % 360;
    let h3 = (h + 270) % 360;

    const squareRgb1 = Colorful.hslToRgb([h1, s, l]);
    const squareRgb2 = Colorful.hslToRgb([h2, s, l]);
    const squareRgb3 = Colorful.hslToRgb([h3, s, l]);

    return [
      Colorful.rgbToHex(squareRgb1),
      Colorful.rgbToHex(squareRgb2),
      Colorful.rgbToHex(squareRgb3),
    ];
  }

  /**
   * This method will give you the HEX representation for three new colors. The hue of these four colors (three new colors and the color representing the instantiated Colorful object) is 90deg apart.
   * @returns {array} - Each array element contains the HEX representation for one of the rectangle colors.
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#f69dda", "#daf69d", "#9df6b9" ]
   * console.log(myColor.getRectangleColors());
   */
  getRectangleColors() {
    let [h, s, l] = this.#hsl;

    // For a rectangle the hue gap is 60deg/120deg alternatively.
    let h1 = (h + 60) % 360;
    let h2 = (h + 180) % 360;
    let h3 = (h + 240) % 360;

    const rectRgb1 = Colorful.hslToRgb([h1, s, l]);
    const rectRgb2 = Colorful.hslToRgb([h2, s, l]);
    const rectRgb3 = Colorful.hslToRgb([h3, s, l]);

    return [
      Colorful.rgbToHex(rectRgb1),
      Colorful.rgbToHex(rectRgb2),
      Colorful.rgbToHex(rectRgb3),
    ];
  }

  /**
   * This method will give you the HEX representation of a random color.
   * @returns {string} A random color in HEX format.
   * @example
   * let color = Colorful.getRandomHexColor()
   */
  static getRandomHexColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    // The hex value can sometimes consist of a single digit. In such cases, we pad it by adding a 0 to get two digits.
    let hexR = r.toString(16).padStart(2, "0");
    let hexG = g.toString(16).padStart(2, "0");
    let hexB = b.toString(16).padStart(2, "0");

    return `#${hexR}${hexG}${hexB}`;
  }

  /**
   * This method will give you the HEX representation of a random pastel color.
   * @returns {string} A random pastel color in HEX format.
   * @example
   * let color = Colorful.getRandomPastelColor()
   */
  static getRandomPastelColor() {
    // Pastel colors are light and washed out. We achieve this here by making sure that the value for each RGB component is at least 128.
    const r = Math.floor(Math.random() * 127 + 128);
    const g = Math.floor(Math.random() * 127 + 128);
    const b = Math.floor(Math.random() * 127 + 128);

    // No need for padding because the values will be in the range 80-FF.
    const hexR = r.toString(16);
    const hexG = g.toString(16);
    const hexB = b.toString(16);

    return `#${hexR}${hexG}${hexB}`;
  }

  /**
   * This methods gives you the HEX representation of a random color that was generated based on your preferences. The color will be completely random if you don't have any preferences.
   * 
   * @param {string|object} [pref] - This argument specifies your preferences for the generated color.
   * @returns {string} The HEX representation of the random color.
   *
   * @example
   * let color = Colorful.getRandomPreferredColor()
   */
  static getRandomPreferredColor(pref = {}) {
    const presets = {
      reddish: {
        hueRange: [0, 15],
        saturationRange: [60, 100],
        lightnessRange: [40, 80],
      },
      pinkish: {
        hueRange: [320, 340],
        saturationRange: [60, 100],
        lightnessRange: [40, 80],
      },
      greenish: {
        hueRange: [90, 130],
        saturationRange: [60, 100],
        lightnessRange: [30, 70],
      },
      bluish: {
        hueRange: [210, 240],
        saturationRange: [60, 100],
        lightnessRange: [60, 80],
      },
      purplish: {
        hueRange: [260, 280],
        saturationRange: [60, 100],
        lightnessRange: [60, 80],
      },
      warm: {
        hueRange: [0, 50],
        saturationRange: [70, 100],
        lightnessRange: [40, 60],
      },
      cool: {
        hueRange: [180, 240],
        saturationRange: [70, 100],
        lightnessRange: [40, 60],
      },
      saturated: {
        saturationRange: [90, 100],
        lightnessRange: [50, 50]
      },
      dull: {
        saturationRange: [10, 30],
        lightnessRange: [50, 50]
      }
    };

    let {
      hueRange = [0, 360],
      saturationRange = [0, 100],
      lightnessRange = [0, 100],
    } = pref;

    if (typeof pref === "string" && presets[pref]) {
      if (presets[pref].hueRange) {
        hueRange = presets[pref].hueRange;
      }
      if (presets[pref].saturationRange) {
        saturationRange = presets[pref].saturationRange;
      }
      if (presets[pref].lightnessRange) {
        lightnessRange = presets[pref].lightnessRange;
      }
      // ({ hueRange, saturationRange, lightnessRange } = presets[pref]);
    }

    // Helper function to get a random number within a range
    function getRandomInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Generate hue, saturation, and lightness values within the provided ranges
    const hue = getRandomInRange(hueRange[0], hueRange[1]);
    const saturation = getRandomInRange(saturationRange[0], saturationRange[1]);
    const lightness = getRandomInRange(lightnessRange[0], lightnessRange[1]);

    let rgbValue = Colorful.hslToRgb([hue, saturation, lightness]);

    return Colorful.rgbToHex(rgbValue);
  }

  /**
   * Get or set the HEX string for the color representing the calling instantiated Colorful object.
   * @type {string}
   */
  get hex() {
    return this.#hex;
  }

  set hex(hex) {
    this.#hex = Colorful.sanitizeHex(hex);
    this.#rgb = Colorful.hexToRgb(hex);
    this.#hsl = Colorful.rgbToHsl(this.#rgb);
    this.#hsv = Colorful.hslToHsv(this.#hsl);
  }

  /**
   * Get the RGB array for the color representing the calling instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ 187, 159, 246 ]
   * console.log(myColor.rgb);
   */
  get rgb() {
    return this.#rgb;
  }

  /**
   * Get the RGB string for the color representing the calling instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: rgb(187, 159, 246)
   * console.log(myColor.rgbString);
   */
  get rgbString() {
    return "rgb(" + this.#rgb.join(", ") + ")";
  }

  /**
   * Get the HSL array for the color representing the calling instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ 259, 83, 79 ]
   * console.log(myColor.hsl);
   */
  get hsl() {
    return this.#hsl;
  }

  /**
   * Get the HSL string for the color representing the calling instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: hsl(259deg, 83%, 79%)
   * console.log(myColor.hslString);
   */
  get hslString() {
    let hsl = this.#hsl;
    let hslString = `hsl(${hsl[0]}deg, ${hsl[1]}%, ${hsl[2]}%)`;

    return hslString;
    // return 'hsl(' + this.#hsl.join(' ') + ')';
  }

  /**
   * Get the HSV array for the color representing the calling instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ 259, 36, 96 ]
   * console.log(myColor.hsv);
   */
  get hsv() {
    return this.#hsv;
  }

  /**
   * Get the HSV string for the color representing the calling instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: hsv(259deg, 36%, 96%)
   * console.log(myColor.hsvString);
   */
  get hsvString() {
    let hsv = this.#hsv;
    let hsvString = `hsv(${hsv[0]}deg, ${hsv[1]}%, ${hsv[2]}%)`;

    return hsvString;
  }

  /**
   * Get the red component of the color representing the calling instantiated Colorful object. This value can be anything from 0 to 255.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: 187
   * console.log(myColor.red);
   */
  get red() {
    return this.#rgb[0];
  }

  /**
   * Get the red component of the color representing the calling instantiated Colorful object. This value can be anything from 0 to 255.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: 159
   * console.log(myColor.green);
   */
  get green() {
    return this.#rgb[1];
  }

  /**
   * Get the red component of the color representing the calling instantiated Colorful object. This value can be anything from 0 to 255.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: 246
   * console.log(myColor.blue);
   */
  get blue() {
    return this.#rgb[2];
  }

  /**
   * Get the given color's hue. This value can be any integer between 0 and 359.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: 259
   * console.log(myColor.hue);
   */
  get hue() {
    return this.#hsl[0];
  }

  /**
   * Get the HSL saturation of the color representing the calling instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: 83
   * console.log(myColor.saturation);
   */
  get saturation() {
    return this.#hsl[1];
  }

  /**
   * Get the HSL lightness of the color representing the calling instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: 79
   * console.log(myColor.lightness);
   */
  get lightness() {
    return this.#hsl[2];
  }

  /**
   * Get the luminance of the color representing the calling instantiated Colorful object.
   * Remember that `getLuminance()` is a static method. You can use the `luminance` getter to get the luminance of the color instantiating the `Colorful` object because this getter passing the HEX value of that color to `getLuminance()`.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: 0.4201489058782789
   * console.log(myColor.luminance);
   */
  get luminance() {
    return Colorful.getLuminance(this.hex);
  }

  /**
   * Get the HEX values for two new colors that are split complementary of the color representing the instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#f6e69d", "#adf69d" ]
   * console.log(myColor.analogous);
   */
  get splitComplementary() {
    return this.getSplitComplementaryColors();
  }

  /**
   * Get the HEX values for a color that is complementary to the color representing the instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: #daf69d
   * console.log(myColor.analogous);
   */
  get complementary() {
    return this.getComplementaryColor();
  }

  /**
   * Get the HEX values for a color that is inverse of the color representing the instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: #446009
   * console.log(myColor.analogous);
   */
  get inverse() {
    return this.getInverseColor();
  }

  /**
   * Get a random color as a HEX string.
   * @readonly
   * @example
   * // Outputs: #ac83f2
   * console.log(Colorful.aHex);
   */
  static get aHex() {
    return Colorful.getRandomHexColor();
  }

  /**
   * Get a random Pastel color as a HEX string.
   * @readonly
   * @example
   * // Outputs: #ec8eb1
   * console.log(Colorful.aPastel);
   */
  static get aPastel() {
    return Colorful.getRandomPastelColor();
  }

  /**
   * Get a random HEX color with reddish shade.
   * @readonly
   * @example
   * // Outputs: #d05643
   * console.log(Colorful.reddish); 
   */
  static get reddish() {
    return Colorful.getRandomPreferredColor('reddish');
  }

  /**
   * Get a random HEX color with bluish shade.
   * @readonly
   * @example
   * // Outputs: #49a1f8
   * console.log(Colorful.bluish); 
   */
  static get bluish() {
    return Colorful.getRandomPreferredColor('bluish');
  }

  /**
   * Get a random HEX color with greenish shade.
   * @readonly
   * @example
   * // Outputs: #05b820
   * console.log(Colorful.greenish);
   */
  static get greenish() {
    return Colorful.getRandomPreferredColor('greenish');
  }

  /**
   * Get the HEX values for two new colors that are analogous to the color representing the instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#e69df6", "#9dadf6" ]
   * console.log(myColor.analogous);
   */
  get analogous() {
    return this.getAnalogousColors();
  }

  /**
   * Get the HEX values for five new colors that are monochromatic with respect to the color representing the instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#262133", "#453b5c", "#5c4e7a", "#8c74be", "#b7a8d6" ]
   * console.log(myColor.analogous);
   */
  get monochromatic() {
    return this.getMonochromaticColors();
  }

  /**
   * Get the HEX values for two new colors that form a triad with the color representing the instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#f6b99d", "#9df6b9" ]
   * console.log(myColor.triad);
   */
  get triad() {
    return this.getTriadColors();
  }

  /**
   * Get the HEX values for two new colors that form a square with the color representing the instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#f69dad", "#daf69d", "#9df6e6" ]
   * console.log(myColor.square);
   */
  get square() {
    return this.getSquareColors();
  }

  /**
   * Get the HEX values for two new colors that form a rectangle with the color representing the instantiated Colorful object.
   * @readonly
   * @example
   * let myColor = new Colorful('#BB9FF6');
   * 
   * // Outputs: [ "#f69dda", "#daf69d", "#9df6b9" ]
   * console.log(myColor.square);
   */
  get rectangle() {
    return this.getRectangleColors();
  }
}

/**
 * Check if a value is in range.
 * @param {number} value - The number you want to check.
 * @param {number} min - Minimum acceptable value for the number.
 * @param {number} max - Maximum acceptable value for the number.
 * @returns {bool} Returns true if the number is in range.
 */
function inRange(value, min, max) {
  return value >= min && value <= max;
}

/**
 * Convert a given array into a string with a valid color value in desired format.
 * @param {string} type - Specify the color type like `rgb`, `hsl` 
 * @param {array} array - Different array elements contain respective values.
 * @returns {string} The color representation in desired format as a string.
 */
function toString(type, array) {
  if (type == "rgb") {
    return `${colorType}(` + array.join(", ") + ")";
  }

  if (type == "hsl") {
    return `${colorType}(${array[0]}deg, ${array[1]}%, ${array[2]}%)`;
  }
}

function validateRgb(rgb) {
    if (rgb.length != 3) {
        throw new Error(`Input array needs three elements!`);
    }

    for (let c of rgb) {
        if (!Number.isInteger(c)) {
            throw new Error(`At least one RGB value is not a number!`);
        }

        if (!inRange(c, 0, 255)) {
            throw new Error(`At least one RGB value is not in valid range!`);
        }
    }
}

function validateHslHsv(hslv) {

    if (hslv.length != 3) {
        throw new Error(`Input array needs three elements!`);
    }

    if (!inRange(hslv[1], 0, 100) || !inRange(hslv[2], 0, 100)) {
        throw new Error(`One of the values is out of range!`);
    }
    
}