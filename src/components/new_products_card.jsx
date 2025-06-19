import images from "../assets/images";

function NewProductCard({ product }){


    return product && (
  <div className="text-center border-2 border-gray-200 rounded-3xl py-2 cursor-pointer hover:scale-[0.985] transition-all delay-200">
    <div>
      <img className="w-[80%] h-[200px] m-auto" src={product.image} alt={product.name} />
    </div>
    <h2 className="font-sans font-bold text-3xl">{product.name}</h2>
    <p className="font-sans text-black-50">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatibus eaque. Dolores.
    </p>
    <p className="font-sans text-black-50">{product.price}</p>
    <button className="bg-gray-300 text-xl px-2 py-3 cursor-pointer hover:bg-black hover:text-white transition-all ease-in delay-200">
      Add to cart
    </button>
  </div>
);
}

export default NewProductCard