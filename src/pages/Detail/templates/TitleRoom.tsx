import { AiFillStar } from "react-icons/ai";

const TitleRoom = () => {
  return (
    <section>
      <div className="m-4 container mx-auto p-2 sm:p-0">
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
  );
};

export default TitleRoom;
