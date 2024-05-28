import React from 'react';
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import {Link} from 'react-router-dom';
import c from "../../assets/im-2/c.png";

const About = () => {
  return (
    <section>
        <div className='container' style={{marginTop:"-34px"}}>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                {/* about img */}
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={c} alt=""  className='rounded lg' style={{marginLeft:"50px"}}/>
                    {/* <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] 
                     lg:right-[22%]'>
                        <img src={aboutCardImg} alt="" />
                    </div> */}
                </div>
                {/* about content */}
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order02'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[600] md:text-[35px]
              md:leading-[] marginright '>  Revolutionizing Lung Cancer Treatment: The Influence of Machine Learning in Contemporary Healthcare</h1>
                    <p className='text__para'>
                    The incorporation of machine learning (ML) into lung cancer research and treatment has sparked
                    a revolution in contemporary medical practices. Through the utilization of ML algorithms, diagnostic 
                    accuracy is significantly enhanced, allowing for the precise prediction of tumor behavior and treatment 
                    responses. ML analysis of extensive datasets aids in the identification of genetic mutations and biomarkers, 
                    paving the way for tailored, personalized therapies for individual patients.
                    </p>
                    <p className='text__para mt-[30px]'>
                    This technology expedites the process of drug discovery and design of clinical trials,
                    facilitating the creation of innovative treatments. Dr. Prakash's pioneering approach not 
                    only enhances patient outcomes but also optimizes healthcare delivery, representing a significant 
                    shift towards personalized, data-driven medicine in the modern era, ultimately leading to lives saved 
                    and reduced healthcare expenses.
                    </p>
                    <a href="https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/lung-cancer-screening-who-should-consider-it-and-why/photostory/107027589.cms?picid=107027628" target="_blank" rel="noopener noreferrer">
                        <button className='btn'>Learn More</button>
                    </a>
                </div>

            </div>
        </div>   
    </section>
  )
}

export default About
