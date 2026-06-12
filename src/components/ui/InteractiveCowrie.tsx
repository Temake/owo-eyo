"use client";

import React, { useRef, useEffect } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Face {
  indices: number[];
  isTooth?: boolean;
}

export function InteractiveCowrie() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rotRef = useRef({ x: -0.2, y: 0.4 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to center of the container (-1 to 1)
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const mouseX = (e.clientX - centerX) / (rect.width / 2);
      const mouseY = (e.clientY - centerY) / (rect.height / 2);

      // Map to target rotation angles
      mouseRef.current = {
        x: mouseX * 0.8, // horizontal look range (Y-axis rotation)
        y: -mouseY * 0.6, // vertical look range (X-axis rotation)
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    // ─── 3D GEOMETRY GENERATION ───
    // We will build a highly polished 3D wireframe model of a Cowrie Shell.
    // A Cowrie consists of a vaulted back dome, a flattened front base,
    // and a central vertical slit with teeth/ridges.
    const vertices: Point3D[] = [];
    const faces: Face[] = [];

    // 1. Generate Vaulted Dome (Back of shell, Z < 0)
    const domeRows = 6;
    const domeCols = 14;
    
    for (let r = 0; r < domeRows; r++) {
      const theta = (r / (domeRows - 1)) * (Math.PI / 2); // Latitude: 0 to PI/2
      const z = -65 * Math.cos(theta); // Dome bulges in negative Z
      const radiusScale = Math.sin(theta);
      
      for (let c = 0; c < domeCols; c++) {
        const phi = (c / domeCols) * 2 * Math.PI; // Longitude: 0 to 2PI
        // Egg shape: wider at top (Y > 0) than bottom (Y < 0)
        const eggFactor = 1.0 + 0.22 * Math.sin(phi);
        
        const x = 85 * radiusScale * Math.cos(phi) * eggFactor;
        const y = 125 * radiusScale * Math.sin(phi) * eggFactor;
        
        vertices.push({ x, y, z });
      }
    }

    // Connect Dome Faces
    for (let r = 0; r < domeRows - 1; r++) {
      for (let c = 0; c < domeCols; c++) {
        const nextC = (c + 1) % domeCols;
        const i0 = r * domeCols + c;
        const i1 = r * domeCols + nextC;
        const i2 = (r + 1) * domeCols + nextC;
        const i3 = (r + 1) * domeCols + c;
        faces.push({ indices: [i0, i1, i2, i3] });
      }
    }

    // 2. Generate Central Slit (Front of shell, Z > 0)
    // The vertical aperture runs vertically from Y = -100 to Y = 100.
    const slitPointsCount = 7;
    const outerRimRowIndex = (domeRows - 1) * domeCols;

    const leftSlitStart = vertices.length;
    // Left Slit Lip (X < 0, Z is elevated slightly)
    for (let i = 0; i < slitPointsCount; i++) {
      const t = i / (slitPointsCount - 1);
      const y = -100 + 200 * t;
      // Inward curved aperture lip
      const x = -8 + 15 * Math.pow(t - 0.5, 2);
      vertices.push({ x, y, z: 12 });
    }

    const rightSlitStart = vertices.length;
    // Right Slit Lip (X > 0, Z elevated)
    for (let i = 0; i < slitPointsCount; i++) {
      const t = i / (slitPointsCount - 1);
      const y = -100 + 200 * t;
      const x = 8 - 15 * Math.pow(t - 0.5, 2);
      vertices.push({ x, y, z: 12 });
    }

    // 3. Slit Teeth / Ridges (MetaMask style details)
    // We add distinct ridges/teeth along both lips of the slit.
    for (let i = 1; i < slitPointsCount - 1; i++) {
      const t = i / (slitPointsCount - 1);
      const y = -100 + 200 * t;
      // Left tooth apex extends inward
      vertices.push({ x: -2, y, z: 6 });
      
      faces.push({
        indices: [
          leftSlitStart + i,
          leftSlitStart + i + 1,
          vertices.length - 1
        ],
        isTooth: true,
      });
    }

    for (let i = 1; i < slitPointsCount - 1; i++) {
      const t = i / (slitPointsCount - 1);
      const y = -100 + 200 * t;
      // Right tooth apex extends inward
      vertices.push({ x: 2, y, z: 6 });
      
      faces.push({
        indices: [
          rightSlitStart + i,
          rightSlitStart + i + 1,
          vertices.length - 1
        ],
        isTooth: true,
      });
    }

    // 4. Connect Outer Rim of the Dome to the Slit Lips (Flat base)
    // Map the 14 outer rim points to the left and right slit lips.
    // Left side dome (cols 3 to 9) connects to Left Slit Lip.
    // Right side dome (cols 10 to 14, 0 to 2) connects to Right Slit Lip.
    for (let c = 0; c < domeCols; c++) {
      const nextC = (c + 1) % domeCols;
      const d0 = outerRimRowIndex + c;
      const d1 = outerRimRowIndex + nextC;

      // Map longitude to slit coordinates
      if (c >= 3 && c <= 9) {
        // Left Side
        const lIndex = Math.round(((c - 3) / 6) * (slitPointsCount - 1));
        const nextLIndex = Math.min(lIndex + 1, slitPointsCount - 1);
        faces.push({
          indices: [d0, d1, leftSlitStart + nextLIndex, leftSlitStart + lIndex]
        });
      } else {
        // Right Side
        let rIndex = 0;
        if (c >= 10) {
          rIndex = Math.round(((14 - c) / 8) * (slitPointsCount - 1));
        } else {
          rIndex = Math.round(((4 - c) / 8) * (slitPointsCount - 1)) + 3;
        }
        rIndex = Math.max(0, Math.min(rIndex, slitPointsCount - 1));
        const nextRIndex = Math.max(0, rIndex - 1);
        
        faces.push({
          indices: [d0, d1, rightSlitStart + nextRIndex, rightSlitStart + rIndex]
        });
      }
    }

    // ─── RENDERING & PHYSICS ENGINE ───
    const cameraDistance = 380;

    const render = () => {
      // Resize dynamically
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Smooth inertia (LERP) physics
      rotRef.current.x += (mouseRef.current.y - rotRef.current.x) * 0.08;
      rotRef.current.y += (mouseRef.current.x - rotRef.current.y) * 0.08;

      const cosX = Math.cos(rotRef.current.x);
      const sinX = Math.sin(rotRef.current.x);
      const cosY = Math.cos(rotRef.current.y);
      const sinY = Math.sin(rotRef.current.y);

      // Rotate and project vertices
      const projected: { x: number; y: number; z: number }[] = [];

      for (let i = 0; i < vertices.length; i++) {
        const p = vertices[i];

        // 1. Rotate Y (left-right)
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // 2. Rotate X (up-down)
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // 3. Perspective projection
        const scale = cameraDistance / (cameraDistance - z2);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y2 * scale;

        projected.push({ x: screenX, y: screenY, z: z2 });
      }

      // Calculate face normals and sort for Z-buffering (Painter's Algorithm)
      const faceData = faces.map((face, index) => {
        const indices = face.indices;
        
        // Average Z depth for sorting
        let sumZ = 0;
        indices.forEach((idx) => {
          sumZ += projected[idx].z;
        });
        const avgZ = sumZ / indices.length;

        // Compute 3D Normal for Shading (using first 3 vertices of face)
        const p0 = vertices[indices[0]];
        const p1 = vertices[indices[1]];
        const p2 = vertices[indices[2]];

        const v1 = { x: p1.x - p0.x, y: p1.y - p0.y, z: p1.z - p0.z };
        const v2 = { x: p2.x - p0.x, y: p2.y - p0.y, z: p2.z - p0.z };

        // Cross product
        const normal = {
          x: v1.y * v2.z - v1.z * v2.y,
          y: v1.z * v2.x - v1.x * v2.z,
          z: v1.x * v2.y - v1.y * v2.x,
        };

        const len = Math.sqrt(normal.x * normal.x + normal.y * normal.y + normal.z * normal.z);
        if (len > 0) {
          normal.x /= len;
          normal.y /= len;
          normal.z /= len;
        }

        // Apply same rotation to normal
        const n1X = normal.x * cosY - normal.z * sinY;
        const n1Z = normal.x * sinY + normal.z * cosY;
        const n2Y = normal.y * cosX - n1Z * sinX;
        const n2Z = normal.y * sinX + n1Z * cosX;

        const rotatedNormal = { x: n1X, y: n2Y, z: n2Z };

        return {
          face,
          avgZ,
          normal: rotatedNormal,
          index,
        };
      });

      // Sort faces (back to front)
      faceData.sort((a, b) => b.avgZ - a.avgZ);

      // Light direction (from top-left-front)
      const lightDir = { x: -0.5, y: -0.5, z: 0.8 };
      const lightLen = Math.sqrt(lightDir.x * lightDir.x + lightDir.y * lightDir.y + lightDir.z * lightDir.z);
      lightDir.x /= lightLen;
      lightDir.y /= lightLen;
      lightDir.z /= lightLen;

      // Render faces
      faceData.forEach(({ face, normal }) => {
        const indices = face.indices;
        ctx.beginPath();
        ctx.moveTo(projected[indices[0]].x, projected[indices[0]].y);
        for (let i = 1; i < indices.length; i++) {
          ctx.lineTo(projected[indices[i]].x, projected[indices[i]].y);
        }
        ctx.closePath();

        // Calculate diffuse lighting (dot product)
        const dot = normal.x * lightDir.x + normal.y * lightDir.y + normal.z * lightDir.z;
        const intensity = Math.max(0.0, dot);

        // Core colors matching Owó Ẹyọ identity: Gold, Indigo, and Canvas
        let fillStyle = "";
        let strokeStyle = "";
        let strokeWidth = 1.0;

        if (face.isTooth) {
          // Teeth glow bright gold
          const opacity = 0.4 + intensity * 0.5;
          fillStyle = `rgba(212, 160, 23, ${opacity})`;
          strokeStyle = `rgba(255, 230, 150, 0.8)`;
          strokeWidth = 1.5;
        } else {
          // Main shell faces (semi-transparent glowing gold/indigo)
          const faceBack = normal.z < 0; // facing away from camera
          
          if (faceBack) {
            // Back faces have deep indigo shading
            const alpha = 0.15 + intensity * 0.15;
            fillStyle = `rgba(25, 0, 102, ${alpha})`;
            strokeStyle = `rgba(67, 98, 209, 0.25)`;
          } else {
            // Front faces have warm gold / amber gloss
            const alpha = 0.08 + intensity * 0.35;
            fillStyle = `rgba(214, 160, 23, ${alpha})`;
            strokeStyle = `rgba(212, 160, 23, 0.45)`;
            strokeWidth = 1.2;
          }
        }

        ctx.fillStyle = fillStyle;
        ctx.fill();

        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.stroke();
      });

      // Draw aesthetic particle floaters around the shell to emphasize 3D space
      const time = Date.now() * 0.001;
      ctx.fillStyle = "rgba(212, 160, 23, 0.5)";
      for (let i = 0; i < 6; i++) {
        const floatX = centerX + Math.sin(time + i * 2) * 160 + Math.cos(time * 0.5 + i) * 30;
        const floatY = centerY + Math.cos(time * 0.8 + i) * 160 + Math.sin(time * 0.3 + i * 1.5) * 30;
        const radius = 2 + Math.sin(time + i) * 1.5;
        ctx.beginPath();
        ctx.arc(floatX, floatY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[400px] md:h-[450px] flex items-center justify-center cursor-pointer select-none"
    >
      {/* Decorative radar rings underneath the rotating shell */}
      <div className="absolute w-[280px] h-[280px] rounded-full border border-accent-gold/15 animate-[spin_40s_linear_infinite] pointer-events-none" />
      <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-accent-gold/10 animate-[spin_80s_linear_infinite_reverse] pointer-events-none" />
      <div className="absolute w-[180px] h-[180px] rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <canvas ref={canvasRef} className="w-full h-full block z-10" />
    </div>
  );
}
