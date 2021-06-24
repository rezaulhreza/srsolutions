import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import '../Styles/Clients.css'

class Clients extends Component {
    render() {
        return (
            <div id='clients' className="Clients">
                <h1 className="Clients-header">OUR CLIENTS</h1>
                <div className='Clients-list'>
                    <ul className='Clients-list-ul'>
                        <li className='Clients-list-li'><a href='https://www.kent.ac.uk/' target='_blank' rel='noopener noreferrer'>University of Kent</a></li>
                        <li className='Clients-list-li'><a href='https://www.zeoslondon.co.uk/' target='_blank' rel='noopener noreferrer'>Zeo's</a></li>
                        <li className='Clients-list-li'><a href='#' target='_blank' rel='noopener noreferrer'>The Chaucer Centre</a></li>
                        <li className='Clients-list-li'><a href='https://www.savills.co.uk/' target='_blank' rel='noopener noreferrer'>Savills</a></li>
                        <li className='Clients-list-li'><a href='#' target='_blank' rel='noopener noreferrer'>E1 studio</a></li>
                        <li className='Clients-list-li'><a href='https://goo.gl/maps/WBvjg1WNJvKhvPEy9' target='_blank' rel='noopener noreferrer'>Goswell Road Data Centre</a></li>
                       
                        <li className='Clients-list-li'><a href='https://www.vinciconstruction.co.uk/' target='_blank' rel='noopener noreferrer'>Vinci Construction UK</a></li>
                        <li className='Clients-list-li'><a href='#' target='_blank' rel='noopener noreferrer'>Etc</a></li>
                    </ul>
                </div>
                {/* <ListGroup className="Clients-listgroup">
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg' alt="companies" src='assets/svg/companies.svg' /> COLLABORATION WITH 20+ COMPANIES</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg' alt='corporates' src='assets/svg/corporates.svg' /> COLLABORATION WITH 8+ CORPORATES</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg' alt='training courses' src='assets/svg/teaching.svg' /> COLLABORATION WITH 10+ TRAINING COURSES</ListGroup.Item>
                    <ListGroup.Item className='Clients-listgroup-item'><img className='Clients-svg' alt='freelancers' src='assets/svg/freelancers.svg'/> COLLABORATION WITH 25+ FREELANCING HR EXECUTIVES</ListGroup.Item>
                </ListGroup> */}
            </div>
        )
    }
}
export default Clients