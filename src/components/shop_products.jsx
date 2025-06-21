import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ShopProducts = () => {
    const [products, setProducts] = useState([])
    const [skip, setSkip] = useState(0)
    const limit = 32
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () =>{
            try{
                const { data } = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                //console.log(typeof(data))
                //console.log(typeof(data.products));
                const response = data.products
                const all = data.total
                setProducts(response)
                setTotal(all)
                setLoading(false)
            } catch(err){
                console.error(err)
                setLoading(false)
            }
        }
        fetchProducts()
    }, [skip])

    const handleNext = () => {
        if(skip + limit < total) setSkip(skip + limit)
    }
    const handlePrev = () => {
        if (skip - limit >= 0) setSkip(skip - limit)
    }


    if (loading) return <p className='text-center text-3xl text-black'>Loading.........</p>

    return(
        <>
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(3, minmax(200px, 1fr))] 
                            lg:grid-cols-[repeat(4,_minmax(250px,_1fr))] gap-6">
                { products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id } className="text-center border-2 border-gray-200
                    rounded-3xl py-2 px-1 flex flex-col gap-2 justify-between items-center cursor-pointer hover:scale-[0.985] transition-all delay-200">
                        <div><img className="w-[80%] h-[200px] m-auto" src={ product.images[0] } alt={ product.title } /></div>
                        <h2 className="font-sans font-bold text-3xl">{product.title}</h2>
                        <p className="font-sans text-black-50">{ product.description }</p>
                        <p className="font-sans text-black-50 text-center bg-gray-200 font-bold p-2">Price: ${ product.price }</p>
                        <button className="bg-gray-300 text-xl px-5 py-3 cursor-pointer hover:bg-black
                        hover:text-white transition-all ease-linear delay-50">
                        Add to cart
                        </button>
                    </Link>
                ))}
            </div>
            <div className="w-[100%] py-[4rem] px-[15rem] flex justify-between items-center">
            <button onClick={ () => {handlePrev()}} className="font-bold text-[4rem] bg-gray-500 py-[1rem]
             px-[3rem] rounded-full hover:bg-gray-400 transition-all delay-75" disabled={ skip - limit > 0 }>
                &lt;</button>
            <button onClick={ () => {handleNext()} } className="font-bold text-[4rem] bg-gray-500 py-[1rem]
             px-[3rem] rounded-full hover:bg-gray-400 transition-all delay-75" disabled={ skip + limit === total }>
                &gt;</button>
            </div>
        </>
    )
}

export default ShopProducts