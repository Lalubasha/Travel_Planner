import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="main" id="main">
        <section
          className="section contact-hero"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)" }}
          id="hero"
        >
          <h1 className="hero__title">Contact Us</h1>
        </section>

        <section className="section contact container">
          <div className="contact__container">
            <form className="contact__form">
              <h3 className="contact__form-title">Get in touch</h3>

              <div className="contact__form-row">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="contact__form-row">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="contact__form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </div>

              <button type="submit" className="contact__form-submit">
                Send message
              </button>
            </form>

            <div className="contact__info">
              <h3 className="contact__info-title">Our information</h3>
              <p className="contact__info-description">
              A travel planner is a tool that helps individuals plan and organize their trips. 
              It typically includes features such as itinerary planning, flight and hotel booking,
               budget tracking, and activity recommendations. By using a travel planner.
                 
              </p>

              <div className="contact__info-details">
                <div className="contact__info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>1234 Main St, Suite 100</p>
                  <p>Hyderabad</p>
                </div>

                <div className="contact__info-item">
                  <i className="fas fa-phone-alt"></i>
                  <p>+91 8008585649</p>
                  <p>+91 80008585650</p>
                </div>

                <div className="contact__info-item">
                  <i className="fas fa-envelope"></i>
                  <p>TravelPlanner@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;
