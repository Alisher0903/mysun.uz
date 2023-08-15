import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import { useEffect } from "react";
import axios from "axios";
import { urlMy } from "../api/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./projectStyle.css";
import { Col, Container, Row } from "reactstrap";

function ProjectInfo() {

    const [projectInfo, setProjectInfo] = useState("");

    useEffect(() => {
        let projectId = sessionStorage.getItem("projectId");
        axios.get(urlMy + "Project").then(res => setProjectInfo(res.data.filter(p => p.id == projectId)[0]));
    }, []);

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

            <div className="project-info__bg text-center">
                <h4> {projectInfo.title} </h4>
                <Link to="/">Главная</Link>
                <span>/ Проекты</span>
            </div>

            <h1 className="text-center project-info__title"> {projectInfo.title} </h1>

            <Container>
                <div className="mt-5">
                    <img className="w-100 img-fluid" src={projectInfo.image_1} />
                </div>

                <div className="project-description">
                    <h4>Тех. описание</h4><hr />
                    <Row className="w-100">
                        <Col className="col-8 project-description__par">
                            <p>Мощность</p>
                            <p>Годовая производительность</p>
                            <p>Сумма сбережений</p>
                        </Col>
                        <Col className="col-4 text-end pe-0 me-0">
                            <p> {projectInfo.power} </p>
                            <p> {projectInfo.annual_productivity} </p>
                            <p> {projectInfo.amount_of_savings} СУМ </p>
                        </Col>
                    </Row>
                </div>

                <div className="mb-5 mt-5 pb-5 project-cols">
                    <Row>
                        <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                            <img className="img-fluid" src={projectInfo.image_2} />
                        </Col>
                        <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                            <img className="img-fluid" src={projectInfo.image_3} />
                        </Col>
                        <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                            <img className="img-fluid" src={projectInfo.image_4} />
                        </Col>
                        <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                            <img className="img-fluid" src={projectInfo.image_5} />
                        </Col>
                        <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4">
                            <img className="img-fluid" src={projectInfo.image_6} />
                        </Col>
                    </Row>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default ProjectInfo;