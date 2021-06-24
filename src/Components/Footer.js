import React, { Component } from 'react'
import '../Styles/Footer.css'

class Footer extends Component {
    getYear() {
        return new Date().getFullYear();
    }
    render() {
        return (
            <footer className='Footer'>
                <div className='Footer-span'>
                </div>
                <div className='Footer-content'>
                    <section>
                        <h5 className='Footer-content-logo'>SR Solutions</h5>
                        <p className='Footer-content-info'>An excellent security services provider &copy;{this.getYear()} SR SOlutions</p>
                        <span className="Footer-quotation">
                        <a href="https://www.linkedin.com/in/rezaulhreza">  Developed by WebMetriks||Rezaul H Reza</a> 
                        </span>
                        </section>
                    <div className='Footer-verticalline'>
                    </div>
                    <div className='Footer-contact'>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='tel:+44760095662'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Telephone' src='assets/svg/phone.svg' /></a> <a href='tel:+447960095662'>+447421539156</a></span>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='tel:+44760095662'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Telephone' src='assets/svg/phone.svg' /></a> <a href='tel:+447960095662'>+447960095662</a></span>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='mailto:contact@hrparlour.com'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Mail' src='assets/svg/mail.svg' /></a> <a href='mailto:srsolutionsltd.uk@gmail.com'>srsolutionsltd.uk@gmail.com</a></span>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='https://goo.gl/maps/1P25G8r8U3t4Xw1S9'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Telephone' src='assets/svg/address.svg' />2 Eastern Avenue, TN23 1LR,Ashford, Kent, UK.</a>
                            
                            </span>
                            
                   </div>
                </div>
            </footer>
        )
    }
}
export default Footer