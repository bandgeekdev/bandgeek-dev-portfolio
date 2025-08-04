import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'mint-gradient': 'linear-gradient(135deg, #a8edea 0%, #3fcdc7 100%)',
        'lavender-gradient':
          'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        'burnt-orange-gradient':
          'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
