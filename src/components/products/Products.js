import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import "./style.css";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { urlMy } from "../api/api";

function Products() {

    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategory();
        getProduct();
    }, []);

    // getCategory
    function getCategory() {
        axios.get(urlMy + "Product_Category").then(res => setCategory(res.data));
    }

    // getProduct
    function getProduct() {
        axios.get(urlMy + "Product").then(res => setProduct(res.data));
    }

    function filtirProduct(categoryId) {
        if (categoryId !== 7) {
            axios.get(urlMy + "Product").then(res => {
                setProduct(res.data.filter(p => p.category === categoryId));
            });
        } else getProduct();
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

    // productInfo
    function productInfo() {
        const info = document.getElementById("productInfo");
        info.click();
    }

    return (
        <div>
            <NavbarInfo />
            <NavbarMenu />

            <Link id="productInfo" to="/product/info"></Link>

            {/* scroll buluvchi btn */}
            <button id="backToTopBtn" onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 256 256">
                    <g transform="rotate(90 128 128)">
                        <path fill="white" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z" />
                    </g>
                </svg>
            </button>

            <div className="proMain">
                <h1>Продукты</h1>
                <div className='pt-2 text-center'>
                    <Link to="/">Главная</Link>
                    <span className="ms-2">/ Продукты</span>
                </div>
            </div>

            <Container>
                <div className="product-btn">
                    {category.map((item, i) =>
                        <Button className="mt-2" key={i} onClick={() => filtirProduct(item.id)}> {item.title} </Button>
                    )}
                </div>
                <div className="mt-5">
                    <Row className="mb-5">
                        {product && product.map((item, i) =>
                            <Col className="col-12 col-md-6 col-lg-4 product-card mt-2 mb-2" key={i}
                                onClick={() => {
                                    productInfo();
                                    sessionStorage.setItem("productId", item.id);
                                }}>
                                <Card className="card-product">
                                    <img className="img-fluid" alt="Sample" src={item.image_1} />
                                    <CardBody className="text-center mt-4">
                                        <CardTitle className="h6 card-title">{item.title}</CardTitle>
                                        <CardSubtitle className="mt-2 card-sub-title">
                                            <span className="ms-3"> {item.price} СУМ </span>
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