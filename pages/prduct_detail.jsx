import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'


function ProductDetails(){
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        setError(null)
        const fetch_product_info = () => {
        try{
            axios.get(`https://dummyjson.com/products/${id}`)
            .then(res => {
                setProduct(res.data)
                setLoading(false)
                console.log(res.data)
            })
        } catch(err){
            console.error(err)
            setError("Fail to load details")
            setLoading(false)
        }
        }
        fetch_product_info()
    }, [id])
    console.log(product)


    if (loading) return <p className="text-center tsxt-3xl">Loading..........</p>
    if (error) return <p className="text-center tsxt-3xl">{ error }</p>

    return product && (
        <div className="sm:scale-90">
            <h1 className="bg-black text-white text-[2rem] text-center m-4 font-bold"> { product.title } </h1>
            <div className="flex items-center justify-between gap-6 w-[100%] h-[100vh] bg-gray-200">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <div><img src={ product.images[0]} alt={product.title} /></div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-4xl">Share Product</h2>
                        <ul className="flex justify-center items-center gap-6">
                            <a href="http://facebook.com" className="cursor-pointer text-4xl"><li><i className='bx bxl-facebook-circle'></i></li></a>
                            <a href="https://x.com/" className="cursor-pointer text-4xl"><li><i className='bx bxl-twitter'></i></li></a>
                            <a href="https://wa.me/" className="cursor-pointer text-4xl"><li><i className='bx bxl-instagram-alt' ></i></li></a>
                        </ul>
                    </div>

                </div>
            
                <div className="flex flex-col items-center justify-center gap-10 px-3">
                    <div>
                        <h3 className="text-6xl font-bold">-{ product.title }</h3>
                        <p>brand</p>
                    </div>
                    <hr className="border-1 bg-black border-black"/>
                    <div className="flex flex-col gap-10">
                        <h2 className="text-center text-5xl">Price: ${ product.price }</h2>
                        <p className="text-3xl"> { product.description } </p>
                        <div className="text-2xl text-center text-yellow-400 flex gap-3 justify-center items-center">
                            <i className='bx bxs-star hover:scale-105'></i>
                            <i className='bx bxs-star hover:scale-105'></i>
                            <i className='bx bxs-star hover:scale-105'></i>
                            <i className='bx bxs-star hover:scale-105'></i>
                            <i className='bx bxs-star hover:scale-105'></i>
                            <a href="#"> <span> (10) </span> Verivied ratings</a>
                        </div>
                        <button className="bg-black text-white text-2xl py-2 px-7
                        hover:bg-gray-700 cursor-pointer transition-all h-32 delay-30">Add to chart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails