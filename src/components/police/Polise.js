import NavbarInfo from '../navbar/NavbarInfo';
import NavbarMenu from '../navbar/NavbarMenu';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom/dist';
import "./polis.css";

function Polise() {
  window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 150 && backToTopBtn) {
      backToTopBtn.classList.add('show');
      backToTopBtn.classList.remove('hide');

    } else {
      if (backToTopBtn) {
        backToTopBtn.classList.remove('show');
        backToTopBtn.classList.add('hide');
      }
    }
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div>
      <NavbarInfo />
      <NavbarMenu />

      {/* scroll buluvchi btn */}
      <button id="backToTopBtn" onClick={scrollToTop}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 256 256">
          <g transform="rotate(90 128 128)">
            <path fill="white" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z" />
          </g>
        </svg>
      </button>

      <div className='box-empty'></div>

      <div className="police">
        <div className='police-info text-center'>
          <h3>Privacy-policy</h3>
          <Link to="/">Главная</Link>
          <span className='ms-2'>/ privacy-policy</span>
        </div>
        <h1>Privacy-policy</h1>
      </div>

      <Footer />
    </div>
  )
}

export default Polise;