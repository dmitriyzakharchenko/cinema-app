import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer text-white">
            <div className="footer-social">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">Можно меня найти:</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="li-ic" href="https://www.linkedin.com/in/dmitriy-zakharchenko-b7b480183/">
                                <i className="social-icon fa fa-linkedin mr-4"> </i>
                            </a>
                            <a className="ins-ic" href="https://www.instagram.com/_dimon.zhr_/">
                                <i className="social-icon fa fa-instagram"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center text-md-left mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Cinema</h6>
                        <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: 'rgb(247, 163, 17)' }}></hr>
                        <p>Итоговый проект Hillel </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 className="text-uppercase font-weight-bold">Категории</h6>
                        <hr className="mb-3 mt-0 d-inline-block mx-auto" style={{ width: 60, backgroundColor: 'rgb(247, 163, 17)' }}></hr>
                        <p>
                            <Link className="footer-link" to="/categories">Все категории</Link>
                        </p>
                        <p>
                            <Link className="footer-link" to="/new">Новинки</Link>
                        </p>
                        <p>
                            <Link className="footer-link" to="/films">Фильмы</Link>
                        </p>
                        <p>
                            <Link className="footer-link" to="/multfilms">Мультфильмы</Link>
                        </p>
                    </div>


                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2020
                <br/>
          <Link to="/" className="footer-copyright__name">Cinema app</Link>
            </div>

        </footer>
    );
};

export default Footer;
