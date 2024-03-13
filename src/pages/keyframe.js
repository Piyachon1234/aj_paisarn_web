import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap"; // Import Button component from react-bootstrap
import { listOfCctv } from "../data/listOfCctv";
import axios from "axios";

const Keyframe = () => {
    const { slug } = useParams();
    const cctvDetail = listOfCctv.find(cctv => cctv.slug === slug);
    let navigate = useNavigate();
    const imgSlug = "c17-futsat-court-right-keyframe-1";
    // const [cctv, setCctv] = useState([]);
    // const [selectedImage, setSelectedImage] = useState(imgSlug); // State to track the selected image

    // useEffect(() => {
    //     axios.get('/api/cctv')
    //         .then((response) => setCctv(response.data))
    //         .catch((error) => console.log(error))
    // }, [cctv]);

    // const handleImageChange = (newImgSlug) => {
    //     setSelectedImage(newImgSlug);
    // };

    return (
        <Container>
            <Button onClick={() => navigate(-1)} className="my-3">กลับ</Button>
            <h1 className="topic" >{slug}</h1>
            <img 
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
            />
            <h3 className="col-topic my-3">วัตถุที่พบ</h3>
        </Container>
    )
}

export default Keyframe;
