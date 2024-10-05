import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import PropTypes from "prop-types";

import Picture1 from "../../assets/logo/logo.png";
import Picture2 from "../../assets/classes/Children Meditating.png";
import Picture3 from "../../assets/classes/Kundalini Yoga Breathing.png";
import Picture4 from "../../assets/classes/Meditating.png";
import Picture5 from "../../assets/classes/Senior Yoga Class.png";
import Picture6 from "../../assets/classes/Yoga Class.png";
import Picture7 from "../../assets/classes/Yoga.png";

import off1 from "../../assets/eventOne/img1.jpeg";
import off2 from "../../assets/eventOne/img1.jpeg";
import off3 from "../../assets/eventOne/img1.jpeg";
import off4 from "../../assets/eventOne/img1.jpeg";
import off5 from "../../assets/eventOne/img1.jpeg";
import off6 from "../../assets/eventOne/img1.jpeg";

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
        <div className="classContents col-lg-7">
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
        <Row className="gy-4 col-lg-10" style={{ justifyContent: "center" }}>
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
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
    </div>
  );
};

const cards = [
  {
    url: off1,
    title: "Title 1",
    id: 1,
  },
  {
    url: off2,
    title: "Title 2",
    id: 2,
  },
  {
    url: off3,
    title: "Title 3",
    id: 3,
  },
  {
    url: off4,
    title: "Title 4",
    id: 4,
  },
  {
    url: off5,
    title: "Title 5",
    id: 5,
  },
  {
    url: off6,
    title: "Title 6",
    id: 6,
  },
  {
    url: off1,
    title: "Title 1",
    id: 7,
  },
  {
    url: off2,
    title: "Title 2",
    id: 8,
  },
  {
    url: off3,
    title: "Title 3",
    id: 9,
  },
  {
    url: off4,
    title: "Title 4",
    id: 10,
  },
  {
    url: off5,
    title: "Title 5",
    id: 11,
  },
  {
    url: off6,
    title: "Title 6",
    id: 12,
  },
];

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
