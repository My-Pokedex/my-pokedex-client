import type { Config } from 'tailwindcss';
import tokens from './src/tokens/tokens';

const { colors, fontSize, boxShadow, borderRadius, backgroundImage } = tokens;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    fontSize,
    extend: {
      boxShadow,
      borderRadius,
      backgroundImage,
    },
    screens: {
      '1col': '585px',
      '2col': '850px',
    },
  },
  plugins: [],
};

export default config;
