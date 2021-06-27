import { useState, useEffect } from 'react'
import {spotifyAuth} from '../auth'

const AddToSpotifyButton = ({title, artist, year}) => {

    const [albumInSpotify, setAlbumInSpotify] = useState('')
    const [albumTracks, setAlbumTracks] = useState('')
    const [playlistId, setplaylistId] = useState('')

    useEffect(() => {
        searchForAlbum()
    }, [])

    useEffect(() => {
        addTracksToPlaylist()
    }, [playlistId])


    const createPlaylistData = {
        "name": `${artist} - ${title} (${year})`,
        "description": "New playlist description",
        "public": false
      }

    const getHeaders = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${spotifyAuth.token}`
        }
    }

    const postHeaders = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${spotifyAuth.token}`
        },
        body: JSON.stringify(createPlaylistData)
    }

    const spotifySearch = `https://api.spotify.com/v1/search?q=${title}&type=album&limit=1`

    const searchForAlbum = () => {
        fetch(spotifySearch, getHeaders)
        .then(response => response.json())
        .then(result => setAlbumInSpotify(result.albums.items[0]))
    }

    const addToSpotify = () => {
        fetch(`https://api.spotify.com/v1/albums/${albumInSpotify.id}/tracks`, getHeaders)
        .then(response => response.json())
        .then(result => result.items.map((track) => {
            return track.uri
        }))
        .then(tracks => setAlbumTracks(tracks.join()))
        .then(createPlaylist())
    }


    const createPlaylist = () => {
        fetch(`https://api.spotify.com/v1/users/${spotifyAuth.username}/playlists`, postHeaders)
        .then(response => response.json())
        .then(result => setplaylistId(result.id))
    }

    const addTracksToPlaylist = () => {
        fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${albumTracks}`, postHeaders)

    }
    const handleClick = () => {
        addToSpotify()
    }

    return (
        albumInSpotify ? <button onClick={handleClick}>Add to Spotify</button> : null
    )
}

export default AddToSpotifyButton