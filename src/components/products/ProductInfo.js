import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { urlMy } from "../api/api";
import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import "./productInfoStyle.css";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Input, Modal, ModalBody, ModalFooter, Row } from "reactstrap";
import AliceCarousel from "react-alice-carousel";
import Description from "./Description";
import Characteristics from "./Characteristics";
import { toast } from "react-toastify";

function ProductInfo() {

    const [productInfo, setProductInfo] = useState("");
    const [caractiristic, setCaractiristic] = useState(true);
    const [modal, setModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputValueNum, setInputValueNum] = useState('');
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        let productId = sessionStorage.getItem("productId");
        axios.get(urlMy + "Product").then(res => setProductInfo(res.data.filter(p => p.id == productId)[0]));
    }, []);

    const openModal = () => setModal(!modal);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputChangeNum = (num) => {
        setInputValueNum(num.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!inputValue || !inputValueNum) {
            setShowText(true);
            return;
        } setShowText(false);
    }

    // add clients
    function addClients() {

        const addClientObj = {
            full_name: inputValue,
            phone_number: inputValueNum,
            message: document.getElementById("message").value
        }

        axios.post(urlMy + "Review", addClientObj, {
            headers: {
                "Authorization": "Basic YWRtaW46MQ=="
            }
        }).then(() => {
            openModal();
            toast.success("✔");
        }).catch(() => {
            openModal();
            toast.error("Произошла ошибка при отправке данных❌");
        })
    }

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

    const productImgs = [
        <img key={1} className="img-fluid" src={productInfo.image_1} alt="product-image-1" />,
        <img key={2} className="img-fluid" src={productInfo.image_2} alt="product-image-2" />,
        <img key={3} className="img-fluid" src={productInfo.image_3} alt="product-image-3" />,
        <img key={4} className="img-fluid" src={productInfo.image_4} alt="product-image-4" />
    ];

    return (
        <div>

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

            <div className="box-empty"></div>

            <div className="product-info__bg text-center">
                <h3>{productInfo.title}</h3>
                <Link to="/">Главная</Link>
                <span>/ {productInfo.title}</span>
            </div>

            <Container>
                <Row className="w-100 mt-5 pt-5">
                    <Col className="col-12 col-lg-6 text-center">
                        <AliceCarousel
                            mouseTracking
                            items={productImgs}
                            autoPlay
                            autoPlayInterval={3500}
                            disableButtonsControls
                            disableDotsControls
                            infinite />
                    </Col>
                    <Col className="col-12 col-lg-6 mt-5 mt-lg-0 ps-lg-5 text-start product-info__style">
                        <h2>{productInfo.title}</h2>
                        <p>{productInfo.price} СУМ</p>
                        <div className="mt-4">
                            {productInfo.info}
                        </div>

                        <Button className="anim-button rounded-0 mt-5" onClick={openModal}>
                            Заказать сейчас
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" fill="currentColor" class="bi bi-arrow-right-short ms-2 me-0" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </Button>
                    </Col>
                </Row>

                <div className="product-description">
                    <Link onClick={() => { setCaractiristic(true) }}>Описание</Link>
                    <Link onClick={() => { setCaractiristic(false) }}>Технические xарактеристики</Link>

                    {caractiristic ? <Description /> : <Characteristics />}
                </div>
            </Container>

            {/* modal */}
            <Modal centered isOpen={modal} toggle={openModal} size='xl'>
                <ModalBody>
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
                                <textarea className='w-100 ps-3 pt-2 mt-4 form-textarea' id='message' rows="3" placeholder='Сообщение' />
                                <Button type="submit" className='modal-btn w-100 mt-4' onClick={addClients}>
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

export default ProductInfo;