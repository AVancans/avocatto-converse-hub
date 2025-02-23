
import { useEffect, useRef } from "react";

const DotWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Dot properties
    const dots: { x: number; y: number }[] = [];
    const spacing = 30;
    const dotRadius = 1.5;

    // Create dot grid
    for (let x = spacing; x < canvas.width - spacing; x += spacing) {
      for (let y = spacing; y < canvas.height - spacing; y += spacing) {
        dots.push({ x, y });
      }
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.02;

      dots.forEach((dot) => {
        // Calculate wave effect
        const distX = dot.x - canvas.width / 2;
        const distY = dot.y - canvas.height / 2;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        const wave = Math.sin(distance * 0.05 - time) * 2;
        const opacity = Math.abs(wave) * 0.5;

        // Draw dot with dynamic opacity
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(155, 135, 245, ${0.2 + opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default DotWave;
