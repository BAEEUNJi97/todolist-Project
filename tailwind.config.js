/** @type {import('tailwindcss').Config} */

// 공통 색상 상수를 정의한 파일
// Tailwind나 인라인 스타일에서 일관된 색상 사용을 위해 분리함

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    100: "#F1F5F9",
                    200: "#E2E8F0",
                    300: "#CBD5E1",
                    400: "#94A3B8",
                    500: "#64748B",
                    800: "#1E293B",
                    900: "#0F172A",
                },
                violet: {
                    100: "#EDE9FE",
                    600: "#7C3AED",
                },
                rose: {
                    500: "#F43F5E",
                },
                lime: {
                    300: "#BEF264",
                },
                amber: {
                    800: "#92400E",
                },
            },
        },
    },
    plugins: [],
};