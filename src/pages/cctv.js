import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import axios from "axios";

const DisplayCctv = () => {
    const { slug } = useParams();
    const [cctvDetail, setCctvDetail] = useState({});
    const [keyframes, setKeyframes] = useState([]);

    useEffect(() => {
        // Fetch CCTV detail
        axios.get(`/api/cctv/${slug}`)
            .then((response) => {
                setCctvDetail(response.data);
                // Fetch keyframes related to the CCTV
                axios.get(`/api/cctv/${slug}/keyframes`)
                    .then((keyframesResponse) => setKeyframes(keyframesResponse.data))
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    }, [slug]);

    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <h2 className="col-topic">{cctvDetail.name} {cctvDetail.location}</h2>
                    {/* Display the CCTV feed */}
                    <video controls width="100%" height="auto">
                        <source src={cctvDetail.cctv_url} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
                <Col md={4}>
                    <h3 className="col-topic mb-4">Keyframes</h3>
                    <div style={{ maxHeight: "450px", overflowY: "auto", overflowX: "hidden" }}>
                        {/* Display keyframes */}
                        {keyframes.map((keyframe, index) => (
                            <Row key={index} className="mb-3">
                                <Link to={`/keyframe/${keyframe.slug}`} style={{ color: 'black', textDecoration: 'none' }}>
                                    <Image src={keyframe.url} alt={`Keyframe ${index}`} fluid />
                                    <p className="text">{keyframe.description}</p>
                                </Link>
                            </Row>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DisplayCctv;
