import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import "./style.css";
import projectJson from "./projectJson.json";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, CardTitle, Col, Container, Row } from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";

function Projects() {

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        getProject();
    }, []);

    function getProject() {
        setProjectList(projectJson);
    }

    function filtirProject(projectId) {
        setProjectList(projectJson.filter(project => project.productId === projectId));
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

            {/* <div className="box-empty"></div> */}

            <div className="project__bg text-center">
                <h1>Проекты</h1>
                <Link to="/">Главная</Link>
                <span>/ Проекты</span>
            </div>

            <Container>
                <div className="project-btn mt-5">
                    <Button onClick={getProject}>Все</Button>
                    <Button onClick={() => { filtirProject(2) }}>Коммерческие</Button>
                    <Button onClick={() => { filtirProject(3) }}>Частные</Button>
                    <Button onClick={() => { filtirProject(1) }}>Зарубежные</Button>
                </div>
                <div className="mt-5">
                    <Row className="mb-5">
                        {projectList && projectList.map((item, i) =>
                            <Col className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={i}>
                                <Card className="card-project">
                                    <img className="img-fluid" alt="Sample" src={item.img} />
                                    <CardBody className="text-center mt-4">
                                        <CardTitle className="h6 card-title">{item.title}</CardTitle>
                                        <CardSubtitle className="mt-3 card-sub-title">
                                            <span> {item.description} </span>
                                        </CardSubtitle>
                                    </CardBody>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>

            {/* footer */}
            <Footer />
        </div>
    );
}
export default Projects;