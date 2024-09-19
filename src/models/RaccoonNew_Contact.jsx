/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Malbers Animations (https://sketchfab.com/malbers.shark87)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/poly-art-raccoon-093e7d8dba2c47118aff1126f461cb7f
Title: Poly Art Raccoon
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { AnimationMixer, AnimationUtils } from 'three'
import { Clock } from 'three'
import { useFrame } from '@react-three/fiber'
import scene from '../assets/3d/poly_art_raccoon.glb'


// insert UCSD raccoon vid
// https://www.reddit.com/r/UCSD/comments/qxc16u/just_some_raccoons/

const RaccoonNew = ({ currentAnimation, ...props }) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(scene);
    const { actions } = useAnimations(animations, group);


    const mixer = useRef();

    useEffect(() => {
        console.log(actions);
        // console.log('raccoon action', actions.Action_Crawl)
        const mixerInstance = new AnimationMixer(group.current);
        mixer.current = mixerInstance;

        // const crawlClip = actions.Action_Dig.getClip();
        // const crawlClip = actions.Action_Crawl.getClip();
        // const crawlClip = actions.Action_Eat.getClip();
        // const crawlClip = actions.Roll.getClip();

        // console.log('clip', crawlClip)
        // const crawlSubClip = AnimationUtils.subclip(crawlClip, 'crawl_subClip', 0, 100, true);
        // console.log('subclip', crawlSubClip)
        // const crawlSubClipAction = mixerInstance.clipAction(crawlSubClip);
        // crawlSubClipAction.enabled = true;

        // crawlSubClipAction.play();
        // console.log('raccoon trimmed', crawlSubClipAction)



        Object.values(actions).forEach((action) => action.stop());

        if (actions[currentAnimation]) {
            // console.log('current animation', currentAnimation);
            // console.log('current action:', actions[currentAnimation]);

            const crawlClip = actions[currentAnimation].getClip();

            // console.log('clip', crawlClip)
            const crawlSubClip = AnimationUtils.subclip(crawlClip, 'crawl_subClip', 0, 1000, true);
            // console.log('subclip', crawlSubClip)
            const crawlSubClipAction = mixerInstance.clipAction(crawlSubClip);
            crawlSubClipAction.enabled = true;

            if (currentAnimation == 'Jump_In_Place') {
                crawlSubClipAction.setDuration(1.2);
            }
            crawlSubClipAction.play();

            // console.log('current animation: ', currentAnimation);
        }


        // return () => {
        //     mixerInstance.stopAllAction();
        // };
    }, [actions, currentAnimation]);

    useFrame((_, delta) => {
        if (mixer.current) {
            // console.log('delta', delta)
            mixer.current.update(delta);
            // mixer.current.update(0.010);
        }
    }, [actions, currentAnimation]);

    // useEffect(() => {
    //     console.log(actions)

    //     Object.values(actions).forEach((action) => action.stop());

    //     if (actions[currentAnimation]) {
    //         actions[currentAnimation].play();
    //         // console.log('current animation: ', currentAnimation);
    //     }


    // }, [actions, currentAnimation])

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group
                        name="d694477a516e4500907a8e651d27b4d1fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="CG"
                                    position={[0, 33.046, 0]}
                                    rotation={[-1.605, -0.004, -1.449]}
                                >
                                    <group name="Object_5">
                                        <primitive object={nodes._rootJoint} />
                                        <skinnedMesh
                                            name="Object_64"
                                            geometry={nodes.Object_64.geometry}
                                            material={materials.Material_28}
                                            skeleton={nodes.Object_64.skeleton}
                                        // onPointerEnter={() => (document.body.style.cursor = 'grab')} // Change cursor on hover
                                        // onPointerLeave={() => (document.body.style.cursor = 'auto')} // Reset cursor on leave
                                        />
                                        <group name="Object_63" rotation={[-Math.PI / 2, 0, 0]} />
                                    </group>
                                </group>
                                <group
                                    name="Raccoon_Poly_Art"
                                    rotation={[-Math.PI / 2, 0, 0]}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

// useGLTF.preload("/poly_art_raccoon.glb");

export default RaccoonNew;