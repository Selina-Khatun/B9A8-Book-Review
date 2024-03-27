import React from 'react';
import useContext from '../../hooks/useContext';
import Card from './Card';

const Cards = () => {
    const [data]=useContext();
    // console.log(data);
    return (
        <section>
           <h1 className='text-3xl font-bold text-center my-5'>Books</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
{
    data.map(card=><Card card={card} key={card.bookId}></Card>)
}
 
           </div>
        </section>
    );
};

export default Cards;