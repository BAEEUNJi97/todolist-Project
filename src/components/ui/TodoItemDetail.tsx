'use client'; // 클라이언트 컴포넌트임을 명시

import { IToDo } from '@/types/todo';
import Button from '@/components/ui/Button';
import ImageUploader from '@/components/ui/ImageUploader';
import { useState } from 'react';
import { COLORS } from '@/styles/colors';

// 상세 페이지에서 사용하는 props 타입 정의
interface TodoItemDetailProps {
    todo: IToDo;
    onUpdate: (updated: Partial<IToDo>) => void;
    onDelete: () => void;
    onToggle: () => void;
}

// 할 일 상세보기 컴포넌트
export default function TodoItemDetail({ todo, onUpdate, onDelete, onToggle }: TodoItemDetailProps) {
    if (!todo) return null;

    // 메모, 완료상태, 이미지 URL 상태 관리
    const [memo, setMemo] = useState(todo.memo || '');
    const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
    const [imageUrl, setImageUrl] = useState(todo.imageUrl || '');


    // 수정 완료 버튼 클릭 시 호출
    const handleSave = () => {
        onUpdate({
            isCompleted,
            memo,
            imageUrl,
        });
    };


    // 이미지 업로드 처리
    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // 파일명 유효성 체크 (영문만 허용)
        const isValidName = /^[a-zA-Z0-9_.-]+$/.test(file.name);
        if (!isValidName) {
            alert('이미지 파일 이름은 영문만 가능합니다.');
            return;
        }

        // 크기 제한: 5MB 이하만 허용
        if (file.size > 5 * 1024 * 1024) {
            alert('파일 크기는 5MB 이하만 가능합니다.');
            return;
        }

        // FormData에 이미지 담아서 업로드
        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch(`https://assignment-todolist-api.vercel.app/api/mytodo777/images/upload`, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) throw new Error('업로드 실패');

            const data = await res.json();
            setImageUrl(data.url);
        } catch (err) {
            alert('이미지 업로드에 실패했습니다.');
            console.error(err);
        }
    };

    return (
        <main className="min-h-screen w-full flex flex-col items-center bg-white">
            <div className="w-full max-w-3xl p-6">
                <div className="flex flex-col gap-6 rounded-xl w-full bg-white">
                    {/* 상태 + 제목 */}
                    <div className="w-full border-2 rounded-[24px] h-16 flex items-center justify-between px-6 bg-violet-100 border-slate-900">
                        <h2 className={`text-base font-semibold w-full text-center ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-900'}`}>
                            {todo.name}
                        </h2>
                        <div
                            onClick={() => {
                                setIsCompleted(!isCompleted);
                                onToggle();
                            }}
                            className="w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer"
                            style={{
                                backgroundColor: isCompleted ? COLORS.violet[600] : COLORS.yellow[50],
                                borderColor: isCompleted ? COLORS.violet[600] : COLORS.slate[900],
                            }}
                        >
                            {isCompleted && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                    </div>

                    {/* 이미지 & 메모 */}
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="w-full md:w-1/2 flex flex-col gap-2">
                            <div className="relative w-full h-[311px] bg-[#F8FAFC] border-2 border-dashed border-[#CBD5E1] rounded-[24px] overflow-hidden">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="업로드된 이미지"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="absolute left-[20px] top-[20px] w-[64px] h-[64px] rounded-full bg-[#E2E8F0] flex items-center justify-center">
                                        <div className="relative w-[24px] h-[24px]">
                                            <span className="absolute left-0 top-1/2 w-[18px] h-[3px] bg-[#64748B] transform -translate-y-1/2" />
                                            <span className="absolute left-1/2 top-0 h-[18px] w-[3px] bg-[#64748B] transform -translate-x-1/2" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                            />
                        </div>

                        {/* 메모 입력 */}
                        <div className="w-full md:w-1/2 flex flex-col justify-start gap-2">
                            <div className="text-sm font-bold text-left pl-1 mb-1 text-slate-700">Memo</div>
                            <div className="rounded-xl overflow-hidden h-full">
                                <textarea
                                    className="w-full h-full min-h-[196px] p-4 text-sm font-mono resize-none border-none outline-none leading-[32px] text-slate-900"
                                    style={{
                                        backgroundColor: COLORS.yellow[50],
                                        backgroundImage: 'repeating-linear-gradient(#FEF3C7 0 1px, transparent 1px 32px)',
                                    }}
                                    placeholder="메모를 입력해보세요"
                                    value={memo}
                                    onChange={(e) => setMemo(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* 하단 버튼 영역 */}
                    <div className="flex justify-end gap-4 mt-4 w-full">
                        <Button type="button" variant="edit" size="lg" onClick={handleSave}>
                            ✔ 수정 완료
                        </Button>
                        <Button type="button" variant="delete" size="lg" onClick={onDelete}>
                            ✖ 삭제하기
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
