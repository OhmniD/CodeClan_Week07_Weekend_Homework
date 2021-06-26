import { useState, useEffect } from 'react'
import {spotifyAuth} from '../auth'

const AddToSpotifyButton = ({title}) => {

    const [albumInSpotify, setAlbumInSpotify] = useState('')

    useEffect(() => {
        searchForAlbum()
    }, [])

    const headers = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${spotifyAuth.token}`
        }
    }

    const spotifySearch = `https://api.spotify.com/v1/search?q=${title}&type=album&limit=1`

    const searchForAlbum = () => {
        fetch(spotifySearch, headers)
        .then(response => response.json())
        .then(result => setAlbumInSpotify(result.albums.items[0]))
    }

    const getAlbumTracks = () => {
        fetch(`https://api.spotify.com/v1/albums/${albumInSpotify.id}/tracks`, headers)
        .then(response => response.json())
        .then(result => console.log(result))
    }

    const handleClick = () => {
        getAlbumTracks()
    }

    return (
        albumInSpotify ? <button onClick={handleClick}>Add to Spotify</button> : null
    )
}

export default AddToSpotifyButton