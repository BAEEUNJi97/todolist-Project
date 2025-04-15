import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";// Google 폰트 import
import "./globals.css"; // 전역 스타일 import
import { ReactNode } from 'react'

// Google 폰트 설정 (Geist Sans)
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

// Google 폰트 설정 (Geist Mono - 코드용 폰트)
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


// 메타데이터 설정 (SEO 및 브라우저 탭 정보에 사용됨)
export const metadata: Metadata = {
    title: 'Todo List',
    description: 'Tenant 기반 Todo 리스트 앱',
};


// 루트 레이아웃 컴포넌트 (모든 페이지에 공통 적용)
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
