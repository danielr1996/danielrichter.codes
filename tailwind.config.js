const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            slate: colors.slate,
            white: '#fff',
            'bluegray-dark': '#0f172a',
            'bluegray': '#1e293b',
            'bluegray-light': '#334155',
            'gray-400': '#9ca3af',
            'zinc-500':'#71717a',
            'zinc-400':'#a1a1aa',
            'zinc-300':'#d4d4d8',
        },
        // screens: {
        //     'sm': 'var(--breakpoint-sm)',
        //     'md': 'var(--breakpoint-md)',
        //     'lg': 'var(--breakpoint-lg)',
        //     'xl': 'var(--breakpoint-xl)',
        //     '2xl': 'var(--breakpoint-2xl)',
        // }
    },
    plugins: [require('@tailwindcss/typography')],
}
