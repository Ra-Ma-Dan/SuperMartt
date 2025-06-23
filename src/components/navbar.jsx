import { Link } from "react-router-dom"

function NavBar(){

    return(
        <div className="bg-white sticky top-0 flex justify-between items-center px-44 py-2 z-10">
            <div className="logo"><h1 className="text-4xl font-bold cursor-pointer font-mono text-black">Market</h1></div>
            <ul className="flex justify-between items-center gap-16">
                <Link to='/' className="font-sans text-black-500 text-xl font-bold hover:text-red-500 cursor-pointer">Home</Link>
                <Link to='shop' className="font-sans text-black-500 text-xl font-bold hover:text-red-500 cursor-pointer">Shop</Link>
                <Link to='about' className="font-sans text-black-500 text-xl font-bold hover:text-red-500 cursor-pointer">About</Link>
                <Link to='cart' className="font-sans text-black-500 text-xl font-bold hover:text-red-500 cursor-pointer">Cart</Link>
            </ul>
            <Link to='signin'>
                <button className="bg-black font-bold border-2 border-white text-xl p-3 text-white rounded-xl hover:text-black hover:bg-white hover:border-black">
                Sign-In</button>
            </Link>
        </div>
    )
}
export default NavBar 