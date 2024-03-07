import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
// import { Sky } from '@react-three/drei'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import { ContactShadows } from '@react-three/drei'
import Balloon from '../models/Balloon'
import BalloonBlue from '../models/BalloonBlue'
import BalloonRed from '../models/BalloonRed'
import { Environment } from '@react-three/drei'
import RaccoonNew from '../models/RaccoonNew'
import Fire from '../models/Fire'
import FireNew from '../models/FireNew'
import Sky_Night from '../models/Sky_Night'
import Sky_Test from '../models/Sky_Test'
import Sky_Anime from '../models/Sky_Anime'
import Sky_Land from '../models/SKy_Land'
import Balloon_Test from '../models/Balloon_Test'

// import { DirectionalLightShadow } from '@react-three/drei'


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [showPlane, setShowPlane] = useState(false); // State to control Plane visibility
    const [clickDisabled, setClickDisabled] = useState(false);

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
            setTimeout(() => setClickDisabled(false), 500); // Enable click after 1 second
        }

    };



    ///////////////////////////////

    ///////////////////////////////////
    // // CURSOR TRACKING

    // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    // const [isMovingLeft, setIsMovingLeft] = useState(false);
    // const [isMovingRight, setIsMovingRight] = useState(false);

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         const newX = e.clientX;
    //         const newY = e.clientY;

    //         // Check if cursor is moving left or right
    //         if (newX > cursorPosition.x) {
    //             setIsMovingRight(true);
    //             setIsMovingLeft(false);
    //         } else if (newX < cursorPosition.x) {
    //             setIsMovingLeft(true);
    //             setIsMovingRight(false);
    //         }

    //         // Update cursor position
    //         setCursorPosition({ x: newX, y: newY });
    //     };

    //     window.addEventListener('mousemove', handleMouseMove);

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, [cursorPosition]);

    // useEffect(() => {
    //     // Handle cursor movement here...
    //     if (isMovingLeft) {
    //         console.log('Cursor is moving left');
    //     } else if (isMovingRight) {
    //         console.log('Cursor is moving right');
    //     }
    // }, [isMovingLeft, isMovingRight]);

    ////////////////////////////////



    // const raccoonDirection = () => {
    //     let rotation;
    //     if (isMovingLeft) {
    //         rotation = [0, 20.5, 0]
    //     } else {
    //         rotation = [0, -20.5, 0]
    //     }

    //     return rotation
    // };

    // const raccoonRotation = raccoonDirection();



    /////////////////////////

    const adjustIslandForScreenSize = () => {

        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        // let screenPosition = [0, -6.5, -83];
        let rotation = [0.1, 4, 0];
        // let rotation = [0.1, 4.7, 0];

        // if (window.innerWidth < 768) {
        if (window.innerWidth < 700) {
            screenScale = [0.63, 0.63, 0.63];
            // const w = window.innerWidth;
            // screenScale = [w, w, w]

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
            screenPosition = [0, -1.1, 0];// raccoon
            // screenPosition = [0, -1.5, 0];// Alpaca
            shadowPosition = [0, -1.12, 0]; // racccoon
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

    // const adjustBalloonForScreenSize = () => {
    //     let screenScale;
    //     if (window.innerWidth < 768) {
    //         screenScale = [0.2, 0.2, 0.2]
    //     } else {
    //         screenScale = [100, 100, 100]
    //     }
    //     return screenScale
    // };

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

    console.log('show plane in home', showPlane)

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
            // castShadow
            >

                {!showPlane &&
                    <directionalLight
                        castShadow:true
                        position={[1, 1, 10]}
                        intensity={1}
                    />
                }

                {!showPlane &&
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={2}
                    />
                }

                {!showPlane &&
                    <ambientLight intensity={0.1} />
                }

                {/* <Environment preset='sunset' /> */}

                {/* <Environment preset='warehouse' /> */}

                {/* <pointLight />
                <spotLight /> */}

                <ContactShadows
                    // position={planePosition}

                    // position={[0, -3, 0]}
                    // position={[0, -1.5, 0]}
                    position={shadowPosition}
                    opacity={1} scale={20}
                    blur={0.5} far={10}
                    resolution={256}
                    color='#000000'
                />


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

                    {/* <Bird /> */}

                    {/* <Balloon // VERY STABLE AND RELIABLE
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


                    {!showPlane &&
                        <Sky_Land isRotating={isRotating}
                        // scale={[0.5, 0.5, 0.5]}
                        />
                    }

                    {/* {showPlane &&
                        <Environment preset='night' />
                        // <Environment preset='sunset' />
                    } */}

                    {showPlane &&
                        <pointLight
                            // position={[1, 1, 1]}
                            position={[0, 2, -4]} // raccoon on small screen
                            // position={[0, 0, 0]} // raccoon on small screen
                            // position={[0, 2, 0]}
                            castShadow:true
                            intensity={pointLightPower}
                        // intensity={20}
                        // color={'#fcb849'}
                        />

                        // <pointLight
                        //     position={[1, 1, 1]} // Set the position of the light
                        //     intensity={2} // Set the intensity of the light
                        //     distance={10} // Set the distance that the light affects
                        //     color="white" // Set the color of the light
                        // />

                    }


                    {/* {showPlane &&
                        <spotLight
                            position={[0, 1, 10]}
                            intensity={12}
                            // distance={30} // for small screen
                            distance={8}
                            angle={Math.PI * 0.1}
                        // penumbra={0.25}
                        // decay={0.5}
                        // target={[0, 0, 0]}
                        />
                    } */}

                    {showPlane &&
                        // <directionalLight
                        //     castShadow:true
                        //     position={[1, 1, 10]}
                        //     intensity={0.5}
                        // />

                        <directionalLight
                            // color={0xffffff}
                            color={'#fcb849'} //current Yellow/Orange
                            intensity={.8}
                            position={[0, 1, 0]}
                            castShadow:true
                        />

                        // <directionalLight
                        //     // color={0xffffff}
                        //     // color={'#fcb849'} //current Yellow/Orange
                        //     color={'#7c49fc'}
                        //     intensity={1.5}
                        //     position={[0, 1, 0]}
                        //     castShadow:true
                        // />

                    }

                    {showPlane &&
                        <ambientLight
                            intensity={0.12}
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