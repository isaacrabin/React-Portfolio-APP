import React from "react";
import { FaPalette } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
function Skills() {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
        <div className="p-4 w-40 mx-auto  text-center rounded-xl bg-white border-2 border-gray-300">
         <FaPalette className="text-4xl mx-auto inline-block text-blue-400"/>
         <p className="text-xl font-semibold mt-4">FrontEnd</p>
        </div>
        <div className="p-4 w-40 mx-auto sm:mt-4 text-center rounded-xl bg-white border-2 border-gray-300">
         <FaReact className="text-4xl mx-auto inline-block text-violet-500"/>
         <p className="text-xl font-semibold mt-4">FrontEnd</p>
        </div>
        <div className="p-4 w-40 mx-auto text-center rounded-xl bg-white border-2 border-gray-300">
         <FaCode className="text-4xl mx-auto inline-block"/>
         <p className="text-xl font-semibold mt-4">FrontEnd</p>
        </div>
    </div>
    
  );
}
export default Skills;