import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import PropTypes from "prop-types";

import Picture1 from "../../assets/logo/logo.png";
import Picture2 from "../../assets/classes/kids.png";
import Picture3 from "../../assets/classes/ladies.png";
import Picture4 from "../../assets/classes/unisex.png";
import Picture5 from "../../assets/classes/senior.png";
import Picture6 from "../../assets/classes/pregnancy.png";
import Picture7 from "../../assets/classes/pranayama.png";

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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: Picture1, scale: scale4 },
    { src: Picture2, scale: scale5 },
    { src: Picture3, scale: scale6 },
    { src: Picture4, scale: scale5 },
    { src: Picture5, scale: scale6 },
    { src: Picture6, scale: scale8 },
    { src: Picture7, scale: scale9 },
  ];

  return (
    <div>
      <div ref={container} className="containers">
        <div className="sticky">
          {pictures.map(({ src, scale }, index) => (
            <motion.div key={index} style={{ scale }} className="el">
              <div className="imageContainer">
                <img src={src} alt={`image ${index + 1}`} className="image" />
              </div>
            </motion.div>
          ))}
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

      <HorizontalScrollCarousel />

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
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
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
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
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

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
