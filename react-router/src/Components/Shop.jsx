import React,{useState,useEffect} from 'react';
import Axios from 'axios';


function Shop() {

    const [items,setItems] = useState([]) 

    const fetch= async()=>{
        const data = await Axios.get("https://fortnite-api.theapinetwork.com/store/get");
        const items = await data.data
        console.log(items.data[0]['item'])
        setItems(items.data)
    }

    useEffect(()=>{
        fetch()
    },[])


    return (
        <div>
            <h1>Shop page</h1>
            {items.map(i=>(
                <div> 
                    <h3>{i['item']['name']}</h3> 
                    {/* <div>
                    {i['item']['description']}
                    {i['item']['type']}
                    </div> */}
                </div>
            ))}
        </div>
    )
}

export default Shop
