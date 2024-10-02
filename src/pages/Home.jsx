import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import HomeInfo from '../components/HomeInfo'
import { ContactShadows } from '@react-three/drei'
import BalloonBlue from '../models/BalloonBlue'
import RaccoonNew from '../models/RaccoonNew'
const Sky_Anime = React.lazy(() => import('../models/Sky_Anime'));
import Sky_Land from '../models/SKy_Land'


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [showPlane, setShowPlane] = useState(false); // State to control Plane visibility
    const [showZach, setShowZach] = useState(false); // State to control Zach visibility
    const [clickDisabled, setClickDisabled] = useState(false);
    const [zachCurrentAnimation, setZachCurrentAnimation] = useState('Wave'); // for New Raccoon


    /// TOGGLE OBJ ON OFF 
    const toggleShowPlane = () => {
        if (!clickDisabled) {
            setShowPlane(prevState => !prevState); // Toggle the value of showPlane
            setClickDisabled(true); // Disable click temporarily
            setTimeout(() => setClickDisabled(false), 1000); // current
        }
    };


    /// TOGGLE BIRD ON OFF -- 
    const toggleShowBird = () => {
        if (!clickDisabled) {
            setShowBird(prevState => !prevState); // Toggle the value of showBird
            setClickDisabled(true); // Disable click temporarily
            setTimeout(() => setClickDisabled(false), 500); // Enable click after 1 second
        }
    };

    /// TOGGLE ZACH ON OFF -- 
    const toggleShowZach = () => {
        if (!clickDisabled) {
            setShowZach(prevState => !prevState); // Toggle the value of showZach
            setClickDisabled(true); // Disable click temporarily
            setTimeout(() => setClickDisabled(false), 500); // Enable click after 1 second
        }
    };


    // Adjust Island for screen sizes
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 3.85, 0];

        if (window.innerWidth < 700) {
            screenScale = [0.75, 0.75, 0.75];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation]
    }


    // Adjust Raccoon for screen sizes
    const adjustRaccoonForScreenSize = () => {
        let screenScale, screenPosition, shadowPosition, pointLightPower

        if (window.innerWidth < 700) {
            screenScale = [0.011, 0.011, 0.011]
            screenPosition = [0, -1.23, 0];
            shadowPosition = [0, -1.4, 0];
            pointLightPower = 50;

        } else {
            screenScale = [0.03, 0.03, 0.03]
            screenPosition = [0, -3, -4];
            shadowPosition = [0, -3.5, 0];
            pointLightPower = 20;
        }
        return [screenScale, screenPosition, shadowPosition, pointLightPower]
    }

    const adjustBalloonForScreenSize = () => {
        let position;
        let screenScale;
        if (window.innerWidth < 500) {
            position = [-7, 4, -11]
            screenScale = [0.7, 0.7, 0.7]
        }
        else {
            position = [-15, 4, -11]
            screenScale = [1, 1, 1]
        }
        return [position, screenScale]
    }

    const adjustZachForScreenSize = () => {
        let position;
        let screenScale;
        let shadowPosition;

        if (window.innerWidth < 500) {
            position = [-1, -5, -40]
            screenScale = [2, 2, 2]
            shadowPosition = [0, -1.28, 0];
        }
        else {
            position = [-0.5, -4.4, -37]
            screenScale = [2.5, 2.5, 2.5]
            shadowPosition = [0, -4, 1];
        }
        return [position, screenScale, shadowPosition]
    }

    const [zachPosition, zachScale, zachShadowPosition] = adjustZachForScreenSize();


    const handleZachClick = () => {
        setZachCurrentAnimation('Death');
        setTimeout(() => {
            setZachCurrentAnimation('Wave');
        }, 750);
    };


    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition, shadowPosition, pointLightPower] = adjustRaccoonForScreenSize();


    return (
        <section className='w-full h-screen relative'>

            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center' >
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}
                shadows
            >

                {/* DAY LIGHT /////// */}
                {!showPlane &&
                    <directionalLight
                        position={[1, 1, 10]}
                        intensity={1}
                    />
                }

                {!showPlane &&
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={2}
                    // castShadow
                    />
                }

                {!showPlane &&
                    <ambientLight intensity={0.1} />
                }

                {!showPlane &&
                    <pointLight
                        position={[-1, 5, 1]} // raccoon on small screen
                        castShadow
                        intensity={60}
                    // intensity={pointLightPower}
                    />
                }

                <ContactShadows
                    // for Raccoon
                    position={shadowPosition}
                    opacity={1} scale={20}
                    blur={0.5} far={10}
                    resolution={256}
                    color='#000000'
                />

                <Suspense fallback={<Loader />}>

                    <BalloonBlue
                        toggleShowPlane={toggleShowPlane}
                        clickDisabled={clickDisabled}
                        setClickDisabled={setClickDisabled}
                    />

                    {!showPlane &&
                        <Sky_Land isRotating={isRotating}
                        // scale={[10, 10, 10]}
                        />
                    }

                    {/* NIGHT SKY */}

                    {showPlane &&
                        <pointLight
                            position={[0, 2, -4]} // raccoon on small screen
                            castShadow:true
                            intensity={pointLightPower}
                        />
                    }

                    {showPlane &&
                        <directionalLight
                            color={'#fcb849'} //current Yellow/Orange
                            intensity={1.2}
                            position={[0, 1, 0]}
                            castShadow:true
                        />
                    }

                    {showPlane &&
                        <ambientLight
                            intensity={0.25}
                            color='white'
                        />
                    }

                    {showPlane &&
                        <Sky_Anime
                            isRotating={isRotating}
                            scale={[10, 10, 10]}
                            position={[1, 1, 1]}
                        />
                    }


                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}

                        toggleShowPlane={toggleShowPlane}
                        toggleShowBird={toggleShowBird}
                        toggleShowZach={toggleShowZach}

                    />

                    <RaccoonNew
                        scale={planeScale}
                        position={planePosition}
                        isRotating={isRotating}
                        rotation={[0, 20.5, 0]}
                        // rotation={raccoonRotation}
                        showPlane={showPlane}
                    />
                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home