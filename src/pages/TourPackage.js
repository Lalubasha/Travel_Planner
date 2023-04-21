import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
const TourPackage = () =>{
    
        useEffect(() => {
            window.scrollTo(0,0);
        });
         
    return <>
        <Header />
        <main class="main" id="main">
        <section
            class="section about-hero"
            style={{backgroundImage: 'url(./media/bg-about.jpg)'}}
            id="hero">
            <h1 class="hero__title">Tour Package</h1>
        </section>

        <section class="section tour container">
            <div class="tour__container">
            <div class="tour__card">
                <img src="./media/img-1.jpg" alt="" class="tour__card-img" />
                <div class="tour__data">
                <h5 class="tour__data-title">Munnar</h5>
                <span class="tour__data-subtitle">Kerala</span>
                </div>
                <Link to="/tour-package/asd" class="tour__link"></Link>
            </div>
            <div class="tour__card">
                <img src="./media/img-2.jpg" alt="" class="tour__card-img" />
                <div class="tour__data">
                <h5 class="tour__data-title">Coorg</h5>
                <span class="tour__data-subtitle">Karnataka</span>
                </div>
                <Link to="/tour-package/asd" class="tour__link"></Link>
            </div>
            <div class="tour__card">
                <img src="./media/img-3.jpg" alt="" class="tour__card-img" />
                <div class="tour__data">
                <h5 class="tour__data-title">Manali</h5>
                <span class="tour__data-subtitle">Himachal Pradesh</span>
                </div>
                <Link to="/tour-package/asd" class="tour__link"></Link>
            </div>
            <div class="tour__card">
                <img src="./media/img-4.jpg" alt="" class="tour__card-img" />
                <div class="tour__data">
                <h5 class="tour__data-title">Darjeeling</h5>
                <span class="tour__data-subtitle">West Bengal</span>
                </div>
                <Link to="/tour-package/asd" class="tour__link"></Link>
            </div>
            <div class="tour__card">
                <img src="./media/img-5.jpg" alt="" class="tour__card-img" />
                <div class="tour__data">
                <h5 class="tour__data-title">Khajjiar</h5>
                <span class="tour__data-subtitle">Himachal Pradesh</span>
                </div>
                <Link to="/tour-package/asd" class="tour__link"></Link>
            </div>
            <div class="tour__card">
                <img src="./media/img-6.jpg" alt="" class="tour__card-img" />
                <div class="tour__data">
                <h5 class="tour__data-title">Mawlynnong</h5>
                <span class="tour__data-subtitle">Meghalaya</span>
                </div>
                <Link to="/tour-package/asd" class="tour__link"></Link>
            </div>
            </div>
        </section>
        </main>
        <Footer />
    </>
    
}

export default TourPackage;