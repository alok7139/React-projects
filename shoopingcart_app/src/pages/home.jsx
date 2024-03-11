import { useEffect, useState } from "react"
import { Circles } from "react-loader-spinner";
import Producttile from "../components/product-tile";



export default function Home(){

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(false)

    const fetchdetails = async() => {
        setloading(true);
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        if(data){
            setloading(false)
            setproducts(data);
        }
    }

    useEffect(() => {
        fetchdetails();
    },[])


    return <div>

        {
            loading ? 
            <div className="min-h-screen w-full flex justify-center items-center">
                <Circles
                height={'120'}
                width={'100'}
                color="rgb(0,0,139)"
                visible={true}
                />

            </div>
            : 
            <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3 ">
                {
                    products && products.length ? products.map((item) => <Producttile product={item}/>) : null
                }
            </div>
        }
    </div>
}