import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import "./contactStyle.css";

function Contact() {

  // scroll btn
  window.addEventListener('scroll', () => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (window.scrollY > 150) {
      backToTopBtn.classList.add('show');
      backToTopBtn.classList.remove('hide');

    } else {
      backToTopBtn.classList.remove('show');
      backToTopBtn.classList.add('hide');

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

      <div className='main'>
        <Container className='z-4'>
          <div className='pt-3 pb-4'>
            <Link className='link1' to="/">Главная</Link>
            <p className='p1'>/ Контакты</p>
          </div>
          <div className='row w-100'>
            <div className='col-6 messenger'>
              <h2 className='h2-1'>Контакты</h2>
              <p className='konsultat'>Консультант по продажам свяжется с вами, как только мы получим вашу информацию, и у вас будет первоначальная консультация.</p>
              <img src="https://solara.uz/assets/images/75/757570_0a6269-Group-455.png" alt="." />
            </div>
            <div className='col-6 messenger'>
              <form>
                <div class="row">
                  <input class="form-control rounded-0 col-md-12 mtx-3 py-3 input1" placeholder="Полное имя" />
                  <input class="form-control rounded-0 col-md-12 mt-3 py-3 input1" type='email' placeholder='Эл. адрес' />
                  <input class="form-control rounded-0 col-md-12 mt-3 py-3 input1" type='number' placeholder='Телефон' />
                  <textarea className='form-control textarea1 col-md-12 mt-3' placeholder='Сообщение' />
                </div>
                <div>
                  <button className='col-3 mt-3 animated-btn'>Send</button>
                </div>
              </form>
            </div>
          </div>
        </Container>
        <div className='row mt-5 w-100'>
          <div className="col-6 box1 mt-5">
            <div>
              <img style={{ marginLeft: "13%" }} className='img2' src="https://solara.uz/resources/img/pin.png" alt="." />
              <h3 style={{ fontSize: "1.3rem", padding: "5% 30% 0 15% " }} className='h2-1 d-inline-block ofic'>Офис в Узбекистане</h3>
            </div>
            <p className='p2 box1-p'>Ташкент, Мирабадский район, Фаргона Йули 222/12</p>
            <div className="malumot row">
              <p className="col-6"><b>Телефон</b></p>
              <p className="col-6">+998 99 877 14 12</p>
              <p className="col-6"><b>Viber/Watsapp:</b></p>
              <p className="col-6">+998 99 877 14 12</p>
              <p className="col-6"><b>Эл. почта:</b></p>
              <p className="col-6">info@solara.uz</p>
            </div>
          </div>
          <div className="col-6 box2 mt-5">
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.5590222083506!2d69.30539500000002!3d41.281966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8acc09180781%3A0x1c0e34abd701c308!2sManna!5e0!3m2!1suz!2sus!4v1691218435797!5m2!1suz!2sus"
                height="300" style={{ border: "0", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
        <div className='boxs'>
          <div className='boxes  ms-5 kontact-malumot'>
            <h3 className='h2-1 ms-4'>Для прессы</h3>
            <hr className=' ms-4' />
            <div className="malumo row  ms-3">
              <p className="col-6"><b>Телефон</b></p>
              <p className="col-6">+998 99 877 14 12</p>
              <p className="col-6"><b>Эл. почта:</b></p>
              <p className="col-6">info@solara.uz</p>
            </div>
          </div>
          <div className='boxes  kontakt-malumot'>
            <h3 className='h2-1'>Для инвесторов</h3>
            <hr />
            <div className="malumo row">
              <p className="col-6"><b>Телефон</b></p>
              <p className="col-6">+998 99 877 14 12</p>
              <p className="col-6"><b>Эл. почта:</b></p>
              <p className="col-6">info@solara.uz</p>
            </div>
          </div>
          <div className='boxes contact-malumot'>
            <h3 className='h2-1'>Офис в Ереване</h3>
            <hr />
            <div className="malumo row">
              <p className="col-6"><b>Телефон</b></p>
              <p className="col-6">+998 99 877 14 12</p>
              <p className="col-6"><b>Эл. почта:</b></p>
              <p className="col-6">info@solara.uz</p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}
export default Contact;