import { useState, useEffect } from "react";
import {discogsAuth} from '../auth'
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

    const handleLastClick = () => {
        setisLoaded(false);
        setUrl(wantlist.pagination.urls.last)
    }

    const handleFirstClick = () => {
        setisLoaded(false);
        setUrl(wantlist.pagination.urls.first)
    }

    return (
        !isLoaded ? <p id="loading">Loading...</p> :
        <main>
            <header>
                <h1>Discogs Wantlist</h1>
                <p>Retrieve Discogs wantlist and add items to Spotify</p>
                <nav id="page-navigation">
                    <ul id="nav-list">
                        <li>Page {wantlist.pagination.page} of {wantlist.pagination.pages}</li>
                        <li>{wantlist.pagination.items} items in want list</li>
                        {wantlist.pagination.page === 1 ? null : <li className="pagination-link" onClick={handleFirstClick}>First page</li>}
                            {wantlist.pagination.page === 1 ? null : <li className="pagination-link" onClick={handlePreviousClick}>Previous page</li>}
                            {wantlist.pagination.page === wantlist.pagination.pages ? null : <li className="pagination-link" onClick={handleNextClick}>Next page</li>}
                            {wantlist.pagination.page === wantlist.pagination.pages ? null : <li className="pagination-link" onClick={handleLastClick}>Last page</li>}
                    </ul>
                </nav>
                </header>
                <section id="wantlist-items">
                    <WantlistList wantlist={wantlist} isLoaded={isLoaded} />
                </section>
        </main>
        
    )
}

export default WantlistBox;