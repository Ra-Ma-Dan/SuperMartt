import { Link } from "react-router-dom";
import { useCart } from "../context/cart_context";
import CartCard from "../components/cartCard";



const Cart = () => {

    const {clearCart, cartItems, cartItemsCount } = useCart()

    const overallTotalPrice = Number(cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0))

    const finalOverAll = Math.round(overallTotalPrice * 100) / 100
    // console.log("ToFixed", over_2);
    // console.log("Over3:", over_3);
    
    

    return (
        <div className="xl:px-40 2xl:p-48 lg:px-15 px-5 w-full h-[100%]">
            <div className="relative font-sans text-4xl text-center my-5 font-bold">Cart 
                <span className="bg-gray-500 px-3 text-white rounded-full">{ cartItemsCount }</span></div>
            { cartItems.length === 0 ? (
                <div className="text-center h-[full]">
                    <p className="text-4xl font-bold m-12">No items Added</p>
                    <Link to="/shop"><button className="hover:bg-gray-400 hover:text-black p-3 m-8 bg-black rounded-2xl
                    text-white transition-all delay-[20ms] ease-linear font-bold">Go to Shop</button></Link>
                </div>
            ) : (
                <div>
                    <div className="w-full flex justify-between p-3 items-center">
                        <button onClick={clearCart} className="bg-gray-50 p-2 hover:bg-slate-300 delay-75 transition-all ease-linear">Clear cart</button>
                        <span className="bg-gray-300 lg:p-2 font-bold"> Overall Total Price: ${ finalOverAll }</span>
                        <Link to="/payment" ><button className="bg-gray-50 lg:p-2 hover:bg-slate-300 delay-75 transition-all ease-linear">
                            Make Payment</button></Link>
                        <Link to="/shop"><button className="bg-gray-50 p-2 hover:bg-slate-300 delay-75 transition-all ease-linear">
                            Continue Shopping</button></Link>
                    </div>
                    <div className="lg:p-3 grid grid-cols-1 gap-5 bg-gray-50">
                        { cartItems.map((cartItem, index) => (
                            <div key={ index }> 
                                <CartCard item={ cartItem } />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
        </div>
    );
}

export default Cart;
