const Header = () => {
    return (
        <header>
            <div className="flex-header margin-80">
                <figure>
                    <img src="/src/assets/img/dc-logo.png" alt="Logo DC Comics" />
                </figure>

                <ul className="flex-link">
                    <div className="blue-bar-flex">
                        <a href="">CHARACTERS</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">COMICS</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">MOVIES</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">TV</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">GAMES</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">COLLECTIBLES</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">VIDEOS</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">FANS</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">NEWS</a>

                        <hr />
                    </div>

                    <div className="blue-bar-flex">
                        <a href="">SHOP</a>

                        <hr />
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default Header;