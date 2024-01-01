import React, { useEffect, useState } from "react";
import "../styles/HomePage.css"
import { PhotoCard } from "../Component/PhotoCard";
import useDebounce  from "../customHooks/useDebounce";
export const HomePage = () => {
    const[photoData,setphotoData] = useState([])
    const[query,setQuery]=useState("Farman")
    const debounceUpdateSearch = useDebounce((e) => setQuery(e.target.value));

    const getData = async() => {
   
        try {
        const resp=await fetch(`https://api.github.com/search/users?q=${query||"Farman"}`)
        const data = await resp.json()
        setphotoData(data.items)

        } catch (error) {
          console.log("Error while fetching Data",error.message)  
        }
    }
    const updateQuery=useDebounce()

    useEffect(()=>{
        getData()
    },[query])
    return(
        <div>
            <div>
                <input type="text" onChange={debounceUpdateSearch} id="userInput" placeholder="Enter photo Id"/>
            </div>
            <div id="imageContainer">
               {
                photoData?.map((e)=>{
                    return <PhotoCard id={e.login} url={e.avatar_url}/>
                })
               }
              
            </div>
        </div>
    )
}