import { useGLTF } from "@react-three/drei";

useGLTF.preload("/bus_maz_203.glb"); // Preload to prevent missing asset issue

const BusModel = () => {
  const { scene } = useGLTF("/bus_maz_203.glb");
  return <primitive object={scene} scale={1.5} />;
};

export default BusModel;
