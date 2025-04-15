# 📝 Todo List - Next.js 과제 프로젝트

Next.js, TypeScript, Tailwind CSS를 기반으로 제작한 할 일 관리 웹 애플리케이션입니다.  
디자인 시안 및 Swagger API 문서를 바탕으로 기능을 구현하고, 공용 UI 컴포넌트와 사용자 경험을 고려한 상세 페이지를 포함하고 있습니다.



---

🔗 배포 링크

**[프로젝트 바로가기](https://todolist-project-xi-bay.vercel.app)**  

---

##  과제 요구사항 체크리스트

**(상위)**  
- CRUD 기능 구현  
- 메모 및 이미지 업로드 기능  
- 상태에 따른 UI 렌더링  

**(하위)**  
- 디자인 시안 기반 반응형 웹  
- 컬러 시스템 및 공용 스타일  
- 컴포넌트화 및 props 처리  
- Vercel 배포 및 GitHub 업로드  

---

##  주요 기능

- 할 일 목록 등록 / 수정 / 삭제
- 할 일 완료 상태 변경
- 상세 페이지에서 메모 작성 및 이미지 업로드
- 상태에 따른 UI 스타일 변경 (`미완료`, `완료`)
- 공용 컴포넌트 시스템(Button, Input, Badge 등)
- 반응형 웹 지원

---

##  프로젝트 화면


<p align="center">
  <img src="https://github.com/user-attachments/assets/9e648bb7-70ed-4d64-b0b1-e8dfdb1f5dd8" alt="메인 목록 페이지" width="600" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/c17d980a-09eb-46df-a799-36ebe0d5a85a" alt="모바일 페이지 - 메모 입력" width="600" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a2000be5-9dbc-40b3-8656-d2e23cfa9d70" alt="상세 페이지" width="600" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/6b182dc7-58a4-47c1-b78e-34d20b1f37d9" alt="모바일 상세페이지 " width="600" />
</p>

- 메인 목록 페이지
- 상세 페이지 (메모 & 이미지 업로드)
- 상태 표시 뱃지
- 반응형 대응 화면

---

## 🛠️ 사용 기술

- **Next.js 14**
- **TypeScript**
- **Tailwind CSS**
- **React Hook Form** – 입력 폼 처리
- **Next.js App Router** – 라우팅 관리
- **Fetch API** – 비동기 데이터 통신
- **Swagger 기반 API 연동**
- **GitHub + Vercel 배포**

---

## ⚙️ 프로젝트 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 접속
http://localhost:3000
📁 디렉토리 구조 요약
bash
복사
편집
├── app/              # 라우팅 페이지 구조 (App Router)
├── components/ui/    # 공용 UI 컴포넌트
├── styles/           # Tailwind 확장 설정
├── types/            # 전역 타입 정의
├── utils/            # 유틸 함수
└── constants/        # 상수 (컬러 등)
📡 API 정보
Swagger 문서: API Docs
tenantId를 통해 개인화된 데이터 관리

 회고 및 정리
 - 제출 완성도
전체적으로 약 80%.
요구된 기능은 모두 구현, 모바일 환경에서도 반응형으로 동작 처리.
필수 기술 스택도 모두 적용.

 - 아쉬운 점
Next.js와 TypeScript에 대한 이해가 부족해 구조 파악에 시간 오버
기능 구현 후 디자인을 적용하면서 레이아웃이 꼬이고 수정 과정
사용자 피드백 처리와 예외 상황 해결 미흡
디자인 완성도와 UI 일관성 낮다.


 - 느낀 점
정해진 시간 안에 하나의 프로젝트를 끝까지 완성해본 경험이 인상적입니다.
직접 배포까지 진행하며 전체 개발 흐름을 경험할 수 있었습니다.
기능을 빠르게 구현하고 실제 서비스 형태로 만들면서 자신감을 얻을 수 있는 기회였습니다.

 - 구현 및 에러 기록
 https://buly.kr/6BwaxiG
