import {spotifyAuth} from '../auth'

const AddToSpotifyButton = ({title}) => {

    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${spotifyAuth.token}`
        }
    }

    const spotifySearch = `https://api.spotify.com/v1/search?q=${title}&type=album&limit=1`

    let albumUri

    const searchForAlbum = () => {
        fetch(spotifySearch, headers)
        .then(response => response.json())
        .then(result => console.log(result.albums.items[0].uri))
    }

    const handleClick = () => {
        searchForAlbum()
    }

    return (
        <button onClick={handleClick}>Add to Spotify</button>
    )
}

export default AddToSpotifyButton