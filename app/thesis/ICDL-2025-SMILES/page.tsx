'use client';

import { useRef, useState } from 'react';

export default function Page() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const handlePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleTimeUpdate = () => {
        if (!audioRef.current) return;
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration || 1;
        setProgress((current / duration) * 100);
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
        setProgress(0);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!audioRef.current) return;
        const duration = audioRef.current.duration || 1;
        const seekTime = (parseFloat(e.target.value) / 100) * duration;
        audioRef.current.currentTime = seekTime;
    };

    return (
        <div>
            <h2 className='text-5xl font-bold mb-6'>ICDL 2025 - SMILES Workshop</h2>
            <div className="relative mx-auto my-3 h-[80vh] w-fit">
                <img
                    src="/ICDL-2025/sound_generation_process.svg"
                    alt="Sound generation process, step by step"
                    className="h-[80vh] mx-auto"
                />
                {/* Scrolling line overlay */}
                <div
                    className="absolute"
                    style={{
                        left: `${12 + (progress * 0.78)}%`,
                        top: '12%',
                        height: '77%',
                        width: '3px',
                        background: 'rgba(239, 68, 68)', // same as background
                        transition: isPlaying ? 'left 0.001s linear' : undefined,
                        pointerEvents: 'none',
                    }}
                />
            </div>

            <div className="mt-8 mb-2 text-2xl font-semibold">Sound Reader</div>
            <div className="w-full max-w-md mx-auto bg-gray-200/20 rounded-lg p-4 shadow flex flex-col items-center">
                <audio
                    ref={audioRef}
                    src="/ICDL-2025/generated_sound.wav"
                    preload="auto"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={handleAudioEnded}
                />
                <button
                    onClick={handlePlayPause}
                    className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    {isPlaying ? 'Pause' : 'Play'}
                </button>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={progress}
                    onChange={handleSeek}
                    className="w-full accent-blue-600"
                />
            </div>
        </div>
    );
}