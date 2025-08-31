import { useGLTF } from "@react-three/drei";


export default function RobotModel(props) {
const { scene } = useGLTF("/models/robot.glb");
return <primitive object={scene} {...props} />;
}


// Preload at app start (optional)
useGLTF.preload("/models/robot.glb");