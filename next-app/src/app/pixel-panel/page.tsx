import React from 'react';
import './PixelPanel.css';
import PixelWrap from '../components/PixelWrap';
import ResponsiveCanvas from '../components/ResponsiveCanvas';

export default function PixelPanel() {
    return (
        <main
            style={{
                minHeight: '100dvh',
                display: 'grid',
                placeItems: 'center',
                gap: 40,
                background: "url('/responsive-image/bg-1920x1080.jpg') no-repeat center top",
                backgroundSize: 'cover', // 필요하다면 추가
            }}
        >
            <ResponsiveCanvas src='/responsive-image/bg-3840x2160.jpg'>
                <div
                    style={{
                        minHeight: '100dvh',
                        display: 'grid',
                        placeItems: 'center',
                        gap: 40,
                        backgroundSize: 'cover', // 필요하다면 추가
                    }}
                >
                    <PixelWrap stairCorner='diag_l' bg='#0009' borderColor='#fff' borderWidth={5} unit={4}>
                        <p style={{ color: '#fff', margin: 0 }}>diag_l</p>
                    </PixelWrap>
                    <PixelWrap stairCorner='diag_l' bg='#0009' borderColor='#fff' borderWidth={2} unit={3}>
                        <p style={{ color: '#fff', margin: 0 }}>diag_l</p>
                    </PixelWrap>
                    <PixelWrap stairCorner='diag_r' bg='#e86b4ccc' borderColor='#ffefb0' borderWidth={3} unit={2}>
                        <p style={{ color: '#ffefb0', margin: 0 }}>diag_sssssssssssssr</p>
                    </PixelWrap>
                    <PixelWrap stairCorner='all4' borderColor='#fff' borderWidth={0} unit={2}>
                        <p style={{ color: '#fff', margin: 0 }}>all4</p>
                    </PixelWrap>
                </div>
            </ResponsiveCanvas>
        </main>
    );
}
