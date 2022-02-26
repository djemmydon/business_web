import React from 'react'
import { Link } from 'react-router-dom'
import './main_scss/footer.scss'
import  Logo from '../../src/svg/Logo.svg'


function Footer() {
  return (
    <footer className='footer container-fluid'>
        <div className="footer_content row justify-content-between">
            <div className="footer_myrage col-md-3">
                <div>
                <img src={Logo} alt="" />

                </div>
            <span>Lorem ipsum dolor sit amet consectetur adipiscin eli a sit facilisis volutpat interdum non a magna tempus amet velit dolor sit.</span>
            </div>

            <div className="footer_nav_sec col-md-6">
                {/* navbar_section 1 */}
                <div className="nav_sec_1">
                <ul>
                    <h3>Menu</h3>

                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            Pricing
                        </Link>
                    </li>
                </ul>
                </div>
                {/* end 1 */}

                {/* navbar_section 2 */}

                <div className="nav_sec_2">
                <ul>
                    
                    <h3>Support</h3>

                    <li>
                        <Link to='/'>Partner</Link>
                    </li>
                    <li>
                        <Link to='/'>Health Center</Link>
                    </li>
                    <li>
                        <Link to='/'>Support</Link>
                    </li>
                </ul>
                </div>
                {/*end 2 */}

                {/* navbar_section 3 */}

                <div className="nav_sec_3">
                    
                <ul>
                    <h3>Utility</h3>

                    <li>
                        <Link to='/'>Style Guide</Link>
                    </li>
                    <li>
                        <Link to='/'>Licence</Link>
                    </li>
                    <li>
                        <Link to='/'>Password Page</Link>
                    </li>
                    <li>
                        <Link to='/'>404 Page</Link>
                    </li>
                    <li>
                        <Link to='/'>Change Log</Link>
                    </li>
                </ul>
                </div>
                {/* end  3 */}

            </div>
        </div>
        <div className='container line'></div>

    </footer>
  )
}

export default Footer