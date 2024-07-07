import { FaGithub } from "react-icons/fa";
import About from "../About/About";
import Contact from "../Contact/Contact";

import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import { FiDownload } from "react-icons/fi";


const Home = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-indigo-500  to-pink-500 h-[500px]">

                <div className="flex  ml-[170px]">
                    <div className=" mt-[150px]">
                        <h1 className="mb-1 lg:text-3xl sm:text-2xl text-white font-semibold"> I am Chandra Shekhor</h1>
                        <h1 className="mb-3 text-pink-300  lg:text-4xl sm:text-3xl font-black">Web Developer</h1>
                        <p className="lg:text-xl sm:text-base text-white">
                        Hi, I am Chandra Shekhor Mondal, a passionate and dedicated  web developer <br /> 
                         specializing in React, JavaScript, and MongoDB.  With  a knack for creating  dynamic,<br /> 
                          responsive, and user-friendly  web applications. My expertise spans front-end and  back-end 
                           development, allowing me to build seamless and efficient web experiences.
                        </p>
                        <div className="flex mt-5">
                            <div>
                                <button className="btn btn-outline text-white text-xl rounded-3xl mr-3">Download CV <FiDownload /></button>
                            </div>
                            <div className=" text-black mr-2">
                                 <a href="https://github.com/chandro4D"><FaGithub className="w-[50px] h-[50px]" /></a>
                            </div>
                            <div className="mr-2 text-blue-600 ">
                                <a href="https://www.facebook.com/chandro.shakhor.1"><ImFacebook2 className="w-[50px] h-[50px] rounded-full" /></a>
                            </div>
                            <div className=" text-violet-950">
                                <a href="https://www.linkedin.com/in/chandra-shekhor-mondal"><ImLinkedin className="w-[50px] rounded-full h-[50px]" /></a>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div >
                        <img className="rounded-full lg:h-[500px] lg:w-[700px] sm:h-[300px] sm:w-[500px] mt-[1px] " src="https://i.ibb.co/MfS5rxY/1720062798988-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>

        </div>
    );
};

export default Home;