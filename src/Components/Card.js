import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import '../Styles/Card.css'
import '../Styles/Clients.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Card extends Component {
    render() {
        return (
            <div id='about' className="Card">
                <div className="Card-desc">
                <h1 className="Card-desc-header">
                        Who we are
                    </h1>
                    <p className="Card-desc-info">
                        <p><span className="hrparlour">SR Solutions</span>, is a London based security services provider</p>.
                        <p>We work with our clients to ensure their security and protection meets a level where it protects the people, places, premises, venues and properties with the very best services.</p>
                        <ListGroup className="Clients-listgroup">
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg icon' alt="companies" src='assets/svg/staff.svg' /> 200+ Highly trained employees with Great Customer Services</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg icon' alt='corporates' src='assets/svg/client.svg' /> 19 Clients this year</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg icon' alt='training courses' src='assets/svg/coms.svg' /> 24/7 communication centre</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg icon' alt='freelancers' src='assets/svg/quality.svg'/> 5+ Years of quality services</ListGroup.Item>
                      {/* <ListGroup.Item className='Clients-listgroup-item'><FontAwesomeIcon icon="fa-solid fa-clipboard-user" />200+ Highly trained employees with Great Customer Services</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'>19 Clients this year </ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'>24/7 communication centre</ListGroup.Item> */}
                </ListGroup>

                <FontAwesomeIcon icon="fa-solid fa-clipboard-user" />
                        
                    </p>

                    <h1 className="Card-desc-header">
                        SERVICES
                    </h1>
                    
                    <p className="Card-desc-info">
                        <p>At <span className="hrparlour">SR Solutions</span>, we provide a range of facilities and services to our clients</p>.
                        
                        <li>CONSTRUCTION SITE SECURITY</li>
                        <li>VACANT PROPERTY SECURITY</li>
                        <li>FRONT OF HOUSE RECEPTION</li>
                        <li>EVENT SECURITY</li>
                        <li>FIRE MARSHAL</li>
                        <li>CCTV Monitoring</li>
                    </p>
                </div>
                <div className="actualCard">
                    <div className="actualCard-card">
                        <div className="card-logo">
                            <img className="svg-icn" style={{height: '5rem', width: '5rem'}} alt="Fastest Growing Recruitment" src="assets/svg/events.svg" />
                        </div>
                        <h1 className="card-title"><strong>Event Security</strong> Services</h1>
                        <p className="card-desc">At SR SOLUTIONS, we understand that our team of professionals are the first point of contact for many people at events. That's why,we always work hard to create a friendly environment and welcoming atmosphere for your customers or clients. We also aim to collaborate with the organisers of each event to ensure we create something special that people will remember.

We have substantial experience in providing security services including crowd management to the events industry. The depth of our experience covers sporting events, conferences and exhibitions, music events as well as various community events.

Our vast experience means we are able to provide services to many of the UK’s leading events and venues. In addition, we are able to offer a flexible services and a <strong>SR-SOLUTION</strong> by combining the other security services offered by us. This ensures a consistent, cost effective and efficient solution that will impress your customers.</p>
                    </div>
                    <div className="actualCard-card">
                        <div className="card-logo">
                            <img className="svg-icn" style={{height: '5rem', width: '5rem'}} alt="Fastest Growing Recruitment" src="assets/svg/cctv.svg" />
                        </div>
                        <h1 className="card-title">Corporates and Industrial</h1>
                        <p className="card-desc">Both corporates and industrials can come in many different forms. They are usually divided by the differing regulatory environments and cultures they operate in. Therefore, in the dynamic, turbulent environment that corporates and industrials operate in, delivering an effective FM solution can be problematic.

At <strong>SR Solutions</strong>, we have extensive experience in providing cleaning, security, facilities management and a range of other services in this s sector. We therefore are able to offer an enhanced FM solution which draws upon our global experience, designed to help you achieve your goals. We understand that importance of securing the working environment to protect yourassets and reputations.

We understand that each business is different which is why we can design a solution to meet your individual budget and needs. Our collaborative yet pragmatic approach to developing a flexible solution utilizes best practices as well as creative thinking from around the globe. This is aimed at delivering excellent service, productivity and value for your organization. Furthermore, as our partnership develops, we are able to develop a plan which outlines future improvements and savings as the contract develops.</p>
                    </div>
                    <div className="actualCard-card">
                        <div className="card-logo">
                            <img className="svg-icn" style={{height: '5rem', width: '5rem'}} alt="Fastest Growing Recruitment" src="assets/svg/knights.svg" />
                        </div>
                        <h1 className="card-title">Leisure & Tourism</h1>
                        <p className="card-desc">Leisure and tourism is very important to the British economy. London is said to be one of the most visited cities in the world, with many of its events attracting numbers in the millions.

Our professional team has experience with many events. Recently, we have been a proud participant of managing security services for 'Hotel Quarantine' introduced by the UK Government. Our team ensures that the clients are happy with their needs and protection. We are also able to provide services for one off events as well as individual security solutions.

Our services are designed to provide clients with a first class experience that meets individual needs and budgets. We want your customers to have a memorable experience that they will never forget.</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card
