import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";
const About = () =>{
    const TourPackage = () => {
        useEffect(() => {
            window.scrollTo(0,0);
        });
    }
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
              <h3 class="about__data-title">2008</h3>
              <p class="about__data-description">
                Consulting represents success at realizing the company is going in
                the wrong direction. The only time the company fails is when it is
                not possibleto do a turnaround anymore. We help companies pivot
                into more profitable directions where they can expand and grow. It
                is inevitable that companieswill end up making a few mistakes; we
                help them correct these mistakes.
              </p>
              <p class="about__data-description">
                Consulting represents success at realizing the company is going in
                the wrong direction. The only time the company fails is when it is
                not possible to do a turnaround anymore. We help companies
              </p>
            </div>
          </div>
        </section>
      </main>
  
    <Footer />
    </>
}

export default About;