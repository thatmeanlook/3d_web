/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Guillermo T (https://sketchfab.com/guillermot)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fire-c678d3cb21a94cd38e52abb50a503c40
Title: Fire
*/


import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from '../assets/3d/fire.glb'
import { act, useThree, useFrame } from "@react-three/fiber";
import { a } from '@react-spring/three'
// import Fire from'

const Fire = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const group = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, group);

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e) => {
        // e.stopPropagation(); // disable this allow onClick on Balloon
        e.preventDefault();
        setIsRotating(true);

        const clientX = e.touches
            ? e.touches[0].clientX
            : e.clientX;

        lastX.current = clientX;
    }

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);

    }



    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();
        // console.log('eeeee', e)
        if (isRotating) {
            const clientX = e.touches
                ? e.touches[0].clientX
                : e.clientX;

            const delta = (clientX - lastX.current) / viewport.width;

            group.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        };
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {

            if (!isRotating) setIsRotating(true);
            group.current.rotation.y += 0.01 * Math.PI;
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            group.current.rotation.y -= 0.01 * Math.PI;
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }

    // useEffect(() => {
    //     // console.log(actions)
    //     actions['Default Take'].play();

    // }, [actions])


    useEffect(() => {
        actions['Default Take'].play();

        const canvas = gl.domElement;
        // canvas.addEventListener('pointermove', handleCloudClick);

        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);

        canvas.addEventListener("touchstart", handlePointerDown);
        canvas.addEventListener("touchmove", handlePointerMove);
        canvas.addEventListener("touchend", handlePointerUp);

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);

            canvas.removeEventListener("touchstart", handlePointerDown);
            canvas.removeEventListener("touchmove", handlePointerMove);
            canvas.removeEventListener("touchend", handlePointerUp);

            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [actions, gl, handlePointerDown, handlePointerUp, handlePointerMove]);


    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }
            group.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = group.current.rotation.y;

            /**
             * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
             * The goal is to ensure that the rotation value remains within a specific range to
             * prevent potential issues with very large or negative rotation values.
             *  Here's a step-by-step explanation of what this code does:
             *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
             *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
             *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
             *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
             *     This is done to ensure that the value remains positive and within the range of
             *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
             *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
             *     modulo operation to the value obtained in step 2. This step guarantees that the value
             *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
             *     circle in radians.
             */
            const normalizedRotation =
                ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

            // Set the current stage based on the island's orientation
            // switch (true) {
            //     case normalizedRotation >= 6 && normalizedRotation <= 6.5:
            //         setCurrentStage(4);
            //         break;
            //     case normalizedRotation >= 1.5 && normalizedRotation <= 2:
            //         setCurrentStage(3);
            //         break;
            //     // case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            //     case normalizedRotation >= 2.8 && normalizedRotation <= 3.3:
            //         setCurrentStage(2);
            //         break;
            //         break;
            //     // case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            //     case normalizedRotation >= 4.25 && normalizedRotation <= 5:
            //         setCurrentStage(1);
            //         break;
            //     default:
            //         setCurrentStage(null);
            // }
        }
    });


    return (
        // <group ref={group} {...props} dispose={null}>
        <a.group ref={group} {...props}>

            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="db63cf47b674497bb5667986891360e3fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="gtmfc_fire_1"
                                    position={[0, -0.044, 0]}
                                    rotation={[-Math.PI / 2, 0, 0]}
                                >
                                    <group
                                        name="fireA_005"
                                        position={[0.014, 0, 0]}
                                        scale={1.075}

                                    >
                                        <mesh
                                            name="fireA_005_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireA_005_fire_0.geometry}
                                            material={materials.fire}
                                            material-transparent
                                            material-opacity={0.5}

                                        />
                                    </group>
                                    <group
                                        name="fireB_048"
                                        position={[-0.007, 0, 0]}
                                        scale={[0.419, 0.419, 0.422]}
                                    >
                                        <mesh
                                            name="fireB_048_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireB_048_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="fireB_047"
                                        position={[0.081, -0.079, 0.032]}
                                        rotation={[0.014, -0.052, 0.619]}
                                        scale={[0.394, 0.394, 0.213]}
                                    >
                                        <mesh
                                            name="fireB_047_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireB_047_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="fireB_046"
                                        position={[0.024, -0.087, 0.034]}
                                        rotation={[0, 0, -1.638]}
                                        scale={[0.339, 0.339, 0.153]}
                                    >
                                        <mesh
                                            name="fireB_046_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireB_046_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="fireB_045"
                                        position={[0.005, -0.088, 0.232]}
                                        rotation={[0, 0, 0.087]}
                                        scale={[0.846, 0.846, 0.356]}
                                    >
                                        <mesh
                                            name="fireB_045_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireB_045_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="fireB_044"
                                        position={[0.091, 0.018, 0.155]}
                                        rotation={[0, 0, -0.295]}
                                        scale={[0.621, 0.55, 0.755]}
                                    >
                                        <mesh
                                            name="fireB_044_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireB_044_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="fireB_043"
                                        position={[0.081, -0.071, 0.045]}
                                        rotation={[-0.046, -0.076, 0.672]}
                                        scale={[0.696, 0.695, 0.733]}
                                    >
                                        <mesh
                                            name="fireB_043_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireB_043_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="smoke_087"
                                        position={[0.017, -0.085, 0.735]}
                                        rotation={[0.232, -0.591, -0.034]}
                                        scale={[0.294, 0.283, 0.294]}
                                    >
                                        <mesh
                                            name="smoke_087_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.smoke_087_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="smoke_086"
                                        position={[-0.038, -0.082, 1.763]}
                                        rotation={[1.413, 0.981, -1.387]}
                                        scale={[0.326, 0.455, 0.455]}
                                    >
                                        <mesh
                                            name="smoke_086_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.smoke_086_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="smoke_085"
                                        position={[-0.014, 0.079, 0.96]}
                                        rotation={[1.009, 0.156, 0.514]}
                                        scale={[0.683, 0.405, 0.697]}
                                    >
                                        <mesh
                                            name="smoke_085_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.smoke_085_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="smoke_084"
                                        position={[0.009, -0.037, 1.071]}
                                        rotation={[0.246, 0.514, 1.049]}
                                        scale={[0.328, 0.498, 0.498]}
                                    >
                                        <mesh
                                            name="smoke_084_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.smoke_084_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="fireB_042"
                                        position={[0.033, -0.028, 0.008]}
                                        rotation={[0, 0, 1.212]}
                                        scale={[0.847, 0.847, 0.481]}
                                    >
                                        <mesh
                                            name="fireB_042_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireB_042_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="smoke_083"
                                        position={[0.15, 0.217, 0.638]}
                                        rotation={[0.615, -0.098, 1.014]}
                                        scale={[0.29, 0.289, 0.29]}
                                    >
                                        <mesh
                                            name="smoke_083_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.smoke_083_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                    <group
                                        name="fireB_041"
                                        position={[0.109, -0.084, 0.034]}
                                        rotation={[0, 0, -1.437]}
                                        scale={[0.339, 0.339, 0.153]}
                                    >
                                        <mesh
                                            name="fireB_041_fire_0"
                                            castShadow
                                            receiveShadow
                                            geometry={nodes.fireB_041_fire_0.geometry}
                                            material={materials.fire}
                                        />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </a.group>
    );
}

// useGLTF.preload("/Alpaca.glb");

export default Fire