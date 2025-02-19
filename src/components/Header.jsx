import Logo from "../assets/img/dc-logo.png";
import NavBar from "./NavBar";

const links = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: true },
    { id: 3, text: "MOVIES", url: "#", current: false },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: false },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: false },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: false }
];

const Header = () => {
    return (
        <header>
            <div className="flex-header margin-80">
                <figure>
                    <img src={Logo} alt="Logo DC Comics" />
                </figure>

                <NavBar links={links} />
            </div>
        </header>
    );
};

export default Header;