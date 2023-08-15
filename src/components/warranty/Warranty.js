import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import "./warranty.css";
import { Button, Col, Row } from 'react-bootstrap';
import { List } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel/lib/react-alice-carousel';

function Warranty() {

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
    function oCom() {
        document.getElementById("oCom").click();
    }
    function proect() {
        document.getElementById("proect").click();
    }

    const projects = [
        <div key={1} className='warranty-carusel'>
            <img className='img-fluid' src="https://solara.uz/assets/images/90/90f341_photo-2022-06-30-15-08-49.jpg" alt="img1" />
            <h3>Налоговый комитет</h3>
        </div>,
        <div key={2} className='warranty-carusel'>
            <img className='img-fluid' src="https://solara.uz/assets/images/66/665bf4_-.jpg" alt="img2" />
            <h3>Государственное налоговое управление</h3>
        </div>,
        <div key={3} className='warranty-carusel'>
            <img className='img-fluid' src="https://solara.uz/assets/images/77/7768b0_photo-2022-06-06-14-41-10.jpg" alt="img3" />
            <h3>Ани Продукт</h3>
        </div>,
        <div key={4} className='warranty-carusel'>
            <img className='img-fluid' src="https://solara.uz/assets/images/90/90f341_photo-2022-06-30-15-08-49.jpg" alt="img4" />
            <h3>Ташкент</h3>
        </div>
    ]
    const project = {
        0: { items: 1 },
        500: { items: 2 },
        1400: { items: 3 }
    };

    return (
        <div className='warranty-main'>
            <Link id="proect" to="/projects"></Link>
            <Link id="oCom" to="/about/company"></Link>

            <NavbarInfo />
            <NavbarMenu />

            {/* scroll btn */}
            <button id="backToTopBtn" onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 256 256">
                    <g transform="rotate(90 128 128)">
                        <path fill="white" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z" />
                    </g>
                </svg>
            </button>


            <div className="warranty-1-page">
                <h1>Warranty</h1>
                <div className='pt-3 text-center'>
                    <Link className='warranty-link' to="/">Главная</Link>
                    <p>/ Warranty</p>
                </div>
            </div>

            <Row className='w-100 warranty-box'>
                <Col className='warranty-card col-4 warranty-100'>
                    <h1 className="float-end">1</h1>
                    <img className='p-4' src="https://solara.uz/assets/images/78/78039d_garantee-icon1.png" alt="image1" />
                    <h4 className="ps-4 pb-2">25 Лет</h4>
                    <p className="ps-4">Гарантия производительности солнечных модулей</p>
                </Col>
                <Col className='warranty-card col-4 warranty-100'>
                    <h1 className="float-end">2</h1>
                    <img className='p-4' src="https://solara.uz/assets/images/66/66c288_garantee-icon2.png" alt="image2" />
                    <h4 className="ps-4 pb-2">25 Лет</h4>
                    <p className="ps-4">Гарантия производительности</p>
                </Col>
                <Col className='warranty-card col-4 warranty-100'>
                    <h1 className="float-end">3</h1>
                    <img className='p-4' src="https://solara.uz/assets/images/69/69213b_garantee-icon3.png" alt="image3" />
                    <h4 className="ps-4 pb-2">25 Лет</h4>
                    <p className="ps-4">Гарантия производительности солнечных модулей</p>
                </Col>
            </Row>
            <div className="warranty-2-page mx-4 ">
                <Row className='w-100'>
                    <Col className='col-6 warranty-text warranty-100'>
                        <div className="border bord"></div>
                        <h5 className='h5-1'>БУДУЩЕЕ - ЭТО СЕЙЧАС!</h5>
                        <h1 className="pt-2 pb-4">О компании</h1>
                        <p>
                            SOLARA - одна из самых опытных армянских компаний, работающих в области солнечной энергетики, основана в 2019 году и является официальным представителем «LA Solar Group» в Армении. Наша компания предоставляет широкий спектр услуг, от проектирования, монтажа и эксплуатации солнечных станций. Так же он предлагает широкий спектр другого оборудования, связанного с солнечными панелями премиум-класса.
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
                            Мы установили прочные партнерские отношения с ЛА Солар Груп (LA Solar Group), одной из крупнейших американских компаний, производящих солнечные панели в Армении.
                            <List>
                                <li>Качество и мощность производимых на предприятии фотоэлектрических модулей подтверждены международными сертификатами.</li>
                                <li>На всю продукцию действует гарантия 25 лет. Условная мощность солнечных панелей составляет не менее 90% за 12 лет и менее 80% за 25 лет.</li>
                                <li>Работая с робототехникой последнего поколения, мы стремимся предоставлять продукцию высокого качества.</li>
                                <li>Благодаря доверию к качеству продукции, ЛА Солар Груп  получила лицензию правительства Республики Армения на деятельность в свободной экономической зоне Альянс (Ереван, Раффи 111).</li>
                            </List>
                            <List type='unstyled'>
                                <li>Вместе с ЛА Солар Груп мы сосредоточены на разработке новейших технологий для предоставления нашей продукции высочайшего качества. СОЛАРА имеет лицензии на строительство и проектирование.</li>
                            </List>
                        </p>
                        <Button className='warranty-btn mt-4 mb-5 rounded-0' onClick={oCom}>
                            О компании
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </Button>
                    </Col>
                    <Col className='col-6 warranty-100'>
                        <Row className='w-100 warranty-two-img'>
                            <Col className='col-6 warranty-col-100'>
                                <img className='img-fluid' src="https://solara.uz/assets/images/12/12bcc3_garantee-img1.jpg" alt="image4" />
                            </Col>
                            <Col className="col-6 warranty-col-100">
                                <img className='img-fluid' src="https://solara.uz/assets/images/94/94b29b_garantee-img2.jpg" alt="image5" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='mt-5 w-100'>
                    <Col className='col-8 warranty-100'>
                        <AliceCarousel
                            mouseTracking
                            items={projects}
                            autoPlay
                            autoPlayInterval={3000}
                            disableButtonsControls
                            disableDotsControls
                            infinite
                            responsive={project}
                        />
                    </Col>
                    <Col className='col-4 warranty-proect-text warranty-100'>
                        <div className="border bord"></div>
                        <h5 className='h5-1'>Последние Проекты</h5>
                        <h1 className=' my-4'>Наши Проекты</h1>
                        <p className="mt-3">Компания SOLARA реализовала свыше 700 проектов общей мощностью 1 ГВт по всем регионам Узбекистана. Мы используем самые современные солнечные батареи, которые обладают исключительной эффективностью и позволяют экономить деньги.</p>
                        <Button className='warranty-btn mt-4 mb-5 rounded-0' onClick={proect}>
                            Больше проектов
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </div>


            <Footer />
        </div>
    );
}
export default Warranty;