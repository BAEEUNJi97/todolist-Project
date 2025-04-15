// postcss.config.js
module.exports = {
    plugins: {
        '@tailwindcss/postcss': {},
        // Tailwind 전용 PostCSS 플러그인
        // tailwind.config.js 설정을 읽고 실제 CSS 클래스를 생성해줌
    },
}