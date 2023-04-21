import Footer from "../components/Footer";
import Header from "../components/Header";
import {useState, useEffect} from 'react';


const DetailPackage = () =>{
        const [selectedImage, setSelectedImage] = useState('../media/detail-img.jpg');
        
            useEffect(() => {
                window.scrollTo(0,0);
            });
        
    return <>
      <Header />
      <main class="container" style={{marginTop: "120px"}}>
      <section class="detail">
        <div class="detail__card card">
          <img
            src={selectedImage}
            alt=""
            class="detail__card-img"
          />
          <div class="detail__card-img-list">
            <img
              src="../media/detail-img.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img.jpg')}
              class={`detail__card-img-item ${selectedImage === '../media/detail-img.jpd' ? 'active' : ''}`}
            />
            <img
              src="../media/detail-img2.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img2.jpg')}
              class={`detail__card-img-item ${selectedImage === '../media/detail-img2.jpd' ? 'active' : ''}`}
            />
            <img
              src="../media/detail-img3.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img3.jpg')}
              class={`detail__card-img-item ${selectedImage === '../media/detail-img3.jpd' ? 'active' : ''}`}
            />
            <img
              src="../media/detail-img4.jpg"
              alt=""
              onClick={() => setSelectedImage('../media/detail-img4.jpg')}
              class={`detail__card-img-item ${selectedImage === '../media/detail-img4.jpd' ? 'active' : ''}`}
            />
          </div>
          <div class="detail__card-data">
            <div class="detail__card-title">
              <h4>Description</h4>
              <h5>$100 <span>/ 4D3N</span></h5>
            </div>
            <p class="detail__card-description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or an omised words which don't look even slightly
              believable. If you are goingse a passage of Lorem Ipsum, you need
              to be sure there isn't anything emba rrassing. Variations of
              passages of lorem Ipsum available but the majority have suffered
              alteration in some form,
            </p>
          </div>
        </div>
        <div class="detail__form card">
          <h4 class="detail__form-title">Join Now</h4>
          <form action="">
            <div class="form__group">
              <input
                class="form__group-input"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div class="form__group">
              <input
                class="form__group-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div class="form__group">
              <textarea
                class="form__group-textarea"
                placeholder="Enter your message"
                rows="5"
              ></textarea>
            </div>
            <div class="form__group">
              <button class="button button-detail">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
    <Footer />
    </>
}

export default DetailPackage;