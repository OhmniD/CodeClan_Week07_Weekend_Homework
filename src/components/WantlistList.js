// import { useEffect } from 'react'
import WantlistItem from './WantlistItem'

const WantlistList = ({wantlist, isLoaded}) => {


    const wantlistNodes = wantlist.wants.map((item) => { 
        return <WantlistItem key={item.id} 
        title={item.basic_information.title} 
        artist={item.basic_information.artists[0].name}
        year={item.basic_information.year}
        format={item.basic_information.formats[0].name}
        label={item.basic_information.labels[0].name}
        genre={item.basic_information.genres[0]}
        link={item.basic_information.master_url}
        cover={item.basic_information.cover_image}
        />
        }
        )

    return (
        <ul id="wantlist">
            {wantlistNodes}
        </ul>
    )
}

export default WantlistList