import ComicCard from "./ComicCard";
import ComicsArray from "../../data/comics";

const Main = () => {

    const array = ComicsArray;

    return (
        <main>
            <div className="cards-section margin-80">
                <ComicCard card={array} />
            </div>
        </main>
    );
};

export default Main;