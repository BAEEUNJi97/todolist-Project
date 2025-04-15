import React, { forwardRef } from 'react';

// input 컴포넌트에 사용할 props 타입 정의
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
}

// 공용 Input 컴포넌트 정의
// forwardRef를 사용하여 외부에서 ref 접근 가능하게 설정
const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, ...props }, ref) => {
    return (
        <input
            ref={ref}
            {...props}
            placeholder={placeholder}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
    );
});

// 컴포넌트 이름 설정 (forwardRef 사용 시 필수)
Input.displayName = 'Input';

export default Input;