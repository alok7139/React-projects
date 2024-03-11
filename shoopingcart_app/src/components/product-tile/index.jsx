import { useDispatch, useSelector } from "react-redux"
import { addcart, removecart } from "../../store/slices/cart-slices";


export default function Producttile({product}){

    const dispatch = useDispatch();

    const {cart} = useSelector(state => state)


    const handlecart= () => {
       dispatch(addcart(product));
    }

    const handleremove = () => {
        console.log('removed');
        dispatch(removecart(product.id))
    }
   


    return <div>
        <div className="group flex flex-col items-center border-2 border-black gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl ">
              <div className="h-[180px]">
                <img
                src={product?.image}
                alt={product?.title}
                className="object-cover h-full w-full"
                />

              </div>
              <div>
                 <h1 className="w-40 truncate mt-3 text-gray-600 font-bold text-lg">{product?.title}</h1>
              </div>
              <div className="flex items-center justify-center w-10% mt-5">
                    <button onClick={cart.some(item => item.id === product.id) ? handleremove : handlecart} className="bg-yellow-500 text-white border-1 rounded-lg font-bold p-4 ">
                         {
                            cart.some(item => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'
                         }
                        
                        </button>
              </div> 
        </div>
    </div>
}