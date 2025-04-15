# 📝 Todo List - Next.js 과제 프로젝트

Next.js, TypeScript, Tailwind CSS를 기반으로 제작한 할 일 관리 웹 애플리케이션입니다.  
디자인 시안 및 Swagger API 문서를 바탕으로 기능을 구현하고, 공용 UI 컴포넌트와 사용자 
경험을 고려한 상세 페이지를 포함하고 있습니다.

---

✅ 과제 요구사항 체크리스트
(💡핵심)
 CRUD 기능 구현 
 메모 및 이미지 업로드 기능 
 상태에 따른 UI 렌더링 


(🔹보조)
 디자인 시안 기반 반응형 웹
 컬러 시스템 및 공용 스타일
 컴포넌트화 및 props 처리 

 Vercel 배포 및 GitHub 업로드

---

## 📌 주요 기능

- 할 일 목록 등록 / 수정 / 삭제
- 할 일 완료 상태 변경
- 상세 페이지에서 메모 작성 및 이미지 업로드
- 상태에 따른 UI 스타일 변경 (`미완료`, `완료`)
- 공용 컴포넌트 시스템(Button, Input, Badge 등)
- 반응형 웹 지원

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

## 🖼️ 프로젝트 화면

> (필요 시 스크린샷 첨부)

- 메인 목록 페이지
- 상세 페이지 (메모 & 이미지 업로드)
- 상태 표시 뱃지
- 반응형 대응 화면

---

## ⚙️ 프로젝트 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
# http://localhost:3000 접속

📁 디렉토리 구조
├── app/              # 라우팅 페이지 구조 (App Router)
├── components/ui/    # 공용 UI 컴포넌트
├── styles/           # Tailwind 확장 설정
├── types/            # 전역 타입 정의
├── utils/            # 유틸 함수
└── constants/        # 상수 (컬러 등)
📡 API 정보
Swagger 문서: API Docs

tenantId를 통한 개인화된 데이터 관리

🔗 배포 링크
https://todolist-project.vercel.app
(프로젝트 완성 후 실제 배포 URL 기재)

GitHub: @BAEEUNJi97

📌 과제 요구사항 체크리스트
 디자인 시안 기반 UI 구현


