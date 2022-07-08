/**
 * Color Library for Surface colors
 */

export function componentToHex(c: number): string {
  let hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export type rgbValue = {
  r: number,
  g: number,
  b: number
}

export function hexToRgb(hex: string): rgbValue {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[1], 16),
    b: parseInt(result[3], 16)
  } : {r: 255, g: 255, b: 255};
}

export interface IColor {
  hex: string,
  rgb: rgbValue,
}

export function useColor(colorValue: string, ...colorValues: string[]): IColor {
  
  const hex = rgbToHex(
    parseInt(colorValue),
    parseInt(colorValues[0]), 
    parseInt(colorValues[1])
  );
  const rgb = hexToRgb(colorValue);

  return {hex, rgb};
}