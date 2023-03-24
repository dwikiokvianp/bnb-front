const OwnerRoomSection = () => {
  return (
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
  );
};

export default OwnerRoomSection;
