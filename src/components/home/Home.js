import { Button, Col, Form, Input, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import "./style.css"
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { toast } from "react-toastify";
import Footer from "../footer/Footer";

function Home() {

    const [inputValue, setInputValue] = useState('');
    const [inputValueNum, setInputValueNum] = useState('');
    const [showText, setShowText] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    const openModal = () => setModal(!modal);

    // modal js
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputChangeNum = (num) => {
        setInputValueNum(num.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '' || inputValueNum.trim() === '') {
            if (inputValue.trim() === '' && inputValueNum.trim() === '') {
                setShowText(true);
            } else {
                toast.error("Ошибка. Убедитесь, что вы вводите информацию полностью❌");
            }
        } else {
            toast.success('✔Ваша информация получена');
        }
    };

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

    // aliceCarousel
    const items = [
        <div key={1} className="slider-item ms-4">
            <a href="https://solara.uz/ru/projects/ani-product-ru">
                <img className="img-fluid" src="https://solara.uz/assets/images/6d/6d8905_03.jpg" alt="img1" />
            </a>
            <div className="blog-content">
                <h3><a href="https://solara.uz/ru/projects/ani-product-ru">Ани Продукт</a></h3>
            </div>
        </div>,
        <div key={2} className="slider-item ms-4">
            <a href="https://solara.uz/ru/projects/tashkent-ru">
                <img className="img-fluid" src="https://solara.uz/assets/images/77/7768b0_photo-2022-06-06-14-41-10.jpg" alt="img2" />
            </a>
            <div className="blog-content">
                <h3><a href="https://solara.uz/ru/projects/tashkent-ru">Ташкент</a></h3>
            </div>
        </div>,
        <div key={3} className="slider-item ms-4">
            <a href="https://solara.uz/ru/projects/nalogovi-komitet">
                <img className="img-fluid" src="https://solara.uz/assets/images/90/90f341_photo-2022-06-30-15-08-49.jpg" alt="img3" />
            </a>
            <div className="blog-content">
                <h3><a href="https://solara.uz/ru/projects/nalogovi-komitet">Налоговый комитет</a></h3>
            </div>
        </div>,
        <div key={4} className="slider-item ms-4">
            <a href="https://solara.uz/ru/projects/gosudarstvennoe-nalogovoe-upravlenie">
                <img className="img-fluid" src="https://solara.uz/assets/images/66/665bf4_-.jpg" alt="img4" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/projects/gosudarstvennoe-nalogovoe-upravlenie">
                        Государственное налоговое управление
                    </a>
                </h3>
                <p>Установка солнечных панелей</p>
            </div>
        </div>
    ];

    // aliceCarousel2
    const itemsTwo = [
        <div key={1} className="slider-item ms-4">
            <a href="https://solara.uz/ru/blog/sdelay-shag-k-solncu">
                <img className="img-fluid" src="https://solara.uz/assets/images/61/612356_Solar-Systems.jpg" alt="img1" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/blog/sdelay-shag-k-solncu">
                        Сделай шаг к солнцу. Солнечные электростанции под ключ
                    </a>
                </h3>
                <p>Топ 5 альтернатив солнечной энергии!</p>
            </div>
        </div>,
        <div key={2} className="slider-item ms-4">
            <a href="https://solara.uz/ru/blog/kabmin-pereshol-na-solnechnuyu-energiyu">
                <img className="img-fluid" src="https://solara.uz/assets/images/84/84fca7_Solar-Panels-in-the-Building-of-the-Cabinet-of-Ministers-Uzbekistan.jpg" alt="img2" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/blog/kabmin-pereshol-na-solnechnuyu-energiyu">
                        Кабмин перешёл на солнечную энергию
                    </a>
                </h3>
                <p>На территории Кабинета Министров Узбекистана в Ташкенте запущена солнечная фотоэлектрическая станция мощностью 630 кВт.
                    Он способен вырабатывать более 1,1 млн кВтч электроэнергии в год, сообщила пресс-служба Минэнерго.</p>
            </div>
        </div>,
        <div key={3} className="slider-item ms-4">
            <a href="https://solara.uz/ru/blog/vozobnovlyayemyye-istochniki-energii-v-tashkente">
                <img className="img-fluid" src="https://solara.uz/assets/images/ea/eaa6a0_-1-billion-for-the-introduction-of-renewable-energy.jpg" alt="img3" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/blog/vozobnovlyayemyye-istochniki-energii-v-tashkente">
                        1 млрд долларов направят на внедрение возобновляемых источников энергии в Ташкенте
                    </a>
                </h3>
                <p>На внедрение возобновляемых источников энергии в столице Узбекистана планируется направить 1 млрд долларов, заявил президент. На зданиях и других объектах будут установлены солнечные панели. Государство будет гарантированно покупать излишки энергии у населения и бизнеса.</p>
            </div>
        </div>,
        <div key={4} className="slider-item ms-4">
            <a href="https://solara.uz/ru/blog/ustanovku-solnechnykh-paneley-v-gos-organizatsiyakh-tashkenta">
                <img className="img-fluid" src="https://solara.uz/assets/images/af/af98dd_Solar-Panels.jpg" alt="img4" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/blog/ustanovku-solnechnykh-paneley-v-gos-organizatsiyakh-tashkenta">
                        Более 400 млрд сумов направят на установку солнечных панелей в госорганизациях Ташкента
                    </a>
                </h3>
                <p>В Ташкенте на установку солнечных панелей в 1063 организациях, финансируемых из бюджетов города и районов (детские сады, школы, больницы, бюджетные организации), планируется направить 390 млрд сумов. Это предусмотрено решением столичного кенгаша народных депутатов от 20 февраля</p>
            </div>
        </div>,
        <div key={5} className="slider-item ms-4">
            <a href="https://solara.uz/ru/blog/namangan-oborudovan-solnechnymi-panelyami">
                <img className="img-fluid" src="https://solara.uz/assets/images/31/319b3d_Solar-Panels.jpg" alt="img5" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/blog/namangan-oborudovan-solnechnymi-panelyami">
                        Четыре жилых дома в Намангане оснащены солнечными панелями
                    </a>
                </h3>
                <p>В Намангане солнечные панели общей мощностью 58 киловатт установлены на крышах четырех домов, где расположены 96 квартир, сообщила пресс-служба Министерства энергетики</p>
            </div>
        </div>,
        <div key={6} className="slider-item ms-4">
            <a href="https://solara.uz/ru/blog/zdaniya-v-uzbekistane-budut-zanyaty-solnechnymi-panelyami">
                <img className="img-fluid" src="https://solara.uz/assets/images/b1/b1d885_Solar-Panels.jpg" alt="img6" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/blog/zdaniya-v-uzbekistane-budut-zanyaty-solnechnymi-panelyami">
                        Минимум 50% крыш новых многоэтажек в Узбекистане займут солнечные панели
                    </a>
                </h3>
                <p>С 1 мая в Узбекистане вводится требование установки солнечных панелей на не менее 50% свободной части крыши сдаваемых в эксплуатацию многоэтажных домов</p>
            </div>
        </div>,
        <div key={7} className="slider-item ms-4">
            <a href="https://solara.uz/ru/blog/RENWEX+2021+%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F+%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0+%D0%B8+%D1%84%D0%BE%D1%80%D1%83%D0%BC">
                <img className="img-fluid" src="https://solara.uz/assets/images/21/21beb3_Renwex-Solara.jpg" alt="img7" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/blog/RENWEX+2021+%D0%9C%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D0%B0%D1%8F+%D0%B2%D1%8B%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0+%D0%B8+%D1%84%D0%BE%D1%80%D1%83%D0%BC">
                        RENWEX 2021 Международная выставка и форум
                    </a>
                </h3>
                <p>Moscow Solar Group 22-24 июня приглашает всех в Международный форум-выставка RENWEX 2021 «Возобновляемая энергия и электромобили».</p>
            </div>
        </div>,
        <div key={8} className="slider-item ms-4">
            <a href="https://solara.uz/ru/blog/solnechnaya-energia-dlya-doma-i-biznesa">
                <img className="img-fluid" src="https://solara.uz/assets/images/08/080fcd_Solar-Panels.jpg" alt="img8" />
            </a>
            <div className="blog-content">
                <h3>
                    <a href="https://solara.uz/ru/blog/solnechnaya-energia-dlya-doma-i-biznesa">
                        Солнечная энергия для вашего дома и бизнеса
                    </a>
                </h3>
                <p>Солнечная энергия считается самой популярной среди альтернативных источников энергии. Установка солнечных панелей, в первую очередь, позволяет добиться бесперебойной работы электроснабжения, исключить перебои или аварии на линиях электропередач, а также снизить затраты на электроэнергию.</p>
            </div>
        </div>

    ];

    // partner
    const itemPartner = [
        <div key={1} className="partner-item">
            <a href="/" target="_blank">
                <img src="https://solara.uz/assets/images/60/60ec00_home-partner1.png" alt="img1" />
            </a>
        </div>,
        <div key={2} className="partner-item">
            <a href="/" target="_blank">
                <img src="https://solara.uz/assets/images/ce/cec672_home-partner2.png" alt="img2" />
            </a>
        </div>,
        <div key={3} className="partner-item">
            <a href="/" target="_blank">
                <img src="https://solara.uz/assets/images/0b/0b1d24_home-partner3.png" alt="img3" />
            </a>
        </div>,
        <div key={4} className="partner-item">
            <a href="/" target="_blank">
                <img src="https://solara.uz/assets/images/12/128357_home-partner4.png" alt="img4" />
            </a>
        </div>,
        <div key={5} className="partner-item">
            <a href="/" target="_blank">
                <img src="https://solara.uz/assets/images/2e/2e63bd_home-partner5.png" alt="img5" />
            </a>
        </div>
    ];

    const responsive = {
        0: { items: 1 },
        600: { items: 2 },
        1200: { items: 3 }
    };

    const responsivePartner = {
        0: { items: 1 },
        400: { items: 2 },
        1000: { items: 4 }
    }

    // links
    const linkId = () => document.getElementById("home__linkId").click();
    const business = () => document.getElementById("business").click();
    const individuals = () => document.getElementById("individuals").click();
    const aboutCompany = () => document.getElementById("about_company").click();
    const ourProjects = () => document.getElementById("projects").click();
    const blog = () => document.getElementById("blog").click();
    const warranty = () => document.getElementById("warranty").click();

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

            <Link to="/" id="home__linkId"></Link> {/* home link */}
            <Link to="/business" id="business"></Link> {/* business link */}
            <Link to="/private/individuals" id="individuals"></Link>  {/* individuals link */}
            <Link to="/warranty" id="warranty"></Link>  {/*Warranty link*/}
            <Link to="/about/company" id="about_company"></Link>  {/* About the company link */}
            <Link to="/projects" id="projects"></Link>  {/* Projects link */}
            <Link to="/blog" id="blog"></Link>  {/* Blog link */}

            <div className="box-empty"></div>

            {/* home carousel */}
            <div className="home-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="https://solara.uz/assets/images/83/8308df_azzaq.jpg" alt="img1" />
                        <Carousel.Caption>
                            <h1 data-aos="fade-down"
                                data-aos-easing="linear">Сделай шаг к солнцу</h1>
                            <Row className="home-carousel__btn">
                                <Col className="col-12 mb-3 col-md-6 mb-md-0">
                                    <Button className="rounded-0 float-md-end mt-0 animated-button" onClick={linkId}>
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                                <Col className="col-12 col-md-6">
                                    <Button className="rounded-0 animated-button__two float-md-start" onClick={openModal}>
                                        Оставить Заявку
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="https://solara.uz/assets/images/b1/b1ef71_solar-academy-solara.jpg" alt="img2" />
                        <Carousel.Caption>
                            <h1 data-aos="fade-down" data-aos-easing="linear">Солнечные <br /> электростанции под ключ</h1>
                            <Row className="home-carousel__btn" data-aos="fade-up">
                                <Col className="col-12 mb-3 col-md-6 mb-md-0">
                                    <Button className="rounded-0 mt-0 animated-button float-md-end" onClick={linkId}>
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                                <Col className="col-12 col-md-6">
                                    <Button className="rounded-0 animated-button__two float-md-start" onClick={openModal}>
                                        Оставить Заявку
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="https://solara.uz/assets/images/f0/f0da48_solar-panel-and-inverter.jpg" alt="img3" />
                        <Carousel.Caption>
                            <h1 data-aos="fade-down" data-aos-easing="linear">Готовые решения для <br /> вашего дома</h1>
                            <Row className="home-carousel__btn" data-aos="fade-up">
                                <Col className="col-12 mb-3 col-md-6 mb-md-0">
                                    <Button className="rounded-0 mt-0 animated-button float-md-end" onClick={linkId}>
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                                <Col className="col-12 col-md-6">
                                    <Button className="rounded-0 animated-button__two float-md-start" onClick={openModal}>
                                        Оставить Заявку
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="https://solara.uz/assets/images/44/44d046_Homepage-slider.jpg" alt="img4" />
                        <Carousel.Caption>
                            <h1 data-aos="fade-down" data-aos-easing="linear">Солнечные <br /> электростанции под ключ</h1>
                            <Row className="home-carousel__btn" data-aos="fade-up">
                                <Col className="col-12 mb-3 col-md-6 mb-md-0">
                                    <Button className="rounded-0 mt-0 animated-button float-md-end" onClick={linkId}>
                                        Подробнее
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                                <Col className="col-12 col-md-6">
                                    <Button className="rounded-0 animated-button__two float-md-start" onClick={openModal}>
                                        Оставить Заявку
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100"
                            src="https://solara.uz/assets/images/f8/f8fa9f_Taking-Advantage-of-the-Sun.jpg" alt="img5" />
                        <Carousel.Caption>
                            <h1 data-aos="fade-down" data-aos-easing="linear" style={{ color: "white" }}>TAKE ADVANTAGE OF THE <br /> UZBEKISTAN SUN</h1>
                            <Row className="home-carousel__btn">
                                <Col className="col-12 mb-3 col-md-6 mb-md-0">
                                    <Button className="rounded-0 mt-0 animated-button float-md-end" onClick={linkId}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                                <Col className="col-12 col-md-6">
                                    <Button className="rounded-0 animated-button__two float-md-start" onClick={openModal}>
                                        Оставить Заявку
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                        </svg>
                                    </Button>
                                </Col>
                            </Row>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* business and individuals */}
            <div className="mt-5 mb-5">
                <div className="text-center pt-5">
                    <div className="span-blur"></div>
                    <span className="span-text">Инновационные солнечные решения</span>
                    <h1 className="we-offer">Что мы предлагаем</h1>
                    <p className="guarantee">
                        Мы предлагаем высококачественную продукцию, качественный сервис и 25 <br />
                        летнюю гарантию на солнечные электростанции
                    </p>
                </div>
                <Row className="mt-5 w-100">
                    <Col className="col-12 col-lg-4">
                        <div className="home-business ms-4 ms-lg-5 mt-5 ps-lg-5">
                            <img src="https://solara.uz/assets/images/d1/d1324f_home-icon1.png" alt="img-icon" />
                            <h3 className="mt-3">Для бизнеса</h3>
                            <p className="mt-3">
                                Комплексные решения в области солнечной энергетики для бизнеса станут отличным способом, позволяющим экономить на электроэнергии
                            </p>
                            <Button className="rounded-0 mt-5 me-0 me-lg-5 float-end animated-button" onClick={business}>
                                Для бизнеса
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </Button>
                        </div>
                    </Col>
                    <Col className="text-center mt-5 mt-lg-0 ms-2 ms-lg-0 col-12 col-lg-4">
                        <img src="https://solara.uz/resources/img/home-business.png" alt="business.png" className="img-fluid" />
                    </Col>
                    <Col className="col-12 col-lg-4">
                        <div className="home-business ms-4 ms-lg-5 mt-5 me-0 me-lg-5">
                            <img src="https://solara.uz/assets/images/7b/7be249_home-icon2.png" alt="img-icon2" />
                            <h3 className="mt-3">Частным Лицам</h3>
                            <p className="mt-3">
                                Переход на альтернативную энергетику, гарантирует стабильное питание вашего дома и существенно снижает затраты на электроэнергию
                            </p>
                            <Button className="rounded-0 mt-5 me-0 me-lg-5 float-end animated-button" onClick={individuals}>
                                Частным Лицам
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* statistica */}
            <div className="statistics">
                <div className="container statistic-box py-4">
                    <Row className="text-center w-100">
                        <Col className="col-6 col-md-6 col-lg-3">
                            <h2>765+</h2>
                            <p>УСТАНОВКИ</p>
                        </Col>
                        <Col className="col-6 col-md-6 col-lg-3">
                            <h2>94Вт/ч</h2>
                            <p>ВЫРАБОТКА ЭЛЕКТРОЭНЕРГИИ</p>
                        </Col>
                        <Col className="col-6 col-md-6 col-lg-3">
                            <h2>72млн</h2>
                            <p>ЭКОНОМИЯ</p>
                        </Col>
                        <Col className="col-6 col-md-6 col-lg-3">
                            <h2>523</h2>
                            <p>КЛИЕНТОВ</p>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* guarantee */}
            <div className="mt-5 ">
                <Row className="w-100">
                    <Col className="col-12 col-lg-4">
                        <div className="ms-2">
                            <div className="guarantee__head">
                                <div className="span-blur"></div>
                                <span className="span-text">Наше Прпреимущества</span>
                                <h1 className="we-offer mt-4">Гарантия</h1>
                            </div>
                            <p className="guarantee">
                                Солнечные решения от компании СОЛАРА - это гарантия качества и эффективности на долгий срок.
                                Мы предоставляем гарантию 25 лет на солнечные панели, 10 лет на солнечные инверторы,
                                10 лет на аккумуляторы, 5 лет на солнечные водонагреватели
                            </p>
                            <Button className="rounded-0 animated-button__two mt-4" onClick={warranty}>
                                Подробнее
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </Button>
                        </div>
                    </Col>
                    <Col className="ms-lg-0 ms-2 me-5 mt-5 mt-lg-0 col-12 col-lg-7 guarantee-carousels">
                        <Carousel>
                            <Carousel.Item>
                                <div className="guarantee-carousel">
                                    <img className="d-block" src="https://solara.uz/assets/images/6f/6f6406_Inverter.jpg" alt="img1" />
                                </div>
                                <h3>Инвертор</h3>
                                <p>25 Лет Гарантии</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="guarantee-carousel">
                                    <img className="d-block" src="https://solara.uz/assets/images/88/88d8a5_Tesla-Powerwall.jpg" alt="img2" />
                                </div>
                                <h3>Тесла Пауэрволл</h3>
                                <p>25 Лет Гарантии</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="guarantee-carousel">
                                    <img className="d-block" src="https://solara.uz/assets/images/97/97811c_Productivity.jpg" alt="img3" />
                                </div>
                                <h3>Производительность</h3>
                                <p>25 Лет Гарантии</p>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="guarantee-carousel">
                                    <img className="d-block" src="https://solara.uz/assets/images/22/2232cb_Solar-Panels.jpg" alt="img4" />
                                </div>
                                <h3>Солнечные Панели</h3>
                                <p>25 Лет Гарантии</p>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>

            {/* company benefits */}
            <div className="company-benefits">
                <div className="company-benefit">
                    <Row className="w-100">
                        <Col className="col-12 d-none d-lg-inline">
                            <img className="float-end me-5" style={{ marginTop: "-2.4rem" }}
                                src="https://solara.uz/resources/img/video-shape-2.png" alt="img1" />
                        </Col>
                        <Col className="col-12">
                            <div className="company-benefits__box">
                                <div className="span-blur"></div>
                                <span className="span-text">Наши Преимущества</span>
                                <h2>Выбирайте нашу компанию</h2>
                                <Button className="animated-button rounded-0 mt-4" onClick={aboutCompany}>Посмотреть Сейчас</Button>
                            </div>
                        </Col>
                        <Col className="col-12 d-none d-lg-inline">
                            <img className="ms-5 ps-4" style={{ marginTop: ".5rem" }}
                                src="https://solara.uz/resources/img/video-shape-1.png" alt="img2" />
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Our production */}
            <div className="pt-0 pt-lg-5">
                <div className="text-center section-production">
                    <div className="span-blur"></div>
                    <span className="span-text">Ваше солнечное будущее</span>
                    <h1 className="we-offer mt-3">Наша продукция</h1>
                </div>
                <Row className="w-100 mt-5 ps-5 pe-4">
                    <Col className="col-12 col-lg-6 mt-3">
                        <Link to="https://solara.uz/ru/products/solnechnie-batareya-ls-450-bl" style={{ textDecoration: "none" }}>
                            <div className="mt-3 production-box  production-1">
                                <img className="w-100" src="https://solara.uz/assets/images/bb/bb6d96_Productivity.jpg" alt="img1" />
                            </div>
                            <span className="production-box__span">Солнечные станция</span>
                        </Link>
                    </Col>
                    <Col className="col-12 col-lg-6">
                        <Row className="w-100">
                            <Col className="col-12 col-md-6">
                                <Link to="https://solara.uz/ru/products/solnechnie-batareya-la-450wt" style={{ textDecoration: "none" }}>
                                    <div className="mt-3 production-box">
                                        <img className="w-100" src="https://solara.uz/assets/images/f7/f78ecd_628667-01.jpg" alt="img2" />
                                    </div>
                                    <span className="production-box__span">Солнечные батарея LS450HC</span>
                                </Link>
                            </Col>
                            <Col className="col-12 col-md-6">
                                <Link to="https://solara.uz/ru/products/invertor-solis-1P4K-4G" style={{ textDecoration: "none" }}>
                                    <div className="mt-3 production-box">
                                        <img className="w-100" src="https://solara.uz/assets/images/38/386e9a_Inverter-Solis-1P4K-4G.jpg" alt="img3" />
                                    </div>
                                    <span className="production-box__span">Инвертор Солис 1П4К-4Г</span>
                                </Link>
                            </Col>
                            <Col className="col-12 col-md-6">
                                <Link to="https://solara.uz/ru/products/invertor-solis-1P5K-4G" style={{ textDecoration: "none" }}>
                                    <div className="mt-3 production-box">
                                        <img className="w-100" src="https://solara.uz/assets/images/9e/9e6972_Inverter-Solis-1P5K-4G.jpg" alt="img4" />
                                    </div>
                                    <span className="production-box__span">Инвертор Солис 1П5К-4Г</span>
                                </Link>
                            </Col>
                            <Col className="col-12 col-md-6">
                                <Link to="https://solara.uz/ru/products/invertor-solis-1P6K-4G" style={{ textDecoration: "none" }}>
                                    <div className="mt-3 production-box">
                                        <img className="w-100" src="https://solara.uz/assets/images/8d/8d9a12_Inverter-Solis-1P6K-4G.jpg" alt="img5" />
                                    </div>
                                    <span className="production-box__span">Инвертор Солис 1П6К-4Г</span>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>

            {/* Our projects */}
            <div className="mt-5 pt-5">
                <Row className="w-100">
                    <Col className="col-12 col-lg-8">
                        <AliceCarousel
                            mouseTracking
                            items={items}
                            autoPlay
                            autoPlayInterval={3000}
                            disableButtonsControls
                            disableDotsControls
                            infinite
                            responsive={responsive}
                        />
                    </Col>
                    <Col className="mt-4 mt-lg-0 col-12 col-lg-4 pe-4 pe-lg-0 ms-3 ms-lg-0 px-lg-2">
                        <div className="project-home__info">
                            <div className="span-blur"></div>
                            <span className="span-text">Последние Проекты</span>
                            <h1 className="we-offer mt-3 fw-bold">Наши Проекты</h1>
                        </div>
                        <p style={{ fontSize: "1rem" }}>
                            Компания SOLARA реализовала свыше 700 проектов общей мощностью 1 ГВт по всем регионам Узбекистана.
                            Мы используем самые современные солнечные батареи, которые обладают исключительной эффективностью и
                            позволяют экономить деньги.
                        </p>
                        <Button className="animated-button project-home__button rounded-0 mt-3" onClick={ourProjects}>
                            Больше проектов
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>
            </div>

            {/* News and Events */}
            <div className="mt-5 pt-5">
                <Row className="w-100">
                    <Col className="ms-3">
                        <div className="project-home__info">
                            <div className="span-blur"></div>
                            <span className="span-text">Свежие новости</span>
                            <h1 className="we-offer mt-3 fw-bold">Новости и события</h1>
                        </div>
                        <p style={{ fontSize: "1rem" }}>
                            Следите за нашими новостями и будьте в курсе наших специальных предложений и последних тенденций использования солнечных энергии в Ташкент и в других регионах страны.
                        </p>
                        <Button className="animated-button project-home__button rounded-0 mt-3" onClick={blog}>
                            Посмотреть Все
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </Button>
                    </Col>
                    <Col className="col-lg-8 mt-5 mt-lg-0">
                        <AliceCarousel
                            mouseTracking
                            items={itemsTwo}
                            autoPlay
                            autoPlayInterval={3500}
                            disableButtonsControls
                            disableDotsControls
                            infinite
                            responsive={responsive}
                        />
                    </Col>
                </Row>
            </div>

            {/* Our partners */}
            <div className="mt-5 pt-5 text-center container">
                <div className="home-partner__info">
                    <div className="span-blur"></div>
                    <span className="span-text">Уверенность и стабильность</span>
                    <h1 className="we-offer mt-3 fw-bold">Наши Партнеры</h1>
                </div>
                <AliceCarousel
                    items={itemPartner}
                    mouseTracking
                    autoPlay
                    autoPlayInterval={4000}
                    disableButtonsControls
                    disableDotsControls
                    infinite
                    responsive={responsivePartner} />
            </div>

            {/* modal */}
            <Modal centered isOpen={modal} toggle={openModal} size='xl'>
                <ModalBody toggle={openModal}>
                    <Row>
                        <Col className="col-12 col-lg-6 ps-2">
                            <img className='img-fluid img-thumbnail modal-image rounded-4' src="https://solara.uz/resources/img/quote-img.jpg" alt="modalImg" />
                        </Col>
                        <Col className='px-5 py-4 col-lg-6'>
                            <div className='text-center'>
                                <div className="span-blur__nav"></div>
                                <span className="span-text__nav">Оставить Заявку</span>
                                <h1 className="we-offer__nav">Получите консультацию</h1>
                                <p className='we-offer__p'>Заполните Простую Форму И Наши Специалисты Свяжутся С Вами В Рабочее Время</p>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Input className='rounded-0 mt-5' size="lg" type="text" value={inputValue} onChange={handleInputChange} placeholder='Полное имя' />
                                {showText && <p className='text-danger'>
                                    Необходимо заполнить «Полное имя».
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                        <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                    </svg>
                                </p>}
                                <Input className='rounded-0 mt-4' type='number' size="lg" value={inputValueNum} onChange={handleInputChangeNum} placeholder='Номер телефона' />
                                {showText && <p className='text-danger'>
                                    Необходимо заполнить «Номер телефона».
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                        <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                    </svg>
                                </p>}
                                <textarea className='w-100 ps-3 pt-2 mt-4 form-textarea' rows="3" placeholder='Сообщение' />
                                <Button type="submit" className='modal-btn mt-4'>
                                    Получить бесплатную консультацию
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" fill="currentColor" class="bi bi-arrow-right-short ms-2 me-0" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                    </svg>
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button className='anim-button rounded-0' onClick={openModal}>Назад</Button>
                </ModalFooter>
            </Modal>
            <Footer />
        </div>
    );
}

export default Home;