
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { AnimationMixer, AnimationUtils } from 'three'
import { Clock } from 'three'
import { useFrame } from '@react-three/fiber'
import scene from '../assets/3d/bird.glb'

const Bird = ({ currentAnimation, isRotating, showPlane, ...props }) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, group);

    useEffect(() => {

        // actions['Take 001'].setDuration(2).play();
        console.log('bird action', actions)
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model"
                    // rotation={[-Math.PI / 2, 0, 0]}

                    rotation={[-2, 0.9, 0.8]}

                >
                    <group name="birdFBX" rotation={[Math.PI / 2, 0, 0]}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group name="Object_4">
                                    <primitive object={nodes._rootJoint} />
                                    <skinnedMesh
                                        name="Object_7"
                                        geometry={nodes.Object_7.geometry}
                                        material={materials["01_-_Default"]}
                                        skeleton={nodes.Object_7.skeleton}
                                    />
                                    <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                                    <group name="Box002" rotation={[-Math.PI / 2, 0, 0]} />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );

}

export default Bird;