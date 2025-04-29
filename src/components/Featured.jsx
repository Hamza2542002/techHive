
function Featured() {
  return (
    <div className="pb-24 flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">New Arrivals</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="bg-black max-h-[600px] p-6 pb-0 relative flex-grow rounded-md flex items-end">
          <img src="/images/featured-1.png" alt="" />
          <div className="details absolute bottom-6 left-6 text-white flex flex-col gap-4">
            <h2 className="font-semibold">PlayStation 5</h2>
            <p className="font-normal">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <a href="" className="underline font-medium">
              Shop Now
            </a>
          </div>
        </div>
        <div className="flex-grow flex flex-wrap flex-col gap-4">
          <div className="bg-black p-6 pb-0 relative flex-grow rounded-md flex justify-end">
            <img
              src="/images/hero_1.png"
              alt=""
            />
            <div className="details absolute bottom-6 left-6 text-white flex flex-col gap-4">
              <h2 className="font-semibold">Women’s Collections</h2>
              <p className="font-normal">
                Featured woman collections that <br /> give you another vibe.
              </p>
              <a href="" className="underline font-medium">
                Shop Now
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="bg-black p-6 pb-0 relative flex-grow rounded-md flex justify-center">
              <img
                src="/images/featured-3.png"
                alt=""
                style={{ filter: "drop-shadow(#ffffff70 0px 0px 80px)" }}
              />
              <div className="details absolute bottom-6 left-6 text-white flex flex-col gap-4">
                <h2 className="font-semibold">Speakers</h2>
                <p className="font-normal">Amazon wireless speakers.</p>
                <a href="" className="underline font-medium">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="bg-black p-6 pb-0 relative flex-grow rounded-md flex justify-center w-[218px] h-auto">
              <img
                src="/images/specialOffer.png"
                alt=""
                style={{ filter: "drop-shadow(#ffffff70 0px 0px 80px)" }}
              />
              <div className="details absolute bottom-6 left-6 text-white flex flex-col gap-4">
                <h2 className="font-semibold">Perfume</h2>
                <p className="font-normal">GUCCI INTENSE OUD EDP</p>
                <a href="" className="underline font-medium">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
