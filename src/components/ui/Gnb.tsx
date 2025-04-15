// src/components/ui/Gnb.tsx
'use client'; // 클라이언트 컴포넌트임을 명시

import Link from 'next/link';
import { COLORS } from '@/styles/colors';

// 상단 네비게이션 바 컴포넌트
export default function Gnb() {
    return (
        <header
            className="w-full py-4 px-6 shadow-md mb-6"
            style={{ backgroundColor: COLORS.white }}
        >
            <div className="max-w-4xl mx-auto">
                {/* 메인 페이지로 이동하는 로고 링크 */}
                <Link href="/">
                    <span
                        className="text-2xl font-bold cursor-pointer"
                        style={{ color: COLORS.violet[600] }}
                    >
                        TODO LIST
                    </span>
                </Link>
            </div>
        </header>
    );
}
