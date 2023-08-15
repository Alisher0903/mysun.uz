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

function Projects() {

    const [projectList, setProjectList] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategory();
        getProject();
    }, []);

    // get category
    const getCategory = () => axios.get(urlMy + "Project_Category").then(res => setCategory(res.data));

    // get project
    function getProject() {
        axios.get(urlMy + "Project").then(res => setProjectList(res.data));
    }

    // filter category
    function filtirProject(categoryId) {
        if (categoryId !== 5) {
            axios.get(urlMy + "Project").then(res => {
                setProjectList(res.data.filter(p => p.category === categoryId));
            });
        } else getProject();
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

    const projectCard = () => document.getElementById("projectInfo").click();

    return (
        <div>

            <Link to="/project/info" id="projectInfo"></Link>

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

            <div className="project__bg text-center">
                <h1>Проекты</h1>
                <Link to="/">Главная</Link>
                <span>/ Проекты</span>
            </div>

            <Container>
                <div className="project-btn mt-5">
                    {category.map((item, i) =>
                        <Button key={i} onClick={() => { filtirProject(item.id) }}> {item.title} </Button>
                    )}
                </div>

                <div className="mt-5">
                    <Row className="mb-5">
                        {projectList && projectList.map((item, i) =>
                            <Col className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={i} onClick={() => {
                                projectCard();
                                sessionStorage.setItem("projectId", item.id);
                            }}>
                                <Card className="card-project">
                                    <img className="img-fluid" alt="Sample" src={item.image_1} />
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