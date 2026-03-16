import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";

// This component's only job is to call the onLoaded callback when it's mounted.
// It will only mount when the Suspense boundary has resolved.
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
      transition={{ duration: 2, ease: "easeOut" }} // Original slow fade-in
    >
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {/* Restored original visual assets */}
          <Environment preset="city" />
          <Float speed={5.5} rotationIntensity={0.5} floatIntensity={1.0}>
            <SpinningTorus />
          </Float>

          {/* This component signals that loading is complete */}
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
      {/* Restored original geometry segments */}
      <torusKnotGeometry args={[1.2, 0.35, 160, 32]} />
      <meshStandardMaterial metalness={0.7} roughness={0.2} color="#ffffff" />
    </mesh>
  );
}