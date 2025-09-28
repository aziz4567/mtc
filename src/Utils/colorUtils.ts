// Color detection and contrast utilities for adaptive cursor

/**
 * Convert RGB color to HSL
 */
export function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
}

/**
 * Parse CSS color string to RGB values
 */
export function parseColor(color: string): [number, number, number] | null {
  // Handle rgb() format
  const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (rgbMatch) {
    return [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])];
  }

  // Handle rgba() format
  const rgbaMatch = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)/);
  if (rgbaMatch) {
    return [parseInt(rgbaMatch[1]), parseInt(rgbaMatch[2]), parseInt(rgbaMatch[3])];
  }

  // Handle hex format
  const hexMatch = color.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hexMatch) {
    return [
      parseInt(hexMatch[1], 16),
      parseInt(hexMatch[2], 16),
      parseInt(hexMatch[3], 16)
    ];
  }

  // Handle short hex format
  const shortHexMatch = color.match(/^#([a-f\d])([a-f\d])([a-f\d])$/i);
  if (shortHexMatch) {
    return [
      parseInt(shortHexMatch[1] + shortHexMatch[1], 16),
      parseInt(shortHexMatch[2] + shortHexMatch[2], 16),
      parseInt(shortHexMatch[3] + shortHexMatch[3], 16)
    ];
  }

  // Handle named colors
  const namedColors: { [key: string]: [number, number, number] } = {
    black: [0, 0, 0],
    white: [255, 255, 255],
    red: [255, 0, 0],
    green: [0, 128, 0],
    blue: [0, 0, 255],
    yellow: [255, 255, 0],
    cyan: [0, 255, 255],
    magenta: [255, 0, 255],
    gray: [128, 128, 128],
    grey: [128, 128, 128],
    transparent: [255, 255, 255] // Default to white for transparent
  };

  const lowerColor = color.toLowerCase();
  if (namedColors[lowerColor]) {
    return namedColors[lowerColor];
  }

  return null;
}

/**
 * Calculate luminance of a color
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Calculate contrast ratio between two colors
 */
export function getContrastRatio(color1: [number, number, number], color2: [number, number, number]): number {
  const lum1 = getLuminance(color1[0], color1[1], color1[2]);
  const lum2 = getLuminance(color2[0], color2[1], color2[2]);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * Determine if a color is light or dark
 */
export function isLightColor(r: number, g: number, b: number): boolean {
  const luminance = getLuminance(r, g, b);
  return luminance > 0.5;
}

/**
 * Get the background color of an element, traversing up the DOM tree
 */
export function getElementBackgroundColor(element: HTMLElement): [number, number, number] {
  let currentElement: HTMLElement | null = element;
  
  while (currentElement) {
    const computedStyle = window.getComputedStyle(currentElement);
    const backgroundColor = computedStyle.backgroundColor;
    
    // Skip transparent backgrounds
    if (backgroundColor && backgroundColor !== 'transparent' && backgroundColor !== 'rgba(0, 0, 0, 0)') {
      const color = parseColor(backgroundColor);
      if (color) {
        return color;
      }
    }
    
    currentElement = currentElement.parentElement;
  }
  
  // Default to body background or white
  const bodyStyle = window.getComputedStyle(document.body);
  const bodyBg = parseColor(bodyStyle.backgroundColor || 'white');
  return bodyBg || [255, 255, 255]; // Default to white
}

/**
 * Get optimal cursor colors based on background
 */
export function getOptimalCursorColors(backgroundColor: [number, number, number]): {
  cursorBg: string;
  cursorText: string;
  isLight: boolean;
} {
  const [r, g, b] = backgroundColor;
  const isLight = isLightColor(r, g, b);
  
  if (isLight) {
    // Light background -> dark cursor
    return {
      cursorBg: '#000000',
      cursorText: '#ffffff',
      isLight: false
    };
  } else {
    // Dark background -> light cursor
    return {
      cursorBg: '#ffffff',
      cursorText: '#000000',
      isLight: true
    };
  }
}

/**
 * Get cursor position relative to viewport
 */
export function getCursorPosition(event: MouseEvent): { x: number; y: number } {
  return {
    x: event.clientX,
    y: event.clientY
  };
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}