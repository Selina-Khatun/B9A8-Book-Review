import { CiLocationOn } from "react-icons/ci";
import { FaRegFile } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
const ReadCard = ({ card }) => {
    // console.log(card);
    const {  image, tags, bookName, author, category, rating,yearOfPublishing,totalPages,publisher } = card || {};
    return (
        <div>
            <div className="card card-side  border-2 p-3 m-5 ">
                <figure className="border-2 rounded-2xl"><img src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p className="font-semibold">By : {author}</p>
                    <div className="flex text-center items-center my-4  gap-5">
                        <h1 className="font-bold text-xl">Tags</h1>
                        <h1 className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-3 rounded-full font-semibold text-xl ">#{tags?.[0]}</h1>
                        <h1 className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-3 rounded-full font-semibold text-xl ">#{tags?.[1]}</h1>
                        <h1 className="font-semibold text-xl inline-flex items-center gap-2  text-[#131313CC]"><CiLocationOn /> Year of Publishing : {yearOfPublishing}</h1>
                    </div>
                    <div className="flex text-center items-center  gap-9">
                        <h1 className="font-semibold text-xl inline-flex items-center gap-2  text-[#131313CC]"><HiOutlineUsers /> Publisher: {publisher}</h1>
                        <h1 className="font-semibold text-xl inline-flex items-center gap-2  text-[#131313CC]"><FaRegFile /> Page  : {totalPages}</h1>
                    </div>

                    <hr className="border-" />
                    <div className="flex text-center items-center my-4  gap-3">

                        <h1 className="bg-[#328EFF26] text-[#328EFF] py-1 px-3 rounded-full font-semibold text-lg ">Category: {category}</h1>
                        <h1 className="bg-[#FFAC3326] text-[#FFAC33] py-1 px-3 rounded-full font-semibold text-lg ">Rating: {rating}</h1>
                        <button className="relative rounded-full mr-2 px-3 py-1.5 overflow-hidden group bg-[#23BE0A]  hover:bg-gradient-to-r hover:from-green-800 hover:to-green-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">View Details</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadCard;