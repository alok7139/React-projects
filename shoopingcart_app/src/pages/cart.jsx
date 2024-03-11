import { useEffect , useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Carttile from "../components/cart-tile"




export default function Cart(){

    const [totalcart, settotalcart] = useState(0)

    const {cart} = useSelector(state => state)
    // console.log(state)


    useEffect(() => {
         settotalcart(cart.reduce((acc,curr) => acc + curr.price , 0));
    } , [cart])


    console.log(cart,totalcart)



    return <div className="flex justify-center">
        {
            cart && cart.length ? 
            <>
             <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
             <div className="flex flex-col justify-center items-center p-3">
                {
                    cart.map((item) => <Carttile cartitem={item}/>)
                }

            </div>
            </div> 
            <div className="w-[300px]">
                <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14 ml-10">
                     <h1 className="font-bold text-lg text-blue-800">Cart Summary</h1>
                     <p>
                        <span className="text-blue-800 font-bold">Total Item</span>
                        <span>: {cart.length}</span>
                     </p>
                     <p>
                     <span className="text-blue-800 font-bold">Total Amount</span>
                        <span>: {totalcart}</span>
                     </p>
                </div>
            </div>
            </> : <div className="min-h-[80vh] flex flex-col items-center justify-center">
                <h1 className="text-gray-800 font-bold text-xl mb-2">Empty Cart</h1>
                <Link to={'/'}>
                    <button className="bg-yellow-500 text-white border-1 rounded-lg font-bold p-4 ">SHOP NOW</button>
                </Link>
            </div>
        }

    </div>
}