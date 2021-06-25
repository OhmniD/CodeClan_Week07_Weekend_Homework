import { useEffect } from 'react'
import WantlistItem from './WantlistItem'

const WantlistList = ({wantlist}) => {
    const wantsArray = wantlist.wants;
    useEffect(() => console.log(wantsArray), [])
    
    const wantlistNodes = wantsArray.map((item) => {
        return <WantlistItem key={item.id} title={item.basic_information.title} />
    })

    return (
        <>
        {wantlistNodes}
        </>
    )
}

export default WantlistList