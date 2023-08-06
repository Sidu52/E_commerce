import React from 'react';
import './Footer.scss';
import Logo from '../../assets/logo/logo.png';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_link_container'>
                <div className='footer_link'>
                    <h4>Get to Know Us</h4>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Releases</p>
                    <p>Amazon Science</p>
                </div>
                <div className='footer_link'>
                    <h4>Connect with Us</h4>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div className='footer_link'>
                    <h4>Make Money with Us</h4>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon Accelerator</p>
                    <p>Protect and Build Your Brand</p>
                    <p>Amazon Global Selling</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>
                <div className='footer_link'>
                    <h4>Let Us Help You</h4>
                    <p>Covid-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Center</p>
                    <p>100% Purchase Protection</p>
                    <p>Amazon App Download</p>
                    <p>Help</p>
                </div>
            </div>
            <hr />
            <div className="footer_language_container">
                <div className='logo'>
                    <img src={Logo} />
                    <div className="dropdown">ss</div>
                </div>
                <div className="language">
                    <p>Australia</p>
                    <p>Brazil</p>
                    <p>Canada</p>
                    <p>China</p>
                    <p>France</p>
                    <p>Germany</p>
                    <p>ltaly</p>
                    <p>Japan</p>
                    <p>Mexico</p>
                    <p>Netherlands</p>
                    <p>Poland</p>
                    <p>Singapore</p>
                    <p>Spain</p>
                    <p>Turkey</p>
                    <p>United Arab Emirates</p>
                    <p>United Kingdom</p>
                    <p>United States</p>

                </div>
            </div>
            <div className="footer_bottom">
                <span>
                    <p>Conditions of Use & Sale</p>
                    <p>Privacy Notice</p>
                    <p>Interest-Based Ads</p>
                </span>
                <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
            </div>

        </footer>
    )
}
