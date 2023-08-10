import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import "./blogStyle.css";
import { Container } from 'reactstrap';

function Blog() {

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

            {/* scroll buluvchi btn */}
            <button id="backToTopBtn" onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 256 256">
                    <g transform="rotate(90 128 128)">
                        <path fill="white" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z" />
                    </g>
                </svg>
            </button>
            <div className="mains w-100">
                <div className="blogMain ">
                    <h1 className='h12'>Блог</h1>
                    <div className='pt-3 text-center'>
                        <Link className='link2 mms' to="/">Главная</Link>
                        <span className='p1-1'>/ Блог</span>
                    </div>
                </div>
                <div className="blog-page-2">
                    <div className="border bord2"></div>
                    <h5 className='h5-2'>Свежие новости</h5>
                    <h1 className='h13'>Новости и события</h1>
                    <p className='long-text'>Узнайте больше о возобновляемых источниках энергии</p>
                </div>
                <Container>
                    <div className="blog-page-3 row w-100">
                        <div class="box col-4">
                            <div class="ribbon"><span>19 / 03</span></div>
                            <div className="box-div w-100">
                                <img className='blog-img' src="https://solara.uz/assets/images/6b/6bbe7a_Solar-Panels.jpg" alt="." />
                                <h5 className='blog-h5'>Более 400 млрд сумов направят на установку солнечных панелей в госорганизациях Ташкента</h5>
                                <p className='blog-p'>В Ташкенте на установку солнечных панелей в 1063 организациях, финансируемых из бюджетов города и районов (детские сады, школы, больницы, бюджетные организации), планируется направить 390 млрд сумов. Это предусмотрено решением столичного кенгаша народных депутатов от 20 февраля</p>
                            </div>
                        </div>
                        <div class="box col-4">
                            <div class="ribbon"><span>19 / 03</span></div>
                            <div className="box-div w-100">
                                <img className='blog-img' src="https://solara.uz/assets/images/4f/4f0a2d_-1-billion-for-the-introduction-of-renewable-energy.jpg" alt="." />
                                <h5 className='blog-h5'>1 млрд долларов направят на внедрение возобновляемых источников энергии в Ташкенте</h5>
                                <p className='blog-p'>На внедрение возобновляемых источников энергии в столице Узбекистана планируется направить 1 млрд долларов, заявил президент. На зданиях и других объектах будут установлены солнечные панели. Государство будет гарантированно покупать излишки энергии у населения и бизнеса.</p>
                            </div>
                        </div>
                        <div class="box col-4">
                            <div class="ribbon"><span>19 / 03</span></div>
                            <div className="box-div w-100">
                                <img className='blog-img' src="https://solara.uz/assets/images/ad/adb8cd_Solar-Panels-in-the-Building-of-the-Cabinet-of-Ministers-Uzbekistan.jpg" alt="." />
                                <h5 className='blog-h5'>Кабмин перешёл на солнечную энергию </h5>
                                <p className='blog-p'>На территории Кабинета Министров Узбекистана в Ташкенте запущена солнечная фотоэлектрическая станция мощностью 630 кВт. Он способен вырабатывать более 1,1 млн кВтч электроэнергии в год, сообщила пресс-служба Минэнерго.</p>
                            </div>
                        </div>
                        <div class="box col-4">
                            <div class="ribbon"><span>19 / 03</span></div>
                            <div className="box-div w-100">
                                <img className='blog-img' src="https://solara.uz/assets/images/da/da31c0_Solar-Panels.jpg" alt="." />
                                <h5 className='blog-h5'>Четыре жилых дома в Намангане оснащены солнечными панелями</h5>
                                <p className='blog-p'>В Намангане солнечные панели общей мощностью 58 киловатт установлены на крышах четырех домов, где расположены 96 квартир, сообщила пресс-служба Министерства энергетики</p>
                            </div>
                        </div>
                        <div class="box col-4">
                            <div class="ribbon"><span>19 / 03</span></div>
                            <div className="box-div w-100">
                                <img className='blog-img' src="https://solara.uz/assets/images/16/166ab1_Solar-Panels.jpg" alt="." />
                                <h5 className='blog-h5'>Минимум 50% крыш новых многоэтажек в Узбекистане займут солнечные панели</h5>
                                <p className='blog-p'>С 1 мая в Узбекистане вводится требование установки солнечных панелей на не менее 50% свободной части крыши сдаваемых в эксплуатацию многоэтажных домов</p>
                            </div>
                        </div>
                        <div class="box col-4">
                            <div class="ribbon"><span>19 / 03</span></div>
                            <div className="box-div w-100">
                                <img className='blog-img' src="https://solara.uz/assets/images/76/763d90_Solar-Systems.jpg" alt="." />
                                <h5 className='blog-h5'>Сделай шаг к солнцу. Солнечные электростанции под ключ</h5>
                                <p className='blog-p'>Топ 5 альтернатив солнечной энергии!</p>
                            </div>
                        </div>
                        <div class="box col-4">
                            <div class="ribbon"><span>19 / 03</span></div>
                            <div className="box-div w-100">
                                <img className='blog-img' src="https://solara.uz/assets/images/49/4982e9_Solar-Panels.jpg" alt="." />
                                <h5 className='blog-h5'>Солнечная энергия для вашего дома и бизнеса</h5>
                                <p className='blog-p'>Солнечная энергия считается самой популярной среди альтернативных источников энергии. Установка солнечных панелей, в первую очередь, позволяет добиться бесперебойной работы электроснабжения, исключить перебои или аварии на линиях электропередач, а также снизить затраты на электроэнергию.</p>
                            </div>
                        </div>
                        <div class="box col-4">
                            <div class="ribbon"><span>19 / 03</span></div>
                            <div className="box-div w-100">
                                <img className='blog-img' src="https://solara.uz/assets/images/47/47bd5b_Renwex-Solara.jpg" alt="." />
                                <h5 className='blog-h5'>RENWEX 2021 Международная выставка и форум</h5>
                                <p className='blog-p'>Moscow Solar Group 22-24 июня приглашает всех в Международный форум-выставка RENWEX 2021 «Возобновляемая энергия и электромобили».</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
}

export default Blog;