import { useRef, useEffect } from 'react'

import planeScene from '../assets/3d/raccoon.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        console.log(isRotating);
        if (isRotating) {
            actions['Racoon_Walk'].play();

        }
        else {
            actions['Racoon_Walk'].stop();
        }

    }, [actions, isRotating])

    return (
        <group
            position={[2.5, -1.5, 6]}
            rotation={[0, 0, 0]}
        >
            <mesh {...props} ref={ref}>
                <primitive object={scene} />
            </mesh>
        </group>
    )
}

export default Plane



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



