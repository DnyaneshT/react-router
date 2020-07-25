import React,{useState,useEffect} from 'react'
import Axios from 'axios'

function Item({match}) {
    const [item,setItem] = useState('')

    const fetchItems=async ()=>{
        const items = await Axios.get(`https://fortnite-api.theapinetwork.com/store/get`)
        const item = await items.data
        // console.log(item)
        // console.log(match.params.id)
        setItem(item)
    }

    useEffect(()=>{
        fetchItems()
    },[])

    return (
        <div>
            {match.params.id}
        </div>
    )
}

export default Item
