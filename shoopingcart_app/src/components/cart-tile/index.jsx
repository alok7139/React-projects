import { useDispatch } from "react-redux";
import { removecart } from "../../store/slices/cart-slices";

export default function CartTile({ cartitem }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removecart(cartitem.id));
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center p-5 justify-between bg-blue-500 mb-2 rounded-xl max-w-sm overflow-hidden">
        <div className="flex-shrink-0 mb-4 sm:mb-0">
          <img
            src={cartitem?.image}
            className="h-28 rounded-lg"
            alt={cartitem?.title}
          />
        </div>
        <div className="flex flex-col ml-0 sm:ml-6 self-start space-y-5">
          <span className="text-sm text-white font-bold overflow-hidden">
            {cartitem?.title}
          </span>
          <p className="text-white font-extrabold">Price: {cartitem?.price}</p>
        </div>
        <button
          onClick={handleRemoveFromCart}
          className="mt-4 sm:mt-0 bg-yellow-500 text-white border-1 rounded-lg font-bold p-4"
        >
          Remove
        </button>
      </div>
    </>
  );
}