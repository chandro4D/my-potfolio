import { Link } from "react-router-dom";


const Navbar = () => {
    const Links = <>
        <li className="text-xl "><Link to="/">Home</Link></li>
        <li className="text-xl "><Link to="/about">About</Link></li>
        <li className="text-xl "><Link to="/services">Services</Link></li>
        <li className="text-xl "><Link to="/projects">My Projects</Link></li>
        <li className="text-xl "><Link to="/contact">Contact Me</Link></li>

    </>
    return (
        <div className=" navbar fixed bg-gradient-to-r from-indigo-500    to-pink-500 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="text-white menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost lg:text-3xl sm
                :text-3xl text-white font-medium  sm:mr-[10px] lg:ml-[150px]"><span className="text-pink-300 ">Chandra</span> Shekhor Mondal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mr-[150px] text-white  font-semibold">
                    {Links}
                </ul>
            </div>
           
        </div>
    );
};

export default Navbar;