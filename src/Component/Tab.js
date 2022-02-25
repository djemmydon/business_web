import React, {useState} from 'react'

import '../Component/main_scss/tabs.scss'
import  Fancy1 from '../../src/images/fancy_section_1.png'
import  Fancy2 from '../../src/images/fancy_section_2.png'
import  Fancy3 from '../../src/images/fancy_section_3.png'



function Tab() {
const [toggle, setToggle] = useState(1)

const onTogling =(index) => {

       setToggle(index)
}

 
  return (


    <div className='tab '>

    <div className="content_pane container">
        <div  className={toggle === 1 ? 'content_item content_active' : 'content_item'}>
           

                                    <div className="header_item ">
                                        <div className=" text_side">
                                        <div className="text_head">
                                            <h5>FOR DEVS TEAMS</h5>
                                        </div>

                                        <div className="main_content">
                                            <h1>This is a special</h1>
                                            <h2>Benefit for Devs</h2>
                                            <p>Get your customers’ touch points in one single place across all platforms and channels.</p>
                                        </div>

                                           
                                                </div>


                                                <div className=" image_side">
                                                    <img src={Fancy1} alt="" />
                                                 
                                                </div>
   
   </div>
        </div>
        <div className={toggle === 2 ? 'content_item content_active' : 'content_item'}>
   

                                    <div className="header_item ">
                                        <div className=" text_side">
                                        <div className="text_head">
                                            <h5>ULTRA-FAST RESULTS</h5>
                                        </div>

                                        <div className="main_content">
                                            <h1>Get amazed by Powerful</h1>
                                            <h2>Results</h2>
                                            <p>Get your customers’ touch points in one single place
across all platforms and channels.</p>
                                        </div>

                                           
                                                </div>


                                                <div className=" image_side">
                                                    <img src={Fancy2} alt="" />
                                                </div>
    </div>
   </div>
   

        <div className={toggle === 3 ? 'content_item content_active' : 'content_item'}>
          

                                    <div className="header_item ">
                                        <div className=" text_side">
                                        <div className="text_head">
                                            <h5>WIDE ACTIVATIONS</h5>
                                        </div>

                                        <div className="main_content">
                                            <h1>Work great with your</h1>
                                            <h2>team seamlessly</h2>
                                            <p>Get your customers’ touch points in one single place across all platforms and channels.</p>
                                        </div>

                                           
                                                </div>


                                                <div className=" image_side">
                                                    <img src={Fancy3} alt="" />
                                                  
                                                </div>
    </div>
   </div>
        </div>

        <div className="navigation">
            <ul>
                <li className={toggle === 1 ? 'active_tab' : 'tab'} onClick={() => onTogling(1)}>Devs Features</li>
                <li  className={toggle === 2 ? 'active_tab' : 'tab'} onClick={() => onTogling(2)}>Real-Time Results</li>
                <li className={toggle === 3 ? 'active_tab' : 'tab'} onClick={() => onTogling(3)}>Multiple Activations</li>
            </ul>
        </div>


    </div>
  
  )
}

export default Tab