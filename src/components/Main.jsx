import Jumbotron from "./Jumbotron";
import ComicCard from "./ComicCard";
import ComicsArray from "../../data/comics";
import BlueSection from "./BlueSection";

const Main = () => {

    const array = ComicsArray;

    const BlueSectionArray = [
        { id: 1, src: "/src/assets/img/buy-comics-digital-comics.png", text: "DIGITAL COMICS", alt: "Icona fumetto digitale" },
        { id: 2, src: "/src/assets/img/buy-comics-merchandise.png", text: "DC MERCHANDISE", alt: "Icona maglietta" },
        { id: 3, src: "/src/assets/img/buy-comics-subscriptions.png", text: "SUBSCRIPTION", alt: "Icona carta" },
        { id: 4, src: "/src/assets/img/buy-comics-shop-locator.png", text: "COMIC SHOP LOCATOR", alt: "Icona mappe" },
        { id: 5, src: "/src/assets/img/buy-dc-power-visa.svg", text: "DC POWER VISA", alt: "Icona carta VISA" },
    ]

    return (
        <main>
            <Jumbotron />

            <div className="cards-section margin-80">
                <ComicCard card={array} />
            </div>

            <BlueSection links={BlueSectionArray} />
        </main>
    );
};

export default Main;