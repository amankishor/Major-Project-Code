import React from 'react'

import heroImg01 from "../assets/images/hero-img01.png";

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
// import Testimonial from '../components/Testimonial/Testimonial';

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
              md:leading-[] marginright'> Revolutionary AI- Powered Lung Cancer Detection </h1>
              <p className='text__para text-headingColor font'>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                Natus quaerat cumque fugit, perspiciats cum nemo aperiam,
                aut quia earu, amet architecto,modi odio. soluta unde
                ducimus perferendis?
              </p>
              <button className='btn'>Get Started</button>
            </div>
            {/* hero counter */}
            <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                <span className='w-[100px] h-2 bg-yellowColor roundded-full block mt-[-14px]'></span>
                <p className='text__para'>years of experience</p>
              </div>

              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>18+</h2>
                <span className='w-[100px] h-2 bg-purpleColor roundded-full block mt-[-14px]'></span>
                <p className='text__para'>clinical location</p>
              </div>
              <div>
                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                <span className='w-[100px] h-2 bg-irisBlueColor roundded-full block mt-[-14px]'></span>
                <p className='text__para'>paitence certification</p>
              </div>

            </div>
          </div>
          {/* hero content */}
          <div className="flex gap-[30px] justify-end">
            <div>
              <img className="w-full"src={heroImg01} alt="" />
            </div>
            <div className='mt-[30px]'>
              <img src={heroImg02} alt="" className='w-full mb-[30px]' />
              <img src={heroImg03} alt="" className='w-full' />
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* hero section end */}
    <section>
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
    </section>

    {/* about section */}
    <About/>

    {/* about services */}
    <section>
      <div className='container'>
       <div className='xl:w-[470px] mx-auto'>
        <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
              md:leading-[] marginright text-center'>Our Medical Services</h1>
        <p className='text__para text-center'>
          world-clas care for everyone. our health system offers unmatched 
          expert health care.
        </p>
        </div> 

        <ServicesList/>
      </div>
    </section>
    {/* feature */}
    <section>
      <div className='container'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>

          <div className='sl:w-[670px]'>
            <h2 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
              md:leading-[] marginright'>Get virtual treatment
              <br /> anytime
              </h2>
              <ul className='pl-4'>
                <li className='text__para'>
                  1.Schedule for your physician here, and contact their office.
                </li>
                <li className='text__para'>
                  2.Search for your physician here, and contact their office.
                </li>
                <li className='text__para'>
                  3.View our physician who are accepting new patients, use the <br />
                  online scheduling tool to select  an appointement time.
                </li>
              </ul>
              <Link to ="/">
                <button className='btn'>Learn More</button>
              </Link>
          </div>
          {/* feature img */}
          <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
            <img src={featureImg} className='w-3/4' alt="" />
            <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px]
             md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-[6px] lg:gap-3'>
                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                  Tue ,24
                </p>
                <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                  10:00AM
                </p>
              </div>
              <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-cemter bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                <img src={videoIcon} alt="" />
              </span>
            </div>
            <div className='w-[65px] lg:w-[96px] bg-[#ccfof3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
             leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
              consultation
             </div>
             <div className='flex items-center gap-[6px] lg:gap[10px] mt-2 lg:mt-[18px]'>
              <img src={avatarIcon} alt="" />
              <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>
                wayne collins
              </h4>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* feature end */}
    {/* our great doctor */}
    <section>
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
    <section>
      <div className='container'>
        <div className='flex justify-between gap-{}'>
          <div className='w-1/2 hiden md:block'>
            <img src={faqImg} alt="" />
          </div>
          <div className='w-full md:w-1/2'>
            <h2 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
                  md:leading-[] marginright text-center'>Most question by our beloved Paitents</h2>
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
