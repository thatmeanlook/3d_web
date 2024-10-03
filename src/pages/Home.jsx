import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import HomeInfo from '../components/HomeInfo'
import { ContactShadows } from '@react-three/drei'

import Island from '../models/Island'
import BalloonBlue from '../models/BalloonBlue'
import RaccoonNew from '../models/RaccoonNew'
import Sky_Land from '../models/SKy_Land'

// const Island = React.lazy(() => import('../models/Island'));
// const BalloonBlue = React.lazy(() => import('../models/BalloonBlue'));
// const RaccoonNew = React.lazy(() => import('../models/RaccoonNew'));


/// debounce click to reuse
const debounceClick = (callback, delay) => {
    if (!clickDisabled) {
        callback();
        setClickDisabled(true);
        setTimeout(() => setClickDisabled(false), delay);
    }
};

// adjust for screen sizes to reuse
const adjustForScreenSize = (mobileValues, desktopValues, breakpoint = 700) => {
    return window.innerWidth < breakpoint ? mobileValues : desktopValues;
};


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);
    const [showPlane, setShowPlane] = useState(false); // State to control Plane visibility
    const [clickDisabled, setClickDisabled] = useState(false);

    const toggleShowPlane = () => debounceClick(() => setShowPlane(prevState => !prevState), 1000);
    const toggleShowZach = () => debounceClick(() => setShowZach(prevState => !prevState), 500);

    /// TOGGLE BIRD ON OFF -- 
    const toggleShowBird = () => {
        if (!clickDisabled) {
            setShowBird(prevState => !prevState); // Toggle the value of showBird
            setClickDisabled(true); // Disable click temporarily
            setTimeout(() => setClickDisabled(false), 500); // Enable click after 1 second
        }
    };

    const [islandScale, islandPosition, islandRotation] = adjustForScreenSize(
        [[0.75, 0.75, 0.75], [0, -6.5, -43], [0.1, 3.85, 0]], // mobile values
        [[1, 1, 1], [0, -6.5, -43], [0.1, 3.85, 0]] // desktop values
    );

    const [raccoonScale, raccoonPosition, raccoonShadowPosition] = adjustForScreenSize(
        [[0.011, 0.011, 0.011], [0, -1.23, 0], [0, -1.4, 0]], // mobile values
        [[0.03, 0.03, 0.03], [0, -3, -4], [0, -3.5, 0]] // desktop
    );

    return (
        <section className='w-full h-screen relative'>

            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center' >
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 500 }} // tesing with less far
            // camera={{ near: 0.1, far: 1000 }} // orginal
            >

                {/* DAY LIGHT /////// */}

                <directionalLight
                    position={[1, 1, 10]}
                    intensity={1}
                />
                <hemisphereLight
                    skyColor='#b1e1ff'
                    groundColor='#000000'
                    intensity={2}
                // castShadow
                />
                <ambientLight intensity={0.1} />
                <pointLight
                    position={[-1, 5, 1]} // raccoon on small screen
                    castShadow
                    intensity={60}
                // intensity={pointLightPower}
                />

                {/* <ContactShadows
                    // for Raccoon
                    position={raccoonShadowPosition}
                    opacity={1} scale={20}
                    blur={0.5} far={10}
                    resolution={256}
                    color='#000000'
                /> */}



                <Suspense fallback={<Loader />}>

                    {/* <BalloonBlue
                        toggleShowPlane={toggleShowPlane}
                        clickDisabled={clickDisabled}
                        setClickDisabled={setClickDisabled}
                    /> */}

                    {/* <Sky_Land></Sky_Land> */}

                    {/* <Sky_Land isRotating={isRotating} /> */}

                    {/* <Island
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
                        scale={raccoonScale}
                        position={raccoonPosition}
                        isRotating={isRotating}
                        rotation={[0, 20.5, 0]}
                        showPlane={showPlane}
                    /> */}

                </Suspense>
            </Canvas>
        </section>
    )
}

export default Home