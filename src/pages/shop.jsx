import { useState } from "react"
import ShopProducts from "../components/shop_products"
import StoreCarousel from "../components/storeCarosel"

function Shop(){
    const [currentProducts, setCurrentProducts] = useState([])
    
    
    return (
        <>
            <h1 className="bg-black text-white text-[4rem] text-center m-4 font-bold">
            This is The Shop Page </h1>

            <div className="p-16">
                <StoreCarousel />
            </div>
            <div>
                <ShopProducts />
            </div>
            
        </>
    )
}

export default Shop