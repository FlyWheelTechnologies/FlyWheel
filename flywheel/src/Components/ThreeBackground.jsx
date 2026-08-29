import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";

function OnLoaded({ onLoaded }) {
  useEffect(() => {
    onLoaded();
  }, [onLoaded]);
  return null;
}

export default function ThreeBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      className="absolute inset-0 -z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        {/* Balanced studio lighting for rich metallic reflections without external network downloads */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={1.2} color="#fb923c" />
        <pointLight position={[0, -5, 5]} intensity={0.8} color="#94a3b8" />
        
        <Suspense fallback={null}>
          <Float speed={5.5} rotationIntensity={0.5} floatIntensity={1.0}>
            <SpinningTorus />
          </Float>
          <OnLoaded onLoaded={() => setIsLoaded(true)} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      {/* subtle gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
    </motion.div>
  );
}

function SpinningTorus() {
  return (
    <mesh>
      {/* Optimized segment count: smooth visual quality with ~40% fewer vertices */}
      <torusKnotGeometry args={[1.2, 0.35, 120, 28]} />
      <meshStandardMaterial metalness={0.75} roughness={0.25} color="#ffffff" />
    </mesh>
  );
}