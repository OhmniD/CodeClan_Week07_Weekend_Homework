// import { useEffect } from 'react'
import WantlistItem from './WantlistItem'

const WantlistList = ({wantlist, isLoaded}) => {


    const wantlistNodes = wantlist.wants.map((item) => { 
        return <WantlistItem key={item.id} 
        title={item.basic_information.title} 
        artist={item.basic_information.artists[0].name}/>
        }
        )

    return (
        <ul>
            {wantlistNodes}
        </ul>
    )
}

export default WantlistList