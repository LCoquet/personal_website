'use client';

import { useRef, useState, useEffect } from 'react';

export default function Page() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // for slider
    const [imgDims, setImgDims] = useState({ height: 0, top: 0 });

    // --- Smooth progress animation for slider and red line ---
    useEffect(() => {
        let rafId: number;
        function updateProgress() {
            if (audioRef.current) {
                const current = audioRef.current.currentTime;
                const duration = audioRef.current.duration || 1;
                const prog = (current / duration) * 100;
                setProgress(prog); // update slider smoothly
                if (progressBarRef.current) {
                    progressBarRef.current.style.left = `${12 + prog * 0.78}%`;
                }
            }
            if (audioRef.current && !audioRef.current.paused && !audioRef.current.ended) {
                rafId = requestAnimationFrame(updateProgress);
            }
        }
        if (isPlaying) {
            rafId = requestAnimationFrame(updateProgress);
        }
        return () => cancelAnimationFrame(rafId);
    }, [isPlaying]);
    // --- End smooth progress animation ---

    const handlePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration || 1;
            setProgress((current / duration) * 100);
        }
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
        setProgress(parseFloat(e.target.value)); // update immediately for feedback
    };

    // Update image dimensions on mount and resize
    useEffect(() => {
        function updateDims() {
            if (imgRef.current) {
                const rect = imgRef.current.getBoundingClientRect();
                setImgDims({ height: rect.height, top: rect.top });
            }
        }
        updateDims();
        window.addEventListener('resize', updateDims);
        return () => window.removeEventListener('resize', updateDims);
    }, []);

    return (
        <div>
            <h2 className='text-5xl font-bold mb-6'>ICDL 2025 - SMILES Workshop</h2>
            <div className="relative mx-auto my-3 w-fit">
                <img
                    ref={imgRef}
                    src="/ICDL-2025/sound_generation_process.svg"
                    alt="Sound generation process, step by step"
                    className="max-h-[80vh] h-auto w-full mx-auto"
                    style={{ maxWidth: '100%' }}
                />
                {/* Scrolling line overlay */}
                <div
                    ref={progressBarRef}
                    className="absolute"
                    style={{
                        left: `${12 + progress * 0.78}%`,
                        top: '12%',
                        height: imgDims.height ? `${imgDims.height * .77}px` : '77%',
                        width: '3px',
                        background: 'rgba(239, 68, 68)',
                        pointerEvents: 'none',
                        transition: isPlaying ? 'left 0.001s linear' : undefined,
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