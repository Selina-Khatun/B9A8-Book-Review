import { FaRegStar } from "react-icons/fa";

const Card = ({ card }) => {
  console.log(card);
  const { image, tags, bookName, author, category, rating } = card || {};
  return (
    <div className="card m-3 border">
      <figure className="mx-6 bg-[#F3F3F3] mt-6 rounded-xl">
        <img src={image} alt={bookName} className=" rounded-xl m-3 " />
      </figure>
      <div className="card-body ">
        <div className="flex text-center text-[#23BE0A] gap-3">

          <h1 className="bg-[#23BE0A0D] py-1 px-7 rounded-full font-semibold text-xl ">Young Adult</h1>
         <h1 className="bg-[#23BE0A0D] py-1 px-7 rounded-full font-semibold text-xl ">Identity</h1>
        </div>
        <h2 className="card-title py-2 font-bold">{bookName}</h2>
        <p className="font-semibold">By : {author}</p>
        <hr className="border-dashed border my-2" />

        <div className="card-actions justify-between">
          <div>Fiction</div>
          <div className="flex gap-4 items-center">
            <p>{rating}</p>
            <FaRegStar></FaRegStar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;