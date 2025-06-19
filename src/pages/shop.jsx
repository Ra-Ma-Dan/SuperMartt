import StoreCarousel from "../components/storeCarosel"

function Shop(){
    

    return (
        <>
            <h1 className="bg-black text-white text-[4rem] text-center m-4 font-bold">
            This is The Shop Page </h1>

            <div className="p-16">
                <StoreCarousel />
            </div>
        </>
    )
}

export default Shop