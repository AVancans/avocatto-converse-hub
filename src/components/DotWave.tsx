
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
    const dots: { x: number; y: number; shouldLight?: boolean }[] = [];
    const spacing = 15; // Even smaller spacing for more dots
    const dotRadius = 1; // Smaller dots

    // Create dot grid with random lighting flags
    for (let x = 0; x < canvas.width + spacing; x += spacing) {
      for (let y = 0; y < canvas.height + spacing; y += spacing) {
        dots.push({ 
          x, 
          y, 
          shouldLight: Math.random() < 0.2 // 20% chance for a dot to be marked for lighting up
        });
      }
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;

      dots.forEach((dot) => {
        // Calculate wave effect with waves coming from left to right
        const waveOriginX = -canvas.width * 0.5; // Start wave from outside left
        const distX = dot.x - waveOriginX;
        const distY = dot.y - (canvas.height * 0.5);
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Create diagonal wave pattern
        const wave1 = Math.sin(distance * 0.02 - time + dot.x * 0.01) * 3;
        const wave2 = Math.cos(distance * 0.015 - time * 1.2 + dot.x * 0.008) * 2;
        const combinedWave = (wave1 + wave2) * 0.5;
        
        // Calculate Z position for 3D effect
        const zPos = combinedWave * 0.5;
        const perspective = 1 + (zPos * 0.1);
        
        // Adjust opacity based on z-position
        const baseOpacity = 0.2;
        const waveOpacity = Math.abs(zPos) * 0.15;
        const opacity = Math.min(baseOpacity + waveOpacity, 0.8);

        // Default purple color
        let dotColor = `rgba(135, 115, 225, ${opacity})`;
        
        // Only light up marked dots when they're at peaks
        const waveHeight = Math.abs(combinedWave);
        if (dot.shouldLight && waveHeight > 2) {
          // Randomly choose between bright orange and soft yellow for peak dots
          dotColor = Math.random() < 0.5 
            ? `rgba(249, 115, 22, ${opacity})` // Bright orange
            : `rgba(254, 247, 205, ${opacity})`; // Soft yellow
        }

        // Draw dot with perspective and color
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
