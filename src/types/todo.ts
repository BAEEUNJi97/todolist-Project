
// 할 일 항목(Todo)데의터 구조를 정의
export interface IToDo {
    id: number;             // 고유 ID
    name: string;           // 할 일 제목
    isCompleted: boolean;   // 완료 여부
    memo?: string;          // 메모 (선택값)
    imageUrl?: string;      // 업로드된 이미지 URL (선택값)
}
