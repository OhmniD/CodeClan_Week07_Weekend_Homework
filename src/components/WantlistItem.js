import AddToSpotifyButton from "../containers/AddToSpotifyButton";

const WantlistItem = ({title, artist, year, format, label, genre, link, cover}) => {
    return (
        // <a href={link}>
            <li className="wantlistItem">
                <img className="wantlistItem-thumbnail" src={cover} alt="" />
                <div className="item-details">
                    <h2>{title}</h2>
                    <h3>{artist}</h3>
                    <p>{year}</p>
                    <p>{label}</p>
                    <p>{format}</p>
                    <p>{genre}</p>
                </div>
                <AddToSpotifyButton title={title} artist={artist} year={year}/>
            </li>
        // </a>
    )
}

export default WantlistItem;