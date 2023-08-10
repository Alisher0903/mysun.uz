import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer"
import "./style.css"
import { Button, Col, Container, Form, Input, Label, NavItem, NavLink, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import OnRoof from "./OnRoof";
import OnGround from "./OnGround";
import Autonomous from "./Autonomous";
import Network from "./Networks";
import iconImg from "./img/img.jpg";
import { toast } from "react-toastify";

function PrivateIndividual() {

    const [isOpen, setIsOpen] = useState(true);
    const [isOpenAuto, setIsOpenAuto] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValueNum, setInputValueNum] = useState('');
    const [inputValueKomp, setInputValueKomp] = useState('');
    const [showText, setShowText] = useState(false);

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

    // feedback inputs
    const handleInputChange = (event) => setInputValue(event.target.value);

    const handleInputChangeEmail = (email) => setInputValueEmail(email.target.value);

    const handleInputChangeNum = (num) => setInputValueNum(num.target.value);

    const handleInputChangeKomp = (komp) => setInputValueKomp(komp.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '' || inputValueNum.trim() === '' || inputValueEmail.trim() === '' || inputValueKomp.trim() === '') {
            if (inputValue.trim() === '' && inputValueNum.trim() === '' && inputValueEmail.trim() === '' && inputValueKomp.trim() === '') {
                setShowText(true);
            } else {
                toast.error("Ошибка. Убедитесь, что вы вводите информацию полностью❌");
            }
        } else {
            toast.success('✔Ваша информация получена');
        }
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

            {/* navbar */}
            <nav className="nav-business d-none d-xl-inline">
                <ul>
                    <NavItem><NavLink href="#intro">Решения для бизнеса</NavLink></NavItem>
                    <NavItem><NavLink href="#reasons">Причины использования</NavLink></NavItem>
                    <NavItem><NavLink href="#options">Варианты решений</NavLink></NavItem>
                    <NavItem><NavLink href="#types">Виды подключений</NavLink></NavItem>
                    <NavItem><NavLink href="#stages">Этапы реализации</NavLink></NavItem>
                    <NavItem><NavLink href="#feedback">Обратная связь</NavLink></NavItem>
                </ul>
            </nav>

            {/* intro section */}
            <section id="intro">
                <div className="individual-intro">
                    <Container className="text-center">
                        <div className="individual-intro__info">
                            <h1>Надежный источник энергии для вашего дома</h1>
                            <p>Солнечная энергия – это альтернативный источник энергоснабжения,
                                гарантирующий стабильное питание вашего дома и существенное снижение затрат на электроэнергию.</p>
                            <Link to="/">Главная</Link>
                            <span className="ms-3 me-3">/</span>
                            <span>Частным лицам</span>
                        </div>
                    </Container>
                </div>
            </section>

            {/* reasons section */}
            <section id="reasons">
                <Row className="w-100">
                    <Col className="col-2 d-none d-lg-inline"></Col>
                    <Col className="col-12 col-lg-10">
                        <Container className="ps-3 ps-lg-5 pe-3 pe-lg-5">
                            <div className="individual-reasons__one text-center">
                                <div className="span-blur"></div>
                                <span className="span-text">Для частных лиц</span>
                                <h2>Причины использовать солнечную электростанцию</h2>
                                <p>Солнечная станция является экологически чистым, экономичным и надежным источником электроснабжения вашего жилья. Компания СОЛАРА предлагает готовую продукцию для частного дома, что позволяет значительно сократить время на выбор техники.</p>
                                <p>В линейке готовых решения от SOLARA представлены разнообразные варианты автономного, автономного гибридного и сетевого электрооборудования. Доверьтесь подбору оптимального комплекта для вас высококвалифицированными инженерами SOLARA.</p>
                            </div>
                            <div className="individual-reasons__two text-center">
                                <h3>Электростанция поможет</h3>
                                <img className="img-fluid" src={iconImg} alt="img" />
                            </div>
                            <div className="individual-reasons__tree">
                                <h4>МЕТОДЫ ПОЛУЧЕНИЯ ДОХОДА ОТ СОЛНЕЧНОЙ ЭНЕРГИИ</h4>
                                <p>Обычно энергия, которую генерирует солнечная станция в дневном режиме, предназначена для собственного потребления дома в приоритетном порядке. В случае отсутствия потребления дома или избыточного энергопотребления все неиспользованные солнечные электроэнергии можно отдать в центральную сеть по той же тарифной стоимости, по которой вы покупаете солнечную энергию у энергоснабжающей компании.
                                    Если этот объем превысит этот объем, то продажа электрической энергии будет производиться по оптовым тарифам.</p>
                                <img className="img-fluid" src="https://solara.uz/assets/images/4f/4f2b63_ru.png" alt="img" />
                                <p className="mt-3 mb-0">Всё это позволит владельцу снизить расходы на электроэнергию, потребляемую из сети не только с использованием солнечной энергии в дневном режиме, но также и отдать избытки в сети на выгодных для него условиях, а даже зарабатывать.</p>
                                <p className="mt-4">Днем рабочего времени потребление минимально, а солнечная станция работает максимум, вы отдаете электричество в сети, а вечером – забираете полученную ранее энергию назад.</p>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </section>

            {/* options section */}
            <section id="options">
                <div className="individual-options">
                    <Row className="w-100">
                        <Col className="col-2 d-none d-lg-inline"></Col>
                        <Col className="col-12 col-lg-10">
                            <h3>Что входит в комплект</h3>
                            <Row className="w-100">
                                <Col className="col-12 col-sm-6 col-md-4">
                                    <ul>
                                        <li><p>Солнечные модули</p></li>
                                        <li><p>АКБ <p>(для автономных комплектов)</p></p></li>
                                        <li><p>Контроллер</p></li>
                                    </ul>
                                </Col>
                                <Col className="col-12 col-sm-6 col-md-4">
                                    <ul>
                                        <li><p>Электрический щит</p></li>
                                        <li><p>Солнечный кабель</p></li>
                                        <li><p>Опорные конструкции <p>(опционально)</p></p></li>
                                    </ul>
                                </Col>
                                <Col className="col-12 col-sm-6 col-md-4">
                                    <ul>
                                        <li><p>MC4 коннекторы</p></li>
                                        <li><p>Инвертор</p></li>
                                    </ul>
                                </Col>
                            </Row>
                            <img className="img-fluid mt-4 mb-5 pb-5 d-none d-lg-inline" src="https://solara.uz/resources/img/forindividual-img2.jpg" alt="img" />
                            <img className="img-fluid mt-4 mb-5 pb-5 d-inline d-lg-none" src="https://solara.uz/resources/img/b2c_complect_mob.png" alt="lgImg" />
                        </Col>
                    </Row>
                </div>
            </section>

            {/* types section */}
            <section id="types">
                <div className="individual-types text-center">
                    <h3>Варианты размещения</h3>
                    <Link className="d-inline me-4" onClick={() => { setIsOpen(true) }}>
                        <img src="https://solara.uz/images/2479_9tDV8Lg4FC5Iq7kahaD3eE2BV-upjD95.svg" alt="img" />
                        <span className="ms-2">НА КРЫШЕ</span>
                    </Link>
                    <Link className="d-inline ms-4" onClick={() => { setIsOpen(false) }}>
                        <img src="https://solara.uz/images/2479_9tDV8Lg4FC5Iq7kahaD3eE2BV-upjD95.svg" alt="img2" />
                        <span className="ms-2">НА ЗЕМЛЕ</span>
                    </Link>
                    {isOpen ? <OnRoof /> : <OnGround />}
                </div>
            </section>

            {/* stages section */}
            <section id="stages">
                <div className="text-center individual-stages">
                    <h3>Виды подключений</h3>
                    <Link className="d-inline me-4" onClick={() => { setIsOpenAuto(true) }}>АВТОНОМНЫЕ</Link>
                    <Link className="d-inline ms-4" onClick={() => { setIsOpenAuto(false) }}>СЕТЕВЫЕ</Link>
                    {isOpenAuto ? <Autonomous /> : <Network />}
                </div>
            </section>

            {/* feedback section */}
            <section id="feedback" className="business-feedback">
                <Row className="w-100">
                    <Col className="col-2 d-none d-lg-inline"></Col>
                    <Col className="col-12 col-lg-10">
                        <Container>
                            <Row className="w-100 ms-3">
                                <Col className="col-5 d-none d-lg-inline feedback-img">
                                    <img className="img-fluid" src="https://solara.uz/resources/img/forbusiness-contact.jpg" alt="img" />
                                </Col>
                                <Col className="col-12 col-lg-6 ms-3">
                                    <h3 className="business-feedback__head">Хотите начать экономить?</h3>
                                    <p className="business-feedback__par">Отправьте свои данные и наши специалисты свяжутся с вами для подтверждения и уточнения заявки</p>
                                    <Form onSubmit={handleSubmit}>
                                        <Input className='rounded-0 mt-4 w-75' size="lg" type="text" value={inputValue} onChange={handleInputChange} placeholder='Полное имя' />
                                        {showText && <p className='text-danger fs-6'>
                                            Необходимо заполнить «Полное имя».
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                                <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                            </svg></p>}
                                        <Input className='rounded-0 mt-4 w-75' size="lg" type="email" value={inputValueEmail} onChange={handleInputChangeEmail} placeholder="Эл. адрес" />
                                        {showText && <p className='text-danger fs-6'>
                                            Необходимо заполнить «Эл. адрес».
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                                <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                            </svg></p>}
                                        <Input className='rounded-0 mt-4 w-75' type='number' size="lg" value={inputValueNum} onChange={handleInputChangeNum} placeholder='телефон' />
                                        {showText && <p className='text-danger fs-6'>
                                            Необходимо заполнить «Номер телефона».
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                                <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                            </svg></p>}
                                        <Input className='rounded-0 mt-4 w-75' size="lg" value={inputValueKomp} onChange={handleInputChangeKomp} placeholder="Компания" />
                                        {showText && <p className='text-danger fs-6'>
                                            Необходимо заполнить «Компания».
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                                <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                            </svg></p>}
                                        <Input type="checkbox" id="check" className="mt-4 d-inline-block p-2" />
                                        <Label className="check ms-2" for="check">Согласен с <Link to="https://solara.uz/ru/site/privacy-policy">ПОЛИТИКОЙ КОНФИДЕНЦИАЛЬНОСТИ</Link></Label>
                                        <Button type="submit" className='animated-button__two d-block rounded-0 mt-3'>
                                            Оставить Заявку
                                            <svg xmlns="http://www.w3.org/2000/svg" width="22" fill="currentColor" class="bi bi-arrow-right-short ms-2 me-0" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </Button>
                                    </Form>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </section>

            {/* footer */}
            <Footer />
        </div>
    );
}
export default PrivateIndividual;