import React from 'react';
import './ResponsiveCanvas.css';

type Props = {
    /** 배경 이미지 경로 (public/ 기준) */
    src: string;
    /** 오버레이에 올릴 내용 */
    children?: React.ReactNode;
};

type CSSVar = React.CSSProperties & Record<string, string | number>;

export default function ResponsiveCanvas({ src, children }: Props) {
    const styleVars: CSSVar = {
        '--bg-image': `url(${src})`, // CSS 변수로 이미지 주입
    };

    return (
        <div className='stage'>
            <div className='frame' style={styleVars}>
                <div className='overlay'>{children}</div>
            </div>
        </div>
    );
}
