import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
// import Raccoon from '../models/Raccoon';
import Loader from '../components/Loader';
// import RaccoonNew from '../models/RaccoonNew';
// import Alpaca from '../models/Alpaca';
import { Environment, ContactShadows } from '@react-three/drei';
import { Link } from 'react-router-dom';
import RaccoonNew_Contact from '../models/RaccoonNew_Contact';

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false);

    const [currentAnimation, setCurrentAnimation] = useState('Lie_Idle_2'); // for New Raccoon

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };



    const handleFocus = () => setCurrentAnimation('Sneak_Idle'); // for Alpaca
    const handleBlur = () => setCurrentAnimation('Action_Eat');  // for Alpaca

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('Jump_In_Place');

        emailjs.send(

            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Minh",
                from_email: form.email,
                to_email: 'minhlucart@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            // SHOW success message
            // hide alert
            setForm({ name: '', email: '', message: '' });
        }).catch((error) => {
            setIsLoading(false);
            setCurrentAnimation('Lie_Idle_2');
            console.log(error);
            // TO DO: show error message
        })
    };

    const linkedIn = () => {
        window.open('https://linkedin.com/in/minhluc', '_blank');

    }

    const handleAlpacaClick = () => {
        // Open Google.com in a new tab
        setCurrentAnimation('Attack_Headbutt');
        setTimeout(() => {
            // window.open('https://www.google.com', '_blank');
            setCurrentAnimation('Eating');
        }, 1000);
    };


    const handleRaccoonClick = () => {
        console.log('shadow position', shadowPosition)

        // Open Google.com in a new tab
        // setCurrentAnimation('GetHit_Front_Right_2');
        setCurrentAnimation('GetHit_Front_Left_2');
        // setCurrentAnimation('Attack_Arms');
        // setCurrentAnimation('Jump_In_Place');
        // setTimeout(() => {
        //     // window.open('https://www.google.com', '_blank');
        //     // setCurrentAnimation('Action_Eat');
        // }, 1500);

        setTimeout(() => {
            setCurrentAnimation('Action_Eat');
        }, 1500); // for GetHit_Front_Left_2
        // }, 1250); // Attack_Arms
        // }, 1200); // for Jump
    };

    const adjustRaccoonForScreenSize = () => {

        let screenScale, screenPosition, shadowPosition

        if (window.innerWidth < 768) {
            screenScale = [0.1, 0.1, 0.1] // racoon
            screenPosition = [1.5, -1, -4];// raccoon
            if (currentAnimation == 'Lie_Idle_2') {
                shadowPosition = [0.1, -1.1, -0.2]; // racccoon

            } else {
                shadowPosition = [0, -1, 0]; // racccoon
            }

        } else {
            screenScale = [0.1, 0.1, 0.1] // raccoon
            screenPosition = [2, -3, -5];
            // shadowPosition = [0, -3, 0]; // racccoon

            if (currentAnimation == 'Lie_Idle_2') {
                shadowPosition = [0.05, -3.3, -0.1]; // racccoon

            } else {
                console.log('hereeeeeeeeee')
                shadowPosition = [0, -3.3, 0]; // racccoon
            }
        }
        return [screenScale, screenPosition, shadowPosition]
    }

    const [raccoonScale, raccoonPosition, shadowPosition] = adjustRaccoonForScreenSize();


    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            {/* <section className='relative flex lg:flex-row flex-col max-container'> */}

            {/* message box */}
            <div className='flex-1 min-w-[50%] flex flex-col relative z-0 bg-transparent'>
                <h1 className='head-text'>Get in Touch</h1>
                <form
                    className='w-full flex flex-col gap-5 mt-10'
                    onSubmit={handleSubmit}
                >
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className='input'
                            placeholder=''
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>


                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className='input'
                            required
                            placeholder=''
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>


                    <label className='text-black-500 font-semibold'>
                        Your Message
                        <textarea
                            rows={4}
                            name='message'
                            // className='input'
                            className='textarea'
                            placeholder=''
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur} />
                    </label>

                    <button
                        type='submit'
                        className='btn'
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>

                    <button
                        // type='submit'
                        className='btn'
                        // disabled={isLoading}
                        // onFocus={handleFocus}
                        // onBlur={handleBlur}
                        onClick={linkedIn}
                    >
                        Connect on LinkedIn

                    </button>

                </form>
            </div>

            {/* Raccoon */}
            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px] relative'
            // style={{ position: 'absolute', top: '50px', left: '50px', zIndex: '100' }}
            // style={{ zIndex: 1 }}
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
                    {/* 
                    <directionalLight
                        intensity={3}
                        position={[0, 1, 0]}
                    // color={'orange'}
                    /> */}

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
                            rotation={[0, -19.5, 0]}
                            scale={raccoonScale}
                            // scale={[0.1, 0.1, 0.1]}
                            onClick={handleRaccoonClick}
                            onPointerEnter={() => document.body.style.cursor = "grab"} // Change cursor on hover
                            onPointerLeave={() => document.body.style.cursor = "auto"} // Reset cursor on leave
                        />

                        {/* <Alpaca
                            currentAnimation={currentAnimation}
                            position={[1, -3, -5]}
                            rotation={[0, -0.8, 0]}
                            scale={[1.2, 1.2, 1.2]}
                            onClick={handleAlpacaClick}
                        // style={{ cursor: 'pointer' }}

                        /> */}


                    </Suspense>

                </Canvas>



                <div className=' bg-slate-300/20'>
                    <footer style={{
                        position: 'absolute',
                        bottom: 0, width: '100%',
                        textAlign: 'center',
                        // paddingBottom: '100px',
                        font: 4,
                        paddingTop: '100px',
                        // color: '',
                    }}>
                        <p
                            style={{
                                fontFamily: 'Arial, sans-serif',
                                fontSize: 12,
                                color: 'grey',
                                // position: 'absolute'
                            }}
                        >MinhLucArt@gmail.com</p>
                    </footer>
                </div>

            </div>



        </section >


    )
}

export default Contact