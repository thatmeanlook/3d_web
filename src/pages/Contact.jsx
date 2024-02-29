import React, { Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Raccoon from '../models/Raccoon';
import Loader from '../components/Loader';
import RaccoonNew from '../models/RaccoonNew';
import Alpaca from '../models/Alpaca';
import { Environment, ContactShadows } from '@react-three/drei';
import { Link } from 'react-router-dom';

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isLoading, setIsLoading] = useState(false);
    const [currentAnimation, setCurrentAnimation] = useState('Eating');
    // const [currentAnimation, setCurrentAnimation] = useState('Racoon_Idle'); // this old raccoon

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    // const handleFocus = () => setCurrentAnimation('Racoon_Walk');
    // const handleBlur = () => setCurrentAnimation('Racoon_StandUp');

    const handleFocus = () => setCurrentAnimation('Gallop');
    const handleBlur = () => setCurrentAnimation('Walk');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm
    };

    const handleAlpacaClick = () => {
        // Open Google.com in a new tab
        window.open('https://www.google.com', '_blank');
    };

    return (
        <section className='relative flex lg:flex-row flex-col max-container'>

            {/* message box */}
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch</h1>
                <form
                    className='w-full flex flex-col gap-7 mt-14'
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
                            placeholder='you@gmail.com'
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
                            className='input'
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

                </form>
            </div>

            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000
                    }}
                >
                    <directionalLight intensity={2} position={[0, 1, 0]} />
                    <ambientLight intensity={2} />

                    <Environment preset='sunset' />
                    <ContactShadows
                        position={[0, -3, 0]}
                        opacity={0.6} scale={20}
                        blur={1} far={10}
                        resolution={256}
                        color='#000000' />

                    <Suspense fallback={<Loader />}>

                        {/* <Raccoon
                            currentAnimation={currentAnimation}
                            position={[-2, -3, -5]}
                            rotation={[0, 0, 0]}
                            scale={[1, 1, 1]}
                        /> */}

                        {/* <RaccoonNew
                            currentAnimation={currentAnimation}
                            position={[-2, -3, -5]}
                            rotation={[0, 0, 0]}
                            scale={[0.1, 0.1, 0.1]}
                        /> */}

                        <Alpaca
                            currentAnimation={currentAnimation}
                            position={[1, -3, -5]}
                            rotation={[0, -0.8, 0]}
                            scale={[1.2, 1.2, 1.2]}
                            onClick={handleAlpacaClick}
                        // style={{ cursor: 'pointer' }}

                        />


                    </Suspense>

                </Canvas>

            </div>

        </section>


    )
}

export default Contact