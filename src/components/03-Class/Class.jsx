import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { Container, Button, Card, Row, Col } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

import off1 from "../../assets/classes/asanas/13.png";
import off2 from "../../assets/classes/asanas/12.png";
import off3 from "../../assets/classes/asanas/11.png";
import off4 from "../../assets/classes/asanas/10.png";
import off5 from "../../assets/classes/asanas/9.png";
import off6 from "../../assets/classes/asanas/8.png";
import off7 from "../../assets/classes/asanas/7.png";
import off8 from "../../assets/classes/asanas/6.png";
import off9 from "../../assets/classes/asanas/5.png";
import off10 from "../../assets/classes/asanas/4.png";
import off11 from "../../assets/classes/asanas/3.png";
import off12 from "../../assets/classes/asanas/2.png";
import off13 from "../../assets/classes/asanas/1.png";

import timing from "../../assets/schedules/class.jpeg";
import fee from "../../assets/schedules/fee.jpeg";

import "./Class.css";

export default function Class() {
  const navigate = useNavigate();
  const cardData = [
    {
      id: 1,
      url: "https://via.placeholder.com/100",
      title: "Kids Yoga",
      description:
        "Yoga designed specifically for children to improve flexibility and focus.",
      buttonText: "Join Now",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/100",
      title: "Ladies Yoga",
      description: "Strength-building yoga sessions tailored for women.",
      buttonText: "Join Now",
    },
    {
      id: 3,
      url: "https://via.placeholder.com/100",
      title: "Unisex Yoga",
      description:
        "A mixed yoga class for all to promote calmness and balance.",
      buttonText: "Join Now",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/100",
      title: "Senior Citizen Yoga",
      description:
        "Gentle yoga for seniors focusing on relaxation and well-being.",
      buttonText: "Join Now",
    },
    {
      id: 5,
      url: "https://via.placeholder.com/100",
      title: "Pregnancy Yoga",
      description:
        "Yoga sessions to support the physical and mental health of expecting mothers.",
      buttonText: "Join Now",
    },
    {
      id: 6,
      url: "https://via.placeholder.com/100",
      title: "Meditation Sessions",
      description: "Mindfulness and meditation practices to reduce stress.",
      buttonText: "Join Now",
    },
    {
      id: 7,
      url: "https://via.placeholder.com/100",
      title: "Pranayama",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
  ];

  const cardData2 = [
    {
      id: 1,
      url: "https://via.placeholder.com/100",
      title: "Preparatory Movements – Warmups",
      description:
        "Yoga designed specifically for children to improve flexibility and focus.",
      buttonText: "Join Now",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/100",
      title: "Surya Namaskar",
      description: "Strength-building yoga sessions tailored for women.",
      buttonText: "Join Now",
    },
    {
      id: 3,
      url: "https://via.placeholder.com/100",
      title: "Chandra Namaskar",
      description:
        "A mixed yoga class for all to promote calmness and balance.",
      buttonText: "Join Now",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/100",
      title: "Modification of Surya Namaskar",
      description:
        "Gentle yoga for seniors focusing on relaxation and well-being.",
      buttonText: "Join Now",
    },
    {
      id: 5,
      url: "https://via.placeholder.com/100",
      title: "Cardio Surya Namaskar",
      description:
        "Yoga sessions to support the physical and mental health of expecting mothers.",
      buttonText: "Join Now",
    },
    {
      id: 6,
      url: "https://via.placeholder.com/100",
      title: "Vinyasa Flow",
      description: "Mindfulness and meditation practices to reduce stress.",
      buttonText: "Join Now",
    },
    {
      id: 7,
      url: "https://via.placeholder.com/100",
      title: "Power Yoga",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
    {
      id: 8,
      url: "https://via.placeholder.com/100",
      title: "Asanas – Sitting/Standing/Prone",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
    {
      id: 9,
      url: "https://via.placeholder.com/100",
      title: "Kriyas",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
    {
      id: 10,
      url: "https://via.placeholder.com/100",
      title: "Bandham",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
    {
      id: 11,
      url: "https://via.placeholder.com/100",
      title: "Pranayama",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
    {
      id: 12,
      url: "https://via.placeholder.com/100",
      title: "Meditation",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
    {
      id: 13,
      url: "https://via.placeholder.com/100",
      title: "Relaxation",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
    {
      id: 14,
      url: "https://via.placeholder.com/100",
      title: "Yoga Nidra",
      description: "Breathing exercises that improve energy flow and focus.",
      buttonText: "Join Now",
    },
  ];
  const handleButtonClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="ourClassesWeOffered">
        <div className="offeredCont">
          <h3>Our Classes</h3>
          <Container>
            <Row className="gy-4 col-lg-7" style={{ justifyContent: "center" }}>
              {cardData.map((card) => (
                <Col
                  lg={4}
                  md={6}
                  key={card.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    style={{
                      width: "19rem",
                      height: "16rem",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={card.url}
                      style={{
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title>{card.title}</Card.Title>
                      <Button variant="primary" onClick={handleButtonClick}>
                        {card.buttonText}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>

      <Container className="classDetails mt-5 p-5">
        <div className="classContents col-lg-7 mt-5">
          <h3>Workshops</h3>
          <p>
            We provide a few extra yoga workshops which are aimed at
            strengthening your practice and broadening your skills and
            knowledge. Our workshops include topics covering advanced asanas,
            meditation, face yoga and yoga for specific ailments. The sessions
            are very focused and intense, thus suitable for anyone willing to
            take their yoga journey to the next level. Sign up for a workshop
            and elevate the level of your practice!{" "}
          </p>
        </div>
        <Row
          className="gy-4 col-lg-10 mt-3"
          style={{ justifyContent: "center" }}
        >
          <Col lg={3} md={6}>
            <div className="service-item position-relative">
              <h3>Meditation</h3>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item position-relative">
              <h3>Face Yoga</h3>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="service-item position-relative">
              <h3>Yoga for Specific Ailments</h3>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="whatWeCover">
        <h2>What We Cover In Our Sessions</h2>
        <Container>
          <Row className="gy-4 col-lg-10" style={{ justifyContent: "center" }}>
            {cardData2.map((card) => (
              <Col
                lg={3}
                md={6}
                key={card.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card
                  data-aos="flip-left"
                  data-aos-delay="100"
                  style={{
                    width: "19rem",
                    height: "14rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={card.url}
                    style={{
                      height: "150px",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title>{card.title}</Card.Title>
                    {/* <Button variant="primary" onClick={handleButtonClick}>
                      {card.buttonText}
                    </Button> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="feeStructure">
        <h3>Class Schedules & Fee Structure</h3>
        <h5 className="col-lg-8">
          Check out our class timings and fees structure to find the perfect fit
          for your schedule and budget.
        </h5>

        <Row>
          <Col lg={6} className="contentss">
            <h4>Class Schedules</h4>
            <div className="image">
              <img src={timing} alt="schedule" width="500px" />
            </div>
          </Col>
          <Col lg={6} className="contentss">
            <h4>Fee Structure</h4>
            <div className="image">
              <img src={fee} alt="fee" width="500px" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["55%", "-95%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh]"
      style={{ marginTop: "-890px" }}
    >
      <div className="sticky top-0 flex h-screen contentBox items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Cards card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Cards = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[350px] w-[350px] overflow-hidden bg-neutral-200"
      style={{ borderRadius: "15px" }}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #0000004a",
          borderRadius: "15px",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

const cards = [
  {
    url: off1,
    title: "Preparatory Movements – Warmups",
    id: 1,
  },
  {
    url: off2,
    title: "Chandra Namaskar",
    id: 2,
  },
  {
    url: off3,
    title: "Cardio Surya Namaskar",
    id: 3,
  },
  {
    url: off4,
    title: "Power Yoga",
    id: 4,
  },
  {
    url: off5,
    title: "Bandham",
    id: 5,
  },
  {
    url: off6,
    title: "Meditation",
    id: 6,
  },
  {
    url: off7,
    title: "Yoga Nidra",
    id: 7,
  },
  {
    url: off8,
    title: "Surya Namaskar",
    id: 8,
  },
  {
    url: off9,
    title: "Title 3",
    id: 9,
  },
  {
    url: off10,
    title: "Title 4",
    id: 10,
  },
  {
    url: off11,
    title: "Title 5",
    id: 11,
  },
  {
    url: off12,
    title: "Title 6",
    id: 12,
  },
  {
    url: off13,
    title: "Title 6",
    id: 13,
  },
];

Cards.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
