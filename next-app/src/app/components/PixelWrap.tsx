type Corner = 'br' | 'tr' | 'bl' | 'tl' | 'diag_l' | 'diag_r' | 'all4';

type Props = {
    children: React.ReactNode;
    className?: string;
    /** 반투명 배경색 (예: "rgba(0,0,0,0.6)" or "#00000099") */
    bg?: string;
    /** 테두리 색 (예: "#fff") */
    borderColor?: string;
    /** 테두리 두께(px) */
    borderWidth?: number;
    /** 픽셀 계단 한 칸 크기(px) */
    unit?: number;
    /** 안쪽 패딩 (CSS 값) */
    padding?: string;
    /** 계단식 코너/프리셋 */
    stairCorner?: Corner;
};

export default function PixelWrap({
    children,
    className,
    bg = 'rgba(0,0,0,0.6)',
    borderColor = '#fff',
    borderWidth = 3,
    unit = 8,
    padding = '16px 24px',
    stairCorner = 'br',
}: Props) {
    const style = {
        // CSS 커스텀 프로퍼티 전달
        '--bg': bg,
        '--fg': borderColor,
        '--b': `${borderWidth}px`,
        '--u': `${unit}px`,
        '--pad': padding,
    } as React.CSSProperties;

    return (
        <div className={`pixel-wrap ${stairCorner} ${className ?? ''}`} style={style}>
            <div className='pixel-panel'>{children}</div>
        </div>
    );
}
