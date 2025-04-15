'use client'; // 클라이언트 컴포넌트임을 명시

import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import Gnb from '@/components/ui/Gnb';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import TodoItem from '@/components/TodoItem';
import { COLORS } from '@/styles/colors';

// 입력 폼의 데이터 타입 정의
interface FormValue {
    todo: string;
}

// 할 일 항목 데이터 타입 정의
interface IToDo {
    id: number;
    name: string;
    isCompleted: boolean;
}

// API 호출 시 사용할 기본 주소
const tenantId = 'mytodo777';
const BASE_URL = `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`;

export default function Page() {
    const { register, handleSubmit, reset } = useForm<FormValue>(); // 입력폼 훅 설정
    const [toDos, setToDos] = useState<IToDo[]>([]); // 전체 할 일 목록 상태
    const router = useRouter(); // 페이지 이동을 위한 라우터

    // 할 일 목록 불러오기
    const fetchToDos = async () => {
        try {
            const res = await fetch(BASE_URL);
            const data = await res.json();
            if (Array.isArray(data)) {
                setToDos(data);
            } else {
                console.error('API 응답이 배열이 아님:', data);
            }
        } catch (err) {
            console.error('목록 불러오기 실패:', err);
        }
    };

    // 페이지 진입 시 할 일 목록 요청
    useEffect(() => {
        fetchToDos();
    }, []);

    // 할 일 추가하기
    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const trimmed = data.todo?.trim();
        if (!trimmed) return;

        try {
            const res = await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: trimmed }),
            });

            const newToDo = await res.json();
            if (newToDo.id) {
                setToDos((prev) => [...prev, newToDo]);
            }
            reset();
        } catch (err) {
            console.error('추가 실패:', err);
        }
    };

    // 완료 상태 토글 (isCompleted true/false)
    const handleStatusChange = async (todo: IToDo) => {
        try {
            const res = await fetch(`${BASE_URL}/${todo.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isCompleted: !todo.isCompleted }),
            });

            if (res.ok) {
                setToDos((prev) =>
                    prev.map((item) =>
                        item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item
                    )
                );
            }
        } catch (err) {
            console.error('상태 변경 실패:', err);
        }
    };

    // 상세 페이지로 이동
    const handleGoToDetail = (id: number) => {
        router.push(`/items/${id}`);
    };

    // 할 일 목록 분리: 미완료 / 완료
    const incompleteToDos = toDos.filter((todo) => !todo.isCompleted);
    const completedToDos = toDos.filter((todo) => todo.isCompleted);

    return (
        <main
            className="min-h-screen w-full flex flex-col items-center"
            style={{ backgroundColor: COLORS.white }}
        >
            <Gnb />

            <div className="w-full max-w-3xl px-6">
                {/* 할 일 추가 입력 폼 */}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center gap-3 rounded-[24px] border-2 mb-6 mt-4 px-4 py-2 shadow-none"
                    style={{ borderColor: COLORS.slate[300], backgroundColor: COLORS.white }}
                >
                    <Input
                        {...register('todo')}
                        placeholder="할 일을 입력해주세요"
                        className="flex-1 !p-2 !border-none !shadow-none !placeholder-black "
                    />
                    <Button
                        type="submit"
                        className="rounded-full px-4 py-2 bg-violet-600 text-white hover:bg-violet-700 text-sm font-semibold"
                    >
                        추가
                    </Button>
                </form>

                {/* 할 일 목록 (미완료 / 완료) */}
                <div className="md:flex md:gap-6 grid grid-cols-1">
                    {/* 미완료 목록 */}
                    <section className="flex flex-col w-full">
                        <div className="mb-4">
                            <div
                                className="inline-flex items-center justify-center px-6 py-2 rounded-full"
                                style={{ backgroundColor: '#BEF264', color: '#15803D', fontSize: '18px' }}
                            >
                                TO DO
                            </div>
                        </div>
                        <ul className="space-y-4">
                            {incompleteToDos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    onToggle={() => handleStatusChange(todo)}
                                    onClickItem={() => handleGoToDetail(todo.id)}
                                />
                            ))}
                        </ul>
                    </section>

                    {/* 완료 목록 */}
                    <section className="flex flex-col w-full mt-6 md:mt-0">
                        <ul className="space-y-4">
                            <li>
                                <div
                                    className="inline-flex items-center justify-center px-6 py-2 rounded-full mx-auto md:mx-0"
                                    style={{ backgroundColor: '#15803D', color: '#FCD34D', fontSize: '18px' }}
                                >
                                    DONE
                                </div>
                            </li>
                            {completedToDos.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={{ ...todo, isCompleted: true }}
                                    onToggle={() => handleStatusChange(todo)}
                                    onClickItem={() => handleGoToDetail(todo.id)}
                                    className="border-2 border-slate-900 text-slate-900 line-through"
                                />
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    );
}
