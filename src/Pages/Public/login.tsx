import React from "react";

interface LoginProps {
  onClose?: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-8 rounded-2xl w-96 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>
        <h2 className="text-center text-3xl mb-6 font-semibold text-gray-800">
          Login
        </h2>
        <form className="space-y-5">
          <input type="email" placeholder="Email" className="w-full p-3 rounded-xl border border-gray-300" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded-xl border border-gray-300" />
          <button type="submit" className="w-full bg-brand-blue3 text-white py-3 rounded-xl">
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-6 text-gray-500">
          Don’t have an account?{" "}
          <span onClick={onClose} className="underline cursor-pointer text-brand-blue3">
            Signup
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
