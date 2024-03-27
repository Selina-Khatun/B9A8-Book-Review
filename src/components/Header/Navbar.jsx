import { NavLink } from "react-router-dom";
import'./Navbar.css';


const Navbar = () => {
    const navItems = <>
        <li className='mr-3 text-base '  ><NavLink  
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#23BE0A] border-2  border-green-400 underline" : ""
        } to={'/'}>Home</NavLink></li>
        <li className='mr-3 text-base '><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#23BE0A] border-2  border-green-400 underline" : ""
        } to={'/listedBooks'}>Listed Books</NavLink></li>
        <li className='mr-3 text-base'><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#23BE0A] border-2  border-green-400 underline" : ""
        } to={'/pagesToRead'}>Pages to Read</NavLink></li>
        <li className='mr-3 text-base'><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#23BE0A] border-2  border-green-400 underline" : ""
        } to={'/services'}>Services</NavLink></li>
        <li className='mr-3 text-base'><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#23BE0A] border-2  border-green-400 underline" : ""
        } to={'/about'}>About</NavLink></li>



    </>
    return (
        <nav   className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-2xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                <button className="relative rounded mr-2 px-5 py-2.5 overflow-hidden group bg-[#23BE0A]  hover:bg-gradient-to-r hover:from-green-800 hover:to-green-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Sign In</span>
                </button>
                <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#59C6D2]  hover:bg-gradient-to-r hover:from-[#0dabbc] hover:to-[#22676e] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#59C6D2] transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Sign Up</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;