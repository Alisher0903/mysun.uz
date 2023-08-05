import { Button, Col, Input, List, Row } from 'reactstrap';
import './footer.css';
import { Link } from 'react-router-dom';
import navLogo from "../navbar/navBrend/nav.jpg"

function Futer() {
  return (
    <div className='mainF'>
      <div className="futr">
        <div className='fList'>
          <Row className='listRow w-100'>
            <Col className='col-3'>
              <Link to="/">
                <img className='mb-5' src={navLogo} alt="slaid" width={200} />
              </Link>
              <List type="unstyled">
                <li className='mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" color='yellow' fill="currentColor" class="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  </svg>
                  Ташкент, Мирабадский район, <span className='ms-4'>Фаргона</span> Йули 222/12
                </li>
                <li className='mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" color='yellow' fill="currentColor" class="bi bi-telephone me-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                  +998 99 877 14 12
                </li>
                <li className='mb-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" color='yellow' fill="currentColor" class="bi bi-envelope me-2" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  info@solara.uz
                </li>
              </List>
            </Col>
            <Col className=''>
              <List type="unstyled">
                <li className='mb-4 fontS'>Проекты</li>
                <li className='mb-3'>
                  <Link className='linkT' to="https://solara.uz/ru/projects/ani-product-ru">
                    <span className='slash me-2'>//</span>
                    Ани Продукт
                  </Link>
                </li>
                <li className='mb-3 links'>
                  <Link className='linkT' to="https://solara.uz/ru/projects/nalogovi-komitet">
                    <span className='slash me-2'>//</span>
                    Налоговый комитет
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='linkT' to="https://solara.uz/ru/projects/gosudarstvennoe-nalogovoe-upravlenie">
                    <span className='slash me-2'>//</span>
                    Государственное налоговое управление
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='linkT' to="https://solara.uz/ru/projects/tashkent-ru">
                    <span className='slash me-2'>//</span>
                    Ташкент
                  </Link>
                </li>
              </List>
            </Col>
            <Col className='ms-1'>
              <List type="unstyled">
                <li className='mb-4 fontS'>Быстрые ссылки</li>
                <li className='mb-3'>
                  <Link className='linkT' to="/about/company">
                    <span className='slash me-2'>//</span>
                    О компании
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='linkT' to="/blog">
                    <span className='slash me-2'>//</span>
                    Блог
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='linkT' to="/products">
                    <span className='slash me-2'>//</span>
                    Продукты
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='linkT' to="/private/individuals">
                    <span className='slash me-2'>//</span>
                    Частным лицам
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='linkT' to="/business">
                    <span className='slash me-2'>//</span>
                    Для бизнеса
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='linkT' to="https://solara.uz/ru/site/privacy-policy">
                    <span className='slash me-2'>//</span>
                    Privacy Policy
                  </Link>
                </li>
                <li className='mb-3'>
                  <Link className='linkT' to="/contacts">
                    <span className='slash me-2'>//</span>
                    Контакты
                  </Link>
                </li>
              </List>
            </Col>
            <Col className='me-5'>
              <List type="unstyled">
                <li className='mb-4 fontS'>
                  Pассылка
                </li>
                <li>
                  Подпишитесь на нашу рассылку новостей и событий прямо сейчас, чтобы быть в курсе
                </li>
                <li>
                  <Input type='email' className="rounded-0 mt-3 py-2" size="lg" placeholder="Эл. адрес " />
                </li>
                <li>
                  <Button type="submit" className="rounded-0 w-100 animated-button">
                    Подписаться на рассылку
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" fill="currentColor" class="bi bi-arrow-right-short ms-2" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                    </svg>
                  </Button>
                </li>
              </List>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Futer;