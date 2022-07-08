import { useColor } from './';

describe('testing the useColor hooks', () => {

  test('should be able to create hex values', () => {

    const { hex } = useColor("255", "255", "255");

    expect(hex).toEqual('#ffffff');
  });

  test('should be able to create rgb values', () => {

    const { rgb } = useColor("#000000");

    expect(rgb.r).toEqual(0);
    expect(rgb.g).toEqual(0);
    expect(rgb.b).toEqual(0);
  });
});