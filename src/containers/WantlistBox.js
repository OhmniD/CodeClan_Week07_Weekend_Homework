import { useState, useEffect } from "react";
import discogsAuth from '../auth'
import WantlistList from '../components/WantlistList'

const WantlistBox = () => {

    const fetchUrl = `https://api.discogs.com`
    const wantlistUrl = `/users/${discogsAuth.username}/wants`
    // const collectionValueUrl = `/users/${discogsAuth.username}/collection/value`
    const concatUrl = `${fetchUrl}${wantlistUrl}?token=${discogsAuth.pat}`

    const headers = {
        headers: {
            'User-Agent': 'OhmniDCodeClanDiscogsApp/0.1'
        }
    }

    const [url, setUrl] = useState(concatUrl)
    const [wantlist, setWantlist] = useState([])
    const [isLoaded, setisLoaded] = useState(false);

    useEffect(() => {
        getWantlist(url)
    }, [url]);


    const getWantlist = (url) => {
        fetch(url, headers)
        .then(results => results.json())
        .then(result => {
            setWantlist(result) 
            setisLoaded(true)
            }
        )
        .catch(error => console.log(error))
    }

    const handleNextClick = () => {
        setisLoaded(false);
        setUrl(wantlist.pagination.urls.next)
    }

    const handlePreviousClick = () => {
        setisLoaded(false);
        setUrl(wantlist.pagination.urls.prev)
    }

    return (
        !isLoaded ? <p>Loading...</p> :
        <section>
            <h1>Discogs Wantlist Aggregator</h1>
            <p onClick={handlePreviousClick}>Previous page</p>
            <p onClick={handleNextClick}>Next page</p>
            <WantlistList wantlist={wantlist} isLoaded={isLoaded} />
        </section>
    )
}

export default WantlistBox;