'use client';

import React, { useRef, useState, useEffect } from 'react';

interface ImageUploaderProps {
    imageUrl: string;
    onChange: (url: string) => void;
}

export default function ImageUploader({ imageUrl, onChange }: ImageUploaderProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState('');

    // 이미지 URL 변경될 때 파일명 유지
    useEffect(() => {
        if (!imageUrl) setFileName('');
    }, [imageUrl]);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const baseName = file.name.split('.')[0];

        // ✅ 영어만 허용
        const isValidName = /^[a-zA-Z]+$/.test(baseName);
        if (!isValidName) {
            alert('이미지 파일 이름은 영문자로만 구성되어야 합니다.');
            return;
        }

        // ✅ 파일 용량 제한
        if (file.size > 5 * 1024 * 1024) {
            alert('파일 크기는 5MB 이하만 가능합니다.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch(`https://assignment-todolist-api.vercel.app/api/mytodo777/images/upload`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('업로드 실패');

            const data = await res.json();
            onChange(data.url);
            setFileName(file.name); // ✅ 파일 이름 고정 저장
        } catch (err) {
            console.error(err);
            alert('이미지 업로드에 실패했습니다.');
        }
    };

    return (
        <div className="relative w-[384px] h-[311px] bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] rounded-[24px] overflow-hidden flex items-center justify-center">
            {/* ✅ 이미지 미리보기 */}
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="업로드 이미지"
                    className="absolute inset-0 object-contain w-full h-full rounded-[24px]"
                />
            ) : (
                <div>
                    {/* + 아이콘 */}
                    <div className="absolute left-[20px] top-[20px] w-[64px] h-[64px] rounded-full bg-[#E2E8F0] flex items-center justify-center">
                        <div className="relative w-[24px] h-[24px]">
                            <span className="absolute left-0 top-1/2 w-[18px] h-[3px] bg-[#64748B] transform -translate-y-1/2" />
                            <span className="absolute left-1/2 top-0 h-[18px] w-[3px] bg-[#64748B] transform -translate-x-1/2" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm">이미지를 업로드 해주세요</p>
                </div>
            )}

            {/* ✅ 파일 이름 고정 표시 */}
            {fileName && (
                <p className="absolute bottom-4 left-4 text-xs text-gray-600 bg-white bg-opacity-80 px-2 py-1 rounded-md">
                    선택된 파일: {fileName}
                </p>
            )}

            {/* 업로드 버튼 */}
            <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-4 right-4 px-4 py-1.5 bg-slate-900 text-white text-xs rounded-full hover:bg-slate-800"
            >
                이미지 업로드
            </button>

            {/* 숨겨진 파일 입력창 */}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
            />
        </div>
    );
}
