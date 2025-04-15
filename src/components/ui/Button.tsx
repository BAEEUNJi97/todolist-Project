import React from 'react';

// 버튼 컴포넌트에서 사용할 props 타입 정의
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'edit' | 'delete'; // 버튼 색상 스타일
    size?: 'sm' | 'md' | 'lg'; // 버튼 크기
}

// 공용 버튼 컴포넌트
export default function Button({
                                   children,
                                   type = 'button',
                                   variant = 'primary',
                                   size = 'md',
                                   className = '',
                                   ...props
                               }: ButtonProps) {

    // 버튼 스타일: 타입에 따라 색상, 배경 등 설정
    const variantClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        edit: 'bg-lime-300 text-slate-900 border-2 border-slate-900',
        delete: 'bg-rose-500 text-white border-2 border-slate-900',
    };

    // 버튼 크기별 스타일
    const sizeClasses = {
        sm: 'text-sm px-3 py-1.5 rounded-lg',
        md: 'text-base px-4 py-2 rounded-xl',
        lg: 'text-lg px-6 py-3 rounded-[24px] w-[168px] h-[56px]',
    };

    return (
        <button
            type={type}
            className={`
                font-bold flex items-center justify-center gap-2
                ${variantClasses[variant] || ''}
                ${sizeClasses[size] || ''}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}
