const NavBar = (props) => {

    const { links } = props;

    return (
        <ul className="flex-link">
            {
                links.map((element) => {
                    const { id, text, url, current } = element;

                    return (
                        <li key={id} className={current ? "active" : ""}>
                            <a href={url}>{text}</a>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default NavBar;