import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, Input, Row } from 'reactstrap';
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

      <div className="box-empty"></div>

      <div className="pb-5">
        <Container>
          <div className="text-start contact-info">
            <Link to="/">Главная</Link>
            <span className="ms-2">/ Контакты</span>
          </div>
          <Row className="w-100 mt-4">
            <Col className="col-12 col-lg-6 main-contact__info">
              <h3>Контакты</h3>
              <p>Консультант по продажам свяжется с вами, как только мы получим вашу информацию, и у вас будет первоначальная консультация.</p>
              <img className="img-fluid" src="https://solara.uz/assets/images/75/757570_0a6269-Group-455.png" alt="img" />
            </Col>
            <Col className="col-12 col-lg-6 mt-5 mt-lg-0 pt-5 pt-lg-0">
              <Form>
                <Input className="rounded-0 " size="lg" placeholder="Полное имя" />
                <Input className="rounded-0 mt-4" size="lg" type='email' placeholder='Эл. адрес' />
                <Input className="rounded-0 mt-4" size="lg" type='number' placeholder='Телефон' />
                <textarea className='form-control rounded-0 mt-4' rows="3" placeholder='Сообщение' />
                <Button className='anim-button rounded-0 mt-3'>Send</Button>
              </Form>
            </Col>
          </Row>
        </Container>

        <div className="map__bg">
          <Row className='w-100'>
            <Col className="col-12 col-md-6">
              <Container className="pt-5 ps-2 ps-lg-5">
                <h3>Офис в Узбекистане</h3>
                <p>Ташкент, Мирабадский район, Фаргона Йули 222/12</p>
                <Row className="w-100 mt-5">
                  <Col className="col-6">
                    <p><b>Телефон</b></p>
                    <p><b>Viber/Watsapp:</b></p>
                    <p><b>Эл. почта:</b></p>
                  </Col>
                  <Col className="col-6">
                    <p>+998 99 877 14 12</p>
                    <p>+998 99 877 14 12</p>
                    <p>info@solara.uz</p>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="col-12 col-md-6 ms-2 ms-md-0 mt-5 mt-md-0">
              <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.5590222083506!2d69.30539500000002!3d41.281966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8acc09180781%3A0x1c0e34abd701c308!2sManna!5e0!3m2!1suz!2sus!4v1691218435797!5m2!1suz!2sus"
                  height="300" style={{ border: "0", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </Col>
          </Row>
        </div>

        <Container>
          <Row className='w-100 mt-5 pt-5 pb-5 contact-statistics'>
            <Col className='col-12 col-md-6 col-lg-4'>
              <h3>Для прессы</h3>
              <hr />
              <Row className="w-100">
                <Col className="col-6">
                  <p><b>Телефон</b></p>
                  <p><b>Эл. почта:</b></p>
                </Col>
                <Col className="col-6">
                  <p>+998 99 877 14 12</p>
                  <p>info@solara.uz</p>
                </Col>
              </Row>
            </Col>
            <Col className='col-12 col-md-6 col-lg-4 mt-5 mt-md-0'>
              <h3>Для инвесторов</h3>
              <hr />
              <Row className="w-100">
                <Col className="col-6">
                  <p><b>Телефон</b></p>
                  <p><b>Эл. почта:</b></p>
                </Col>
                <Col className="col-6">
                  <p>+998 99 877 14 12</p>
                  <p>info@solara.uz</p>
                </Col>
              </Row>
            </Col>
            <Col className='col-12 col-md-6 col-lg-4 mt-5 mt-lg-0'>
              <h3>Офис в Ереване</h3>
              <hr />
              <Row className="w-100">
                <Col className="col-6">
                  <p><b>Телефон</b></p>
                  <p><b>Эл. почта:</b></p>
                </Col>
                <Col className="col-6">
                  <p>+37444301111</p>
                  <p>info@solara.am</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
export default Contact;