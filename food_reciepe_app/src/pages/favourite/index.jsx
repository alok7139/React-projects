import { useContext } from "react"
import { Globalcontext } from "../../context"
import RecipeList from "../../components/reciepe-item"


export default function Favourite(){







    const {favouritelist} = useContext(Globalcontext)


    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            favouritelist && favouritelist.length >0 ?
            favouritelist.map((item)=> <RecipeList item={item}/>)
            : <div><p className="lg:text-4xl text-xl text-center" >Nothing is added...</p></div>
        }
    </div>

}