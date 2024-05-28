import React from 'react'
import featureImg from "../../assets/images/feature-img.png"
import videoIcon from "../../assets/images/video-icon.png";
import avatarIcon from "../../assets/images/avatar-icon.png";
import {Link} from 'react-router-dom';


const Doc = () => {
  return (
    <>
        <section>
      <div className='container'>
        <div className='flex items-center justify-between flex-col lg:flex-row'>

          <div className='sl:w-[670px]'>
            <h2 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
              md:leading-[] marginright'>Receive digital imaging 
              <br />remotely for diagnosis or examination
              </h2>
              <ul className='pl-4'>
                <li className='text__para'>
                  1.Access account and register for service.
                </li>
                <li className='text__para'>
                  2.Navigate to the Services section and upload the CT scan images. .
                </li>
                <li className='text__para'>
                  3.Await outcome notification, expect response, or anticipate findings.  <br />
                  
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
                wayne 
              </h4>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Doc
