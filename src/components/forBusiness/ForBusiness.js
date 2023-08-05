import { Button, Col, Container, Form, Input, Label, NavItem, NavLink, Row } from "reactstrap";
import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import "./styleBusiness.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import OnRoof from "./OnRoof";
import OnGround from "./OnGround";
import Autonomous from "./Autonomous";
import Network from "./Network"
import Footer from "../footer/Footer";
import { toast } from "react-toastify";

function ForBusiness() {

    const [onRoof, setOnRoof] = useState(true);
    const [network, setNetwork] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [inputValueEmail, setInputValueEmail] = useState('');
    const [inputValueNum, setInputValueNum] = useState('');
    const [inputValueKomp, setInputValueKomp] = useState('');
    const [showText, setShowText] = useState(false);

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
        <div className="main">
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
                <div className="section-intro">
                    <img className="img-fluid section-intro__img" src="https://solara.uz/assets/images/28/281d04_bg-buisness.jpg" alt="img" />
                    <Container className="text-center">
                        <div className="section-intro__info">
                            <h1>Комплексные решения для бизнеса в сфере солнечной энергетики</h1>
                            <p>Солнечная электростанция – надежная альтернатива традиционным источникам энергоснабжения, позволяющая экономить на электроэнергии.</p>
                            <Link to="/">Главная</Link>
                            <span className="ms-3 me-3">/</span>
                            <span>Для бизнеса</span>
                        </div>
                        {/* <div className="section-intro__icons d-none d-lg-inline">
                            <img src="https://solara.uz/images/2472_i9FkXWszVFjJhlMTmmjlz1LHbAWkawVm.svg" alt="img1" />
                            <img src="https://solara.uz/images/2473_fcAoKI8ap9D1EpDnrXizYJK_2uO-LIUv.svg" alt="img2" />
                            <img src="https://solara.uz/images/2474_MV94wBlmXJqQczUbaor-_PnnHWm-yvZx.svg" alt="img3" />
                            <img src="https://solara.uz/images/2475_7SKYiqApAN74e5lKZNzCtxahxm7_DqjV.svg" alt="img4" />
                            <img src="https://solara.uz/images/2476_iCjaJmK-UoNNzfs_Nv_LtDn9hP133eot.svg" alt="img5" />
                            <img src="https://solara.uz/images/2477_0xy3wGJ8GGQHDdGlakniUbQBPPoS2Dgw.svg" alt="img6" />
                            <img src="https://solara.uz/images/2478_Qc_sQE2XZ2HsahCYRg6qwgfLgfX7QzjR.svg" alt="img7" />
                        </div> */}
                    </Container>
                </div>
            </section>

            {/* reasons section */}
            <section id="reasons">
                <Row className="w-100">
                    <Col className="col-2 d-none d-lg-inline"></Col>
                    <Col className="col-12 col-lg-10">
                        <Container className="ps-5 pe-5">
                            <div className="section-reasons text-center">
                                <div></div>
                                <span>Для бизнеса</span>
                                <h2>Причины использовать солнечную электростанцию</h2>
                                <p>Реалии таковы, что цены на электроэнергию постоянно поднимаются. Предприниматели вынуждены
                                    искать пути оптимизации расходов, чтобы не прогореть в условиях сильной конкурентной среды.
                                    Производственные предприятия имеют возможности сэкономить путем следования программам по повышению
                                    энергоэффективности или принципам бережного производства, позволяющим не только сохранить ресурсы,
                                    но и избавиться от негативного воздействия на природу.</p>
                                <p>Статистка показывает, что пиковая активность потребления электроэнергии на предприятиях выпадает на день,
                                    а это значит, что солнечные панели являются идеальным решением для бизнеса. Дополнительное преимущество
                                    солнечных аккумуляторов в том, что с их помощью можно создать надежный резерв энергии для систем,
                                    в которых особенно ценится бесперебойное функционирование.</p>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </section>

            {/* options section */}
            <section id="options">
                <Container className="section-options">
                    <Row className="w-100">
                        <Col className="col-2 d-none d-lg-inline"></Col>
                        <Col className="col-12 col-lg-10">
                            <h3>Мы там, где требуется надёжный источник электроэнергии</h3>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <Link onClick={() => { setOnRoof(true) }}>
                            <img src="https://solara.uz/images/2479_9tDV8Lg4FC5Iq7kahaD3eE2BV-upjD95.svg" alt="img1" />
                            НА КРЫШЕ
                        </Link>
                        <Link onClick={() => { setOnRoof(false) }}>
                            <img src="https://solara.uz/images/2479_9tDV8Lg4FC5Iq7kahaD3eE2BV-upjD95.svg" alt="img2" />
                            НА ЗЕМЛЕ
                        </Link>
                    </div>
                </Container>
                {onRoof ? <OnRoof /> : <OnGround />}
            </section>

            {/* types section */}
            <section id="types" className="section-types">
                <Container className="text-center">
                    <h3>Виды подключений</h3>
                    <Link onClick={() => { setNetwork(true) }}>АВТОНОМНЫЕ</Link>
                    <Link onClick={() => { setNetwork(false) }}>СЕТЕВЫЕ</Link>

                    {network ? <Autonomous /> : <Network />}
                </Container>
            </section>

            {/* stages section */}
            <section id="stages" className="section-stages">
                <Container className="px-3">
                    <h3>Этапы реализации</h3>
                    <p className="section-stages__par">Долгосрочный договор поставки электроэнергии для промышленных предприятий.
                        Отсутствие инвестиций со стороны заказчика на этапе строительства солнечной генерации.</p>
                    <Row className="w-100 pb-5">
                        <Col className="col-2 d-none d-lg-inline"></Col>
                        <Col className="col-12 col-lg-10">
                            <Row className="w-100 mt-5 section-stage">
                                <Col className="col-12 col-sm-6 col-lg-3">
                                    <span className="stage-num">1</span><span className="stage-text ms-1">СТРОИТЕЛЬСТВО СЭС</span>
                                    <p>Поставщик строит солнечную электростанцию и синхронизирует работу с дизельной электростанцией</p>
                                </Col>
                                <Col className="col-12 col-sm-6 col-lg-3">
                                    <span className="stage-num">2</span><span className="stage-text ms-1">ЗАКЛЮЧЕНИЕ ДОГОВОРА</span>
                                    <p>Поставщик и заказчик заключили долгосрочный договор на поставку электроэнергии по фиксированной цене</p>
                                </Col>
                                <Col className="col-12 col-sm-6 col-lg-3">
                                    <span className="stage-num">3</span><span className="stage-text ms-1">ЗАПУСК И ОБСЛУЖИВАНИЕ</span>
                                    <p>Поставщик обеспечивает стабильную работу и обслуживание СЭС</p>
                                </Col>
                                <Col className="col-12 col-sm-6 col-lg-3">
                                    <span className="stage-num">4</span><span className="stage-text ms-1">ОПЛАТА ЭНЕРГИИ</span>
                                    <p>Заказчик ежемесячно оплачивает объем электроэнергии, произведенный на солнечной электростанции</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <img className="img-fluid" src="https://solara.uz/assets/images/13/13a4c4_Solar-Panel-Production.jpg" alt="img" />
            </section>

            {/* feedback section */}
            <section id="feedback" className="section-feedback">
                <Row className="w-100">
                    <Col className="col-2 d-none d-lg-inline"></Col>
                    <Col className="col-12 col-lg-10">
                        <Container>
                            <Row className="w-100 ms-3">
                                <Col className="col-5 d-none d-lg-inline feedback-img">
                                    <img className="img-fluid" src="https://solara.uz/resources/img/forbusiness-contact.jpg" alt="img" />
                                </Col>
                                <Col className="col-12 col-lg-6 ms-3">
                                    <h3 className="section-feedback__head">Хотите начать экономить?</h3>
                                    <p className="section-feedback__par">Отправьте свои данные и наши специалисты свяжутся с вами для подтверждения и уточнения заявки</p>
                                    <Form onSubmit={handleSubmit}>
                                        <Input className='rounded-0 mt-4 w-75' size="lg" type="text" value={inputValue} onChange={handleInputChange} placeholder='Полное имя' />
                                        {showText && <p className='text-danger'>
                                            Необходимо заполнить «Полное имя».
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                                <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                            </svg></p>}
                                        <Input className='rounded-0 mt-4 w-75' size="lg" type="email" value={inputValueEmail} onChange={handleInputChangeEmail} placeholder="Эл. адрес" />
                                        {showText && <p className='text-danger'>
                                            Необходимо заполнить «Эл. адрес».
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                                <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                            </svg></p>}
                                        <Input className='rounded-0 mt-4 w-75' type='number' size="lg" value={inputValueNum} onChange={handleInputChangeNum} placeholder='телефон' />
                                        {showText && <p className='text-danger'>
                                            Необходимо заполнить «Номер телефона».
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                                <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                            </svg></p>}
                                        <Input className='rounded-0 mt-4 w-75' size="lg" value={inputValueKomp} onChange={handleInputChangeKomp} placeholder="Компания" />
                                        {showText && <p className='text-danger'>
                                            Необходимо заполнить «Компания».
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" viewBox="0 0 24 24">
                                                <path fill="red" d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z" />
                                            </svg></p>}
                                        <Input type="checkbox" id="check" className="mt-4" />
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
            <Footer />
        </div>
    );
}
export default ForBusiness;