import "./Home.css";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div className="homeContainer welcomeContent">
      <div className="contentContainer">
        <div className="contentSection ">
          <h1 data-aos="fade-in" data-aos-delay="200">
            UBLIS YOGA{" "}
          </h1>
          <h2 data-aos="fade-in" data-aos-delay="200">
            where serenity is bonded to health and happiness.
          </h2>
        </div>
        <div className="welcomeUblis">
          <div className="contents">
            <p className="col-lg-8 col-md-10">
              Welcome to Ublis Yoga, the place which brings together power and
              serenity. Walk through our teaching program, learn with our
              experienced teachers, and get started with your practice for a
              better body and mind wellbeing.{" "}
            </p>
            <p className="col-lg-8 col-md-10">
              Ublis Yoga believes in yoga as a journey of self-transformation.
              That means a step within the opportunity to know one's real
              potential. Our studio is a quiet sanctuary for being more
              receptive toward one's self and nature. It is more than just a
              place to practice yoga.
            </p>
            <p className="col-lg-8 col-md-10">
              With studios in Rajakilpakkam, our methodology is designed to
              encompass every level of experience. Whether you are coming in to
              strengthen, find your flexibility, or take a little time out in
              your busy life, our instructors can get you on the right path.
            </p>
            <p className="col-lg-8 col-md-10">
              Step inside our studio, leave behind all worries at the door, and
              get ready for a practice that feeds the body, soul, and spirit.
              Whatever your level is, you will find a safe, friendly community
              and environment to help you grow in your wellness journey.
            </p>
            <p className="col-lg-8 col-md-10">
              "Explore, breathe, let go, and uncover the magic within!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
