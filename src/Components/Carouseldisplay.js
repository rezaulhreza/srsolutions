import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import "../Styles/Carouseldisplay.css"

class Carouseldisplay extends Component {
    render() {
        return (
            <div id='home' className="Carouseldisplay">
                <div className='container-fluid' >  
                    <Carousel indicators={false}>
                        <Carousel.Item className="Carouseldisplay-item" style={{'height':"85vh"}}>
                            <img style={{'height':"100%", 'filter':"brightness(15%)"}} alt="Carousel Display" className="d-block w-100" src='assets/img/1.jpg' />
                            <Carousel.Caption>
                                <h3 className='carousel-header'>What we do</h3>
                                <p className='carousel-info'>At <span className="hrparlour">SR Solutions </span>We provide integrated security solutions including manned guarding, mobile patrols, CCTV, security dog patrols and key holding.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="Carouseldisplay-item" style={{'height':"85vh"}}>
                            <img style={{'height':"100%", 'filter':"brightness(15%)"}} alt="Carousel Display" className="d-block w-100" src={'assets/img/2.jpg'} />
                            <Carousel.Caption>    
                                <h3 className='carousel-header'>Our Mission</h3>
                                <p className='carousel-info'><span className="hrparlour">SR Solutions</span> is committed to delivering the highest quality of services to our clients whilst creating a safe and stable working environment for our staff. We work towards the continuous development of our staff and procedures by training and support</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="Carouseldisplay-item" style={{'height':"85vh"}}>
                            <img style={{'height':"100%", 'filter':"brightness(15%)"}} alt="Carousel Display" className="d-block w-100" src={'assets/img/3.jpg'} />
                            <Carousel.Caption>    
                                <h3 className='carousel-header'>Cover every angle</h3>
                                <p className='carousel-info'>
Security solutions to suit your business.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>  
            </div>
        )
    }
}
export default Carouseldisplay
