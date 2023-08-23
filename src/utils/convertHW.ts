type HWType = 'height' | 'weight';

export const convertHW = (value: number, type: HWType) =>
  type === 'height'
    ? `${(value / 10).toFixed(1)}m`
    : `${(value / 10).toFixed(1)}kg`;
