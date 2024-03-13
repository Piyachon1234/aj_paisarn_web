import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player';
import { Container, Row, Col, Button } from "react-bootstrap"; // Import Button component from react-bootstrap
import { listOfCctv } from "../data/listOfCctv";
import axios from "axios";

const DisplayCctv = () => {
    const { slug } = useParams();
    const cctvDetail = listOfCctv.find(cctv => cctv.slug === slug);
    const imgSlug = "c17-futsat-court-right-keyframe-1";
    const [cctv, setCctv] = useState([]);
    const [selectedImage, setSelectedImage] = useState(imgSlug); // State to track the selected image

    useEffect(() => {
        axios.get('/api/cctv')
            .then((response) => setCctv(response.data))
            .catch((error) => console.log(error))
    }, [cctv]);

    const handleImageChange = (newImgSlug) => {
        setSelectedImage(newImgSlug);
    };

    return (
        <Container className="my-5">
            <Row>
                <Col md={8}>
                    <h2 className="col-topic">{cctvDetail.name} {cctvDetail.location}</h2>
                    {/* Display the selected image */}
                    <img src={`/images/${selectedImage}.jpg`} alt="Selected Image" style={{ width: '100%', height: 'auto' }} />
                </Col>
                <Col md={4}>
                    <h3 className="col-topic mb-4">Choose Image</h3>
                    <div>
                        {/* Map through the list of images and create a button for each */}
                        {listOfCctv.map((item, index) => (
                            <Button key={index} variant="outline-primary" className="mb-2" onClick={() => handleImageChange(item.slug)}>
                                {item.name}
                            </Button>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Keyframe;
