/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#06070A',
        panel: '#0D0F14',
        'panel-2': '#12151C',
        line: 'rgba(232,236,241,0.09)',
        text: '#E8ECF1',
        'text-dim': '#8B92A0',
        mono: '#5A6472',
        signal: '#49F0FF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
