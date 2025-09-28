import React from "react";
import CustomCursor from "../../Cursor";
import abt from "./abt_image.png";
import { GiCobweb } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";

const About_us: React.FC = () => {
  
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Add cursor */}
      <CustomCursor />

      <div className="flex h-full items-center justify-center gap-x-5 bg-[#ffffff] text-black">
        <div className=" flex items-center px-8 md:px-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text- hover-target mb-6">
              About us
            </h2>
            <p className="text-lg hover-target  max-w-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eos commodi aspernatur incidunt laboriosam facere illo maiores, voluptatibus, distinctio est molestiae eaque non aliquid fugit doloremque voluptatem dolores ipsa blanditiis.
            </p>
            <h2 className="text-2xl font-extrabold  hover-target mb-6 mt-5">
              Departments
            </h2>
            <div className="flex gap-x-10 ml-3">
              <div className="flex gap-2 justify-center items-center hover-target">
                <GiCobweb fill="black" /> <p className="">Web dev</p>
              </div>
              <div className="flex gap-2 justify-center items-center hover-target">
                <FaDatabase fill="black"/> <p className="">Database Design</p>
              </div>
              <div className="flex gap-2 justify-center items-center hover-target">
                <GiCyberEye fill="black"/> <p className="">Cyber Security</p>
              </div>
            </div>
            <div className=" w-[400px] ">
              <div><h2 className="text-2xl font-extrabold  hover-target mb-6 mt-5">Our Mission</h2></div>
              
              <div><p className="text-wrap font-light text-[15px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus in aliquam, unde voluptate iure similique obcaecati exercitationem natus, officiis consequatur odit officia facere blanditiis ullam! Sed doloremque eligendi quisquam ducimus.</p></div>
            
            </div>
          </div>
        </div>

        <div className="bg-white flex items-center px-8 md:px-16">
          <img src={abt} alt="" className="w-[900px] object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About_us;
