import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <>
    <header id="header" className="header d-flex align-items-right fixed-top" style={{ backgroundColor: '#3E7B27', color: 'blue', }}>
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

    <h1 style={{marginTop: '90px', textAlign: 'center'}}>
      Welcome to National Union of Muslim Students (NUMS)
    </h1><br />

    <h2 style={{textAlign: 'center'}}>Website is under development and will be available ASAP</h2>
    </>

  )
}

export default App