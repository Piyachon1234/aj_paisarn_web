import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";

const CctvCard = ({name, cctv_url, location, slug}) => {
    return (
        <Card className='my-3'>
            <Card.Body>
                <Card.Title><Link to={`/cctv/${slug}`} style={{ color: 'black',textDecoration: 'none' }}>{name}</Link></Card.Title>
                <Row>
                    <Col><ReactPlayer url={cctv_url}
                        width='100%'
                        height='100%'
                        // controls={true}
                        playing={true}
                        muted={true}
                        loop={true}
                    /></Col>
                    <Col>ll</Col>
                    <Col className='text'>{location}</Col>
                </Row>
                
            </Card.Body>
        </Card>
    );
}

export default CctvCard