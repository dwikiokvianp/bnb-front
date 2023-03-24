import { AiFillStar } from "react-icons/ai";
import {
  FaCalculator,
  FiShare,
  IoIosArrowBack,
  MdFavoriteBorder,
  MdOutlineBed,
} from "react-icons/all";
import Divider from "./atoms/Divider";
import YourRoom from "./templates/YourRoom";
import Description from "./templates/Description";
import AirCover from "./templates/AirCover";
import OwnerRoomSection from "./templates/OwnerRoomSection";
import TitleRoom from "./templates/TitleRoom";
import Facility from "./templates/Facility";
import Rating from "./templates/Rating";

const imageUrl = [
  "https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720",
  "https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=1200",
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
      <section className="mt-4">
        <img
          src={imageUrl[0]}
          alt="house photo"
          className="w-full md:hidden "
        />
        <div className="md:container mx-auto ">
          <div className="grid grid-cols-4 gap-2">
            <img
              src={imageUrl[1]}
              alt="house photo"
              className="w-full h-[50vh] hidden md:block col-span-2 rounded-l-xl object-cover"
            />
            <div className="grid gap-1 col-span-2 lg:col-span-1">
              <img
                src={imageUrl[2]}
                alt="house photo"
                className="hidden md:block h-[25vh] w-full object-cover rounded-tr-2xl lg:rounded-none"
              />
              <img
                src={imageUrl[3]}
                alt="house photo"
                className="hidden md:block h-[25vh] w-full object-cover rounded-br-2xl lg:rounded-none"
              />
            </div>
            <div className="hidden lg:block">
              <div className="grid gap-1 col-span-2 lg:col-span-1">
                <img
                  src={imageUrl[2]}
                  alt="house photo"
                  className="hidden md:block h-[25vh] w-full object-cover rounded-tr-2xl"
                />
                <img
                  src={imageUrl[3]}
                  alt="house photo"
                  className="hidden md:block h-[25vh] w-full object-cover rounded-br-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TitleRoom />
      <Divider />

      <OwnerRoomSection />
      <Divider />

      <AirCover />
      <Divider />

      <Description />
      <Divider />

      <YourRoom />
      <Divider />

      <Facility />
      <Divider />

      <Rating />
      <Divider />
    </div>
  );
};

export default Detail;
