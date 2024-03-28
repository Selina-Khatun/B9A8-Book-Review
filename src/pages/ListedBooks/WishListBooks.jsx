import { useEffect, useState } from 'react';
import WishCard from './WishCard';

const WishListBooks = () => {
    const [wishes, setWishes] = useState([]);
    const [noFound, setNoFound] = useState();
    useEffect(() => {
        const readsItems = JSON.parse(localStorage.getItem('wishes'));
        if (readsItems) {

            // console.log(readsItems);
            setWishes(readsItems);
        } else {
            setNoFound("No Data Found")
            // console.log('no data')
        }

    }, []);
    return (
        <div>

            {noFound ? <h2 className=' h-[30vh] font-bold text-4xl text-[#FF444A] flex justify-center items-center'>{noFound}</h2>
                :
                <div>
                    <div className=' w-[90%] mx-auto'>
                        {
                            wishes.map((card) => {
                                return <WishCard key={card.bookId} card={card}> </WishCard>;
                            }
                            )
                        }
                    </div>
                </div>};
        </div>
    );
};

export default WishListBooks;