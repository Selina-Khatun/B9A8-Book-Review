
const Banner = () => {
    return (
        <div className="hero rounded-3xl my-5 max-w-7xl bg-base-200">
            <div className="hero-content   flex-col lg:flex-row-reverse">
                <div className="">
                    <img src="https://i.ibb.co/kygGW7k/pngwing-1.png" className=" rounded-lg" />
                </div>
                <div className=" ">
                    <h1 className="text-5xl max-w-xl font-bold">Books to freshen  up your bookshelf</h1>
                   
                    <button className="relative rounded my-5 px-5 py-2.5 overflow-hidden group bg-[#23BE0A]  hover:bg-gradient-to-r hover:from-green-800 hover:to-green-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative">View The List</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;