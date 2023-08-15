import { Link } from "react-router-dom";
import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import "./styleSearch.css";
import { Button, Col, Input, InputGroup } from "reactstrap";

function Search() {

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

            <div className="search-img">
                <div className="search-content">
                    <h1>Search</h1>
                    <Link to="/">
                        <p className="d-inline-block me-3">Главная</p>
                    </Link>
                    <span className="text-light me-3">/</span>
                    <span className="search-span">Search</span>
                </div>
            </div>
            <div className="w-100">
                <Col className="text-center search-input col-6">
                    <InputGroup size="lg">
                        <Input className="rounded-0" placeholder="Искать" />
                        <Button className="rounded-0 px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 24 24">
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21l-4.3-4.3" />
                                </g>
                            </svg>
                        </Button>
                    </InputGroup>
                </Col>
            </div>
            <Footer />
        </div>
    );
}
export default Search;