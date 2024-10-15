import React from "react";

import profile from "../../assets/logo/logo.png";

export default function Testimonials() {
  return (
    <div>
      <div className="testimonials reviews mt-7 pb-10">
        <div className="teamSection pt-10">
          <div id="team" className="team pt-10 section col-lg-8">
            <div className="container section-title" data-aos="fade-up">
              <h2>Our Testimonials</h2>
            </div>

            <div className="container">
              <div className="row gy-4">
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="team-member d-flex align-items-start">
                    <div className="pic">
                      <img src={profile} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Ramya Subramanian</h4>
                      <span>2 Weeks ago </span>
                      <p>
                        Ublis Centre is a place where I find peace and growth.
                        Deepika Mam is an exceptional yoga teacher, mentor, and
                        guide...{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="team-member d-flex align-items-start">
                    <div className="pic">
                      <img src={profile} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Subhashini Subramanian</h4>
                      <span>2 Weeks ago </span>
                      <p>
                        Been practicing yoga under Deepika Mam's guidance. She
                        teaches very well and provides attention to each
                        individuals...
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="team-member d-flex align-items-start">
                    <div className="pic">
                      <img src={profile} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>keerthana gowsi</h4>
                      <span>2 Weeks ago </span>
                      <p>
                        I joined Ublis yoga in the month of April with the
                        thought that yoga would be boring, but the perspective
                        has been changed ...{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="team-member d-flex align-items-start">
                    <div className="pic">
                      <img src={profile} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info">
                      <h4>Rashmi Dayal </h4>
                      <span>2 Weeks ago </span>
                      <p>
                        Our Deepika mam is avery warm and friendly person Her
                        teaching style is gentle and encouraging as well caring
                        She is very enthusiastic to help her students deepen
                        th..
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
