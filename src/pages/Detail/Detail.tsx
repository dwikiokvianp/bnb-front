import { AiFillStar } from "react-icons/ai";
import { FiShare, IoIosArrowBack, MdFavoriteBorder } from "react-icons/all";

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
      <section className="p-2 sm:p-0 container mx-auto">
        <div className="grid grid-cols-6">
          <div className="col-span-5">
            <div className="font-bold text-slate-700 text-lg grid-cols-2">
              Seluruh Vila <div></div> dilayani oleh wayan
            </div>
            <div className="flex gap-x-2">
              <p>4 tamu</p>
              <p>2 kamar tidur</p>
              <p>2 kamar mandi</p>
            </div>
          </div>
          <div>
            <div className="flex justify-end">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT5jUC-hp_db407pKjwFaDQC_HjAwg_coW5oUV9NCQwzd9f-xK8"
                alt="photoProfile"
                className="rounded-full h-14 bg-blue-50"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-2 sm:p-0 text-slate-700 my-2">
        <div>
          <div className="flex gap-x-1 font-bold text-3xl">
            <p className=" text-slate-700">air</p>
            <p className="text-red-500">cover</p>
          </div>
          <p>
            Setiap pemesanan dilengkapi perlindungan gratis terhadap pembatalan
            oleh Tuan Rumah, ketidakakuratan iklan, dan masalah lain seperti
            kendala saat check-in.
          </p>
          <p className="underline font-bold">Pelajari lebih lanjut</p>
        </div>
      </section>
      <section className="container mx-auto text-slate-700">
        <div>
          Aura House adalah rumah bambu eko yang indah & unik yang dibangun di
          tepi barat Sungai Ayung menghadap ke timur untuk menyaksikan matahari
          terbit. Aura House terletak 25 menit dari Ubud, dan 35 menit dari
          Canggu. Jika tempat kami TERPESAN PENUH, HARAP PERIKSA PROFIL AIRBNB
          KAMI (KLIK FOTO PROFIL KAMI) untuk MENEMUKAN 10 RUMAH BAMBU YANG LEBIH
          INDAH,
        </div>
        <div className="underline font-bold">Tampilkan lebih banyak</div>
      </section>
      <section className="my-4">
        <div className="divide-y divide-solid container mx-auto">
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="container mx-auto">
        <div>
          <h1>Kamar Anda</h1>
        </div>
      </section>
    </div>
  );
};

export default Detail;
