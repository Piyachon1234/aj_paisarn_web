import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Clock from 'react-live-clock';
import CctvCard from '../Components/cctv_card'; 

const listOfCctv = [
    {
        name: 'C17',
        cctv_url: 'https://rtmp.smartway.co.th/hls/smarteye595.m3u8',
        location: 'สนามฟุตซอลมุมขวา',
        slug: 'c17-futsal-court-right'
    },
    {
        name: 'C15',
        cctv_url: 'https://rtmp.smartway.co.th/hls/smarteye566.m3u8',
        location: 'สนามฟุตซอลมุมซ้าย',
        slug: 'c17-futsal-court-left'
    },
    {
        name: 'C6',
        cctv_url: 'https://rtmp.smartway.co.th/hls/smarteye591.m3u8',
        location: 'สนามฟุตบอลฝั่งอาคาร 1',
        slug: 'c17-futsal-court-building-1'
    },
]

const Home = () => {
    return (
        <Container> 
                <Clock className="topic" format={'dddd, MMMM Do, YYYY, HH:mm:ss'} timezone={'Asia/Bangkok'} ticking={true}/>
                <Row>
                    <Col className='col-topic'>CCTV</Col>
                    <Col className='col-topic'>วัตถุที่พบ</Col>
                    <Col className='col-topic'>ตำแหน่ง</Col>
                </Row>
                {listOfCctv.map((cctv, index) => {
                    return <CctvCard 
                    key={index} 
                    name={cctv.name} 
                    cctv_url={cctv.cctv_url} 
                    location={cctv.location}
                    slug={cctv.slug} />
                })}
        </Container>
    );
};

export default Home;
