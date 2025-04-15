import axios from 'axios';

const tenantId = 'mytodo777';  // 본인 아이디

const API_URL = `https://assignment-todolist-api.vercel.app/api/${tenantId}/items`;

export const createToDo = async (text: string, status: '미완료' | '완료') => {
    try {
        const response = await axios.post(API_URL, {
            text,
            status,
        });

        // 응답 내용 로그로 확인
        console.log('✅ API 응답:', response.data);
        return response.data;
    } catch (error: any) {
        console.error('❌ 할 일 추가 실패:', error.response?.data || error.message);
        throw error;
    }
};
