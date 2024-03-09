import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Globalcontext } from "../../context";



export default function Navbar(){

    const {searchparam, setsearchparam , handlesubmit} = useContext(Globalcontext)
    console.log(searchparam)

    return <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
       <h2 className="text-2xl font-semibold">
       <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>Recipes</NavLink>
       </h2>
       <form onSubmit={handlesubmit}>
        <input
        type="text"
        name="search"
        value={searchparam}
        onChange={(e) => setsearchparam(e.target.value)}
        placeholder="Enter Food item..."
        className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
       </form>
       <ul className="flex gap-5 ">
        <li>
            <NavLink to={'/'} className='text-black hover:text-gray-700 duration-300'>Home</NavLink>
        </li>
        <li>
            <NavLink to={'/favourite'} className='text-black hover:text-gray-700 duration-300'>Favourite</NavLink>
        </li>

       </ul>
    </nav>
}