import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import zachScene from '../assets/3d/zach.glb'
// import zachScene from '../assets/3d/zach.gltf'


const Zach = (props) => {
    const zachRef = useRef()
    const { nodes, materials, animations } = useGLTF(zachScene)
    const { actions } = useAnimations(animations, zachRef)


    useEffect(() => {

        // actions['Take 001'].setDuration(2).play();
        console.log('ZZZZZZZZZZZZZZZZZZach action', actions)
        actions['Wave'].play();

    })


    return (
        <a.group ref={zachRef} {...props}>
            <group name="Scene"
            >
                <group name="CharacterArmature">
                    <skinnedMesh
                        name="Character"
                        geometry={nodes.Character.geometry}
                        material={materials.Atlas}
                        skeleton={nodes.Character.skeleton}
                        castShadow
                    // receiveShadow
                    />
                    <primitive object={nodes.Root} />
                </group>
            </group>
        </a.group>
    )
}

useGLTF.preload('/zach.gltf')

export default Zach;
