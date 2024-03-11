import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import { Container, Row, Col } from "react-bootstrap";
import { listOfCctv } from "../data/listOfCctv";
import axios from "axios";

const DisplayCctv = () => {
    const { slug } = useParams();
    const cctvDetail = listOfCctv.find(cctv => cctv.slug === slug);
    const imgSlug="c17-futsat-court-right-keyframe-1"
    const [cctv, setCctv] = useState([]);

    useEffect(() => {
        axios.get('/api/cctv')
        .then((response) => setCctv(response.data))
        .catch((error) => console.log(error))
    },[cctv]);

    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <h2 className="col-topic">{cctvDetail.name} {cctvDetail.location}</h2>
                    <ReactPlayer url={cctvDetail.cctv_url}
                                width='100%'
                                height='100%'
                                controls={true}
                                playing={true}
                                muted={true}
                                loop={true}
                            />
                </Col>
                <Col md={4}>
                    <h3 className="col-topic mb-4">วัตถุที่พบ</h3>
                    <div style={{ maxHeight: "450px", overflowY: "auto" }}>
                        <Row>
                            <p class="text"><Link to={`/keyframe/${imgSlug}`} style={{ color: 'black',textDecoration: 'none' }}>ปืน 0.99</Link></p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>
                        <Row>
                            <p>,,</p>
                        </Row>

                    </div>

                </Col>
            </Row>
        </Container>
    )

}

export default DisplayCctv;