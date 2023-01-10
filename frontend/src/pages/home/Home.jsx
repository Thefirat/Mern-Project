import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Latest from '../../components/latest/Latest';
import Social from '../../components/socials/Socials';
import "./home.css";
const Home = () => {
  return (
    <div className="wrapper">
    {/* Header Start */}
    <header className='header-container'>
      <Header />
    </header>
    {/* Header End */}

    {/* Main Start */}
    <main className='main-container'>
      <Slider />
      <Latest />
      <Social />
    </main>
    {/* Main End */}

    {/* Footer Start */}
    <footer className='footer-container'>
      <Footer />
    </footer>
    {/* Footer End */}

  </div>
  )
}

export default Home