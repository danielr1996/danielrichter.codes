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
            'bluegray-dark': '#0f172a',
            'bluegray': '#1e293b',
            'bluegray-light': '#334155',
            'gray-400': '#9ca3af',
            'zinc-500':'#71717a',
            'zinc-400':'#a1a1aa',
            'zinc-300':'#d4d4d8',
        },
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
}
