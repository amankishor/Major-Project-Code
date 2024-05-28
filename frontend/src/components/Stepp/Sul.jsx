import React from 'react'

import result from "../../assets/im-2/result.png"
import ServicesUndraw from "../../assets/im-2/ServicesUndraw.png"
import sel2 from "../../assets/im-2/sel2.png"
import res from "../../assets/im-2/res.png"
import resu from "../../assets/im-2/resu.png"
import LoginUndraw from "../../assets/im-2/LoginUndraw.png"

const Sul = () => {
  return (
    <>
         <section>
            <div className='container'>
              <div className='lg:w-[470px] mx-auto'>
              <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[40px]
                    md:leading-[] marginright text-center'> Understanding Airzen </h1>
              <p className='text__para text-center'>world-class care for everyone.our health system offers unmatched expert health care</p>
              </div>

              <div className='flex justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[10px] mt-[10px] lg:mt-[15px]'>
                <div className='py-[40px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={LoginUndraw} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Login & SignUp</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    Access your account by logging in, or create a new one by signing up.
                    </p>
                  </div>
                </div>
                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={ServicesUndraw} alt="" />
                  </div>
                  <div className='mt-[40px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                       Services</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    Navigate to Services and upload images of MRI and CT scans.
                    </p>
                  </div>
                </div>
                <div className='py-[30px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={sel2} alt="" />
                  </div>
                  <div className='mt-[75px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                      Select CT-Images</h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                    Choose either CT scan images or MRI images for which you'd like to receive the results.
                    </p>
                    
                  </div>
                </div>
                
                <div className='py-[0px] px-5'>
                  <div className='flex items-center justify-center'>
                    <img src={resu} alt="" />
                  </div>
                  <div className='mt-[30px]'>
                    <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                      Result </h2>
                    <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                                              
                        Once you've submitted the images, await the results.
                        The outcome will determine whether the image indicates the presence or absence of cancer.
                    </p>
                    
                  </div>
                </div>
                
              </div>
            </div>
        </section>
    </>
  )
}

export default Sul
