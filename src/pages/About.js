import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
const About = () =>{
    
  useEffect(() => {
      window.scrollTo(0,0);
  });
    return <>
        <Header />
        <main class="main" id="main">
        <section
          class="section about-hero"
          style={{backgroundImage : 'url(./media/bg-about.jpg'}}
          id="hero">
          <h1 class="hero__title">About Us</h1>
        </section>
  
        <section class="section about container">
          <div class="about__container">
            <img class="about__img" src="./media/about-image.jpg" alt="" />
  
            <div class="about__data">
              <h3 class="about__data-title">2021</h3>
              <p class="about__data-description">
               consulting represents success at realizing that a trip itinerary is not meeting the client's needs. At times, it is inevitable that travel plans may not turn out as expected; we help our clients pivot into more enjoyable and profitable travel experiences. Our team helps identify and correct any mistakes in the itinerary, ensuring that our clients have a seamless and memorable trip. We work towards ensuring that our clients have an enriching travel experience and are able to explore new and exciting destinations. At the end of the day, our goal is to ensure our clients' satisfaction and help them create unforgettable memories.
              </p>
              <p class="about__data-description">
                Consulting represents success at realizing the company is going in
                the wrong direction. The only time the company fails is when it is
                not possible to do a turnaround anymore. We help companies!
              </p>
            </div>
          </div>
        </section>

        <section class="section about container">
          <div class="about__container">
            <img class="about__img" src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
  
            <div class="about__data">
              <h3 class="about__data-title">2022</h3>
              <p class="about__data-description">
              At our travel consulting service, we understand that sometimes travel plans may not go as smoothly as expected, and that's why we are here to help. We pride ourselves on being able to identify and address any issues with our clients' travel itineraries, ensuring that they have an enjoyable and stress-free trip. Our expert team works tirelessly to provide personalized solutions, so our clients can explore new destinations and have the time of their lives. Ultimately, our goal is to create unforgettable memories for our clients and exceed their expectations with every trip they take.
              </p>
              <p class="about__data-description">
                Consulting represents success at realizing the company is going in
                the wrong direction. The only time the company fails is when it is
                not possible to do a turnaround anymore. We help companies!
              </p>
            </div>
          </div>
        </section>
      </main>
  
    <Footer />
    </>
}

export default About;