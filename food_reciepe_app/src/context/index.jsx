import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Globalcontext = createContext(null);



export default function Globalstate({children}){

    const [searchparam, setsearchparam] = useState('')
    const [loading, setloading] = useState(false)
    const [recipelist, setrecipelist] = useState([])
    const [recipedetailsdata, setrecipedetailsdata] = useState(null)
    const [favouritelist, setfavouritelist] = useState([])

    const navigate = useNavigate();

    const handlesubmit = async(event) => {
        event.preventDefault();
        // setloading(true);
        try {
              const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchparam}`)
              const data = await response.json();
              if(data?.data?.recipes){
                setrecipelist(data?.data?.recipes)
                setloading(false)
                setsearchparam('')
                navigate('/')
              }
            //   console.log(data)
        } catch (error) {
            console.log(error)
            setloading(false)
            setsearchparam('')
        }
    }
    
    

    function handleAddtofavourite(getcurritem){
        console.log(getcurritem);
        let cpy = [...favouritelist];
        const index = cpy.findIndex((item) => item.id === getcurritem.id)
        if(index===-1){
            cpy.push(getcurritem);
        }
        else{
            cpy.splice(index)
        }
        setfavouritelist(cpy);
    }

    console.log(loading,recipelist , favouritelist)
   

    return <Globalcontext.Provider value={{searchparam, loading , recipelist, setsearchparam,handlesubmit,recipedetailsdata, setrecipedetailsdata , handleAddtofavourite ,favouritelist}}>{children}</Globalcontext.Provider>
}

