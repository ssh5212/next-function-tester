// app/responsive-image/page.tsx
import React from 'react';
// import './ResponsiveImage.css';
import ResponsiveCanvas from '../components/ResponsiveCanvas';

export default function ResponsiveImage() {
    return (
        <ResponsiveCanvas src='/responsive-image/bg-3840x2160.jpg'>
            <h1 className='label-top-left'>responsive-image</h1>
            <p className='label-bottom-right'>hola</p>
        </ResponsiveCanvas>
    );
}
