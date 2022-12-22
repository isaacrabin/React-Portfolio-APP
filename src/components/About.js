import React from "react";
function About() {
  return (
    <div className="w-full">
        <div className="max-w-4xl mx-auto mt-16">
            <p className="text-2xl md:text-4xl font-bold text-center">My Background</p>
            <p className="text-base text-left md:text-center text-gay-600 leading-relaxed mt-4">
            February 11, 2022 - React Component and Function for Creating Lorem Ipsum Text as Placeholder. Latest version: 1.4.10, last published: 9 months ago. 
            Start using react-lorem-ipsum in your project by running `npm i react-lorem-ipsum`. 
            There are 6 other projects in the npm registry using react-lorem-ipsum.
            </p>
        </div>  
        {/* <div class=" flex flex-col aspect-w-16 aspect-h-4 max-w-4xl justify-center mx-auto">
         <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>   */}
    </div>
    
  );
}
export default About;