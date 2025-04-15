// 페이지 메타데이터 설정 (SEO 및 브라우저 탭 정보에 사용됨)
export const metadata = {
    title: '나의 Todo 리스트',
    description: '할 일을 효율적으로 관리할 수 있는 Next.js 기반 Todo 앱입니다',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}