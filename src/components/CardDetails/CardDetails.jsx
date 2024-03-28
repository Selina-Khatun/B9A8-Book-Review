import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const [card, setCard] = useState({})
    const { id } = useParams();
    const cards = useLoaderData();
    // console.log('id', id); 
    // console.log('cards', cards); 
    useEffect(() => {
        // console.log('id:', id);
        // console.log('cards:', cards);
        if (cards && id) {
            const findCard = cards.find(card => card.bookId === parseInt(id));
            // console.log('findCard:', findCard);
            setCard(findCard);
        }
    }, [id, cards]);
    return (
        <section>

            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">

                        <div className="lg:w-1/2 w-full lg:mt-10" >
                        <img alt="" className=" w-full  h-fit  bg-[#1313130D] object-cover object-center rounded border border-gray-200" src={card.image} />
                        </div>

                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{card.bookName}</h1>
                            <p className="font-semibold">By : {card.author}</p>

                            <p className="border-y-2 my-5 py-2">{card.category}</p>
                            <p className="leading-relaxed my-3 text-lg"> <span className="font-bold">Review : </span> {card.review}</p>
                            <div className="flex text-center items-center my-4  gap-3">
                                <h1 className="font-bold text-xl">Tags</h1>
                                <h1 className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-3 rounded-full font-semibold text-xl ">#{card.tags?.[0]}</h1>
                                <h1 className="bg-[#23BE0A0D] text-[#23BE0A] py-1 px-3 rounded-full font-semibold text-xl ">#{card.tags?.[1]}</h1>
                            </div>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">


                            </div>

                            <div className="flex gap-10 items-center leading-loose mb-5 text-xl">
                                <div>
                                    <p>Number of Pages:</p>
                                    <p>Publisher:</p>
                                    <p>Year of Publishing:</p>
                                    <p>Rating:</p>
                                </div>
                                <div className="font-bold">
                                    <p>{card.totalPages}</p>
                                    <p>{card.publisher}</p>
                                    <p>{card.yearOfPublishing}</p>
                                    <p>{card.rating}</p>
                                </div>
                            </div>
                            <button className="relative px-9 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-lg shadow-inner group">
                                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Read</span>
                            </button>
                            <button className="relative rounded px-5 ml-4 py-2.5 overflow-hidden group bg-[#59C6D2]  hover:bg-gradient-to-r hover:from-[#0dabbc] hover:to-[#22676e] text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#59C6D2] transition-all ease-out duration-300">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative">Wishlist</span>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default CardDetails;