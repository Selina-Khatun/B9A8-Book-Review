import { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import useContext from '../../hooks/useContext';

const SortButton = () => {
    const { data } = useContext();
    const [reads, setReads] = useState([]);
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const readsItems = JSON.parse(localStorage.getItem('reads')) || [];
        console.log("Reads from localStorage:", readsItems);
        setReads(readsItems);
    }, []);

    const handleSort = (field) => {
        const sortedBooks = [...reads].sort((a, b) => {
            if (field === 'rating') {
                return b.rating - a.rating;
            } else if (field === 'pages') {
                return b.totalPages - a.totalPages;
            } else if (field === 'year') {
                return b.yearOfPublishing - a.yearOfPublishing;
            }
            return 0;
        });

        console.log("Sorted Books:", sortedBooks);
        setReads(sortedBooks);
        setSortBy(field);
    };

    console.log("Current Reads:", reads);

    return (
        <div className="text-center mb-9">
            <h1 className='text-3xl font-bold bg-gray-100 p-5 rounded-2xl text-center my-5'>Books</h1>
            <details className="dropdown ">
                <summary className="m-1 btn btn-success border-none text-white bg-[#23BE0A]">Sort By <FaAngleRight /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                    <li><button onClick={() => handleSort('rating')}>Rating</button></li>
                    <li><button onClick={() => handleSort('pages')}>Number of pages</button></li>
                    <li><button onClick={() => handleSort('year')}>Publisher year</button></li>
                </ul>
            </details>
        </div>
    );
};

export default SortButton;
