import React, { useState, ChangeEvent, FormEvent } from "react";
import Login from "./login";

interface FormData {
  fullName: string;
  email: string;
  birthDate: string;
  studies: string;
  fieldsOfInterest: string;
}

const Join: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    birthDate: "",
    studies: "",
    fieldsOfInterest: "",
  });
  const [showLogin, setShowLogin] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black font-mainfont px-4">
      <div className="bg-black p-10 rounded-2xl shadow-xl w-full max-w-md transform transition duration-300 hover:scale-[1.01]">
        <h2 className="text-center text-3xl font-secondaryfont mb-8 text-white tracking-wide">
          Join Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { name: "fullName", placeholder: "Full Name", type: "text" },
            { name: "email", placeholder: "Email", type: "email" },
            { name: "birthDate", placeholder: "Birth Date", type: "date" },
            { name: "studies", placeholder: "Studies", type: "text" },
            { name: "fieldsOfInterest", placeholder: "Fields of Interest", type: "text" },
          ].map((field) => (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={(formData as any)[field.name]}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-brand-blue3 transition"
            />
          ))}
          <div className="flex justify-center items-center mt-6 gap-3">
            <button
              type="button"
              className="bg-black text-black px-5 py-2.5 rounded-xl hover:bg-gray-400 transition shadow-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-brand-blue4 transition shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-center text-sm mt-4 font-secondaryfont text-white">
          Have an account?{" "}
          <span
            onClick={() => setShowLogin(true)}
            className="underline cursor-pointer text-brand-blue3 hover:text-brand-blue4"
          >
            Login
          </span>
        </p>
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
      </div>
    </div>
  );
};

export default Join;
