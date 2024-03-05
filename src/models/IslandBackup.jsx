/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from '../assets/3d/cute_island.glb'
import { a } from '@react-spring/three'

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const islandRef = useRef();

    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene);

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

            islandRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        };

    }

    useEffect(() => {
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
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])



    // useEffect(() => {
    //     const canvas = gl.domElement;
    //     canvas.addEventListener('pointerdown', handlePointerDown);
    //     canvas.addEventListener('pointerup', handlePointerUp);
    //     canvas.addEventListener('pointermove', handlePointerMove);
    //     document.addEventListener('keydown', handleKeyDown);
    //     document.addEventListener('keyup', handleKeyUp);

    //     return () => {
    //         canvas.removeEventListener('pointerdown', handlePointerDown);
    //         canvas.removeEventListener('pointerup', handlePointerUp);
    //         canvas.removeEventListener('pointermove', handlePointerMove);
    //         document.removeEventListener('keydown', handleKeyDown);
    //         document.removeEventListener('keyup', handleKeyUp);
    //     }
    // }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {

            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01 * Math.PI;
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01 * Math.PI;
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }

    const handleCloudClick = () => {
        // Open Google.com in a new tab
        window.open("https://www.google.com", "_blank");
    };

    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;

            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }
            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current.rotation.y;

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
            switch (true) {
                case normalizedRotation >= 6 && normalizedRotation <= 6.5:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 1.5 && normalizedRotation <= 2:
                    setCurrentStage(3);
                    break;
                // case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                case normalizedRotation >= 2.8 && normalizedRotation <= 3.3:

                    setCurrentStage(2);
                    break;
                    break;
                // case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                case normalizedRotation >= 4.25 && normalizedRotation <= 5:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    });



    return (
        // 
        <a.group ref={islandRef} {...props}>

            <group scale={0.07}
                position={[0, 0, 0]}
                rotation={[0, 0.6, 0]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder_Material_0.geometry}
                    material={materials.Material}
                    position={[2.041, -139.81, 0]}
                    rotation={[-Math.PI / 2, 0, -0.946]}
                    scale={[350, 350, 140]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder001_Material_0.geometry}
                    material={materials.Material}
                    position={[2.041, -139.81, 0]}
                    rotation={[-Math.PI / 2, 0, -0.946]}
                    scale={[350, 350, 140]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus002_Material_0.geometry}
                    material={materials.Material}
                    position={[-36.291, 129.905, -158.527]}
                    rotation={[-1.748, 0.301, 0.182]}
                    scale={[10.774, 10.895, 9.406]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder002_Material_0.geometry}
                    material={materials.Material}
                    position={[-204.454, 55.698, -170.588]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[14.975, 14.975, 43.025]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_Material_0.geometry}
                    material={materials.Material}
                    position={[8.86, 44.279, -272.547]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[12.135, 12.135, 34.867]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder004_Material_0.geometry}
                    material={materials.Material}
                    position={[-181.622, 49.615, -42.053]}
                    rotation={[-Math.PI / 2, 0, 0.744]}
                    scale={[9.632, 9.632, 27.675]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder005_Material_0.geometry}
                    material={materials.Material}
                    position={[123.122, 38.646, -211.553]}
                    rotation={[-Math.PI / 2, 0, 0.708]}
                    scale={[9.239, 9.239, 26.546]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder006_Material_0.geometry}
                    material={materials.Material}
                    position={[-294.693, 43.624, -6.261]}
                    rotation={[-Math.PI / 2, 0, -0.518]}
                    scale={[11.545, 11.545, 33.172]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder007_Material_0.geometry}
                    material={materials.Material}
                    position={[-109.699, 52.569, -261.662]}
                    rotation={[-Math.PI / 2, 0, -2.874]}
                    scale={[15.706, 15.706, 45.125]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder008_Material_0.geometry}
                    material={materials.Material}
                    position={[-142.454, 38.456, 124.072]}
                    rotation={[0.115, -0.032, -0.528]}
                    scale={100.309}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder009_Material_0.geometry}
                    material={materials.Material}
                    position={[92.614, 52.903, 165.46]}
                    rotation={[-Math.PI / 2, 0, 0.023]}
                    scale={[2.332, 2.332, 29.523]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder012_Material_0.geometry}
                    material={materials.Material}
                    position={[103.392, 36.69, 103.377]}
                    rotation={[0.416, -0.613, 0.372]}
                    scale={[5.848, 5.867, 15.466]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder010_Material_0.geometry}
                    material={materials.Material}
                    position={[220.728, 24.928, -79.14]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[3.464, 3.464, 6.539]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder011_Material_0.geometry}
                    material={materials.Material}
                    position={[-37.824, 18.836, 285.587]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[3.825, 3.825, 7.135]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder013_Material_0.geometry}
                    material={materials.Material}
                    position={[-233.198, 12.043, 213.107]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[3.163, 3.163, 5.972]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder014_Material_0.geometry}
                    material={materials.Material}
                    position={[63.539, 27.373, -190.155]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[4.255, 4.255, 7.937]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder015_Material_0.geometry}
                    material={materials.Material}
                    position={[-159.358, 48.992, 176.075]}
                    rotation={[-1.379, -0.559, 0.479]}
                    scale={[2.695, 2.695, 5.087]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder016_Material_0.geometry}
                    material={materials.Material}
                    position={[-155.678, 54.336, 110.91]}
                    rotation={[-1.809, -0.623, -0.065]}
                    scale={[2.253, 2.253, 4.203]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder017_Material_0.geometry}
                    material={materials.Material}
                    position={[293.776, 15.892, 19.905]}
                    rotation={[-1.59, -0.026, 0.176]}
                    scale={[2.695, 2.695, 5.087]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder018_Material_0.geometry}
                    material={materials.Material}
                    position={[155.35, 15.203, -227.589]}
                    rotation={[-1.638, -0.029, 0.316]}
                    scale={[2.503, 2.503, 4.668]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere004_Material_0.geometry}
                    material={materials.Material}
                    position={[104.184, 66.958, 112.02]}
                    rotation={[-Math.PI / 2, 0, -0.195]}
                    scale={3.407}
                />

                {/* CLOUDS
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere004_Material_0.geometry}
                    material={materials.Material}
                    position={[97.795, 346.88, -284.807]}
                    rotation={[0.481, -0.124, 2.167]}
                    scale={47.776}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Icosphere010_Material_0.geometry}
                    material={materials.Material}
                    position={[-322.135, 343.393, 44.987]}
                    rotation={[2.585, -0.515, -1.336]}
                    scale={49.018}
                    onClick={handleCloudClick}
                /> */}

            </group>

        </a.group>
    );

}

// useGLTF.preload("/island.glb");

export default Island;