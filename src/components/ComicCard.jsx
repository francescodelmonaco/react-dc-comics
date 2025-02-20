const ComicCard = (props) => {

    const { card } = props;

    return (
        <div>
            {
                card.map((element) => {
                    const { id, thumb, series } = element;

                    return (
                        <>
                            <div>
                                <figure>
                                    <img key={id} src={thumb} alt={series} />
                                </figure>

                                <span>{series}</span>
                            </div>
                        </>
                    );
                })
            }
        </div>
    )
};

export default ComicCard;