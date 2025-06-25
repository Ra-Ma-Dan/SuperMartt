import { useState } from "react"
import new_products from "../data/new_product";
import NewProductCard from "./new_products_card.jsx";



function ProductCarosel(){
    const [productIndex, setProductIndex] = useState(0)
    const noToDisplay = 4



    const handleNext = () => {
    if (productIndex + noToDisplay < new_products.length) {
      setProductIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (productIndex > 0) {
      setProductIndex(prev => prev - 1);
    }
  };

  const visibleProducts = new_products.slice(productIndex, productIndex + noToDisplay);

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-4 overflow-hidden">
        {/* Left Arrow */}
        {productIndex > 0 && (
          <button
            onClick={handlePrev} onMouseOver={handlePrev}
            className="p-2 bg-gray-200 text-black text-2xl transition-all delay-20ms cursor-pointer rounded-full hover:bg-gray-400"
          >
            &lt;&lt;
          </button>
        )}

        {/* Product Cards */}
        <div className="flex w-full gap-2 lg:gap-4">
          {visibleProducts.map((product) => (
            <div key={product.id} className="w-1/2 lg:w-1/4">
              <NewProductCard key={ product.id } product={ product }/>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {productIndex + noToDisplay < new_products.length && (
          <button
            onClick={handleNext} onMouseOver={handleNext}
            className="p-2 bg-gray-200 text-black text-2xl transition-all delay-20ms cursor-pointer rounded-full hover:bg-gray-400"
          >
             &gt;&gt;
          </button>
        )}
      </div>
    </div>
  )

    // return(
    //     <div className="w-full">
    //         <div className="flex">

    //             {/* Product */}
    //             <div className="w-fuul gap-4">
    //                 {allProducts.map((x) => (
    //                     <div key={allProducts[x]}><NewProducts /></div>
    //                 ))}
    //             </div>

    //         </div>
    //     </div>
    // )
}

export default ProductCarosel