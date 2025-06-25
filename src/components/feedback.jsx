function Feedback(){

    return (
        <div className="flex-col gap-2 px-4 py-2 border-2 border-gray-400 rounded-2xl">
            <div className="flex items-end justify-between">
                <div>
                    <h4 className=" hidden font-bold lg:text-sm">Name: Name Of Name</h4>
                    <p className="text-[0.5rem] lg:text-xs"><em>Email: eamil@gmail.com</em></p>
                </div>
                <p className="text-sm font-thin">13/2028</p>
            </div>
            <hr className="border-2"/>
            <div className="text-center">
                <p className="xl:text-2xl">Seeing customers providing high ratings gives confidence that it’s a good choice and acts as social proof.
                Five star ratings also provide valuable feedback and highlight how well business is doing well.
                </p>
            </div>
            <div className="flex justify-center items-center w-[100%]">
                <button className="px-6 py-1 rounded-xl bg-gray-500 transition-all delay-30 ease-linear hover:text-white hover:bg-gray-600">
                    Read More...</button>
            </div>
        </div>
    )
}

export default Feedback