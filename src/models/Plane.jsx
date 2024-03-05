

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// import scene from '../assets/3d/Alpaca.glb'

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF('/Alpaca.gltf');
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        // console.log(isRotating);

        if (isRotating) {
            actions['Gallop'].stop();
            actions['Eating'].play();

        } else {
            // actions['Gallop'].crossFadeTo(actions['Eating'], 3, true).play();
            actions['Eating'].stop();
            actions['Gallop'].play();
        }


        /// OK FOR NOW
        // if (isRotating) {
        //     actions['Gallop'].play();

        // } else {
        //     actions['Gallop'].stop();
        //     actions['Eating'].play();
        // }

    }, [actions, isRotating])

    return (
        <group
        // position={[1, -5.2, -11]}
        // scale={[1, 1, 1]}
        >
            <mesh {...props} ref={ref}>
                <primitive object={scene} />
            </mesh>
            {/* <directionalLight /> */}
        </group>
    )
}

export default Plane




/////////////// NEW RACCOON

// import { useRef, useEffect } from 'react'

// import planeScene from '../assets/3d/poly_art_raccoon.glb'
// import { useAnimations, useGLTF } from '@react-three/drei'

// const Plane = ({ isRotating, ...props }) => {
//     const ref = useRef();
//     const { scene, animations } = useGLTF(planeScene);
//     const { actions } = useAnimations(animations, ref);

//     useEffect(() => {
//         console.log(isRotating);
//         if (isRotating) {
//             actions['Walk_Forward'].play();

//         } else {
//             actions['Land'].play();
//         }

//     }, [actions, isRotating])

//     return (
//         <group
//             position={[1, -5.2, -11]}
//             scale={[0.05, 0.05, 0.05]}
//         >
//             <mesh {...props} ref={ref}>
//                 <primitive object={scene} />
//             </mesh>
//         </group>
//     )
// }

// export default Plane



///////////////////////// THIS IS OLD RACCOON

// import { useRef, useEffect } from 'react'

// import raccoonScene from '../assets/3d/raccoon.glb'
// import { useAnimations, useGLTF } from '@react-three/drei'

// const Plane = ({ isRotating, ...props }) => {
//     const ref = useRef();
//     const { scene, animations } = useGLTF(raccoonScene);
//     const { actions } = useAnimations(animations, ref);

//     useEffect(() => {
//         console.log(isRotating);
//         if (isRotating) {
//             actions['Racoon_Walk'].play();

//         } else {
//             actions['Racoon_Walk'].stop();
//         }

//     }, [actions, isRotating])

//     return (
//         <group
//             position={[0, -1.2, 1]}>
//             <mesh {...props} ref={ref}>
//                 <primitive object={scene} />
//             </mesh>
//         </group>
//     )
// }

// export default Plane










/////////////////////////////////////////// THIS IS FOR PLANE


// import { useRef, useEffect } from 'react'

// import planeScene from '../assets/3d/plane.glb'
// import { useAnimations, useGLTF } from '@react-three/drei'

// const Plane = ({ isRotating, ...props }) => {
//     const ref = useRef();
//     const { scene, animations } = useGLTF(planeScene);
//     const { actions } = useAnimations(animations, ref);

//     useEffect(() => {
//         console.log(isRotating);
//         if (isRotating) {
//             actions['Take 001'].play();

//         } else {
//             actions['Take 001'].stop();
//         }

//     }, [actions, isRotating])

//     return (
//         <group
//             position={[0, -1.2, 1]}>
//             <mesh {...props} ref={ref}>
//                 <primitive object={scene} />
//             </mesh>
//         </group>
//     )
// }

// export default Plane



