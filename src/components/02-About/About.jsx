import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from "prop-types";
import instructor from "../../assets/about/deepika.png";

import { Row, Col } from "react-bootstrap";

import "./About.css";

// import mens from "../../assets/about/mens.png";
// import modern from "../../assets/about/modern.png";

import deepika from "../../assets/about/deepika.png";

export default function About() {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="About"
        heading="Our Journey."
      >
        <ExampleContent
          title="Journey..."
          description="“Started in 2012, focusing more on women and children’s well-being, then later shifted to the focus of the Therapy”"
          buttonText="Our journey began with the vision that - to lead a healthy life, one does not only need to understand the ancient art of yoga but also incorporate it into modern lifestyle. A kin respect for the teachings of yoga is what weighs heavily on us. "
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading=""
        heading="Our Mission."
      >
        <ExampleContent
          title="“Enhancement of Body, mind and soul” "
          description="Practicing yoga is our mission to help each and every participant who is with us to attain general well-being and eternal tranquility. "
          buttonText=""
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="“The Master of Mindful Movement of our Team!!“"
        heading="Mrs. Deepika."
      >
        <div className="instructorContents">
          <Row className="aboutUsTeam text-center">
            <Col md={12}>
              <h4>Our Team</h4>
              <p>
                <span>“The Master of Mindful Movement!“</span>
              </p>
            </Col>

            <section
              id="aboutUsMission"
              className="section  light-background"
              data-builder="section"
            >
              <div className="container-fluid mb-5 p-3">
                <div
                  className="row gy-4"
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <div className="order-1 order-lg-1 aboutUsImag">
                    <img
                      src={instructor}
                      className="mt-5 mb-2 object-cover"
                      alt=""
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    />
                    <br />
                    <h5 className="m-1">Mrs. Deepika</h5>
                    <p className="">Lead Instructor</p>
                  </div>
                  <div className="d-flex flex-column col-lg-6 justify-content-center order-2 order-lg-2">
                    <div className="aboutInstructor text-justify">
                      <div className="text-[18px]">
                        Meet <b>Mrs. Deepika</b>, a shining source of knowledge
                        and wisdom in the yoga. Deepika started practicing yoga
                        at the
                        <b>age of 8</b>, sparking her passion to master the
                        practice. To address various health issues, she
                        specialized in <b>Yoga therapy</b>.
                      </div>
                      <br />
                      <div className="text-[18px]">
                        With a <b>Master of Science in Yoga and Yoga Therapy</b>
                        , Deepika brings deep knowledge and expertise to every
                        className. She specializes in{" "}
                        <b>Pre & Postnatal Yoga Teacher Training</b>, guiding
                        mothers-to-be and new mothers on their journey to
                        wellness, caring for both body and mind. Her expertise
                        extends further with certifications in{" "}
                        <b>Yoga Therapy</b>, a{" "}
                        <b>
                          Post Graduate Diploma in Yoga Philosophy and
                          Psychology
                        </b>
                        , and another in <b>Fitness and Nutrition</b>. This
                        allows her to offer a holistic approach to wellness that
                        nurtures the body, mind, and spirit.
                      </div>
                      <br />
                      <div className="text-[18px]">
                        With Deepika as your guide, you can trust you're in
                        capable hands. Join her on the mat and embark on a
                        journey of self-discovery, healing and transformation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Row>{" "}
        </div>
      </TextParallaxContent>
    </div>
  );
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[70vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

TextParallaxContent.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(70vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

StickyImage.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
        top: "-35px !important",
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

OverlayCopy.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

const ExampleContent = ({ title, description, buttonText }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p
        className="mb-4 text-xl text-neutral-600 md:text-2xl"
        style={{ marginTop: "-50px" }}
      >
        {description}
      </p>
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">{buttonText}</p>
    </div>
  </div>
);

ExampleContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
