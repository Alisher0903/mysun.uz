import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import "./companyStyle.css";
import { Container, List } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import "./aboutCompany.scss";

function AboutCompany() {

    const [isOpen, setOpen] = useState(false);


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

    const sertifikat = [
        <img key={1} src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="." />,
        <img key={2} src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="." />,
        <img key={3} src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="." />,
        <img key={4} src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="." />,
        <img key={5} src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="." />,
        <img key={6} src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="." />,
        <img key={7} src="https://solara.uz/assets/images/b5/b5bda6_about-cert.jpg" alt="." />
    ]
    const responsive = {
        0: { items: 1 },
        600: { items: 3 },
        992: { items: 4 }
    };
    const youTube = [
        <React.Fragment>
            <div key={1} className="youTube">
                <button className='youTubeBtn' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </button>
            </div>
        </React.Fragment>,
        <React.Fragment>
            <div key={2} className="youTube">
                <button className='youTubeBtn' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </button>
            </div>
        </React.Fragment>,
        <React.Fragment>
            <div key={3} className="youTube">
                <button className='youTubeBtn' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </button>
            </div>
        </React.Fragment>,
        <React.Fragment>
            <div key={4} className="youTube">
                <button className='youTubeBtn' onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                    </svg>
                </button>
            </div>
        </React.Fragment>
    ]
    const responsiv = {
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
            <div className="main o-main" style={{marginTop: "-8px"}}>
                <div className="mainDiv">
                    
                    <h1 className='h1-1 o-companiya mm'>О компании</h1>
                    <Link className='link1 mm' style={{color: "#fff"}}  to="/">Главная</Link>
                    <p className='p1' style={{color: "#273968"}}>/ О компании</p>
                </div>
                <Container>
                    <div className="secondDiv row mb-4 w-100">
                        <div className="col-6 twoImg">
                            <img className='img1' src='https://solara.uz/assets/images/e4/e42408_about-img1.png' alt='.'></img>
                            <div className='img2' >
                            <img className='rotate-center' src="https://solara.uz/resources/img/about-us/about-gif.png" alt="." />
                            </div>
                        </div>
                        <div className="col-6 company-text">
                            <div className='ms-4 company-text'>
                                <div className="border bord"></div>
                                <h5 className='h5-1'>БУДУЩЕЕ - ЭТО СЕЙЧАС!</h5>
                                <h1 className='h1-2'>О компании</h1>
                                <p className='longText'>SOLARA - одна из самых опытных армянских компаний, работающих в области солнечной энергетики, основана в 2019 году и является официальным представителем «LA Solar Group» в Армении. Наша компания предоставляет широкий спектр услуг, от проектирования, монтажа и эксплуатации солнечных станций. Так же он предлагает широкий спектр другого оборудования, связанного с солнечными панелями премиум-класса.
                                    <br />
                                    <b>Мы оправдываем ожидания как резидента, так и предпринимателя.</b>
                                    <br />
                                    Мы индивидуально подходим к каждому клиенту, предлагая бесплатную консультацию у наших высококвалифицированных специалистов в данной области. Как он обеспечивает финансирование специальных услуг, чтобы помочь бизнесу процветать.
                                    <br />
                                    <br />
                                    <b>Каждый проект с нами успешен.</b>
                                    <br />
                                    У нас лучшие продукты, доступные на рынке. Мы можем предложить широкий выбор вариантов для проектов любого размера, обеспечивая выгодную цену и сочетание высокого качества. Компания СОЛАРА сертифицирована по системам ISO9001: 2015, ISO45.001: 2016, ISO14.001: 2015, соответствующим международным стандартам, а продукция сертифицирована по системе сертификации CE и UL.
                                    <br />
                                    <br />
                                    <b>Наш надежный партнер - это солнечная революция.</b>
                                    <br />
                                    Мы установили прочные партнерские отношения с ЛА Солар Груп (LA Solar Group), одной из крупнейших американских компаний, производящих солнечные панели в Армении.</p>
                                <List className="aboutList1">
                                    <li>Качество и мощность производимых на предприятии фотоэлектрических модулей подтверждены международными сертификатами.</li>
                                    <li>На всю продукцию действует гарантия 25 лет. Условная мощность солнечных панелей составляет не менее 90% за 12 лет и менее 80% за 25 лет.</li>
                                    <li>Работая с робототехникой последнего поколения, мы стремимся предоставлять продукцию высокого качества.</li>
                                    <li>Благодаря доверию к качеству продукции, ЛА Солар Груп  получила лицензию правительства Республики Армения на деятельность в свободной экономической зоне Альянс (Ереван, Раффи 111).</li>
                                </List>
                                <List type='unstyled' className="aboutList2">
                                    <li>Вместе с ЛА Солар Груп мы сосредоточены на разработке новейших технологий для предоставления нашей продукции высочайшего качества. СОЛАРА имеет лицензии на строительство и проектирование.</li>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-5 w-100'>
                        <div className='col-4 sertifikate0'>
                            <div className="border bord"></div>
                            <h6 className='h5-1'>Solara с тобой</h6>
                            <h1 className='h1-2 sertifik'>Сертификация</h1>
                            <h6 className='aboutlist1 mt-4'>about_certificate_text</h6>
                            <button className='col-3 mt-3 animated-btn'>
                                Скачать сертификат в формате PDF
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filetype-pdf ms-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM1.6 11.85H0v3.999h.791v-1.342h.803c.287 0 .531-.057.732-.173.203-.117.358-.275.463-.474a1.42 1.42 0 0 0 .161-.677c0-.25-.053-.476-.158-.677a1.176 1.176 0 0 0-.46-.477c-.2-.12-.443-.179-.732-.179Zm.545 1.333a.795.795 0 0 1-.085.38.574.574 0 0 1-.238.241.794.794 0 0 1-.375.082H.788V12.48h.66c.218 0 .389.06.512.181.123.122.185.296.185.522Zm1.217-1.333v3.999h1.46c.401 0 .734-.08.998-.237a1.45 1.45 0 0 0 .595-.689c.13-.3.196-.662.196-1.084 0-.42-.065-.778-.196-1.075a1.426 1.426 0 0 0-.589-.68c-.264-.156-.599-.234-1.005-.234H3.362Zm.791.645h.563c.248 0 .45.05.609.152a.89.89 0 0 1 .354.454c.079.201.118.452.118.753a2.3 2.3 0 0 1-.068.592 1.14 1.14 0 0 1-.196.422.8.8 0 0 1-.334.252 1.298 1.298 0 0 1-.483.082h-.563v-2.707Zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638H7.896Z" />
                                </svg>
                            </button>
                        </div>
                        <div className='col-8 sertifikate' style={{ cursor: "pointer", marginLeft: "0", backgroundImage: "url('https://cdn.wallpapersafari.com/32/97/bZrevY.jpg')" }}>
                            <AliceCarousel
                                mouseTracking
                                items={sertifikat}
                                autoPlay
                                autoPlayInterval={3000}
                                disableButtonsControls
                                disableDotsControls
                                infinite
                                responsive={responsive}
                            />
                        </div>
                    </div>
                </Container>
                <section className='' style={{ marginBottom: "10%" }}>
                    <div className="main-hisob">
                        <div className='hisob'>
                            <div className="row hisob2 w-100">
                                <div class="col-3">
                                    <h1 className='h1-3'>765+</h1>  
                                    <p className='p3'>УСТАНОВКИ</p>
                                </div>
                                <div class="col-3">
                                    <h1 className='h1-3'>94Вт.ч</h1>
                                    <p className='p3'>ВЫРАБОТКА ЭЛЕКТРОЭНЕРГИИ</p>
                                </div>
                                <div class="col-3">
                                    <h1 className='h1-3'>72$млн</h1>
                                    <p className='p3'>ЭКОНОМИЯ</p>
                                </div>
                                <div class="col-2">
                                    <h1 className='h1-3' style={{ marginTop: "25%" }}>523</h1>
                                    <p className='p3'>КЛИЕНТОВ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='mt-5 row w-100' style={{ marginBottom: "10%", width: "100%" }}>
                    <div className="col-6 ps-5 pt-5 about-box" >
                        <div className="border bord d-block mt-5"></div>
                        <h1 className='h5-1' style={{ color: "#273968" }}>Наша миссия и преимущества</h1>
                        <p className='p1 predostavliya mt-3'>Предоставляя лучшие и самые инновационные решения для солнечной энергетики, мы стремимся вносить свой вклад, продвигать и расти в глобальном секторе возобновляемых источников энергии.</p>
                    </div>
                    <div className="col-6 about-boxs2">
                        <div className="row w-100">
                            <img className='image col-3' src="https://solara.uz/assets/images/87/87aae8_about-img2.jpg" alt="" />
                            <img className='image col-3' src="https://solara.uz/assets/images/96/96dae5_about-img3.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row w-100 mt-5">
                    <div className="col-4 ps-5 youTubeCol">
                        <div className="border bord"></div>
                        <h6 className='h5-1'>Solara с тобой</h6>
                        <h1 className="h5-1 d-block" style={{ color: "#273968" }}>Видео</h1>
                        <p className='p1 mt-3 float-start karusel-text'>Компания СОЛАРА предлагает широкий спектр услуг - от проектирования до монтажа и эксплуатации солнечных станций. Также компания предоставляет огромный выбор дополнительного оборудования, относящегося к солнечным панелям премиум-класса.</p>
                    </div>
                    <div className="col-8 youTubeCol">
                        <div style={{ cursor: "pointer" }}>
                            <AliceCarousel
                                mouseTracking
                                items={youTube}
                                autoPlay
                                autoPlayInterval={3000}
                                disableButtonsControls
                                disableDotsControls
                                infinite
                                responsive={responsiv}
                            />
                        </div>
                    </div>
                </div>
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
        // https://solara.uz/assets/images/e4/e42408_about-img1.png
    );
}
export default AboutCompany;