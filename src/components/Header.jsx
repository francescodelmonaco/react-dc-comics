const Header = () => {
    return (
        <header>
            <div className="flex-header margin-80">
                <figure>
                    <img src="/src/assets/img/dc-logo.png" alt="Logo DC Comics" />
                </figure>

                <ul className="flex-link">
                    <a href="">CHARACTERS</a>
                    <a href="">COMICS</a>
                    <a href="">MOVIES</a>
                    <a href="">TV</a>
                    <a href="">GAMES</a>
                    <a href="">COLLECTIBLES</a>
                    <a href="">VIDEOS</a>
                    <a href="">FANS</a>
                    <a href="">NEWS</a>
                    <a href="">SHOP</a>
                </ul>
            </div>
        </header>
    );
};

export default Header;