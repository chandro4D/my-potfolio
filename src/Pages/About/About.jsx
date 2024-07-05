import { GiGraduateCap } from "react-icons/gi";


const About = () => {
    return (
        <div className="bg-white mb-10">
            <div className="text-center  ">
                <h3 className="text-3xl text-sky-600 font-medium mb-2 pt-24">About Me</h3>
                <h2 className="text-5xl text-blue-500 font-bold mb-5">Welcome To My Site</h2>
                <p className=" text-gray-500">I am a web developer from Khulna, with a strong focus in Web
                    Development. I love to get new experiences and always learn <br /> from my
                    surroundings.  done more than 20 projects. You can check it through
                    portfolio section on this website. <br /> I looking forward to any
                    opportunities and challenges.
                </p>
                <h1 className="text-5xl text-purple-600 font-bold mt-5">My Expert Areas </h1>
                <p className="text-gray-500 text-xl mt-3">``Express yourself freely and creatively, using customizable templates or crafting your own designs <br /> from scratch, with access to a vast and immersive library.`` </p>
                <div className="flex ml-[250px] mt-10 ">
                    <div>
                        <img className="w-[100px] h-[100px] mr-3 " src="https://i.ibb.co/GHDn9wY/HTML.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] mr-3 " src="https://i.ibb.co/4YFH8rz/css.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] mr-3 " src="https://i.ibb.co/kxVpg7V/Java-Script.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] mr-3 " src="https://i.ibb.co/bKp9mFP/react.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] mr-3 " src="https://i.ibb.co/h8xTh68/tailwind.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] mr-3 " src="https://i.ibb.co/s5Hh81r/firebase.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] mr-3 " src="https://i.ibb.co/ZWz3SHr/node.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] mr-3 " src="https://i.ibb.co/tYfnKcB/express.png" alt="" />
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] mb-10  " src="https://i.ibb.co/xSGpYQZ/mongo.png" alt="" />
                    </div>
                </div>




            </div>
            <div className="flex ml-[540px]">
                <h2><GiGraduateCap className="text-5xl text-indigo-500 mr-5" /></h2>
                <h2 className="text-5xl text-center font-semibold text-indigo-500">My Education</h2>
            </div>
            <div className="card bg-gradient-to-r from-pink-500 ml-[430px] mt-5   to-indigo-500  w-[600px] shadow-xl">
                <div className="card-body text-xl text-white">
                    <h2 className="card-title text-blue-700">2023-Present</h2>
                    <h2>Bachelor of Science in Computer Science and Engineering</h2>
                    <h3 className="">Northern University of Business and Technology</h3>

                </div>
            </div>
            <br />
            <br />
        </div>
    );
};

export default About;