


const Signup = () => {
  return (
    <div className="w-full flex flex-col h-full gap-2 justify-between items-center mt-1">
        <div className="border-zinc-300 min-w-[60vw] border-2 p-5" >
            <h1 className="text-center text-xl">Sigh up with email and password</h1>
            <div className="w-auto grid grid-cols-2 m-4 gap-3">
                <input className="h-16 px-3 outline-none border-2 rounded-xl" type="text" placeholder="Full Name" name="fullName" />
                <input className="h-16 px-3 outline-none border-2 rounded-xl" type="email" placeholder="Email" name="email" />
                <input className="h-16 px-3 outline-none border-2 rounded-xl" type="email" placeholder="Email" name="email" />
                <input className="h-16 px-3 outline-none border-2 rounded-xl" type="text" placeholder="Username" name="userName" />
                <input className="h-16 px-3 outline-none border-2 rounded-xl" type="password" placeholder="Password" name="password" />
                <input className="h-16 px-3 outline-none border-2 rounded-xl" type="password" placeholder="Password" name="password" />
            </div>
            <a className="hover:text-gray-500" href="#">forget password</a>
            <button className="w-[100%] bg-white border-2 border-black text-xl font-mono py-6 
            hover:bg-black mt-2 hover:text-white font-bold transition-all ease-linear delay-75">
                Login</button>
            <p className="text-center my-4">Already have an account? 
                <a className="bg-gray-200 p-1 hover:bg-gray-400 transition-all ease-linear" href="#">Log in</a>
            </p>
        </div>
        <div className="flex flex-col gap-3 border-2 py-4 px-6 min-w-72">
            <p>-- Or Continue with</p>
            <a href="#" className="bg-gray-300 text-xl text-center py-2 hover:bg-black hover:text-white transition-all 
            ease-linear delay-75">Facebook</a>
            <a href="#" className="bg-gray-300 text-xl text-center py-2 hover:bg-black hover:text-white transition-all 
            ease-linear delay-75">Google</a>
        </div>
    </div>
  )
}
export default Signup
