
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Tabs = () => {
    const [tabIndex,setTabIndex]=useState(0);

    return (
        <div>
            <div className="flex items-start -mx-4 overflow-x-auto overflow-y-hidden justify-center   md:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to={""} onClick={()=>setTabIndex(0)} rel="noopener noreferrer"className={`flex items-start flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===0?' border-2 border-b-0 border-green-400 text-green-500 rounded': 'border-b'} dark:border-gray-600 dark:text-gray-600`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>
                <Link 
                to={'wishListBooks'}
                 rel="noopener noreferrer" onClick={()=>setTabIndex(1)}className={`flex items-start flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex===1?' border-2 border-green-400 text-green-500 border-b-0 rounded': 'border-b-2'} dark:border-gray-600 dark:text-gray-600`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>
               <div className='  border-b-2 w-full mt-12'> </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Tabs;