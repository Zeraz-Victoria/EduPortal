/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f0f4ff',
                    100: '#e0e9ff',
                    200: '#c7d7fe',
                    300: '#a5bbfd',
                    400: '#8194fb',
                    500: '#6270f3',
                    600: '#4f4fe8',
                    700: '#4541ce',
                    800: '#3836a7',
                    900: '#313184',
                    950: '#1e1c4e',
                },
            },
            boxShadow: {
                'premium': '0 25px 50px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(255,255,255,0.8) inset',
                'brand-glow': '0 0 40px rgba(98, 112, 243, 0.3)',
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(135deg, #6270f3 0%, #8b5cf6 100%)',
                'gradient-green': 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                'gradient-portal': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'slide-in-bottom': 'slideInBottom 0.5s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                slideInBottom: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
