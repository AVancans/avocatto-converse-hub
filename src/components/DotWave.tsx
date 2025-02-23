
import { useEffect, useRef } from "react";

const DotWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Dot properties
    const dots: { x: number; y: number }[] = [];
    const spacing = 15; // Even smaller spacing for more dots
    const dotRadius = 1; // Smaller dots

    // Create dot grid
    for (let x = 0; x < canvas.width + spacing; x += spacing) {
      for (let y = 0; y < canvas.height + spacing; y += spacing) {
        dots.push({ x, y });
      }
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;

      dots.forEach((dot) => {
        // Calculate wave effect with multiple waves for more complexity
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distX = dot.x - centerX;
        const distY = dot.y - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Create multiple overlapping waves
        const wave1 = Math.sin(distance * 0.02 - time) * 3;
        const wave2 = Math.cos(distance * 0.015 - time * 1.2) * 2;
        const combinedWave = (wave1 + wave2) * 0.5;
        
        // Calculate Z position for 3D effect
        const zPos = combinedWave * 0.5;
        const perspective = 1 + (zPos * 0.1);
        
        // Adjust opacity based on z-position
        const baseOpacity = 0.2;
        const waveOpacity = Math.abs(zPos) * 0.15;
        const opacity = Math.min(baseOpacity + waveOpacity, 0.8);

        // Calculate color based on wave height
        // Use warm colors (yellow/orange) for peaks
        let dotColor;
        const waveHeight = Math.abs(combinedWave);
        if (waveHeight > 2) {
          // Use bright orange for highest peaks
          dotColor = `rgba(249, 115, 22, ${opacity})`; // Bright orange
        } else if (waveHeight > 1.5) {
          // Use soft orange for medium peaks
          dotColor = `rgba(254, 198, 161, ${opacity})`; // Soft orange
        } else if (waveHeight > 1) {
          // Use soft yellow for small peaks
          dotColor = `rgba(254, 247, 205, ${opacity})`; // Soft yellow
        } else {
          // Use default purple for lower areas
          dotColor = `rgba(135, 115, 225, ${opacity})`;
        }

        // Draw dot with perspective and dynamic color
        ctx.beginPath();
        ctx.arc(
          dot.x + (zPos * distX * 0.01), 
          dot.y + (zPos * distY * 0.01), 
          dotRadius * perspective,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" />;
};

export default DotWave;

