'use client';

import { useEffect, useRef } from 'react';

export default function DataGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width: number, height: number;
    const gridSize = 40;
    let beams: any[] = [];
    let animationFrameId: number;

    function initCanvas() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      beams = [];
      for (let i = 0; i < 15; i++) createBeam();
    }

    function createBeam() {
      const isHorizontal = Math.random() > 0.5;
      beams.push({
        x: isHorizontal ? -100 : Math.floor(Math.random() * (width / gridSize)) * gridSize,
        y: isHorizontal ? Math.floor(Math.random() * (height / gridSize)) * gridSize : -100,
        length: Math.random() * 200 + 100,
        speed: Math.random() * 4 + 2,
        isHorizontal: isHorizontal,
        color: Math.random() > 0.8 ? 'rgba(229, 255, 0, 0.5)' : 'rgba(255, 255, 255, 0.1)',
      });
    }

    function draw() {
      if (!ctx) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          ctx.fillRect(x, y, 1, 1);
          if (Math.random() < 0.0005) {
            ctx.fillStyle = 'rgba(229, 255, 0, 0.8)';
            ctx.fillRect(x - 1, y - 1, 3, 3);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
          }
        }
      }

      for (let i = beams.length - 1; i >= 0; i--) {
        let b = beams[i];

        ctx.beginPath();
        ctx.strokeStyle = b.color;
        ctx.lineWidth = 1;

        if (b.isHorizontal) {
          ctx.moveTo(b.x, b.y);
          ctx.lineTo(b.x - b.length, b.y);
          b.x += b.speed;
          if (b.x - b.length > width) beams.splice(i, 1);
        } else {
          ctx.moveTo(b.x, b.y);
          ctx.lineTo(b.x, b.y - b.length);
          b.y += b.speed;
          if (b.y - b.length > height) beams.splice(i, 1);
        }
        ctx.stroke();
      }

      if (beams.length < 15 && Math.random() < 0.05) createBeam();

      animationFrameId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', initCanvas);
    initCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="data-grid-canvas" ref={canvasRef}></canvas>;
}
