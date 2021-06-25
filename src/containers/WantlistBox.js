import { useState, useEffect } from "react";
import discogsAuth from '../auth'
import WantlistList from '../components/WantlistList'

const WantlistBox = () => {

    const [wantlist, setWantlist] = useState([])

    useEffect(() => {
        getWantlist()
    }, []);

    const fetchUrl = `https://api.discogs.com`
    const wantlistUrl = `/users/${discogsAuth.username}/wants`
    // const collectionValueUrl = `/users/${discogsAuth.username}/collection/value`

    const headers = {
        headers: {
            'User-Agent': 'OhmniDCodeClanDiscogsApp/0.1'
        }
    }

    const getWantlist = () => {
        fetch((`${fetchUrl}${wantlistUrl}?token=${discogsAuth.pat}`), headers)
        .then(results => results.json())
        .then(wantlist => setWantlist(wantlist))
    }

    return (
        <section>
            <h1>Hello World</h1>
            <p>{discogsAuth.username}</p>
            <p>{discogsAuth.pat}</p>
            <WantlistList wantlist={wantlist} />
        </section>
    )
}

export default WantlistBox;