import React from 'react'
import { Link } from 'react-router-dom'
import  Image from '../../src/images/HeroImage.png'
import  VideoImage from '../../src/images/video_image.png'
import './main_scss/home_header.scss'
import './main_scss/home_header.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsPlayFill} from 'react-icons/bs'
import PowerfulFeature from './PowerfulFeature'



function HomeHeader() {
  return (

    <header>
 <div className="container-fluid my_header">

                                    <div className="header_item">
                                        <div className=" text_side">
                                        <div className="text_head">
                                            <h5>WE GO BLACK</h5>
                                        </div>

                                        <div className="main_content">
                                            <h1>Convert visitors into</h1>
                                            <h2>Loyal Customers</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>

                                            <div className="button_side">
                                            <Link to='/'>
                                                    <button>
                                                        Book Demo
                                                    </button>
                                                    </Link>
                                                    
                                                    <Link to='/'>
                                                    <button className='feature_btn'> 
                                                        Offer Feature
                                                    </button>
                                                    </Link>
                                                </div>
                                                </div>


                                                <div className=" image_side">
                                                    <img src={Image} alt="" />
                                                </div>
    </div>
   </div>
 <div className="container-fluid content_vid ">

                                    <div className="content_item row">
                                        <div className=" content_text_side col-md-6 col-md-6 col-lg-5  ">
                                        <div className="text_head">
                                            <h5>WE GO BLACK</h5>
                                        </div>

                                        <div className="main_content">
                                            <h1>Powerful products for a</h1>
                                            <h2>great cause</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>

                                            <div className="button_side">
                                            <Link to='/'>
                                             
                                                    More about our story<AiOutlineArrowRight/>
                                                  
                                                    </Link>
                                             
                                                </div>
                                                </div>


                                                <div className=" video_side col-md-6 col-md-6 col-lg-5  ">
                                                    
                                                    <img src={VideoImage} alt="" />
                                                    <div className='line'></div>
                                                    <button> <BsPlayFill size={30} /> Play video</button>
                                                </div>
    </div>
   </div>

        <PowerfulFeature />
    </header>
  
  )
}

export default HomeHeader