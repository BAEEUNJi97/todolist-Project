'use client'; // 클라이언트 컴포넌트임을 명시

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import TodoItemDetail from '@/components/ui/TodoItemDetail';
import Gnb from "@/components/ui/Gnb";

// 할 일 항목 데이터 타입 정의
interface IToDo {
    id: number;
    name: string;
    isCompleted: boolean;
}

// API 호출 시 사용할 기본 주소
const tenantId = 'mytodo777';
const BASE_URL = `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`;

export default function TodoDetailPage() {
    const { id } = useParams(); // URL 파라미터에서 id 추출
    const router = useRouter(); // 페이지 이동을 위한 라우터
    const [todo, setTodo] = useState<IToDo | null>(null); // 선택된 할 일 상세 정보

    // 할 일 상세 정보 가져오기
    const fetchTodo = async () => {
        try {
            const res = await fetch(`${BASE_URL}/${id}`);
            const data = await res.json();
            if (data?.id) {
                setTodo(data);
            }
        } catch (err) {
            console.error('상세 정보 불러오기 실패:', err);
        }
    };

    // 페이지 진입 시 상세 정보 요청
    useEffect(() => {
        fetchTodo();
    }, []);

    // 완료 상태 토글
    const handleStatusChange = async () => {
        if (!todo) return;
        try {
            const res = await fetch(`${BASE_URL}/${todo.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isCompleted: !todo.isCompleted }),
            });

            if (res.ok) {
                setTodo({ ...todo, isCompleted: !todo.isCompleted });
            }
        } catch (err) {
            console.error('상태 변경 실패:', err);
        }
    };

    // 할 일 삭제하기
    const handleDelete = async () => {
        if (!todo) return;
        try {
            const res = await fetch(`${BASE_URL}/${todo.id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                router.push('/'); // 삭제 후 메인으로 이동
            }
        } catch (err) {
            console.error('삭제 실패:', err);
        }
    };

    // 메모 수정하기 (내용 업데이트)
    const handleUpdate = async (updated: Partial<IToDo>) => {
        if (!todo) return;

        try {
            const res = await fetch(`${BASE_URL}/${todo.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated),
            });

            if (res.ok) {
                const updatedTodo = await res.json();
                setTodo(updatedTodo); // 수정된 내용 반영
                alert('수정이 완료되었습니다.');
            }
        } catch (err) {
            console.error('메모 업데이트 실패:', err);
        }
    };

    // 로딩 중 상태 처리
    if (!todo) return <p className="p-6 text-gray-500">로딩 중...</p>;

    return (
        <main className="w-full min-h-screen bg-white">
            <Gnb />
            <TodoItemDetail
                todo={todo}
                onToggle={handleStatusChange} // 상태 변경 함수
                onDelete={handleDelete} // 삭제 함수
                onUpdate={handleUpdate} // 메모 수정 함수
            />
        </main>
    );
}
