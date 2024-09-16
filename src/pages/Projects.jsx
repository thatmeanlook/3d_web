import React from 'react'
import { projects } from '../constants/index'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'


const Projects = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My {" "}
                <span className='blue-gradient_text font-semibold drop-shadow'>
                    {" "}
                    Projects
                </span>{" "}

            </h1>

            <div className='flex flex-wrap my-20 gap-8'>
                {projects.map((project) => (
                    <div className='lg:w-[400px] w-full bg-white p-6 rounded-lg shadow-lg' key={project.name}>
                        <div className='block-container w-12 h-12'>
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img src={project.iconUrl}
                                    atl="Project Icon"
                                    className='w-full h-full object-contain' />
                            </div>
                        </div>

                        <div className='mt-5 flex flex-col'>
                            <h4 className='text-2xl font-poppins font-semibold'>
                                {project.name}
                            </h4>

                            <p>
                                {project.info} |
                                <a href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-black-500 font-medium text-base underline hover:text-blue-800 ml-2'>
                                    Link
                                </a>
                            </p>

                            <p className='mt-2 text-slate-500'>
                                {project.description}
                            </p>

                            <p className='mt-2 text-slate-500'>
                                {project.tech}
                            </p>



                            {/* LIVE LINK BUTTON */}
                            {/* <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target="_blank"
                                    rel='noopener noreferrer'
                                    className='font-semibold text-blue-500'
                                >
                                    Live Link
                                </Link>

                                <img
                                    src={arrow}
                                    alt="Arrow"
                                    className='w-4 h-4 object-contain' />

                            </div> */}

                        </div>

                    </div>
                ))}

            </div>

            <hr className='border-slate-200' />

            <CTA />

        </section>
    )
}

export default Projects