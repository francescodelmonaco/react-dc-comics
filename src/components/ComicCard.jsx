const ComicCard = (props) => {

    const { card } = props;

    return (
        <>
            <div className="cards-container">
                {card.map((element) => {
                    const { id, thumb, series } = element;

                    return (
                        <>
                            <div className="card">
                                <figure>
                                    <img key={id} src={thumb} alt={series} />
                                </figure>

                                <span>{series}</span>
                            </div>
                        </>
                    );
                })}
            </div>

            <button className="btn-blue">LOAD MORE</button>
        </>
    )
};

export default ComicCard;