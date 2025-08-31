import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { Suspense } from "react";


export default function ThreeBackground() {
return (
<div className="absolute inset-0 -z-0">
<Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
<ambientLight intensity={0.5} />
<Suspense fallback={null}>
<Environment preset="city" />
<Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
<SpinningTorus />
</Float>
</Suspense>
<OrbitControls enableZoom={false} enablePan={false} />
</Canvas>
{/* subtle gradient overlay for readability */}
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
</div>
);
}


function SpinningTorus() {
return (
<mesh>
<torusKnotGeometry args={[1.2, 0.35, 160, 32]} />
<meshStandardMaterial metalness={0.7} roughness={0.2} color="#ffffff" />
</mesh>
);
}