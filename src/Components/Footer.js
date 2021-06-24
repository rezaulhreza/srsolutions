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
                            Developed by WebMetriks||Rezaul H Reza
                        </span>
                        </section>
                    <div className='Footer-verticalline'>
                    </div>
                    <div className='Footer-contact'>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='tel:+919967574687'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Telephone' src='assets/svg/phone.svg' /></a> <a href='tel:+919967574687'>+447960095662</a></span>
                        <span className="Footer-contact-links"><a className="Footer-contact-svg" href='mailto:contact@hrparlour.com'><img style={{filter: 'invert(1)',height: '1rem',width: '1rem'}} alt='Mail' src='assets/svg/mail.svg' /></a> <a href='mailto:contact@hrparlour.com'>srsolutionsltd.uk@gmail.com</a></span>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer