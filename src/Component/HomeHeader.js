import React from 'react'
import { Link } from 'react-router-dom'
import  Image from '../../src/images/HeroImage.png'
import  VideoImage from '../../src/images/video_image.png'
import  Image2 from '../../src/svg/Hero_BG_Image.svg'
import './main_scss/home_header.scss'
import './main_scss/home_header.scss'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsPlayFill} from 'react-icons/bs'
import PowerfulFeature from './PowerfulFeature'
import Footer from './Footer'
import Tab from './Tab'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import GetCoins from './coins/GetCoins'
import GetAllCoins from './coins/GetAllCoins'


// ..
AOS.init();


function HomeHeader() {



    
  return (

    <header>
 <div className="container-fluid my_header">


 

                                    <div className="header_item ">
                                        <div className=" text_side">
                                        <div className="text_head"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        >
                                            <h5>WE GO BLACK</h5>
                                        </div>

                                        <div className="main_content"  >
                                            <h1  data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay='100'
                                        >Convert visitors into</h1>
                                            <h2
                                            data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay='150'

                                            >Loyal Customers</h2>
                                            <p
                                            data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay='200'
                                            
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>

                                            <div className="button_side"
                                              data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay='250'
                                            >
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


                                                <div className=" image_side"
                                                 data-aos="fade-left"
                                        data-aos-duration="1000"
                                        data-aos-delay='200'
                                                
                                                >
                                                    <img src={Image} alt="" />
                                                    <img src={Image2} alt="" className='img_side_abs' />
                                                </div>
    </div>

    <Tab />
   
   </div>
   <div className='home_coin'>  
        
    
             <GetCoins/>
     
            

            <div className='top container py-5'>
                <h5>Top 10 Cryptocurrencies</h5>
              <Link to='/coins'>See All </Link>
            </div>
            <GetAllCoins simplified/>
            
        </div>
 <div className="container-fluid content_vid ">

                                    <div className="content_item row">
                                        <div className=" content_text_side col-md-6 col-md-6 col-lg-5  ">
                                        <div className="text_head"
                                           data-aos="fade-up"
                                        data-aos-duration="1000"
                                        >
                                            <h5>WE GO BLACK</h5>
                                        </div>

                                        <div className="main_content">
                                            <h1
                                             data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay='100'
                                            >Powerful products for a</h1>
                                            <h2
                                             data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay='150'
                                            >great cause</h2>
                                            <p
                                             data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay='200'
                                            
                                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                        </div>

                                            <div className="button_side"
                                             data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay='250'
                                            >
                                            <Link to='/'>
                                             
                                                    More about our story<AiOutlineArrowRight/>
                                                  
                                                    </Link>
                                             
                                                </div>
                                                </div>


                                                <div className=" video_side col-md-6 col-md-6 col-lg-5  "
                                                 data-aos="zoom-in"
                                        data-aos-duration="1000"
                                        data-aos-delay='150'
                                                >
                                                    
                                                    <img src={VideoImage} alt="" />
                                                    <div className='line'></div>
                                                    <button> <BsPlayFill size={30} /> Play video</button>
                                                </div>
    </div>
   </div>

        <PowerfulFeature />
        <Footer />
    </header>
  
  )
}

export default HomeHeader