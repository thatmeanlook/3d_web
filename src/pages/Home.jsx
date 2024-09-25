import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import HomeInfo from '../components/HomeInfo'
import { ContactShadows } from '@react-three/drei'
import BalloonBlue from '../models/BalloonBlue'
import RaccoonNew from '../models/RaccoonNew'
// import Sky_Anime from '../models/Sky_Anime'
const Sky_Anime = React.lazy(() => import('../models/Sky_Anime'));
import Sky_Land from '../models/SKy_Land'

// import { DirectionalLightShadow } from '@react-three/drei'

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [showPlane, setShowPlane] = useState(false); // State to control Plane visibility
    const [showBird, setShowBird] = useState(false); // State to control Bird visibility
    const [showZach, setShowZach] = useState(false); // State to control Zach visibility
    const [clickDisabled, setClickDisabled] = useState(false);


    const [zachCurrentAnimation, setZachCurrentAnimation] = useState('Wave'); // for New Raccoon

    //////////////////////
    /// TOGGLE PLANE ON OFF
    // const toggleShowPlane = () => {
    //     if (!clickDisabled) {
    //         setShowPlane(prevState => !prevState); // Toggle the value of showPlane
    //         console.log('1st change')
    //         setClickDisabled(true); // Disable click temporarily
    //         console.log('Disable click')
    //         setTimeout(() => setClickDisabled(false), 500); // Enable click after 1 second
    //     }
    //     // setShowPlane(prevState => !prevState); // Toggle the value of showPlane

    //     // setShowPlane(true);
    // };


    /// TOGGLE PLANE ON OFF -- ORIGINAL WORKING
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



    /////////////////////////

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


    const adjustPlaneForScreenSize = () => {

        let screenScale, screenPosition, shadowPosition, pointLightPower

        if (window.innerWidth < 700) {
            screenScale = [0.011, 0.011, 0.011] // racoon
            // screenScale = [0.2, 0.2, 0.2]; // Alpaca
            screenPosition = [0, -1.28, 0];// raccoon current
            // screenPosition = [0, -1.5, 0];// Alpaca
            shadowPosition = [0, -1.28, 0]; // racccoon current
            // shadowPosition = [0, -1.5, 0]; // Alpaca
            pointLightPower = 50;

        } else {
            screenScale = [0.03, 0.03, 0.03] // raccoon
            // screenScale = [0.4, 0.4, 0.4]; // Alpaca
            screenPosition = [0, -3, -4];
            shadowPosition = [0, -3, 0];
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

    const [balloonPosition, balloonScale] = adjustBalloonForScreenSize();



    const adjustZachForScreenSize = () => {
        let position;
        let screenScale;
        let shadowPosition;

        if (window.innerWidth < 500) {
            position = [-1, -5, -40]
            screenScale = [2, 2, 2]
            shadowPosition = [0, -1.28, 0]; // 
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
        // console.log('shadow position', shadowPosition)

        setZachCurrentAnimation('Death'); // CUR
        setTimeout(() => {
            setZachCurrentAnimation('Wave');
        }, 750);

    };



    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition, shadowPosition, pointLightPower] = adjustPlaneForScreenSize();
    // const balloonScale = adjustBalloonForScreenSize();
    // const balloonScale = [10, 10, 10];

    // console.log('ballon scale: ', balloonScale)

    // const handleBalloonClick = () => {
    //     setShowPlane(true);
    //     // Open "99 red balloon" in a new tab
    //     window.open('https://youtu.be/hiwgOWo7mDc?si=ppFvsBFkXo1BVBS6', '_blank');
    // };

    // console.log('show plane in home', showPlane) // THIS IS TO CHECK TURN ON/OFF BALLOON LIGHT

    // if (showPlane) {
    //     showPlane = true;
    // }

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
                {/* ///////////////////////////////// */}

                {/* <Environment preset='sunset' /> */}

                {/* <Environment preset='warehouse' /> */}

                {/* <pointLight />
                <spotLight /> */}

                <ContactShadows
                    // for Raccoon
                    position={shadowPosition}
                    opacity={1} scale={20}
                    blur={0.5} far={10}
                    resolution={256}
                    color='#000000'
                />

                {/* <ContactShadows
                    // for Zach
                    // position={shadowPosition}
                    position={zachShadowPosition}
                    opacity={1} scale={20}
                    blur={0.5} far={10}
                    resolution={256}
                    color='#000000'
                /> */}


                {/* {showPlane &&
                    <spotLight
                        position={[0, 0, 0]} // Position at the center of the screen
                        angle={Math.PI / 4}    // 45 degree angle
                        penumbra={0.1}         // Soft edge
                        intensity={1}          // Full brightness
                        castShadow             // Enable shadow casting
                    />
                } */}

                {/* {showPlane &&
                    // <Environment preset='night' />
                    <hemisphereLight
                        skyColor='blue'
                        // skyColor='#b1e1ff'
                        groundColor='#010a01'
                        // groundColor='#000000'
                        intensity={1}
                    />
                } */}



                <Suspense fallback={<Loader />}>
                    {/* 
                    {showBird && <Bird
                        position={[-20, -50, 30]}
                        scale={[0.3, 0.3, 0.3]}
                        toggleShowBird={toggleShowBird}
                    />
                    } */}



                    {/* 
                    <Balloon // VERY STABLE AND RELIABLE
                        // onClick={handleBalloonClick}
                        toggleShowPlane={toggleShowPlane}
                        clickDisabled={clickDisabled}
                        setClickDisabled={setClickDisabled}
                    // scale={balloonScale}
                    /> */}

                    {/* <Balloon_Test
                    // position={balloonPosition}
                    // scale={balloonScale}
                    /> */}

                    <BalloonBlue
                        toggleShowPlane={toggleShowPlane}
                        clickDisabled={clickDisabled}
                        setClickDisabled={setClickDisabled}
                    />

                    {/* <BalloonRed
                        scale={[0.3, 0.3, 0.3]}
                    /> */}


                    {/* <Zach
                        position={zachPosition}
                        scale={zachScale}
                        zachCurrentAnimation={zachCurrentAnimation}
                        onClick={handleZachClick}
                    /> */}


                    {!showPlane &&
                        <Sky_Land isRotating={isRotating}
                        // scale={[0.5, 0.5, 0.5]}
                        />
                    }

                    {/* NIGHT SKY */}

                    {showPlane &&
                        <pointLight
                            position={[0, 2, -4]} // raccoon on small screen
                            // position={[0, 0, 0]} // raccoon on small screen
                            castShadow:true
                            intensity={pointLightPower}
                        />
                    }

                    {showPlane &&
                        <directionalLight
                            // color={0xffffff}
                            color={'#fcb849'} //current Yellow/Orange
                            intensity={1.2}
                            position={[0, 1, 0]}
                            castShadow:true
                        />
                    }

                    {showPlane &&
                        <ambientLight
                            intensity={0.25}
                            // intensity={0.2}
                            color='white'
                        />
                    }

                    {showPlane &&
                        <Sky_Anime
                            isRotating={isRotating}
                        // scale={[10, 10, 10]}
                        />
                    }




                    <Island
                        // scale={[1, 1, 1]}
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



                    {/* {showPlane && <FireNew // TURN ON/OFF FIRE
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}

                    />} */}


                    {/* <Plane // THE ALPACA
                        scale={[0.2, 0.2, 0.2]}
                        // scale={planeScale}
                        position={planePosition}
                        isRotating={isRotating}
                        // setIsRotating={setIsRotating}
                        rotation={[0, 20.5, 0]}

                    /> */}

                    <RaccoonNew
                        scale={planeScale}
                        // scale={[0.03, 0.03, 0.03]}
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