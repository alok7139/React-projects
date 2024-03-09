import { useContext } from "react"
import { Globalcontext } from "../../context"
import RecipeList from "../../components/reciepe-item"



export default function Home(){

    const { recipelist , loading} = useContext(Globalcontext)

    if(loading) return <div className="text-center">Loading...Please wait!</div>


    return <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipelist && recipelist.length >0 ?
             recipelist.map((item)=> <RecipeList item={item}/>)
            : <div><p className="lg:text-4xl text-xl text-center" >Nothing to show ! please search...</p></div>
        }
    </div>
}