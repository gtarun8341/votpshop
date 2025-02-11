import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function Register() {
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

        <img src="/login.png" alt="Register Illustration" className="w-3/4 max-w-md" />
      </div>

      {/* Right Section (Register Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
        <div className="p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-center">Sign Up</h2>
          <p className="text-[#BBBBBB] text-center mb-6">
            Create an account to join us
          </p>

          <form className="space-y-4">
            {/* Full Name Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-black">Full Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md pl-10 focus:ring focus:ring-blue-300 outline-none placeholder:text-sm"
                placeholder="Enter your full name"
              />
              <FaUser className="absolute top-8 left-3 text-gray-400" />
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-black">Email Address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md pl-10 focus:ring focus:ring-blue-300 outline-none placeholder:text-sm"
                placeholder="Enter your email"
              />
              <FaEnvelope className="absolute top-8 left-3 text-gray-400" />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-black">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md pl-10 focus:ring focus:ring-blue-300 outline-none placeholder:text-sm"
                placeholder="Enter your password"
              />
              <FaLock className="absolute top-8 left-3 text-gray-400" />
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <label className="block text-sm font-medium text-black">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md pl-10 focus:ring focus:ring-blue-300 outline-none placeholder:text-sm"
                placeholder="Confirm your password"
              />
              <FaLock className="absolute top-8 left-3 text-gray-400" />
            </div>

            {/* Register Button */}
            <button className="w-full bg-black hover:bg-black text-white py-2 rounded-md transition">
              Register
            </button>

            {/* Already Registered? */}
            <p className="text-center mt-4 text-[#BBBBBB]">
              Already registered?{" "}
              <a href="/login" className="text-black font-semibold hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
