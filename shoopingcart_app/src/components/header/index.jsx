import { Link } from "react-router-dom"


export default function Header(){


    return <div className="bg-blue-950">
     <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={'/'}>
            <div className="ml-5">
                 <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer translate-wide">
                    SHOPPING WEBSITE
                 </h1>
            </div>
          
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
            <Link to={'/'}>
                <li className="cursor-pointer list-none text-white font-bold">Home</li>
            
            </Link>
            <Link to={'/'}>
              <li className="cursor-pointer text-white font-bold">Returns</li>
            </Link>
            <Link to={'/cart'}>
                <li className="cursor-pointer text-white font-bold">Cart</li>
            
            </Link>
            

        </ul>
     </nav>
    </div>
}