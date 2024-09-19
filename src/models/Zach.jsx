import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { AnimationMixer, AnimationUtils } from 'three'
import { Clock } from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import zachScene from '../assets/3d/zach.glb'
// import zachScene from '../assets/3d/zach.gltf'


const Zach = ({ zachCurrentAnimation, ...props }) => {
    const zachRef = useRef()
    const { nodes, materials, animations } = useGLTF(zachScene)
    const { actions } = useAnimations(animations, zachRef)

    const mixer = useRef();
    // useEffect(() => {

    //     // actions['Take 001'].setDuration(2).play();
    //     console.log('ZZZZZZZZZZZZZZZZZZach action', actions)
    //     actions[zachCurrentAnimation].play();

    // })

    useEffect(() => {
        console.log(actions);
        const mixerInstance = new AnimationMixer(zachRef.current);
        mixer.current = mixerInstance;

        Object.values(actions).forEach((action) => action.stop());

        if (actions[zachCurrentAnimation]) {
            // console.log('current animation', currentAnimation);
            // console.log('current action:', actions[currentAnimation]);

            const crawlClip = actions[zachCurrentAnimation].getClip();

            // console.log('clip', crawlClip)
            const crawlSubClip = AnimationUtils.subclip(crawlClip, 'crawl_subClip', 0, 1000, true);
            // console.log('subclip', crawlSubClip)
            const crawlSubClipAction = mixerInstance.clipAction(crawlSubClip);
            crawlSubClipAction.enabled = true;

            if (zachCurrentAnimation == 'Jump_In_Place') {
                crawlSubClipAction.setDuration(1.2);
            }
            crawlSubClipAction.play();

            // console.log('current animation: ', currentAnimation);
        }


        // return () => {
        //     mixerInstance.stopAllAction();
        // };
    }, [actions, zachCurrentAnimation]);

    useFrame((_, delta) => {
        if (mixer.current) {
            // console.log('delta', delta)
            mixer.current.update(delta);
            // mixer.current.update(0.010);
        }
    }, [actions, zachCurrentAnimation]);



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
