import profile from "../../assets/logo/logo.png";

const testimonialsData = [
  {
    name: "Ramya Subramanian",
    date: "2 Weeks ago",
    message:
      "Ublis Centre is a place where I find peace and growth. Deepika Mam is an exceptional yoga teacher, mentor, and guide ...",
    profileImg: profile,
  },
  {
    name: "Subhashini Subramanian",
    date: "2 Weeks ago",
    message:
      "Been practicing yoga under Deepika Mam's guidance. She teaches very well and provides attention to each individuals ...",
    profileImg: profile,
  },
  {
    name: "Keerthana Gowsi",
    date: "2 Weeks ago",
    message:
      "I joined Ublis yoga in the month of April with the thought that yoga would be boring, but the perspective has been changed ...",
    profileImg: profile,
  },
  {
    name: "Rashmi Dayal",
    date: "2 Weeks ago",
    message:
      "Our Deepika mam is a very warm and friendly person. Her teaching style is gentle and encouraging as well caring ...",
    profileImg: profile,
  },
  {
    name: "Anu radha",
    date: "3 Months ago",
    message:
      "UBLIS yoga center is one of the best place to practice yoga. Deepika Mam has good knowledge on yoga and asanas ...",
    profileImg: profile,
  },
  {
    name: "Vijay",
    date: "2 Months ago",
    message:
      "Absolutely loved this yoga class! The instructor was incredibly knowledgeable and created a welcoming ...",
    profileImg: profile,
  },
];

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
                {testimonialsData.map((testimonial, index) => (
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 100} // Add delay for animation
                    key={index}
                  >
                    <div className="team-member d-flex align-items-start">
                      <div className="pic">
                        <img
                          src={testimonial.profileImg}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="member-info">
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.date}</span>
                        <p>{testimonial.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
