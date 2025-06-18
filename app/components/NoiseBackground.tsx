"use client";
import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export default function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const noise2D = createNoise2D(Math.random);

    for (let y = 0; y < height; y += 80) {
      for (let x = 0; x < width; x += 80) {
        const v = noise2D(x / 300, y / 300);
        if (v > 0.65) {
          ctx.beginPath();
          ctx.arc(x, y, 160, 0, 2 * Math.PI);
          ctx.fillStyle = "rgba(239, 68, 68, 0.08)";
          ctx.filter = "blur(64px)";
          ctx.fill();
          ctx.filter = "none";
        }
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        display: "block",
        opacity: 0.83,
      }}
      aria-hidden
    />
  );
}