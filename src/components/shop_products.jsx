import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ShopProductCard from './shop_product_card'


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
                const data = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                //console.log(typeof(data))
                //console.log(typeof(data.products));
                if (!data.ok) throw new Error(`HTTP Error: status report: ${data.status}`)
                const response = await data.json()
                const all = response.total
                setProducts(response.products)
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
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(2, minmax(250px, 1fr))] 
                            lg:grid-cols-[repeat(4,_minmax(250px,_1fr))] gap-6">
                { products.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id }>
                        <ShopProductCard product={ product }/>
                    </Link>
                ))}
            </div>
            <div className="w-[100%] py-[4rem] lg:px-[15rem] sm:py-4 px-20 flex justify-between lg:gap-10 items-center">
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