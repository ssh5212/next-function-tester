import Link from 'next/link';

export default function Home() {
    return (
        <>
            <h1>Test List</h1>
            <Link href='/responsive-image'>responsive-image :: 배경 이미지 화면 크기에 따라 자동 조정</Link>
            <br />
            <Link href='/pixel-panel'>pixel-panel :: 픽셀아트식 버튼 구현</Link>
            <br />
            <Link href='/responsive-page'>responsive-page :: 통짜로 모든 요소 크기 변환</Link>
        </>
    );
}
