import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSpheres = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} position={[-3, 2, -5]} scale={1.5}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} position={[4, -1, -3]} scale={2}>
          <MeshDistortMaterial
            color="#ec4899"
            attach="material"
            distort={0.5}
            speed={1.5}
            roughness={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[1, 100, 200]} position={[0, -4, -6]} scale={1.2}>
          <MeshDistortMaterial
            color="#a855f7"
            attach="material"
            distort={0.3}
            speed={3}
            roughness={0.1}
          />
        </Sphere>
      </Float>
    </>
  );
};

const Background3D = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSpheres />
      </Canvas>
    </div>
  );
};

export default Background3D;
