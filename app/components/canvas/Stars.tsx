import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

interface StarsProps {
  [key: string]: unknown;
}

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState<Float32Array>(() => {
    const positions = new Float32Array(5000 * 3); // Each point has 3 coordinates (x, y, z)
    const validSphere = random.inSphere(positions, { radius: 1.2 });

    if (!validSphere || validSphere.some(isNaN)) {
      console.error("Invalid sphere positions:", validSphere);
      return new Float32Array(5000 * 3); // Provide fallback to avoid NaN
    }

    return validSphere;
  });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1] ">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
