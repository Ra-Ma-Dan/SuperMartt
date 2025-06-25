import images from "../assets/images"

function WhyChooseUs(){


    return (
        <div className="flex justify-between items-center w-[100%]">
            <div className="text-center text-lg">
                <h3 className="font-bold text-3xl">You Deserve the Best!!!</h3>
                <p className="my-2 lg:text-xl text-lg">"Lightning-fast delivery, right to your doorstep!"</p>
                <p className="my-2 lg:text-xl text-lg">“Get your order in record time with our speedy shipping!”</p>
                <p className="my-2 lg:text-xl text-lg">“From our store to your door — speedy shipping guaranteed!”</p>
                <p className="my-2 lg:text-xl text-lg">“Fast, reliable delivery — because waiting is overrated.”</p>
            </div>
            <div><img className="lg:w-[40vw] w-[50vw]" src={images.fastDev2} alt="" /></div>

        </div>
    )
}

export default WhyChooseUs