import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    // 0: (
    //     <br></br>
    // ),

    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'>Minh</span>👋
            <br />
            A Frontend Engineer based in California
            {/* A recent grad from UC San Diego and an aspiring Frontend Engineer. */}
            {/* A Frontend Engineer from San Diego. */}
        </h1>
    ),
    2: (
        <InfoBox
            text="Places I've worked at and what I've learned along the way"
            link='/about'
            btnText='Learn more' />
    ),
    3: (
        <InfoBox
            text="Projects"
            link='/projects'
            btnText='' />
    ),
    4: (
        <InfoBox
            text="Looking for a Frontend Engineer?"
            link='/contact'
            btnText="Let's talk" />
    )
}



const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo