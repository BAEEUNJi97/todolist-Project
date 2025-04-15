import React from 'react';

// 할 일 항목에 대한 props 타입 정의
interface TodoItemProps {
    todo: {
        id: number;
        name: string;
        isCompleted: boolean;
    };
    onToggle: () => void; // 체크박스 클릭 시 상태 토글
    onDelete?: () => void;
    onClickItem: () => void; // 항목 전체 클릭 시 상세 페이지 이동
    className?: string; //
}

// 할 일 목록 중 한 개의 항목을 표시하는 컴포넌트
export default function TodoItem({ todo, onToggle, onClickItem,  className = '', }: TodoItemProps) {
    const isDone = todo.isCompleted;

    return (
        <li
            onClick={onClickItem}
            className={`flex items-center justify-between px-6 py-4 rounded-[20px] border-[2px] 
  cursor-pointer transition-all duration-150
  ${isDone
                ? 'bg-[#EDE9FE] border-[#0F172A] text-[#0F172A]'
                : 'bg-white border-[#0F172A] text-[#0F172A]'
            } ${className}`} // ✅ 이 줄 추가!!!
        >
            <div className="flex items-center gap-3 w-full">
                {/* 체크 아이콘: 시안 스타일 적용 */}
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggle();
                    }}
                    className={`w-5 h-5 min-w-[20px] min-h-[20px] rounded-full border-2 flex items-center justify-center 
                    ${isDone ? 'bg-[#7C3AED] border-[#7C3AED]' : 'border-[#0F172A] bg-white'} 
                    cursor-pointer`}
                >
                    {isDone && <div className="w-2 h-2 rounded-full bg-white"/>}
                </div>

                {/* 할 일 텍스트 */}
                <p
                    className={`text-base font-medium break-words ${
                        isDone ? 'line-through' : ''
                    }`}
                >
                    {todo.name}
                </p>
            </div>
        </li>
    );
}
