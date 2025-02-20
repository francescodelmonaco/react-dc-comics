const BlueSection = (props) => {

    const { links } = props;

    return (
        <section className="blue-section">
            <div className="blue-section-container margin-80">
                {
                    links.map((element) => {
                        const { id, src, text, alt } = element;

                        return (

                            <div className="blue-section-element">
                                <figure>
                                    <img key={id} height={100} src={src} alt={alt} />
                                </figure>

                                <a href="">{text}</a>
                            </div>

                        );
                    })
                }
            </div>
        </section>
    );
};

export default BlueSection;