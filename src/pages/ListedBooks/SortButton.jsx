
import { FaAngleRight } from "react-icons/fa";
const SortButton = () => {
    return (
        <div className="text-center mb-9">
            <h1 className='text-3xl font-bold bg-gray-100 p-5 rounded-2xl text-center my-5'>Books</h1>
            <details className="dropdown ">
                <summary className="m-1 btn btn-success border-none text-white bg-[#23BE0A]">Sort By <FaAngleRight /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </details>
        </div>
    );
};

export default SortButton;