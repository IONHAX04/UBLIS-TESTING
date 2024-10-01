import { Row, Col, Form } from "react-bootstrap";
import "./Contact.css";
export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const firstName = form["name"].value;
    const lastName = form["text"].value;
    const email = form["email"].value;
    const mobile = form["mobile"].value;
    const message = form["message"].value;

    // MAIL CONTENTS

    // const subject = encodeURIComponent("Yoga Enquiry - Reg");
    // const body = encodeURIComponent(`
    //       Hi ${firstName},

    //       ${message}

    //       Regards,
    //       ${firstName} ${lastName}
    //       Mobile: ${mobile}
    //       Email: ${email}
    // `);
    // const mailtoLink = `mailto:Ublisyoga@gmail.com?subject=${subject}&body=${body}`;

    // window.location.href = mailtoLink;

    const whatsappNumber = "919940063000";
    const whatsappMessage = encodeURIComponent(`
    Hi, I am ${firstName} ${lastName}.

    ${message}

    Regards,
    ${firstName} ${lastName}
    Mobile: ${mobile}
    Email: ${email}
  `);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.location.href = whatsappLink;
  };

  return (
    <div>
      <div className="contactUs">
        <section id="contact" className="contact section">
          <div className="contactFormContainer col-lg-9 mt-5">
            <h4>Get in touch</h4>
            <Row className="contactIntro p-4 mt-4">
              <Col lg={4} className="mt-4">
                <h5 className="contactHead">Visit Us</h5>
                <p className="pt-3">
                  <p>#28 Second Floor,</p>
                  <p>Madambakkam Main Road ,</p>
                  <p>Gandhi Nagar, Rajakilpakkam,</p>
                  <p>Opposite to Gate 2 Jain Sudharsana Apartments,</p>
                  <p>Chennai, Tamil Nadu - 600073.</p>
                </p>
              </Col>
              <Col lg={4} className="mt-4">
                <h5 className="mb-3 contactHead">Email Us</h5>
                <a href="mailto:ublisyoga@gmail.com" className="mt-3">
                  Ublisyoga@gmail.com
                </a>
              </Col>
              <Col lg={3} className="mt-4">
                <h5 className="contactHead">Call Us</h5>
                <p className="pt-3">9940063000</p>
              </Col>
            </Row>

            <Row className="contactForms mt-5">
              <h5>Drop A Message</h5>
              <Form
                id="contact-form"
                className="emailForm mt-3"
                onSubmit={handleSubmit}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Row className="gy-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="pb-2 formLabels">
                        First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        id="name-field"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="pb-2 formLabels">
                        Last Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="text"
                        id="last-name-field"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="pb-2 formLabels">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        id="email-field"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="pb-2 formLabels">
                        Mobile
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="mobile"
                        id="mobile-field"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="pb-2 formLabels">
                        Leave a Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={10}
                        id="message-field"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12} className="text-center">
                    <button className="getStartedBtn col-lg-5" type="submit">
                      Send Message
                    </button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </div>
        </section>
      </div>
    </div>
  );
}
