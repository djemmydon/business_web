import React from 'react'
import './main_scss/powerful.scss'
import Icon1 from '../../src/svg/icon1.svg'
import Icon2 from '../../src/svg/icon2.svg'
import Icon3 from '../../src/svg/icon3.svg'
import Icon4 from '../../src/svg/icon4.svg'
import Icon5 from '../../src/svg/icon5.svg'
import Icon6 from '../../src/svg/icon6.svg'
import left  from '../../src/svg/lines_left.svg'
import right from '../../src/svg/lines_right.svg'


function PowerfulFeature() {
  return (
    <article className='feature_article'>
        <div className="feature contaimer-fluid">
            <div className="feature_first_content container">
                <div className="feature_item">
                  <img src={Icon1} alt="" />

                    <h2>Data Collection</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.</p>
                </div>
                <div className="feature_item">
                    <img src={Icon2} alt="" />

                    <h2>Face Recognition</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.</p>
                </div>
                <div className="feature_item">
                    <img src={Icon3}  alt="" />

                    <h2>Misinformation</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.</p>
                </div>
            </div>


    
            
            <div className="feature_second_content container">
                <div className="feature_item2">
                    <div className="img_title">
                        
                  <img src={Icon4} alt="" />
                    <h2> Saving Option</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.</p>
                </div>
                <div className="feature_item2">
                    <div className="img_title">
                        
                  <img src={Icon5} alt="" />
                    <h2>Advanced Communication</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.</p>
                </div>
                <div className="feature_item2">
                    <div className="img_title">
                        
                  <img src={Icon6} alt="" />
                    <h2>Media Support</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi accumsan cras laoreet.</p>
                </div>
    </div>
        </div>

        

        <div className="schedule_demo container">
          <div className="header_sd">
                  <img src={left} alt="" />
                  <h2>Schedule Demo</h2>
                  <img src={right} alt="" />

          
          </div>

          <div className="text_sd">
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil q Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, provident.</p>
            <a href="" alt=''>
              <button>BOOK A DEMO</button>
            </a>
          </div>
        </div>
        </article>
  )
}

export default PowerfulFeature