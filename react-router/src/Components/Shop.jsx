import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


function Shop() {

    const [items,setItems] = useState([]) 

    const getData= async()=>{
        const data = await Axios.get("https://fortnite-api.theapinetwork.com/store/get");
        const items = await data.data
        console.log(items.data[0]['itemId'])
        setItems(items.data)
    }

    useEffect(()=>{
        getData()
    },[])


    return (
        <div>
            <h1>Shop page</h1>
            {items.map(i=>(
                <div key={i.itemId}> 
                    <Link to={`/shop/${i.itemId}`}> <h3>{i.item.name}</h3> </Link>
                        <div>
                            {i['item']['description']}
                            {i['item']['type']}
                        </div>
                </div>
            ))}
        </div>
    )
}

export default Shop
