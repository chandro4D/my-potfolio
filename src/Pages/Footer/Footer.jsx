import { FaGithub } from "react-icons/fa";
import { ImFacebook2, ImLinkedin } from "react-icons/im";


const Footer = () => {
    return (
        <div>
            <div className=" bg-gradient-to-r from-pink-500    to-black text-base-content p-10">

                <nav className="text-center">
                    <h6 className=" text-3xl text-blue-500 font-semibold">CHANDRA SHEKHOR MONDAL</h6>
                    <div className="flex my-5 ml-[600px]">

                        <div className=" text-black mr-3">
                            <a href="https://github.com/chandro4D"><FaGithub className="w-[50px] h-[50px]" /></a>
                        </div>
                        <div className="mr-3 text-indigo-600 ">
                            <a href="https://www.facebook.com/chandro.shakhor.1"><ImFacebook2 className="w-[50px] h-[50px] rounded-full" /></a>
                        </div>
                        <div className=" text-blue-600">
                            <a href="https://www.linkedin.com/in/chandra-shekhor-mondal"><ImLinkedin className="w-[50px] rounded-full h-[50px]" /></a>
                        </div>


                    </div>
                    <p className="text-rose-500">Copyright © ${new Date().getFullYear()} - All right reserved by Chandra Shekhor Mondal</p>
                </nav>


            </div>


        </div>

    );
};

export default Footer;