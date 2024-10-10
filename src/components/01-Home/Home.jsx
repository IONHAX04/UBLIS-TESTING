import "./Home.css";
import Testimonials from "./Testimonials";
import { Typewriter } from "react-simple-typewriter";

import { useNavigate } from "react-router-dom";
import yogalogo from "../../assets/home/yogalogo.png";
import therapy from "../../assets/home/therapy.svg";
import { Container, Row, Col, Button } from "react-bootstrap";
import img1 from "../../assets/home/homeImgOne.jpg";
import img2 from "../../assets/home/homeImgTwo.jpg";

import experience from "../../assets/home/verified.png";
import graduate from "../../assets/home/graduated.png";
import life from "../../assets/home/life.png";

import whyChooseUs from "../../assets/home/whyChooseUs.webp";

export default function Home() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className="homeContainer welcomeContent">
      <div className="contentContainer">
        <div className="contentSection ">
          <h1 data-aos="fade-in" data-aos-delay="200">
            UBLIS YOGA{" "}
          </h1>
          <h2 className="introText">
            Where Serenity Meets{" "}
            <span style={{ fontWeight: "bold", color: "#f95005" }}>
              <Typewriter
                words={["Health !", "Happiness !"]}
                loop={0}
                typeSpeed={120}
                deleteSpeed={80}
              />
            </span>
          </h2>
        </div>
        <div className="welcomeUblis">
          <h2>
            Welcome To <br /> Ublis Yoga
          </h2>
          <div className="contents">
            <p className="col-lg-8 col-md-12">
              Welcome to Ublis Yoga, the place which brings together power and
              serenity. Walk through our teaching program, learn with our
              experienced teachers, and get started with your practice for a
              better body and mind wellbeing.{" "}
            </p>
            <p className="col-lg-8 col-md-12">
              Ublis Yoga believes in yoga as a journey of self-transformation.
              That means a step within the opportunity to know one's real
              potential. Our studio is a quiet sanctuary for being more
              receptive toward one's self and nature. It is more than just a
              place to practice yoga.
            </p>
            <p className="col-lg-8 col-md-12">
              With studios in Rajakilpakkam, our methodology is designed to
              encompass every level of experience. Whether you are coming in to
              strengthen, find your flexibility, or take a little time out in
              your busy life, our instructors can get you on the right path.
            </p>
            <p className="col-lg-8 col-md-12">
              Step inside our studio, leave behind all worries at the door, and
              get ready for a practice that feeds the body, soul, and spirit.
              Whatever your level is, you will find a safe, friendly community
              and environment to help you grow in your wellness journey.
            </p>
            <p className="col-lg-8 col-md-12">
              "Explore, breathe, let go, and uncover the magic within!"
            </p>
          </div>
        </div>
      </div>

      <div className="homePageContents">
        <div className="homePageContentYoga">
          <div className="w-[100%] pt-10">
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10">
              <div
                className="w-[100%] lg:w-[30%] h-[250px] lg:h-[300px] "
                align="center"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <h1
                  align="center"
                  className="text-[40px] font-bold text-[#f95005]"
                >
                  What is Yoga?
                </h1>
                <img
                  className="w-[40%] duration-300 hover:w-[35%] mt-10"
                  src={yogalogo}
                  alt="logo"
                />
              </div>
              <div
                className=" w-[90%] lg:w-[40%] h-[340px] lg:h-[400px] flex justify-center items-center"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <p className="text-[18px] text-[#000000] text-justify font-semibold">
                  Yoga is about bringing together the body, mind and soul as
                  one. It’s more than just physical exercise—it helps you stay
                  physically fit, mentally clear and emotionally balanced.
                  Through yoga, you can find a sense of inner peace and overall
                  well-being by connecting all parts of yourself.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div
                className="w-[100%] lg:w-[30%] h-[250px] lg:h-[300px] "
                align="center"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <h1
                  align="center"
                  className="text-[40px] font-bold text-[#f95005]"
                >
                  What is Therapy?
                </h1>
                <img
                  className="w-[40%] duration-300 hover:w-[35%] mt-10"
                  src={therapy}
                  alt="logo"
                />
              </div>
              <div className=" w-[90%] lg:w-[40%] h-[340px] lg:h-[400px] flex justify-center items-center">
                <p
                  className="text-[18px] text-[#000000] text-justify font-semibold"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  Yoga Therapy is a customized approach to yoga that adapts
                  poses, breathing techniques and meditation to meet your
                  individual needs. It helps restore balance in the body, mind
                  and soul, bringing you back to a state of health and
                  well-being. When everything is in harmony—your body, mind and
                  soul—you experience true health and happiness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="whoAreWe">
          <section id="whoWeAre" className="whoWeAre section col-lg-8">
            <div className="container section-title" data-aos="fade-up">
              <h3
                className="mb-3 text-[30px] lg:text-[50px] text-[#f95005] font-[700] py-3"
                align="center"
              >
                Who We Are ?
              </h3>
            </div>

            <div className="container mt-3">
              <div className="row gy-4 align-items-center whoWeAreItems">
                <div
                  className="col-lg-6 order-2 order-lg-1"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  align="center"
                >
                  <p className="whoWeArePara">
                    At Ublis Yoga, we are a passionate and dedicated to creating
                    a sanctuary for holistic wellness. Our studio is a place
                    where ancient wisdom meets modern practice, offering a
                    diverse range of yoga classes tailored to meet the needs of
                    every individual.
                  </p>
                  <button
                    className="getStartedBtn mt-5 col-lg-7"
                    type="submit"
                    onClick={handleButtonClick}
                  >
                    Send Message
                  </button>
                </div>
                <div
                  className="col-lg-5 order-1 order-lg-2 d-flex align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="imageStack">
                    <img
                      src={img1}
                      alt=""
                      className="stackFront"
                      style={{ border: "10px solid white" }}
                    />
                    <img
                      src={img2}
                      alt=""
                      className="stackBack"
                      style={{ border: "10px solid white" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="w-[100%] flex justify-center flex-col items-center py-10 bg-[#fff]">
          <div className="container section-title mt-5" data-aos="fade-up">
            <h3
              className="text-[30px] lg:text-[50px] text-[#f95005] font-[700] pb-1"
              align="center"
            >
              Why Choose Us ?
            </h3>
          </div>
          <img
            className="w-[80%] lg:w-[65%]"
            src={whyChooseUs}
            data-aos="fade-up"
            data-aos-delay="100"
            alt="whyChooseUs"
          />
        </div>

        <div className="stats">
          <Row>
            <Col lg={3} className="statis">
              <div className="image mt-3">
                <img src={experience} />
              </div>
              <p>12+ Years of Experience</p>
            </Col>
            <Col lg={3} className="statis">
              <div className="image mt-3">
                <img src={graduate} />
              </div>
              <p>5000+ Students Trained</p>
            </Col>
            <Col lg={3} className="statis">
              <div className="image mt-3">
                <img src={life} />
              </div>
              <p>800+ Transformed Lives</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
