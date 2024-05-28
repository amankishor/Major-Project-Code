import React from 'react'

import b from "../assets/im-2/b.png";

import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png"
import videoIcon from "../assets/images/video-icon.png";
import faqImg from "../assets/images/faq-img.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import {Link} from 'react-router-dom';
import {BsArrowRight} from "react-icons/bs";
import About from '../components/About/About';
import ServicesList from '../components/Services/ServicesList';
import DoctorsList from '../components/Doctors/DoctorsList';
import FaqList from '../components/Faq/FaqList';
import StepProgress from "../components/Stepp/StepProgress.jsx"
// import Testimonial from '../components/Testimonial/Testimonial';
import LoginUndraw  from  "../assets/im-2/LoginUndraw.png"
import result from "../assets/im-2/result.png"
import ServicesUndraw from "../assets/im-2/ServicesUndraw.png"
import sel2 from "../assets/im-2/sel2.png"
import res from "../assets/im-2/res.png"
import resu from "../assets/im-2/resu.png"
import Sele  from "../components/Selector/Sele.jsx"
import Sul from '../components/Stepp/Sul.jsx';
import di  from '../assets/im-2/di.png'

const Home = () => {
  return (
    <>
    <>
    <section className='hero__section pt-[50px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap[90px] items-center justify-between'>
          {/* hero content */}
          <div>
            <div className='lg:w-[570px]'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[50px]
              md:leading-[] marginright'style={{ marginTop: "-14px"  }}> Revolutionary AI- Powered Lung Cancer Detection </h1>
              <p className='text__para text-headingColor font 'align ="justify">
              AI-driven lung cancer detection is a transformative healthcare innovation. Using machine 
              learning, it rapidly examines medical imaging such as CT scans and MRIs, facilitating precise
              early cancer detection.
              <br />
              This technology expedites the process of drug discovery and design of clinical trials,
              facilitating the creation of innovative treatments. Dr. Prakash's pioneering approach not 
                    only enhances patient outcomes but also optimizes healthcare delivery, representing a significant 
                    shift towards personalized, data-driven medicine in the modern era, ultimately leading to lives saved 
                    and reduced healthcare expenses.
              </p>
              <a href="https://en.wikipedia.org/wiki/Lung_cancer_screening" >
              <button className='btn'>Learn More</button>
              </a>
              
            </div>
            {/* hero counter */}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              {/* <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                <span className='w-[100px] h-2 bg-yellowColor roundded-full block mt-[-14px]'></span>
                <p className='text__para'>years of experience</p>
              </div> */}

              {/* <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>18+</h2>
                <span className='w-[100px] h-2 bg-purpleColor roundded-full block mt-[-14px]'></span>
                <p className='text__para'>clinical location</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                <span className='w-[100px] h-2 bg-irisBlueColor roundded-full block mt-[-14px]'></span>
                <p className='text__para'>paitence certification</p>
              </div> */}

            </div>
          </div>
          {/* hero content */}
          <div className="flex gap-[30px] justify-end">
            <div>
            <img className="w-full rounded-lg" src={di} alt="" style={{ width: '550px', height: '550px',marginLeft: "24px" ,marginTop: "-24px" }} />

            </div>
            <div className='mt-[30px]'>
              <img src={b} alt="" className='w-full mb-[30px] rounded-lg ' style={{ marginTop: "-64px"  }}/>
              <img src={heroImg03} alt="" className='w-full' />
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* hero section end */}
    {/* <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
        <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
              md:leading-[] marginright text-center'> providing the best medical services </h1>
        <p className='text__para text-center'>world-class care for everyone.our health system offers unmatched expert health care</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a doctor</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                world-class care for everyone . our health system offers
                unmatched , expert health care . from the lab to the clinic.
              </p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded full border border-solid border[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
          </div>
          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon02} alt="" />
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find Location</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                world-class care for everyone . our health system offers
                unmatched , expert health care . from the lab to the clinic.
              </p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded full border border-solid border[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
          </div>
          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon03} alt="" />
            </div>
            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Book Appointment</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                world-class care for everyone . our health system offers
                unmatched , expert health care . from the lab to the clinic.
              </p>
              <Link to='/doctors' className='w-[44px] h-[44px] rounded full border border-solid border[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    {/* about section */}
    <About />

    {/* about services */}
    <section>
      <div className='container'>
       <div className='xl:w-[470px] mx-auto'>
        <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
              md:leading-[] marginright text-center'style = {{margintop: "-350px"}}>Several significant Researches</h1>
        <p className='text__para text-center'>
          
        </p>
        </div> 

        <ServicesList/>
        
        <Sul/>
        {/* <StepProgress/>  */}

        <Sele/>
   
        {/* <section>
          <div className='container'>
            <div className='lg:w-[470px] mx-auto'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
                            md:leading-[] marginright text-center'> providing the best medical services </h1>
              <p className='text__para text-center'>world-class care for everyone.our health system offers unmatched expert health care</p>
            </div>

            <div className='flex justify-center gap-5 lg:gap-[10px] mt-[10px] lg:mt-[15px]'>
                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={icon01} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                      Find a doctor</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      world-class care for everyone . our health system offers
                      unmatched , expert health care . from the lab to the clinic.
                    </p>
                  </div>
                </div>
                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={icon01} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                      Find a doctor</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      world-class care for everyone . our health system offers
                      unmatched , expert health care . from the lab to the clinic.
                    </p>
                  </div>
                </div>
                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={icon02} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                      Find Location</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      world-class care for everyone . our health system offers
                      unmatched , expert health care . from the lab to the clinic.
                    </p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded full border border-solid border[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                  </div>
                </div>

                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={icon03} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                      Book Appointment</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                      world-class care for everyone . our health system offers
                      unmatched , expert health care . from the lab to the clinic.
                    </p>
                    <Link to='/doctors' className='w-[44px] h-[44px] rounded full border border-solid border[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </section> */}

      </div>
    </section>
    {/* feature */}
   

    {/* feature end */}
    {/* our great doctor */}
    {/* <section>
      <div className='container'>
        <div className='xl:w-[470px] mx-auto'>
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
                  md:leading-[] marginright text-center'>Our Great Doctors</h1>
            <p className='text__para text-center'>
              world-clas care for everyone. our health system offers unmatched 
              expert health care.
            </p>
        </div>
        <DoctorsList/>
      </div>
    </section>
    <DoctorsList/> */}
    <section>
      <div className='container' style={{marginTop:"-120px"}}>
        <div className='flex justify-between gap-{}'>
          <div className='w-1/2 hiden md:block'>
            <img src={faqImg} alt="" />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
                  md:leading-[] marginright text-center'>Most question by our beloved operators</h2>
            <FaqList/>
            
          </div>
        </div>
      </div>
    </section>
    
    {/* faq section end */}
    {/* testimonial */}
    {/* <section>
      <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h1 className="text-[44px] leading-[54px] font-[700] text-headingcolor text-center">What our paitent say</h1>
            <p className='text__para text-center'>
              world-clas care for everyone. our health system offers unmatched 
              expert health care.
            </p>
            <Testimonial/>
          </div>
        </div>
    </section> */}
    </>
    </>

  )
}

export default Home
