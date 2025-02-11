import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left Section (Hidden on Small Screens) */}
      <div
        className="md:w-1/2 flex flex-col items-center justify-center p-10 hidden md:flex"
        style={{ backgroundColor: "#9EA9FF" }}
      >
<h1 className="text-left font-bold mb-6">
  <span className="text-2xl text-black">Fast and Easy </span>
  <span className="text-3xl text-white">Receive</span>
  <br />
  <span className="text-3xl text-white">SMS Online</span>
</h1>

        <img src="/login.png" alt="SMS Illustration" className="w-3/4 max-w-md" />
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
        <div className="p-8 w-full max-w-md  ">
          <h2 className="text-3xl font-bold mb-2 text-center">Sign In</h2>
          <p className="text-[#BBBBBB] text-center mb-6">
  Sign in to your account to join us
</p>


          <form className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border  rounded-md pl-10 focus:ring focus:ring-blue-300 outline-none placeholder:text-sm"
                placeholder="Enter your email"
              />
              <FaEnvelope className="absolute top-8 left-3 text-gray-400" />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md pl-10 focus:ring focus:ring-blue-300 outline-none placeholder:text-sm"
                placeholder="Enter your password"
              />
              <FaLock className="absolute top-8 left-3 text-gray-400" />
            </div>

            {/* Login Button */}
            <button className="w-full bg-black hover:bg-black text-white py-2 rounded-md transition">
              Login
            </button>

            {/* Divider */}
            <div className="text-center text-[#BBBBBB] mt-4 text-sm">Or continue with</div>

            {/* Google Login Button */}
            <button className="w-full flex items-center  text-[#BBBBBB] justify-center border py-2 rounded-md mt-2 hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-red-500" />
              Login with Google
            </button>

            {/* Register Link */}
            <p className="text-center mt-4 text-[#BBBBBB]">
              Don't have an account?{" "}
              <a href="/register" className="text-black font-semibold hover:underline">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
