import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ card }) => {
  console.log(card);
  const {bookId, image, tags, bookName, author, category, rating } = card || {};
  return (
    <div className="card m-3 border">
      <Link to={`/cards/${bookId}`}>
      <figure className="mx-6 bg-[#F3F3F3] mt-6 rounded-xl">
        <img src={image} alt={bookName} className=" rounded-xl m-3 " />
      </figure>
      <div className="card-body ">
        <div className="flex text-center text-[#23BE0A] gap-3">

          <h1 className="bg-[#23BE0A0D] py-1 px-3 rounded-full font-semibold text-xl ">{tags[0]}</h1>
         <h1 className="bg-[#23BE0A0D] py-1 px-3 rounded-full font-semibold text-xl ">{tags[1]}</h1>
        </div>
        <h2 className="card-title py-2 font-bold">{bookName}</h2>
        <p className="font-semibold">By : {author}</p>
        <hr className="border-dashed border my-2" />

        <div className="card-actions mb-0 justify-between">
          <div>{category}</div>
          <div className="flex gap-4 items-center">
            <p>{rating}</p>
            <FaRegStar></FaRegStar>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;