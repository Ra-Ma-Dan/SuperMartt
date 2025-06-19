import { useState } from "react"
import images from "../assets/images"
import DiscountedProducts from "../components/discount"
import Feedback from "../components/feedback"
import NewProducts from "../components/new_products_card.jsx"
import Trending from "../components/trending"
import WhyChooseUs from "../components/whyUs"
import ProductCarosel from "../components/producCarosels"
import StoreCarousel from "../components/storeCarosel.jsx"



function Home(){
    const [productIndex, setProductIndex] = useState(0)

    const time = new Date()
    let currentDay = time.getDate()
    let currentMonth = time.getMonth()

    const expire_date = '18 : 09'

    let has_expired = expire_date === (`${currentDay} : 0${currentMonth + 1}`)
    //console.log(current)
    //console.log(expire_date)


    return(
        <main className='p-28'>
            <div className="text-left px-10">
                <h2 className="text-3xl font-bold font-sans capitalize" >Welcome to your happy place </h2>
                <h4> where every click brings joy and every find feels like a little celebration! Let's make today awesome together</h4>
                <p>Discover joy in every purchase — because you deserve the best, every day!</p>
                <p>Shop with a smile, find what you love, and brighten your world — one happy click at a time!</p>
                <button className="bg-black p-3 text-xl rounded-md m-5 transition-all ease-in-out text-white hover:scale-105">Explore</button>
            </div>
            <div className="p-10"> <StoreCarousel /> </div>

            <section>
                <h1 className="bg-black text-white text-[4rem] text-center m-4 font-bold">Trending Products</h1>
                <div className="grid grid-cols-3 gap-4 my-6">
                    <Trending />
                    <Trending />
                    <Trending />
                </div>
            </section>

            <section>
                <h1 className="bg-black text-white text-[4rem] text-center m-4 font-bold">New Products</h1>
                <div className="">
                    <ProductCarosel />
                </div>
            </section>

            <section>
            {( !has_expired ? 
            <h1 className="bg-black text-white text-[4rem] text-center m-4 font-bold">Products with Discount</h1> 
            : 
            <h1 className="bg-black text-white text-[4rem] text-center m-4 font-bold">Product</h1>)}
                <div className="grid grid-cols-3 gap-4 my-6">
                    <NewProducts />
                    <NewProducts />
                    <NewProducts />
                </div>
            </section>


            <section className="px-14 my-20">
                <WhyChooseUs />
            </section>

            <section>
                <h1 className="text-black text-[4rem] text-center m-4 font-bold">FeedBacks</h1>
                <p></p>
                <div className="grid grid-cols-4 gap-4 my-6">
                    <Feedback />
                    <Feedback />
                    <Feedback />
                </div>
            </section>

        </main>
    )
}

export default Home