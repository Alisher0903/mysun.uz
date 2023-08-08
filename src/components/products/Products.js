import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import "./style.css";
import productJson from "./productJson.json";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";

function Products() {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    // json ulash
    function getProduct() {
        setProduct(productJson);
    }

    function filtirProduct(categoryId) {
        setProduct(productJson.filter(product => product.category === categoryId));
    }

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

            <div className="proMain projek">
                    <h1 className='h12'>Продукты</h1>
                    <div className='pt-3 text-center'>
                        <Link className='link2 mms' to="/">Главная</Link>
                        <span className='p1-1'>/ Продукты</span>
                    </div>
                </div>

            <Container>
                <div className="product-btn mt-5">
                    <Button onClick={getProduct}>Все продукты</Button>
                    <Button onClick={() => { filtirProduct(1) }}>Солнечные панели</Button>
                    <Button onClick={() => { filtirProduct(2) }}>Инверторы</Button>
                    <Button onClick={() => { filtirProduct(3) }}>Аккумуляторы</Button>
                    <Button onClick={() => { filtirProduct(4) }}>Водоногреватели</Button>
                    <Button onClick={() => { filtirProduct(5) }}>Электромобили</Button>
                </div>
                <div className="mt-5">
                    <Row className="mb-5">
                        {products && products.map((item, i) =>
                            <Col className="col-12 col-md-6 col-lg-4 product-card mt-2 mb-2" key={i}>
                                <Card className="card-product">
                                    <img className="img-fluid" alt="Sample" src={item.img} />
                                    <CardBody className="text-center mt-4">
                                        <CardTitle className="h6 card-title">{item.title}</CardTitle>
                                        <CardSubtitle className="mt-2 card-sub-title">
                                            <del style={{ fontWeight: "700", opacity: "50%" }}> {item.delPrice} </del>
                                            <span className="ms-3"> {item.price} </span>
                                        </CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default Products;