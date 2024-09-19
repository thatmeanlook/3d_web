import { useGLTF } from '@react-three/drei'
import React from 'react'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky_night.glb'


const Sky_Night = ({ isRotating }) => {

    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.15 * delta;
        }

    })


    return (
        <mesh ref={skyRef}
        // scale={[10, 10, 10]}
        // scale={[2, 2, 2]}
        >
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky_Night