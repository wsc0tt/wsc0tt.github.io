/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['SUSE', 'sans-serif'],
                'serif': ['Young Serif', 'serif'],
            },
            textColor: {
                'spring': '#04F16B',
                'jet': '#2d2e2e',
                'night': '#0B090A',
                'battle': '#8A897C',
                'ice': '#758BFD'
            },
            backgroundColor: {
                'spring': '#04F16B',
                'jet': '#2d2e2e',
                'night': '#0B090A',
                'battle': '#8A897C',
                'ice': '#758BFD'
            },
            ringColor: {
                'spring': '#04F16B',
                'jet': '#2d2e2e',
                'night': '#0B090A',
                'battle': '#8A897C'
            },
        },
    },
    plugins: [],
}

