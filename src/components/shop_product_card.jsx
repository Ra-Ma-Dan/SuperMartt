

function ShopProductCard({ product }) {
  return (
    <div className="text-center border-2 border-gray-200 w-[100%] rounded-3xl py-2 px-1 flex flex-col 
    gap-2 justify-between items-center cursor-pointer hover:scale-[0.985] transition-all delay-200">
        <div><img className="w-[80%] h-[200px] m-auto" src={ product.images[0] } alt={ product.title } /></div>
        <h2 className="font-sans font-bold text-2xl">{product.title}</h2>
        <p className="font-sans text-black-50">{ product.description }</p>
        <p className="font-sans text-black-50 text-center bg-gray-200 font-bold p-2">Price: ${ product.price }</p>
        <button className="bg-gray-300 text-xl px-5 py-3 cursor-pointer hover:bg-black
         hover:text-white transition-all ease-linear delay-50">
        Add to cart
        </button>
    </div>
      
    
  )
}

export default ShopProductCard
