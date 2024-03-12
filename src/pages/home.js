import React, { useEffect,  useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Clock from 'react-live-clock';
import CctvCard from '../Components/cctv_card'; 
import { listOfCctv } from "../data/listOfCctv.js";
import axios from "axios";

const Home = () => {
    const [cctv, setCctv] = useState([]);

    useEffect(() => {
        axios.get('/api/cctv')
        .then((response) => setCctv(response.data))
        .catch((error) => console.log(error))
    },[cctv]);
    
    return (
        <Container> 
                <Clock className="topic" format={'dddd, MMMM Do, YYYY, HH:mm:ss'} timezone={'Asia/Bangkok'} ticking={true}/>
                <Row>
                    <Col className='col-topic'>CCTV</Col>
                    <Col className='col-topic'>อาวุธที่พบ</Col>
                    <Col className='col-topic'>ตำแหน่ง</Col>
                </Row>
                {listOfCctv.map((cctv) => {
                    return <CctvCard 
                    name={cctv.name} 
                    cctv_url={cctv.cctv_url} 
                    location={cctv.location}
                    slug={cctv.slug} />
                })}
        </Container>
    );
};

export default Home;
