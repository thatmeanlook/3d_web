import { Suspense, useState } from 'react'
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


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {

        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];

        } else {
            screenScale = [1, 1, 1];

        }
        return [screenScale, screenPosition, rotation]
    }


    const adjustPlaneForScreenSize = () => {

        let screenScale, screenPosition, shadowPosition

        if (window.innerWidth < 768) {
            screenScale = [0.2, 0.2, 0.2];
            screenPosition = [0, -1.5, 0];
            shadowPosition = [0, -1.5, 0];

        } else {
            screenScale = [0.4, 0.4, 0.4];
            screenPosition = [0, -3, -4];
            shadowPosition = [0, -3, 0];

        }
        return [screenScale, screenPosition, shadowPosition]
    }


    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition, shadowPosition] = adjustPlaneForScreenSize();


    const handleBalloonClick = () => {
        // Open "99 red balloon" in a new tab
        window.open('https://youtu.be/hiwgOWo7mDc?si=ppFvsBFkXo1BVBS6', '_blank');
    };

    return (
        <section className='w-full h-screen relative'>

            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center' >
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>



            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}>


                <directionalLight
                    // castShadow:true
                    position={[1, 1, 4]} intensity={1}
                />

                <ambientLight intensity={1} />
                <pointLight />
                <spotLight />
                <hemisphereLight
                    skyColor='#b1e1ff'
                    groundColor='#000000'
                    intensity={2}
                />

                <ContactShadows
                    // position={planePosition}

                    // position={[0, -3, 0]}
                    // position={[0, -1.5, 0]}
                    position={shadowPosition}
                    opacity={0.8} scale={15}
                    blur={1} far={10}
                    resolution={256}
                    color='#000000' />

                <Suspense fallback={<Loader />}>



                    {/* <Bird /> */}
                    <Balloon
                        onClick={handleBalloonClick}
                    />

                    <Sky isRotating={isRotating} />

                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />


                    <Plane
                        scale={planeScale}
                        position={planePosition}
                        isRotating={isRotating}
                        // setIsRotating={setIsRotating}
                        rotation={[0, 20.5, 0]}

                    />


                </Suspense>


            </Canvas>





        </section>
    )
}

export default Home