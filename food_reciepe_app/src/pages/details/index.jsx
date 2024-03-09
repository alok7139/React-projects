import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { Globalcontext } from "../../context";



export default function Details(){

    const {id} = useParams();
    const {recipedetailsdata, setrecipedetailsdata,favouritelist ,handleAddtofavourite} = useContext(Globalcontext);

    useEffect(() => {
        async function getrecipedetails(){
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
            const data = await response.json();
            console.log(data)
            if(data?.data){
                setrecipedetailsdata(data?.data)
            }
        };

        getrecipedetails();
    },[])


    return <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
         <div className="h-90 overflow-hidden rounded-xl group">
            <img
            src={recipedetailsdata?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            />
         </div>
         </div>
         <div className="flex flex-col gap-3">
            <span className="text-sm text-cyan-700 font-medium">{recipedetailsdata?.recipe?.publisher}</span>
            <h3 className="font-bold text-2xl truncate text-black">{recipedetailsdata?.recipe?.title}</h3>
          <div>
            <button onClick={() => handleAddtofavourite(recipedetailsdata?.recipe)} className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white">
                {
                  favouritelist && favouritelist.length>0 && favouritelist.findIndex((item) => item.id === recipedetailsdata?.recipe?.id) !== -1 ? 'Remove' : 'Add to favourites'
                }
            </button>
          </div>
          <div className=""> 
           <span className="text-2xl font-semibold text-black">Ingredients:</span>
            <ul className="flex flex-col gap-3 ">
                {
                    recipedetailsdata?.recipe.ingredients.map((ingredients) => <ul>
                        
                        <span className="text-2xl font-semibold text-black">{ingredients.quantity} {ingredients.unit}</span>
                        <span className="text-2xl font-semibold text-black">{ingredients.description}</span>
                        
                    </ul>)
                }

            </ul>
          </div>
         </div>

    </div>

}