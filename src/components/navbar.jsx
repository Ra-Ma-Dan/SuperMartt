import { Link } from "react-router-dom"
import { useCart } from "../context/cart_context"





function NavBar(){
    const { cartItemsCount } = useCart()



    return(
        <div className="bg-white sm:sticky top-0 flex justify-between items-center lg:px-44 md:px-28 sm:px-16 
        px-10 py-2 z-10 ">
            <div className="logo"><h1 className="xl:text-4xl md:text-3xl sm:text-2xl font-bold cursor-pointer font-mono text-black">Market</h1></div>
            <ul className="flex justify-between items-center lg:gap-16 gap-3 md:gap-8 sm:gap-5">
                <Link to='/' className="font-sans text-black-500 text-lg sm:text-xl font-bold hover:text-red-500 cursor-pointer">Home</Link>
                <Link to='shop' className="font-sans text-black-500 text-lg sm:text-xl font-bold hover:text-red-500 cursor-pointer">Shop</Link>
                <Link to='about' className="font-sans text-black-500 text-lg sm:text-xl font-bold hover:text-red-500 cursor-pointer">About</Link>
                <Link to='cart' className="font-sans text-black-500 text-lg sm:text-xl font-bold hover:text-red-500 cursor-pointer relative">
                Cart <span className="absolute top-[-10px] bg-gray-200 px-2 rounded-2xl">{ cartItemsCount }</span></Link>
            </ul>
            <Link to='signin'>
                <button className="bg-black font-bold border-2 border-white sm:xl lg:text-xl p-3 text-white rounded-xl hover:text-black hover:bg-white hover:border-black">
                Sign-In</button>
            </Link>
        </div>
    )
}
export default NavBar 