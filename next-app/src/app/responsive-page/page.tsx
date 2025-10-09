import React from 'react';
import './ResponsivePage.css';
import Image from 'next/image';

type CSSVars = React.CSSProperties & { ['--bg-image']?: string };

export default function ResponsivePage() {
    const style: CSSVars = { ['--bg-image']: 'url(/responsive-image/bg-3840x2160.jpg)' };
    return (
        <>
            <div className='global__stage'>
                <div className='global__canvas720' style={style}>
                    {/* 여기에 자유 배치 (px로 배치하면 전부 같이 스케일) */}
                    <h1
                        style={{
                            position: 'absolute',
                            left: 40,
                            top: 28,
                            margin: 0,
                            color: '#fff',
                            font: '700 32px/1.2 system-ui',
                        }}
                    >
                        5-27 버려진 무기들의 절벽
                    </h1>

                    <h2
                        style={{
                            fontSize: 100,
                        }}
                    >
                        안녕하세요 감사해요
                    </h2>

                    <Image src='/responsive-image/bg-728x410.jpg' alt='아이콘' width={728} height={410} />

                    <div
                        style={{
                            position: 'absolute',
                            right: 28,
                            bottom: 24,
                            padding: '18px 28px',
                            borderRadius: 18,
                            border: 'none',
                            background: '#ff5a47',
                            color: '#fff',
                            font: '800 22px/1 system-ui',
                            cursor: 'pointer',
                        }}
                    >
                        전투 시작
                    </div>
                </div>
            </div>
        </>
    );
}
