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
                                <h3 className='carousel-header'>Title 1 </h3>
                                <p className='carousel-info'>At <span className="hrparlour">SR Solutions</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, magnam..</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="Carouseldisplay-item" style={{'height':"85vh"}}>
                            <img style={{'height':"100%", 'filter':"brightness(15%)"}} alt="Carousel Display" className="d-block w-100" src={'assets/img/2.jpg'} />
                            <Carousel.Caption>    
                                <h3 className='carousel-header'>Title 2</h3>
                                <p className='carousel-info'>Focused in best security services</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="Carouseldisplay-item" style={{'height':"85vh"}}>
                            <img style={{'height':"100%", 'filter':"brightness(15%)"}} alt="Carousel Display" className="d-block w-100" src={'assets/img/3.jpg'} />
                            <Carousel.Caption>    
                                <h3 className='carousel-header'>100% Satisfication</h3>
                                <p className='carousel-info'>Lorem ipsum dolor sit amet consectetur adipisicing. At <span className="hrparlour">SR Solutions</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, aspernatur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>  
            </div>
        )
    }
}
export default Carouseldisplay
