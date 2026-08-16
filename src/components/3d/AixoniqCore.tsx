import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { ParticleField } from './ParticleField';

interface AixoniqCoreProps {
  isTouch?: boolean;
  scrollProgress?: React.MutableRefObject<number>;
}

/**
 * The AIXONIQ CORE — signature 3D centerpiece for the hero.
 * A wireframe icosahedron crystal, orbit rings, and a particle shell.
 * Reacts to cursor parallax and to hero scroll progress (passed in via a
 * ref so we avoid re-rendering React on every scroll tick).
 */
export function AixoniqCore({ isTouch = false, scrollProgress }: AixoniqCoreProps) {
  const group = useRef<THREE.Group>(null);
  const ringsRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  const cur = useRef({ x: 0, y: 0 });

  const coreGeo = useMemo(() => new THREE.IcosahedronGeometry(2.1, 1), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(coreGeo), [coreGeo]);

  const rings = useMemo(() => [2.9, 3.5, 4.1], []);

  useFrame((_, delta) => {
    if (!group.current) return;
    cur.current.x += (pointer.x * 0.5 - cur.current.x) * 0.04;
    cur.current.y += (pointer.y * 0.5 - cur.current.y) * 0.04;

    group.current.rotation.y += delta * 0.06 + cur.current.x * 0.01;
    group.current.rotation.x = cur.current.y * 0.4;

    if (scrollProgress) {
      const p = scrollProgress.current;
      const scale = 1 + p * 0.6;
      group.current.scale.setScalar(scale);
    }

    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        ring.rotation.z += 0.0006 + i * 0.0003;
      });
    }
  });

  return (
    <group ref={group}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#49F0FF" transparent opacity={0.55} />
      </lineSegments>

      <mesh geometry={coreGeo} scale={0.985}>
        <meshBasicMaterial color="#0D2A2E" transparent opacity={0.5} />
      </mesh>

      <group ref={ringsRef}>
        {rings.map((r, i) => (
          <mesh key={r} rotation={[Math.PI / 2 + i * 0.4, i * 0.6, 0]}>
            <torusGeometry args={[r, 0.004, 8, 128]} />
            <meshBasicMaterial color="#49F0FF" transparent opacity={0.18 - i * 0.03} />
          </mesh>
        ))}
      </group>

      <ParticleField count={isTouch ? 900 : 2400} />

      <pointLight color="#49F0FF" intensity={1.2} distance={20} position={[4, 3, 4]} />
      <pointLight color="#ffffff" intensity={0.3} distance={20} position={[-4, -2, 3]} />
    </group>
  );
}
