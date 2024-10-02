import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Environment, ContactShadows } from '@react-three/drei';
import RaccoonNew_Contact from '../models/RaccoonNew_Contact';
import { socialLinks } from '../constants'


const Contact = () => {

    const [currentAnimation, setCurrentAnimation] = useState('idle');

    const handleRaccoonClick = () => {
        console.log('shadow position', shadowPosition)

        setCurrentAnimation('Idle_Look_Left'); // CURRENT
        setTimeout(() => {
            setCurrentAnimation('idle');
        }, 2850); // for idle
        // }, 1500); // for GetHit_Front_Left_2
        // }, 1250); // Attack_Arms
        // }, 1200); // for Jump
    };

    const adjustRaccoonForScreenSize = () => {

        let screenScale, screenPosition, shadowPosition

        if (window.innerWidth < 768) {
            screenScale = [0.09, 0.09, 0.09]
            screenPosition = [0.5, -0.5, -5];
            if (currentAnimation == 'Lie_Idle_2') {
                shadowPosition = [0.1, -1.1, -0.2];

            } else {
                shadowPosition = [0, -2, 0];
            }

        } else {
            screenScale = [0.07, 0.07, 0.07]
            screenPosition = [0, -2.1, -5];

            if (currentAnimation == 'Lie_Idle_2') {
                shadowPosition = [0.05, -3.3, -0.1];
            } else {
                shadowPosition = [0, -3.3, 0];
            }
        }
        return [screenScale, screenPosition, shadowPosition]
    }

    const [raccoonScale, raccoonPosition, shadowPosition] = adjustRaccoonForScreenSize();


    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            <div className='flex-1 min-w-[50%] flex flex-col relative z-10'>
                <h1 className='head-text'>Get in Touch</h1>

                <div className='mt-16 flex flex-wrap gap-8 sm:gap-12'>
                    {socialLinks.map((social) => (
                        <div className='block-container w-20 h-20' key={social.name}>
                            <div className='btn-back rounded-xl bg-slate-300' />
                            <div className='btn-front rounded-xl flex justify-center items-center'>

                                <a href={social.link} target="_blank" rel="noopener noreferrer">
                                    {social.name === 'Contact' ? (
                                        <img
                                            src={social.iconUrl}
                                            alt={social.name}
                                            className='w-12 object-contain'
                                        />
                                    ) : (
                                        <img
                                            src={social.iconUrl}
                                            alt={social.name}
                                            className='w-10 object-contain'
                                        />
                                    )}
                                </a>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className='lg:w-1/2 w-full lg:h-[550px] md:h-[450px] h-[350px] relative z-20'
            >
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000
                    }}

                >
                    <directionalLight
                        intensity={2}
                        position={[0, 1, 0]}
                    // color={'orange'}
                    />

                    <ambientLight intensity={2} />

                    <Environment preset='sunset' />

                    <ContactShadows
                        position={shadowPosition}
                        opacity={0.6} scale={20}
                        blur={1} far={10}
                        resolution={256}
                        color='#000000' />

                    <Suspense fallback={<Loader />}
                    >
                        <RaccoonNew_Contact
                            currentAnimation={currentAnimation}
                            position={raccoonPosition}
                            rotation={[0, -20, 0]} // for idle
                            scale={raccoonScale}
                            onClick={handleRaccoonClick}
                            onPointerEnter={() => document.body.style.cursor = "grab"} // Change cursor on hover
                            onPointerLeave={() => document.body.style.cursor = "auto"} // Reset cursor on leave
                        />

                    </Suspense>

                </Canvas>

                {/* <div>
                    <footer
                        style={{
                            position: 'absolute',
                            bottom: 0, width: '100%',
                            textAlign: 'center',
                            font: 4,
                            paddingTop: '100px',
                            // color: '',
                        }}
                    >
                        <p>MinhLucArt@gmail.com</p>
                    </footer>
                </div> */}

            </div>
        </section >
    )
}

export default Contact