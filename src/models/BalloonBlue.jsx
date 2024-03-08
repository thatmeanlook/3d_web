
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import ballonScene from '../assets/3d/balloonBlue.glb'
import { useFrame } from "@react-three/fiber";

const BalloonBlue = ({ toggleShowPlane }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(ballonScene);
    const { actions } = useAnimations(animations, ref);

    const adjustBalloonForScreenSize = () => {
        let position;
        let screenScale;
        if (window.innerWidth < 500) {
            position = [-7, 4, -11]
            screenScale = [0.5, 0.5, 0.5]
        }
        else {
            position = [-15, 4, -11]
            screenScale = [1, 1, 1]
        }

        return [position, screenScale]
    }

    const [balloonPosition, balloonScale] = adjustBalloonForScreenSize();




    useEffect(() => {
        console.log('blue balloon', actions)
        actions['Action'].setDuration(30).play();
        // actions['Action'].play();
    }, []);

    const handleBalloonClick = () => {
        toggleShowPlane();
        // Open Google.com in a new tab
        // window.open("https://www.google.com", "_blank");
    };

    useFrame(({ clock, camera }) => {
        // Update the Y position to simulate balloon-like motion using a sine wave
        ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 4;

        // Check if the balloon reached a certain endpoint relative to the camera
        if (ref.current.position.x > camera.position.x + 10) {
            // Change direction to backward and rotate the balloon 180 degrees on the y-axis
            ref.current.rotation.y = Math.PI;
        } else if (ref.current.position.x < camera.position.x - 10) {
            // Change direction to forward and reset the balloon's rotation
            ref.current.rotation.y = 0;
        }

        // Update the X and Z positions based on the direction
        if (ref.current.rotation.y === 0) {
            // Moving forward
            ref.current.position.x += 0.01;
            ref.current.position.z -= 0.01;
        } else {
            // Moving backward
            ref.current.position.x -= 0.01;
            ref.current.position.z += 0.01;
        }
    });

    useFrame((_, delta) => {
        ref.current.rotation.Y += 0.15 * delta;
    })

    return (
        <mesh
            position={balloonPosition}
            scale={balloonScale}
            ref={ref}
            onClick={handleBalloonClick}
            onPointerDown={handleBalloonClick}



        // position={[-15, 4, -11]}
        // scale={[1, 1, 1]}
        // ref={ref}
        // onClick={handleBalloonClick}
        >
            <primitive object={scene} />
        </mesh>
    )
}

useGLTF.preload("/balloonBlue.glb");

export default BalloonBlue