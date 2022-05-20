import React from "react";
import { Container, Row, Col } from "reactstrap";

const Service = () => {
  const services = [
    {
      img: "https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1642552296/meet_the_team_97_axbzpc.png",
      name: "Mr. 97",
      role: "CEO",
    },
    {
      img: "https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1642552298/meet_the_team_heidi_ycii3j.png",
      name: "Heidi Kun",
      role: "Manga Artist"
    },
    {
      img: "https://avatars.githubusercontent.com/u/42776703?s=400&u=3108ae3a708ef0219e72e93e9f5788ed3813b8d4&v=4",
      name: "Farmer Tune",
      role: "Lead Developer"
    },
    {
      img: "https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1643112783/42776703_oy1rsb.png",
      name: "Krishna Kothari",
      role: "Animator"
    }
  ];

  return (
    <section className="section" id="service">
       { 
              services.map(service =>   
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div className="title text-center mb-5">
              <img
                width={250}
                alt="Avatar"
                style={{ borderRadius: "50%" }}                
                facebook-id="invalidfacebookusername"
                src={service.img}          
              />
              <h3 className="font-weight-normal text-dark">
                <span className="text-warning">{service.name}</span>
              </h3>
              <p>
                <h4 className="text-primary font-weight-normal text-dark">
                  {service.role}
                </h4>
      
              </p>
            </div>
          </Col>
        </Row>
       
      </Container>
        )
}
    </section>
  );
};

export default Service;
