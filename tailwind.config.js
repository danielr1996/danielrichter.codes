const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        {
            pattern: /row-start-(\d)/
        }
    ],
    theme: {

        extend: {

            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'primary-dark': colors.slate['900'],
                'primary': colors.slate['800'],
                'primary-light': colors.slate['700'],
                'secondary-dark': colors.sky['500'],
                'secondary': colors.sky['400'],
                'secondary-light': colors.sky['300'],
                'accent-dark': colors.amber['500'],
                'accent': colors.amber['400'],
                'accent-light': colors.amber['300'],
                gray: colors.gray,
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
