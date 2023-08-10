import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import "./companyStyle.css";
import { Button, Col, Container, Row } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import "./aboutCompany.scss";
import mysunImg from "./img/mysunImg.jpg";

function AboutCompany() {

    const [isOpen, setOpen] = useState(false);


    // scroll btn
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

    const sertifikat = [
        <img key={1} className="img-fluid ps-1" src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="certifikat-carousel" />,
        <img key={2} className="img-fluid ps-1" src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="certifikat-carousel" />,
        <img key={3} className="img-fluid ps-1" src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="certifikat-carousel" />,
        <img key={4} className="img-fluid ps-1" src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="certifikat-carousel" />,
        <img key={5} className="img-fluid ps-1" src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="certifikat-carousel" />,
        <img key={6} className="img-fluid ps-1" src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="certifikat-carousel" />,
        <img key={7} className="img-fluid ps-1" src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="certifikat-carousel" />
    ];

    const responsive = {
        0: { items: 1 },
        576: { items: 2 },
        767: { items: 3 },
        991: { items: 4 }
    };

    const youTube = [
        <React.Fragment>
            <div key={1} className="youTube">
                <Button className='youTubeBtn' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </Button>
            </div>
        </React.Fragment>,
        <React.Fragment>
            <div key={2} className="youTube">
                <Button className='youTubeBtn' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </Button>
            </div>
        </React.Fragment>,
        <React.Fragment>
            <div key={3} className="youTube">
                <Button className='youTubeBtn' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </Button>
            </div>
        </React.Fragment>,
        <React.Fragment>
            <div key={4} className="youTube">
                <Button className='youTubeBtn' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </Button>
            </div>
        </React.Fragment>
    ];

    const responsiveYouTube = {
        0: { items: 1 },
        600: { items: 3 },
        992: { items: 3 }
    };

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

            <div>
                <div className="company__bg text-center">
                    <h3>О компании</h3>
                    <Link to="/">Главная</Link>
                    <span className="ms-2">/ О компании</span>
                </div>
                <Container className="mt-5 pt-5">
                    <Row className="w-100">
                        <Col className="col-12 col-lg-6 company__image">
                            <img className='img-fluid' src={mysunImg} alt='img' />
                        </Col>
                        <Col className="col-12 col-lg-6 company-info">
                            <div className="span-blur"></div>
                            <span className="span-text">БУДУЩЕЕ - ЭТО СЕЙЧАС!</span>
                            <h1>О компании</h1>
                            <p>
                                SOLARA - одна из самых опытных армянских компаний, работающих в области солнечной энергетики, основана в 2019 году и является официальным представителем «LA Solar Group» в Армении. Наша компания предоставляет широкий спектр услуг, от проектирования, монтажа и эксплуатации солнечных станций. Так же он предлагает широкий спектр другого оборудования, связанного с солнечными панелями премиум-класса. <br />
                                <b><i>Мы оправдываем ожидания как резидента, так и предпринимателя.</i></b><br />
                                Мы индивидуально подходим к каждому клиенту, предлагая бесплатную консультацию у наших высококвалифицированных специалистов в данной области. Как он обеспечивает финансирование специальных услуг, чтобы помочь бизнесу процветать.
                            </p>
                            <p>
                                <b><i>Каждый проект с нами успешен.</i></b><br />
                                У нас лучшие продукты, доступные на рынке. Мы можем предложить широкий выбор вариантов для проектов любого размера, обеспечивая выгодную цену и сочетание высокого качества. Компания СОЛАРА сертифицирована по системам ISO9001: 2015, ISO45.001: 2016, ISO14.001: 2015, соответствующим международным стандартам, а продукция сертифицирована по системе сертификации CE и UL.
                            </p>
                            <p>
                                <b><i>Наш надежный партнер - это солнечная революция.</i></b><br />
                                Мы установили прочные партнерские отношения с ЛА Солар Груп (LA Solar Group), одной из крупнейших американских компаний, производящих солнечные панели в Армении.
                            </p>
                            <ul>
                                <li>Качество и мощность производимых на предприятии фотоэлектрических модулей подтверждены международными сертификатами.</li>
                                <li>На всю продукцию действует гарантия 25 лет. Условная мощность солнечных панелей составляет не менее 90% за 12 лет и менее 80% за 25 лет.</li>
                                <li>Работая с робототехникой последнего поколения, мы стремимся предоставлять продукцию высокого качества.</li>
                                <li>Благодаря доверию к качеству продукции, ЛА Солар Груп  получила лицензию правительства Республики Армения на деятельность в свободной экономической зоне Альянс (Ереван, Раффи 111).</li>
                            </ul>
                            <p>
                                Вместе с <i>ЛА Солар Груп</i> мы сосредоточены на разработке новейших технологий для предоставления нашей продукции высочайшего качества. СОЛАРА имеет лицензии на строительство и проектирование.
                            </p>
                        </Col>
                    </Row>

                    {/* certifikat carousel */}
                    <div className='row mt-5 w-100'>
                        <Col className="col-12 col-lg-5 sertifikat-info">
                            <div className="span-blur"></div>
                            <span className='span-text'>Сертификаты</span>
                            <h1>Сертификация</h1>
                            <h6>about_certificate_text</h6>
                            <Button className='animated-button rounded-0'>
                                Скачать сертификат в формате PDF
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" fill="currentColor" class="bi bi-filetype-pdf ms-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                                </svg>
                            </Button>
                        </Col>
                        <Col className="col-12 col-lg-7 mt-5 mt-lg-0 text-center">
                            <AliceCarousel
                                mouseTracking
                                items={sertifikat}
                                autoPlay
                                autoPlayInterval={3000}
                                disableButtonsControls
                                disableDotsControls
                                infinite
                                responsive={responsive} />
                        </Col>
                    </div>
                </Container>

                {/* statistika */}
                <section className='company-statistiks'>
                    <div className="company-statistik">
                        <Container className="text-center">
                            <Row className="w-100">
                                <Col className="col-6 col-lg-3">
                                    <h1>765+</h1>
                                    <p>УСТАНОВКИ</p>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <h1>94Вт.ч</h1>
                                    <p>ВЫРАБОТКА ЭЛЕКТРОЭНЕРГИИ</p>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <h1>72$млн</h1>
                                    <p>ЭКОНОМИЯ</p>
                                </Col>
                                <Col className="col-6 col-lg-3">
                                    <h1>523</h1>
                                    <p>КЛИЕНТОВ</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>

                <Row className='w-100 ps-3 mt-5 pt-5'>
                    <Col className="col-12 col-lg-6 company-statistic__next" >
                        <div className="span-blur d-block"></div>
                        <h1>Наша миссия и преимущества</h1>
                        <p>Предоставляя лучшие и самые инновационные решения для солнечной энергетики, мы стремимся вносить свой вклад, продвигать и расти в глобальном секторе возобновляемых источников энергии.</p>
                    </Col>
                    <Col className="col-12 col-lg-6">
                        <Row className="w-100 pt-5 pt-lg-0">
                            <Col className="col-12 col-sm-6">
                                <img className='img-fluid' src="https://img.directindustry.com/images_di/photo-mg/244164-17786792.webp" alt="img1" />
                            </Col>
                            <Col className="col-12 col-sm-6">
                                <img className='img-fluid' src="https://img.archiexpo.com/pdf/repository_ae/190813/410w-420w-418607_1mg.jpg" alt="img2" />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* modal vedio */}
                <Row className="row w-100 mt-5 pt-5 mb-5 pb-5">
                    <Col className="col-12 col-lg-4 ps-4 modal-video__info">
                        <div className="span-blur"></div>
                        <span className='span-text'>Solara с тобой</span>
                        <h1>Видео</h1>
                        <p>Компания СОЛАРА предлагает широкий спектр услуг - от проектирования до монтажа и эксплуатации солнечных станций. Также компания предоставляет огромный выбор дополнительного оборудования, относящегося к солнечным панелям премиум-класса.</p>
                    </Col>
                    <Col className="col-12 col-lg-8 pt-5 pt-lg-0">
                        <AliceCarousel
                            mouseTracking
                            items={youTube}
                            autoPlay
                            autoPlayInterval={3000}
                            disableButtonsControls
                            disableDotsControls
                            infinite
                            responsive={responsiveYouTube} />
                    </Col>
                </Row>
            </div>


            {/* footer */}
            <Footer />
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="xDhOm7ViIW-xk7IE"
                onClose={() => setOpen(false)}
            />
        </div>
    );
}
export default AboutCompany;