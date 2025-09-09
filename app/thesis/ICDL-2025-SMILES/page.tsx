'use client';

import { useRef } from 'react';

export default function Page() {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handlePlay = () => {
        audioRef.current?.play();
    };

    return (
        <div>
            <h2>SVG Image</h2>
            <img src="/ICDL-2025/sound_generation_process.svg" alt="Sound generation process, step by step" className='mx-auto my-3 h-[80vh]'/>

            <h2>Sound Reader</h2>
            <audio ref={audioRef} src="/ICDL-2025/generated_sound.wav" preload="auto" />
            <button onClick={handlePlay}>Play Sound</button>
        </div>
    );
}