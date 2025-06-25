import images from "../assets/images"

function Trending(){
    return (
        <div className="text-center border-2 border-gray-200 rounded-3xl py-2 cursor-pointer hover:scale-[0.985] transition-all delay-200">
            <div><img className="w-[80%] m-auto" src={images.watch_1} alt="" /></div>
            <h2 className="font-sans font-bold text-2xl">Digital Watch</h2>
            <p className="font-sans hidden lg:block text-black-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias corrupti mollitia neque pariatur architecto laudantium voluptatibus eaque. Dolores.</p>
            <button className="bg-gray-300 text-xl px-2 py-3 cursor-pointer hover:bg-black hover:text-white transition-all ease-in delay-200y">
                Add to cart
            </button>
        </div>
    )
}

export default Trending