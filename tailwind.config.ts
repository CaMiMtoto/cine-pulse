import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary': '#139D8D',
                'primary-light': '#1AB39F',
                'primary-dark': '#104847',
                'info': '#1A9DB3',
                'info-light': '#1AB3C9',
                'info-dark': '#10484E',
                'success': '#1AB35D',
                'success-light': '#1AC97B',
                'success-dark': '#10482F',
                'warning': '#B39D13',
                'warning-light': '#C9B31A',
                'warning-dark': '#4E480F',
                'danger': '#B31A1A',
                'danger-light': '#C93A1A',
                'danger-dark': '#4E0F0F',
                'muted': '#6B7280',
            }
        },
    },
    plugins: [],
}
export default config
