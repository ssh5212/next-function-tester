// app/responsive-image/page.tsx
import React from 'react';
import './ResponsiveImage.css';

export default function ResponsiveImage() {
    return (
        <div className='stage'>
            <div className='frame'>
                {/* 오버레이 (이미지 상자와 정확히 같은 크기) */}
                <div className='overlay'>
                    <h1 className='label-top-left'>responsive-image</h1>
                    <p className='label-bottom-right'>hola</p>
                </div>
            </div>
        </div>
    );
}
