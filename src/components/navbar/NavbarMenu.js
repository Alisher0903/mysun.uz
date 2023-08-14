import {
    Collapse, Navbar, NavbarBrand, Nav, NavItem, NavbarText, Button, NavbarToggler, Modal, ModalBody,
    Row, Col, Form, Input, ModalFooter,
} from 'reactstrap';
import "./menuStyle.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import nav from "./navBrend/nav.jpg"
import axios from 'axios';
import { urlMy } from '../api/api';

function NavbarMenu() {

    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputValueNum, setInputValueNum] = useState('');
    const [showText, setShowText] = useState(false);

    const openModal = () => setModal(!modal);
    const toggle = () => setIsOpen(!isOpen);


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
    // function addClientObj() {
    //     const message = document.getElementById("message").value;

    //     const addObj = new FormData();
    //     addObj.append("full_name", inputValue);
    //     addObj.append("phone_number", inputValueNum);
    //     addObj.append("message", message);
    //     return addObj;
    // }

    function addClients() {

        const addClientObj = {
            full_name: inputValue,
            phone_number: inputValueNum,
            message: document.getElementById("message").value
        }

        axios.post(urlMy + "Review/", addClientObj)
            .then(() => {
                openModal();
                toast.success("✔");
            }).catch((error) => {
                // openModal();
                toast.error("Произошла ошибка при отправке данных!", error);
            })
    }

    const telegram = () => document.getElementById("telegram").click();

    return (
        <div>
            <Link to="https://t.me/Sardor_Z877" id='telegram'></Link>
            <Navbar expand="xl" fixed='top' className='navbar-menu__brend fs-6'>
                <NavbarBrand className='me-5'>
                    <Link to="/">
                        <img src={nav} alt="navBrend" width={125} />
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} className='bg-warning' />
                <Collapse className='ms-4' navbar isOpen={isOpen}>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link to="/business">
                                <span>Для бизнеса</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/private/individuals'>
                                <span>Частным лицам</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/products">
                                <span>Продукты</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/projects">
                                <span>Проекты</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/blog">
                                <span>Блог</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about/company">
                                <span>О компании</span>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contacts">
                                <span>Контакты</span>
                            </Link>
                        </NavItem>
                    </Nav>
                    <NavbarText className='nav-menu__search'>
                        <Link to="https://t.me/Sardor_Z877">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" onClick={telegram} fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                            </svg>
                        </Link>
                        <Link to="/search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </Link>
                        <Button className='navbar-menu__btn' onClick={openModal}>
                            Оставить Заявку
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" fill="currentColor" class="bi bi-arrow-right-short ms-2 me-0" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>

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
        </div>
    );
}
export default NavbarMenu;