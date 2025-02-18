const Footer = () => {
    return (
        <footer>
            <section className="footer1">
                <div className="margin-80 footer1-flex">
                    <div className="flex-column-3">
                        <div>
                            <h3>DC COMICS</h3>

                            <ul className="footer-links">
                                <a href="">Characters</a>
                                <a href="">Comics</a>
                                <a href="">Movies</a>
                                <a href="">TV</a>
                                <a href="">Games</a>
                                <a href="">Videos</a>
                                <a href="">News</a>
                            </ul>

                            <h3>SHOP</h3>

                            <ul className="footer-links">
                                <a href="">Shop DC</a>
                                <a href="">Shop DC Collectibles</a>
                            </ul>
                        </div>

                        <div>
                            <h3>DC</h3>

                            <ul className="footer-links">
                                <a href="">Terms Of Use</a>
                                <a href="">Privacy policy (New)</a>
                                <a href="">Ad Choices</a>
                                <a href="">Advertising</a>
                                <a href="">Jobs</a>
                                <a href="">Subscriptions</a>
                                <a href="">Talent Workshops</a>
                                <a href="">CPSC Certificates</a>
                                <a href="">Ratings</a>
                                <a href="">Shop Help</a>
                                <a href="">Contact Us</a>
                            </ul>
                        </div>

                        <div>
                            <h3>SITES</h3>

                            <ul className="footer-links">
                                <a href="">DC</a>
                                <a href="">MAD Magazine</a>
                                <a href="">DC Kids</a>
                                <a href="">DC Universe</a>
                                <a href="">DC Power Visa</a>
                            </ul>
                        </div>
                    </div>

                    <figure>
                        <img src="/src/assets/img/dc-logo-bg.png" alt="DC logo" />
                    </figure>
                </div>
            </section>

            <section className="footer2">
                <div className="margin-80 footer2-flex">
                    <button className="btn1"><strong>SIGN-UP NOW!</strong></button>

                    <div className="social">
                        <a className="tx-blue" href=""><strong>FOLLOW US</strong></a>

                        <img src="/src/assets/img/footer-facebook.png" alt="FaceBook logo" />

                        <img src="/src/assets/img/footer-twitter.png" alt="Twitter logo" />

                        <img src="/src/assets/img/footer-youtube.png" alt="YouTube logo" />

                        <img src="/src/assets/img/footer-pinterest.png" alt="Pinterest logo" />

                        <img src="/src/assets/img/footer-periscope.png" alt="Periscope logo" />
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;