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
                    <div className="mr-[200px] mt-[150px]">
                        <h1 className="mb-1 text-3xl text-white font-semibold"> I am Chandra Shekhor</h1>
                        <h1 className="mb-1 text-pink-300  text-5xl font-black">Web Developer</h1>
                        <p className="text-xl text-white">I break down complex user experinece <br /> problems  to  create integritiy focussed <br /> solutions  that  connect  billions of people</p>
                        <div className="flex mt-10">
                            <div>
                                <button className="btn btn-outline text-white text-xl rounded-3xl mr-3">Download CV <FiDownload /></button>
                            </div>
                            <div className=" text-indigo-700 mr-2">
                                 <a href="https://github.com/chandro4D"><FaGithub className="w-[50px] h-[50px]" /></a>
                            </div>
                            <div className="mr-2 text-indigo-700 ">
                                <a href="https://www.facebook.com/chandro.shakhor.1"><ImFacebook2 className="w-[50px] h-[50px] rounded-full" /></a>
                            </div>
                            <div className=" text-indigo-700">
                                <a href="https://www.linkedin.com/in/chandra-shekhor-mondal"><ImLinkedin className="w-[50px] rounded-full h-[50px]" /></a>
                            </div>
                           
                            
                        </div>
                    </div>
                    <div >
                        <img className="rounded-full h-[500px] w-[700px] mt-[1px] " src="https://i.ibb.co/MfS5rxY/1720062798988-removebg-preview.png" alt="" />
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