const WantlistItem = ({title, artist}) => {
    return (
        <li>
            <h2>{title}</h2>
            <h3>{artist}</h3>
        </li>
    )
}

export default WantlistItem;