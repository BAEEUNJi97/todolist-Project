// components/ImageUploader.tsx

import React from 'react';

// 이미지 업로드용 UI 박스 컴포넌트 (정적 화면 구성용)
export default function ImageUploader() {
    return (
        <div className="relative w-[384px] h-[311px] bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] rounded-[24px]">
            {/* 상단 + 아이콘 영역 */}
            <div className="absolute left-[20px] top-[20px] w-[64px] h-[64px] rounded-full bg-[#E2E8F0] flex items-center justify-center">
                {/* + 아이콘 (수동 구현) */}
                <div className="relative w-[24px] h-[24px]">
                    <span className="absolute left-0 top-1/2 w-[18px] h-[3px] bg-[#64748B] transform -translate-y-1/2" />
                    <span className="absolute left-1/2 top-0 h-[18px] w-[3px] bg-[#64748B] transform -translate-x-1/2" />
                </div>
            </div>

            {/* 하단 버튼 (숨김처리됨) */}
            <div className="absolute left-[406px] top-[343px] w-[64px] h-[64px] rounded-full bg-[#0F172A] invisible" />
        </div>
    );
}
