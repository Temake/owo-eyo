"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ─── Constants ─── */
const NODE_COUNT = 40;
const CONN_COUNT = 100;
const COWRY_COUNT = 25;
const RADIUS = 1.8;

/* ─── Types ─── */
interface Conn {
  from: number;
  to: number;
  curve: THREE.CubicBezierCurve3;
}

interface CowryState {
  connIdx: number;
  progress: number;
  speed: number;
}

/* ─── Fibonacci Sphere Distribution ─── */
function fibSphere(n: number, r: number): THREE.Vector3[] {
  const pts: THREE.Vector3[] = [];
  const golden = Math.PI * (Math.sqrt(5) - 1);
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const rad = Math.sqrt(1 - y * y);
    const θ = golden * i;
    pts.push(
      new THREE.Vector3(Math.cos(θ) * rad * r, y * r, Math.sin(θ) * rad * r)
    );
  }
  return pts;
}

/* ─── Connection Curve Generation ─── */
function makeConns(nodes: THREE.Vector3[], count: number): Conn[] {
  const conns: Conn[] = [];
  const seen = new Set<string>();
  let attempts = 0;

  while (conns.length < count && attempts < count * 5) {
    attempts++;
    const a = Math.floor(Math.random() * nodes.length);
    const b = Math.floor(Math.random() * nodes.length);
    if (a === b) continue;

    const key = `${Math.min(a, b)}-${Math.max(a, b)}`;
    if (seen.has(key)) continue;
    seen.add(key);

    const p0 = nodes[a];
    const p3 = nodes[b];
    const mid = new THREE.Vector3().addVectors(p0, p3).multiplyScalar(0.5);
    const norm = mid.clone().normalize();
    const off = RADIUS * (0.12 + Math.random() * 0.22);
    const p1 = new THREE.Vector3()
      .lerpVectors(p0, p3, 0.33)
      .add(norm.clone().multiplyScalar(off));
    const p2 = new THREE.Vector3()
      .lerpVectors(p0, p3, 0.66)
      .add(norm.clone().multiplyScalar(off));

    conns.push({
      from: a,
      to: b,
      curve: new THREE.CubicBezierCurve3(p0, p1, p2, p3),
    });
  }
  return conns;
}

/* ═══════════════════════════════════════════════════════════════
   Glass Sphere — extremely faint spatial reference
   ═══════════════════════════════════════════════════════════════ */
function GlassSphere() {
  return (
    <mesh>
      <sphereGeometry args={[RADIUS, 64, 64]} />
      <meshPhysicalMaterial
        color="#d0d8ff"
        transparent
        opacity={0.025}
        roughness={0.15}
        metalness={0}
        transmission={0.97}
        thickness={0.4}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Glowing Nodes — InstancedMesh for ~40 payment hubs
   ═══════════════════════════════════════════════════════════════ */
function Nodes({
  positions,
  pulses,
}: {
  positions: THREE.Vector3[];
  pulses: React.RefObject<Float32Array>;
}) {
  const ref = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  /* Pre-compute per-node base scales (some hubs larger than others) */
  const baseScales = useMemo(
    () =>
      Float32Array.from({ length: positions.length }, (_, i) =>
        i % 7 === 0 ? 0.048 : i % 4 === 0 ? 0.04 : 0.032
      ),
    [positions.length]
  );

  useFrame(() => {
    const mesh = ref.current;
    if (!mesh || !pulses.current) return;

    for (let i = 0; i < positions.length; i++) {
      pulses.current[i] *= 0.96;
      const p = pulses.current[i];
      const s = baseScales[i] * (1 + p * 3);

      dummy.position.copy(positions[i]);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, positions.length]}>
      <sphereGeometry args={[1, 14, 14]} />
      <meshStandardMaterial
        color="#D4A017"
        emissive="#D4A017"
        emissiveIntensity={2.5}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Connection Lines — thin curves between nodes
   ═══════════════════════════════════════════════════════════════ */
function ConnectionLines({ connections }: { connections: Conn[] }) {
  const groupRef = useRef<THREE.Group>(null!);

  useEffect(() => {
    const g = groupRef.current;
    if (!g) return;

    const mat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#D4A017"),
      transparent: true,
      opacity: 0.055,
    });

    connections.forEach((c) => {
      const pts = c.curve.getPoints(36);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      g.add(new THREE.Line(geo, mat));
    });

    return () => {
      while (g.children.length) {
        const child = g.children[0] as THREE.Line;
        child.geometry.dispose();
        g.remove(child);
      }
      mat.dispose();
    };
  }, [connections]);

  return <group ref={groupRef} />;
}

/* ═══════════════════════════════════════════════════════════════
   Animated Cowry Shells — tiny golden shells traveling along paths
   ═══════════════════════════════════════════════════════════════ */
function Cowries({
  connections,
  pulses,
}: {
  connections: Conn[];
  pulses: React.RefObject<Float32Array>;
}) {
  const ref = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const states = useRef<CowryState[]>(
    Array.from({ length: COWRY_COUNT }, () => ({
      connIdx: Math.floor(Math.random() * Math.max(connections.length, 1)),
      progress: Math.random(),
      speed: 0.06 + Math.random() * 0.14,
    }))
  );

  useFrame((_, delta) => {
    const mesh = ref.current;
    if (!mesh || connections.length === 0) return;

    const clampedDelta = Math.min(delta, 0.05); // Prevent jumps on tab-switch

    for (let i = 0; i < COWRY_COUNT; i++) {
      const s = states.current[i];
      s.progress += s.speed * clampedDelta;

      /* Cowry arrived — pulse destination node, reassign to new route */
      if (s.progress >= 1) {
        const conn = connections[s.connIdx];
        if (conn && pulses.current) {
          pulses.current[conn.to] = 1;
        }
        s.connIdx = Math.floor(Math.random() * connections.length);
        s.progress = 0;
        s.speed = 0.06 + Math.random() * 0.14;
      }

      const conn = connections[s.connIdx];
      if (!conn) continue;

      const pt = conn.curve.getPoint(s.progress);
      dummy.position.copy(pt);

      /* Cowry-like shape: flattened ellipsoid with slight spin */
      dummy.scale.set(0.024, 0.015, 0.032);
      dummy.rotation.set(
        s.progress * Math.PI * 2.5,
        s.progress * Math.PI * 4,
        Math.sin(s.progress * Math.PI) * 0.4
      );
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, COWRY_COUNT]}>
      <sphereGeometry args={[1, 8, 6]} />
      <meshStandardMaterial
        color="#FFD700"
        emissive="#FFB800"
        emissiveIntensity={5}
        toneMapped={false}
      />
    </instancedMesh>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Scene Container — auto-rotation + mouse parallax
   ═══════════════════════════════════════════════════════════════ */
function SceneContent() {
  const groupRef = useRef<THREE.Group>(null!);
  const autoRot = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });

  /* Generate network data (stable across frames) */
  const nodes = useMemo(() => fibSphere(NODE_COUNT, RADIUS), []);
  const connections = useMemo(() => makeConns(nodes, CONN_COUNT), [nodes]);
  const pulses = useRef(new Float32Array(NODE_COUNT));

  /* Track mouse position for parallax */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  /* Animate rotation + parallax each frame */
  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;

    const dt = Math.min(delta, 0.05);
    autoRot.current += dt * 0.08;

    smooth.current.x +=
      (mouse.current.x * 0.15 - smooth.current.x) * 1.5 * dt;
    smooth.current.y +=
      (mouse.current.y * -0.1 - smooth.current.y) * 1.5 * dt;

    g.rotation.y = autoRot.current + smooth.current.x;
    g.rotation.x = smooth.current.y;
  });

  return (
    <group ref={groupRef}>
      <GlassSphere />
      <Nodes positions={nodes} pulses={pulses} />
      <ConnectionLines connections={connections} />
      <Cowries connections={connections} pulses={pulses} />
    </group>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Exported Scene — Canvas + Lights + Post-Processing
   ═══════════════════════════════════════════════════════════════ */
export default function PaymentNetworkScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      {/* Cool-toned ambient fill */}
      <ambientLight intensity={0.35} color="#8eacff" />

      {/* Warm directional key light */}
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#fff5e0" />
      <directionalLight
        position={[-3, -2, 4]}
        intensity={0.15}
        color="#b8c8ff"
      />

      <SceneContent />

      {/* Subtle bloom for premium glow */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          intensity={0.35}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
  );
}
