import { AiFillStar } from "react-icons/ai";
import { FiShare, IoIosArrowBack, MdFavoriteBorder } from "react-icons/all";

const imageUrl = [
  "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/e15ee353-0861-44ed-868a-56091755e513.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/45a3aa2b-ce00-4068-9ebe-9f83ca281fe4.jpg?im_w=480",
  "https://a0.muscache.com/im/pictures/miso/Hosting-43629767/original/ec85ccc0-281c-44fc-a061-bc1e87ea0081.jpeg?im_w=480",
  "https://a0.muscache.com/im/pictures/f474dfbe-557a-4d07-8d6e-76aba506b5a6.jpg?im_w=480",
];

const Detail = () => {
  return (
    <div>
      {/*Header*/}
      <section>
        <div className="flex justify-between p-3 bg-gray-100">
          <div className="flex items-center ">
            <IoIosArrowBack className="text-xl" />
            <p>Rumah</p>
          </div>
          <div className="flex gap-x-2">
            <FiShare className="text-xl" />
            <MdFavoriteBorder className="text-xl" />
          </div>
        </div>
      </section>
      <section>
        <img src={imageUrl[0]} alt="house photo" className="w-full md:hidden" />
        <div className="flex w-full">
          <div>
            <img
              src={imageUrl[0]}
              alt="house photo"
              className="w-full md:w-[50%] bg-black hidden md:block flex-[1]"
            />
            <div className="bg-black"></div>
          </div>
          <div className="flex flex-[2]">
            <img
              src={imageUrl[1]}
              alt="house photo"
              className="w-full hidden md:block"
            />
            <img
              src={imageUrl[2]}
              alt="house photo"
              className="w-full hidden md:block"
            />
          </div>
          <div className="flex flex-[2]">
            <img
              src={imageUrl[3]}
              alt="house photo"
              className="w-full hidden md:block"
            />
            <img
              src={imageUrl[4]}
              alt="house photo"
              className="w-full hidden md:block"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="m-4">
          <h1 className="font-bold text-slate-700 text-2xl">
            Veluvena Bali - Rumah Bambu Burung Hantu
          </h1>
          <div className="flex">
            <div className="flex gap-x-2">
              <div className="flex items-center">
                <AiFillStar />
                <p className="font-bold">4.86</p>
              </div>
              <p>.</p>
              <p className="underline">107 ulasan</p>
              <p>.</p>
              <p className="underline">Sidamen, Bali, Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
