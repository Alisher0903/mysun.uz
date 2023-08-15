import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import Footer from "../footer/Footer";
import { Link } from 'react-router-dom';
import "./blogStyle.css";
import { Container } from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { urlMy } from '../api/api';

function Blog() {


    const [blog, setBlog] = useState([]);

    useEffect(() => {
        getBlog();
    }, []);


    // getBlog
    function getBlog() {
        axios.get(urlMy + "Blog").then(res => setBlog(res.data));
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

    // function clickBlog() {
    //     document.getElementById("about-blog").click()
    // }

    return (
        <div>

            {/* <Link to="/blog/about-blog" id='about-blog'></Link> */}

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
                        {blog && blog.map((item, i) =>
                            <div class="box col-4" key={i}>
                                {/* <div class="ribbon"><span>{item.date}</span></div> */}
                                <div className="box-div w-100">
                                    <img className='blog-img' src={item.image} alt="blogImage" />
                                    <h5 className='blog-h5'>{item.title}</h5>
                                    <p className='blog-p'>{item.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
            
            {/* footer */}
            <Footer />
        </div>
    );
}

export default Blog;