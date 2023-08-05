import { Link } from "react-router-dom";
import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import "./styleSearch.css";
import { Button, Col, Input, InputGroup } from "reactstrap";

function Search() {
    return (
        <div>
            <NavbarInfo />
            <NavbarMenu />

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
        </div>
    );
}
export default Search;