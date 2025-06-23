import { Link } from "react-router-dom";


const LogIn = () => {
  return (
    <div className="w-full flex flex-col h-full gap-10 justify-between items-center mt-3">
        <div className="border-zinc-300 min-w-[60vw] border-2 p-5" >
            <h1 className="text-center">Sigh up with email and password</h1>
            <div className="bg-gray-300 w-[100%] mt-8 mb-10">
                <input className="w-[100%] bg-transparent text-black px-3 h-[3rem]"
                type="email" name="Email" placeholder="Email" />
            </div>
            <div className="bg-gray-300 w-[100%] mt-10 mb-6">
                <input className="w-[100%] bg-transparent text-black px-3 h-[3rem]"
                type="password" name="password" placeholder="paswword" />
            </div>
            <a className="hover:text-gray-500" href="#">forget password</a>
            <button className="w-[100%] bg-white border-2 border-black text-xl font-mono py-6 
            hover:bg-black mt-2 hover:text-white font-bold transition-all ease-linear delay-75">
                Login</button>
            <p className="text-center my-4">Don't have an account? 
                <Link to="/signup"> <a className="bg-gray-200 p-1 hover:bg-gray-400 transition-all ease-linear">
                    Create one</a></Link>
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
  );
}

export default LogIn;
