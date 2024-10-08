import { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, AnimationUtils } from 'three'
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from '../assets/3d/cute_island.glb'
import fireScene from '../assets/3d/fire.glb'
import birdPolyScene from '../assets/3d/bird_poly.glb'
import { a } from '@react-spring/three'
import { MeshBasicMaterial, Color } from "three";

import zachScene from '../assets/3d/zachCopy.glb'

const Island = ({ isRotating, setIsRotating, setCurrentStage, showPlane, toggleShowPlane, toggleShowBird, ...props }) => {
    const islandRef = useRef();
    const { gl, viewport } = useThree();
    const { nodes, materials } = useGLTF(islandScene);
    const { nodes: nodes2, materials: materials2, animations } = useGLTF(fireScene);
    const { nodes: nodesBirdPoly, materials: materialsBirdPoly, animations: animationsBirdPoly } = useGLTF(birdPolyScene);
    const { actions } = useAnimations(animations, islandRef);
    const { actions: actionsBirdPoly } = useAnimations(animationsBirdPoly, islandRef)

    // ZACH STUFF
    const zachRef = useRef();
    const { nodes: nodesZach, materials: materialsZach, animations: animationsZach } = useGLTF(zachScene);
    const { actions: actionsZach } = useAnimations(animationsZach, islandRef)
    const [zachCurrentAnimation, setZachCurrentAnimation] = useState('Wave');
    const mixer = useRef();

    ////

    const [clickDisabled, setClickDisabled] = useState(false);
    const [fireOpacity, setFireOpacity] = useState(0.8);

    const [birdOpacity, setBirdOpacity] = useState(0);
    const [zachOpacity, setZachOpacity] = useState(0);

    const glowGreen = new MeshBasicMaterial({ color: new Color(0, 3, 1), toneMapped: false })


    const handleFireOpacity = () => {
        if (!clickDisabled) {
            if (fireOpacity == 0) {
                setFireOpacity(0.8);
            } else {
                setFireOpacity(0);
            }
            setClickDisabled(true); // Disable click temporarily
            setTimeout(() => setClickDisabled(false), 500); // Enable click after 1 second
            console.log('fire opacity after', fireOpacity)
        }
    }

    // Click on Tree will show the Bird
    const handleTreeClick = () => {
        if (!clickDisabled) {
            if (birdOpacity == 0) {
                setBirdOpacity(1); // Toggle the value of showPlane
                // actionsBird['Take 001'].play();
                actionsBirdPoly['Take 001'].play();
                // setTimeout(() => (actionsBird['Take 001'].stop(),
                //     setBirdOpacity(0)), 6000)
            } else {
                setBirdOpacity(0);
            }
            setClickDisabled(true); // Disable click temporarily
            setTimeout(() => setClickDisabled(false), 500); // Enable click after 1 second
        }
    }

    // Click on Tent will show Zach
    const handleTentClick = () => {
        // toggleShowZach();
        if (!clickDisabled) {
            if (zachOpacity == 0) {
                setZachOpacity(1);
                // actionsZach[zachCurrentAnimation].play();
            } else {
                setZachOpacity(0);
            }
            setClickDisabled(true); // Disable click temporarily
            setTimeout(() => setClickDisabled(false), 500); // Enable click after 1 second
        }
        // console.log('Zach opacity in click:', zachOpacity)
    }


    // Trigger Zach's animation when clicked on
    const handleZachClick = () => {
        if (!clickDisabled) {
            // animation: fall back - shake head - back to waving
            setZachCurrentAnimation('Death');
            // setZachCurrentAnimation('Jump_Idle'); // Jump_Idle set timeout300ms
            // setZachCurrentAnimation('Jump');
            setTimeout(() => {
                setZachCurrentAnimation('No');
                setTimeout(() => {
                    setZachCurrentAnimation('Wave');
                }, 1500);

            }, 1500);

            setClickDisabled(true); // Disable click temporarily
            setTimeout(() => setClickDisabled(false), 1000); // Enable click after 1 second
        }

        console.log('in Click function, actions:', actionsZach)
        console.log('Zach current animation: ', zachCurrentAnimation)
    }

    const handleBirdClick = () => {
        window.open('https://thatmeanlook.github.io/dino-run/', '_blank');
    }

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

    ///////////// ZACH EFFECT
    useEffect(() => {
        console.log(actionsZach);
        const mixerInstance = new AnimationMixer(islandRef.current);
        mixer.current = mixerInstance;
        console.log('Inside Effect:', actionsZach)

        Object.values(actionsZach).forEach((action) => action.stop());

        // Trim animations so they loop properly
        if (actionsZach[zachCurrentAnimation]) {
            const crawlClip = actionsZach[zachCurrentAnimation].getClip();
            const crawlSubClip = AnimationUtils.subclip(crawlClip, 'crawl_subClip', 0, 1000, true);
            const crawlSubClipAction = mixerInstance.clipAction(crawlSubClip);
            crawlSubClipAction.enabled = true;

            if (zachCurrentAnimation == 'Jump') {
                crawlSubClipAction.setDuration(1.2);
            }
            if (zachCurrentAnimation == 'Death') {
                crawlSubClipAction.setDuration(1.5);
            }

            crawlSubClipAction.play();
        }

    }, [actionsZach, zachCurrentAnimation]);

    useFrame((_, delta) => {
        if (mixer.current) {
            mixer.current.update(delta);
        }
    }, [actionsZach, zachCurrentAnimation]);


    useEffect(() => {
        actions['Default Take'].play(); // fire animation

        const canvas = gl.domElement;

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
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, actions, handleFireOpacity])


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

    // const handleCloudClick = () => {
    //     // Open Google.com in a new tab
    //     window.open("https://www.google.com", "_blank");
    // };

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

        <a.group ref={islandRef} {...props}>

            <group
                // scale={0.07}
                position={[0, 0, 0]}
                rotation={[0, 0.6, 0]}>

                {/* BIRD POLY /////////////////////////////////// */}
                <group name="Sketchfab_Scene">
                    <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                        <group
                            name="b41216c5de024b378dcea87d8b695888fbx"
                            // rotation={[Math.PI / 2, 2, 0]}
                            rotation={[1, 2, 0]}
                            position={[-20, 10, 15]}
                            scale={1}
                            onClick={handleBirdClick}
                            onPointerDown={handleBirdClick}
                        >
                            <group name="Object_2">
                                <group name="RootNode">
                                    <group
                                        name="FlyingBird"
                                        // position={[-0.003, 0.079, 0.074]}
                                        rotation={[2.922, -0.036, 3.134]}
                                    >
                                        <group
                                            name="Bird"
                                            position={[0.064, 0.146, 0.587]}
                                            scale={0.104}
                                        >
                                            <mesh
                                                name="Bird_roll_env_07lambert10_0"
                                                castShadow
                                                receiveShadow
                                                geometry={nodesBirdPoly.Bird_roll_env_07lambert10_0.geometry}
                                                material={materialsBirdPoly.roll_env_07lambert10}
                                                material-transparent={true}
                                                material-opacity={birdOpacity}
                                            // material-color={'#9c5d98'}
                                            // material-color={'#bd8b77'}
                                            />
                                        </group>
                                        <group
                                            name="Bird_RW"
                                            position={[-0.057, 0.196, 0.349]}
                                            rotation={[-0.066, -0.051, 0.025]}
                                            scale={0.104}
                                        >
                                            <mesh
                                                name="Bird_RW_roll_env_07fishMaterialSG1_0"
                                                castShadow
                                                receiveShadow
                                                geometry={
                                                    nodesBirdPoly.Bird_RW_roll_env_07fishMaterialSG1_0.geometry
                                                }
                                                material={materialsBirdPoly.roll_env_07fishMaterialSG1}
                                                material-transparent={true}
                                                material-opacity={birdOpacity}
                                            />
                                        </group>
                                        <group
                                            name="Bird_LW"
                                            position={[-0.057, 0.196, 0.349]}
                                            rotation={[-0.09, -0.046, -3.105]}
                                            scale={0.104}
                                        >
                                            <mesh
                                                name="Bird_LW_roll_env_07fishMaterialSG1_0"
                                                castShadow
                                                receiveShadow
                                                geometry={
                                                    nodesBirdPoly.Bird_LW_roll_env_07fishMaterialSG1_0.geometry
                                                }
                                                material={materialsBirdPoly.roll_env_07fishMaterialSG1}
                                                material-transparent={true}
                                                material-opacity={birdOpacity} />
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>

                {/* ZACHHHHHHHHHHHHHHHHHHHHHHHHHHHH */}
                <group name="Scene">
                    <group name="CharacterArmature"
                        position={[4, 2.4, -2]}
                        rotation={[0, 2, 0]}
                        scale={[2.5, 2.5, 2.5]}
                        castShadow
                    >
                        <skinnedMesh
                            name="Character"
                            geometry={nodesZach.Character.geometry}
                            material={materialsZach.Atlas}
                            skeleton={nodesZach.Character.skeleton}
                            material-transparent={true}
                            material-opacity={zachOpacity}
                            onClick={handleZachClick}
                            onPointerDown={handleZachClick}
                            castShadow
                        // receiveShadow
                        />
                        <primitive object={nodesZach.Root} />
                    </group>
                </group>


                {/* FIRE /////////////////////////////////////////// */}
                <group name="Sketchfab_Scene">
                    <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                        <group
                            name="db63cf47b674497bb5667986891360e3fbx"
                            rotation={[1.3, 0, 0]}
                            // rotation={[Math.PI / 2, 0, 0]}
                            position={[10, -3, 2]}
                            scale={[8, 8, 8]}

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
                                                geometry={nodes2.fireA_005_fire_0.geometry}
                                                material={materials2.fire}
                                                material-transparent
                                                material-opacity={fireOpacity}
                                            // material={glowGreen}
                                            // material-color={'#fa9c0f'}
                                            // material-color={'orange'}

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
                                                geometry={nodes2.fireB_048_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}
                                            // material-color={'red'}

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
                                                geometry={nodes2.fireB_047_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}
                                            // material-color={'red'}

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
                                                geometry={nodes2.fireB_046_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.fireB_045_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.fireB_044_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.fireB_043_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.smoke_087_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.smoke_086_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.smoke_085_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.smoke_084_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.fireB_042_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.smoke_083_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}

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
                                                geometry={nodes2.fireB_041_fire_0.geometry}
                                                material={materials2.fire}
                                                material-opacity={fireOpacity}


                                            />
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>




                {/* ISLAND///////////////////////////////////// */}
                <group scale={0.07}
                    position={[0, 0, 0]}
                    rotation={[0, 0.6, 0]}
                >
                    <mesh  // ROCK BOTTOM
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder_Material_0.geometry}
                        material={materials.Material}
                        position={[2.041, -139.81, 0]}
                        rotation={[-Math.PI / 2, 0, -0.946]}
                        scale={[350, 350, 140]}

                    />
                    <mesh // GREEN SURFACE
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder001_Material_0.geometry}
                        material={materials.Material}
                        position={[2.041, -139.81, 0]}
                        rotation={[-Math.PI / 2, 0, -0.946]}
                        scale={[350, 350, 140]}
                    />
                    <mesh // TENT
                        castShadow
                        receiveShadow
                        geometry={nodes.Torus002_Material_0.geometry}
                        material={materials.Material}
                        position={[-36.291, 129.905, -158.527]}
                        rotation={[-1.748, 0.301, 0.182]}
                        scale={[10.774, 10.895, 9.406]}
                        onClick={handleTentClick}
                        onPointerDown={handleTentClick}
                    // onClick={handleFireOpacity}
                    />
                    <mesh // 4TH TREE FROM LEFT
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder002_Material_0.geometry}
                        material={materials.Material}
                        position={[-204.454, 55.698, -170.588]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[14.975, 14.975, 43.025]}
                    />
                    <mesh // 2ND TREE
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder003_Material_0.geometry}
                        material={materials.Material}
                        position={[8.86, 44.279, -272.547]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[12.135, 12.135, 34.867]}
                    />
                    <mesh // 5TH TREE
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder004_Material_0.geometry}
                        material={materials.Material}
                        position={[-181.622, 49.615, -42.053]}
                        rotation={[-Math.PI / 2, 0, 0.744]}
                        scale={[9.632, 9.632, 27.675]}
                    />
                    <mesh // 1ST TREE
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder005_Material_0.geometry}
                        material={materials.Material}
                        position={[123.122, 38.646, -211.553]}
                        rotation={[-Math.PI / 2, 0, 0.708]}
                        scale={[9.239, 9.239, 26.546]}
                    />
                    <mesh // 6TH TREE
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder006_Material_0.geometry}
                        material={materials.Material}
                        position={[-294.693, 43.624, -6.261]}
                        rotation={[-Math.PI / 2, 0, -0.518]}
                        scale={[11.545, 11.545, 33.172]}
                    />
                    <mesh // 3RD TREE
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder007_Material_0.geometry}
                        material={materials.Material}
                        position={[-109.699, 52.569, -261.662]}
                        rotation={[-Math.PI / 2, 0, -2.874]}
                        scale={[15.706, 15.706, 45.125]}

                        onClick={handleTreeClick}
                        onPointerDown={handleTreeClick}

                    // onClick={handleTentClick}
                    // onPointerDown={handleTentClick}
                    />
                    <mesh // THE TREE LOG
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder008_Material_0.geometry}
                        material={materials.Material}
                        position={[-142.454, 38.456, 124.072]}
                        rotation={[0.115, -0.032, -0.528]}
                        scale={100.309}
                    />
                    <mesh //KITCHEN
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder009_Material_0.geometry}
                        material={materials.Material}
                        position={[92.614, 52.903, 165.46]}
                        rotation={[-Math.PI / 2, 0, 0.023]}
                        // scale={[2.332, 2.332, 29.523]} // original
                        scale={[2.332 * 1.2, 2.332, 29.523 * 1.1]} //
                    />
                    <mesh // FIREWOOD
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder012_Material_0.geometry}
                        material={materials.Material}
                        position={[103.392, 36.69, 103.377]}
                        rotation={[0.416, -0.613, 0.372]}
                        // scale={[5.848, 5.867, 15.466]} // ORIGINAL
                        scale={[5.848, 5.867, 15.466]}
                        onClick={handleFireOpacity}
                        onPointerDown={handleFireOpacity}

                    />
                    <mesh // BLUE SHROOM
                        castShadow
                        receiveShadow
                        geometry={nodes.Cylinder010_Material_0.geometry}
                        material={materials.Material}
                        position={[220.728, 24.928, -79.14]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={[3.464, 3.464, 16.539]}
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

                    <mesh // THE POT
                        castShadow
                        receiveShadow
                        geometry={nodes.Sphere004_Material_0.geometry}
                        material={materials.Material}
                        position={[104.184, 66.958, 112.02]}
                        rotation={[-Math.PI / 2, 0, -0.195]}
                        // scale={3.407} // ORIGINAL
                        scale={3.407 * 1.2} // ORIGINAL
                        onClick={handleFireOpacity}
                        onPointerDown={handleFireOpacity}


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

            </group>

        </a.group>
    );

}

// useGLTF.preload("/island.glb");

export default Island;