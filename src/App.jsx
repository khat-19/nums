import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    
    <>
    <header id="header" className="header d-flex align-items-right fixed-top" style={{ backgroundColor: '#344CB7', color: 'blue', }}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <img src="images/image1.jpg" alt="" style={{ width: '60px', marginLeft: '20px', marginTop: '10px', marginBottom: '10px', borderRadius: '50%' }} />
        <nav className="navbar navbar-expand-sm navbar-dark" style={{ marginLeft: 'auto', }}>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              style={{ width: '60px' }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href='#home' style={{ cursor: 'pointer' }}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='#about' style={{ cursor: 'pointer' }}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='#gallery' style={{ cursor: 'pointer' }}>
                    Gallery / Event
                  </a>
                </li>
                <li className="nav-item">
                  <a
                   className="nav-link" 
                   href='#walloffame' 
                   style={{ cursor: 'pointer' }}>
                    Wall of fame
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <section className="hero section" style={{marginTop: "80px", position: "relative", overflow: "hidden", height: '500px'}}>
        <img src="https://images.squarespace-cdn.com/content/v1/65758f4777984113acfc68b9/a2b0dfd5-70dc-4b41-a25f-a895405f6d24/front+1.jpg" alt="" className="hero-bg" data-aos="fade-in" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover"}} />
        <div className="overlay" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: -1 }}></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up" style={{ color: "black", fontSize: "2.5rem", fontWeight: "bold", textAlign: "center"}}>
                National Union of Muslim Student Sierra Leone(NUMS)
              </h2>
              {/* <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#ddd", fontSize: "1.2rem" }}>
                {language === 'English' ? 'With our advanced logistics solutions, we make sure your packages arrive on time and safely. Join us to revolutionize the way you navigate logistics your journey starts here.' : 'Avec nos solutions logistiques avancées, nous nous assurons que vos colis arrivent à temps et en sécurité. Rejoignez-nous pour révolutionner votre façon de naviguer dans la logistique votre voyage commence ici.'}
              </p> */}
            </div>
            <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
              <img src="/images/image2.png" className="img-fluid mb-3 mb-lg-0" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default App