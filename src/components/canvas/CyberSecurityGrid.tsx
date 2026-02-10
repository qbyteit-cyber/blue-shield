"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function GridPlane() {
    const gridRef = useRef<THREE.Group>(null!);
    const lineRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (lineRef.current) {
            // Move the scanning line back and forth
            lineRef.current.position.z = Math.sin(t * 0.5) * 10;
        }
        if (gridRef.current) {
            gridRef.current.position.z = (t * 0.2) % 2; // Subtle movement
        }
    });

    return (
        <group ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            {/* Main Grid */}
            <gridHelper args={[40, 40, "#0861F2", "#1e293b"]} />

            {/* Scanning Line */}
            <mesh ref={lineRef} position={[0, 0, 0]}>
                <boxGeometry args={[40, 0.05, 0.2]} />
                <meshBasicMaterial color="#00f2ff" transparent opacity={0.5} />
            </mesh>

            {/* Glow under scanning line */}
            <mesh position={[0, 0, lineRef.current?.position.z || 0]}>
                <planeGeometry args={[40, 2]} />
                <meshBasicMaterial
                    color="#0861F2"
                    transparent
                    opacity={0.05}
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    );
}

function FloatingNodes() {
    const nodesRef = useRef<THREE.Points>(null!);

    const count = 50;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = Math.random() * 5;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
        return pos;
    }, []);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        nodesRef.current.rotation.y = t * 0.05;

        // Pulsate point size via material if needed, but we'll stick to rotation for now
    });

    return (
        <points ref={nodesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    itemSize={3}
                    array={positions}
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                color="#00f2ff"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function CyberSecurityGrid() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-40">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 5, 15]} fov={50} />
                <fog attach="fog" args={["#020617", 10, 30]} />
                <ambientLight intensity={0.5} />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                    <GridPlane />
                    <FloatingNodes />
                </Float>
            </Canvas>

            {/* CSS Overlay for extra "Cyber" feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,97,242,0.1),transparent_70%)] pointer-events-none" />
        </div>
    );
}
