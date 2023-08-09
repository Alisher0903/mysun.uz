import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import "./warranty.css";

function Warranty() {
    return (
        <div className='warranty-main'>
            <div className="warranty-1-page">
                    <h1>Warranty</h1>
                    <div className='pt-3 text-center'>
                        <Link className='warranty-link' to="/">Главная</Link>
                        <p>/ Warranty</p>
                    </div>
            </div>

            <Row className='w-100 warranty-box'>
                <Col className='warranty-card'></Col>
                <Col className='warranty-card'></Col>
                <Col className='warranty-card'></Col>
            </Row>
        </div>
    );
}
export default Warranty;