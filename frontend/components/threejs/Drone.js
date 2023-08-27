import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { FlakesTexture } from "three-stdlib";

export default function Drone() {
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileWidth(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [8, 1.5, 8], fov: 25 }}
      style={{
        width: isMobileWidth ? "100vw" : "40vw",
        height: isMobileWidth ? "45vh" : "40vh",
      }}
    >
      <group position={[0, -0.5, 0]}>
        <Center top>
          <Suzi rotation={[-0.63, 0, 0]} scale={2} />
        </Center>
        <Center top position={[-1.5, 0, 1]}>
          <mesh castShadow>
            <sphereGeometry args={[0.25, 64, 64]} />
            <meshStandardMaterial color="lightblue" />
          </mesh>
        </Center>
        <Center top position={[1.4, 0, 1]}>
          <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshStandardMaterial color="indianred" />
          </mesh>
        </Center>
        <AccumulativeShadows
          temporal
          frames={100}
          color="orange"
          colorBlend={2}
          toneMapped={true}
          alphaTest={0.9}
          opacity={2}
          scale={3.7}
        >
          <RandomizedLight
            amount={8}
            radius={4}
            ambient={0.5}
            intensity={1}
            position={[5, 5, -10]}
            bias={0.001}
          />
        </AccumulativeShadows>
      </group>
      <OrbitControls
        enableZoom={false} // Disable zooming
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
      <Environment preset="city" />
    </Canvas>
  );
}

function Suzi(props) {
  const { scene, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/suzanne-high-poly/model.gltf"
  );
  useLayoutEffect(() => {
    scene.traverse(
      (obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
    materials.default.color.set("orange");
    materials.default.roughness = 0;
    materials.default.normalMap = new THREE.CanvasTexture(
      new FlakesTexture(),
      THREE.UVMapping,
      THREE.RepeatWrapping,
      THREE.RepeatWrapping
    );
    materials.default.normalMap.repeat.set(40, 40);
    materials.default.normalScale.set(0.1, 0.1);
  });
  return <primitive object={scene} {...props} />;
}
