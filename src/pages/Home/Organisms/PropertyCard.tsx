import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const PropertyCard = () => {
  return (
    <>
      <section>
        <div className="p-6 text-md ">
          <div className="w-full">
            <img
              src="https://a0.muscache.com/im/pictures/1bcb6274-d94f-4932-8c6e-dd61ebb98e38.jpg?im_w=720"
              alt=""
              className="w-full aspect-[4/4] rounded-xl"
            />
            <AiOutlineHeart className="" />
          </div>
          <div className="mt-2">
            <div className="flex justify-between ">
              <p className="font-bold">Seririt, Indonesia</p>
              <div className="flex">
                <AiFillStar />
                <p>4.89</p>
              </div>
            </div>
            <p>Berjarak 916 kilometer</p>
            <p>22-27 Mei</p>
            <p className="font-bold inline"> Rp3.009.906</p> malam
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyCard;
