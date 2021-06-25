import { useEffect } from 'react'
import WantlistItem from './WantlistItem'

const WantlistList = ({wantlist}) => {

    useEffect(() => {console.log(wantlist)}, [])
    // const wantlistNodes = wantlist.wants.map((item) => {
    //     return <WantlistItem title={item.basic_information.title} />
    // })

    return (
        <>
        </>
    )
}

export default WantlistList