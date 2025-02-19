import Logo from "../assets/img/dc-logo.png";

const Header = () => {
    return (
        <header>
            <div className="flex-header margin-80">
                <figure>
                    <img src={Logo} alt="Logo DC Comics" />
                </figure>

                <ul className="flex-link">
                    <li className="blue-bar-flex">
                        <a href="">CHARACTERS</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a className="active" href="">COMICS</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a href="">MOVIES</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a href="">TV</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a href="">GAMES</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a href="">COLLECTIBLES</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a href="">VIDEOS</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a href="">FANS</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a href="">NEWS</a>
                    </li>

                    <li className="blue-bar-flex">
                        <a href="">SHOP</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;