import { AiFillStar } from "react-icons/ai";

const Rating = () => {
  return (
    <section className="container p-2 sm:p-0 mx-auto">
      <header className="flex gap-x-1 items-center">
        <AiFillStar className="text-xl" />
        <p className="font-bold">4.86</p>
        <p>.</p>
        <p className="font-bold">107 ulasan</p>
      </header>
      <div className="border rounded-xl p-3 mt-4">
        <main className="flex items-center gap-x-2 ">
          <img
            src="https://thumb.intipseleb.com/media/frontend/thumbs3/2022/07/03/62c140b6f1136-zee-jkt48_663_372.jpg"
            alt="photoProfile"
            className="rounded-full h-[4vh] w-[4vh] object-cover"
          />
          <div>
            <p className="font-bold">Zee JKT48</p>
            <p className="text-slate-500">1 bulan yang lalu</p>
          </div>
        </main>
        <section>
          <p className="text-slate-700 my-3">
            Tempat nginep yang tidak akan kalian dapet dimanapun. Super duper
            recommended. Tempatnya nyaman, bersih, dan dekat dengan pantai.
          </p>
        </section>
      </div>
      <div>
        <button className="text-slate-700 rounded-xl p-2 w-full mt-4 border-2 border-slate-700 hover:bg-slate-100 ">
          Lihat semua ulasan
        </button>
      </div>
      {/*owner section*/}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold text-xl">Dilayani oleh Made</p>
            <p className="text-slate-600 text-sm">
              Bergabung sejak Oktober 2012
            </p>
          </div>
          <img
            src="https://assets.pikiran-rakyat.com/crop/0x278:1080x1079/x/photo/2021/08/26/2678668017.jpeg"
            alt="photoProfile"
            className="rounded-full h-[4vh] w-[4vh] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Rating;
