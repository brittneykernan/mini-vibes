import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}', './src/content/**/*.mdx', './src/public/**/*.svg'],
  theme: {},
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
