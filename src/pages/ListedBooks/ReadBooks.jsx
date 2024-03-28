import { useEffect, useState } from "react";
import ReadCard from "./ReadCard";

const ReadBooks = () => {

    const [reads, setReads] = useState([]);
    const [noFound, setNoFound] = useState();

    useEffect(() => {
        const readsItems = JSON.parse(localStorage.getItem('reads'));
        if (readsItems) {

            // console.log(readsItems);
            setReads(readsItems);
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
                            reads.map((card) => <ReadCard key={card.bookId} card={card} > </ReadCard>
                          
                            
                            
                            )


                        }
                    </div>
                </div>};
        </div>
    );
};

export default ReadBooks;