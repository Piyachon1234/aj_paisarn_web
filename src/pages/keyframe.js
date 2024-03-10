import React from "react";
import { Container, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";

const Keyframe = () => {
  const { slug } = useParams();
  let navigate = useNavigate();
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
  );
} 

export default Keyframe;