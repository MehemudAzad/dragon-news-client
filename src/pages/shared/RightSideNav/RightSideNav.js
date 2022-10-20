import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaTwitter, FaWhatsapp, FaTwitch, FaFacebook } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>{' '}
                <Button variant="outline-dark"><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
            <div>
                <h5 className='m-2'>Find us on</h5>
                <ListGroup className='mt-4'>
                <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whats App</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                <ListGroup.Item className='mb-2'>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
            </div>
            <BrandCarousel></BrandCarousel>
        </div>
    );
};

export default RightSideNav;