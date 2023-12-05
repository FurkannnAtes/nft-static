import Image from "next/image";

const Banner = () => {
  return (
    <div className="  relative w-full overflow-hidden">
      <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#343770] w-[500px] h-[500px] rounded-full blur-2xl z-10"></div>
      <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 bg-[#03344d] w-[600px] h-[600px] rounded-full blur-2xl z-10"></div>

      <div className="relative z-50 w-full h-full flex items-center  min-h-[702px]   md:pt-[80px]   text-white container  ">
        <div className="flex z-40 flex-col gap-3 max-w-[500px] lg:max-w-[45%]">
          <div className="font-extrabold text-4xl md:text-6xl flex flex-col gap-2 text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            <div className=" text-white">Experience</div>
            <div className=" ">Whats</div>
            <div className=" text-white">Yet To Come</div>
          </div>
          <div className="text-gray-400/80 font-semibold text-sm my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ea
            voluptates.
          </div>
          <button className="join-btn w-fit ">
            <span className="font-semibold p-3 text-sm">Expolere VR</span>
          </button>
        </div>
        <div className="w-[1000px] hidden md:flex max-w-[1000px] aspect-[8/5]  absolute -right-10 bottom-0 ">
          <Image
            className="object-contain drop-shadow-hero"
            fill
            src={"/assets/banner-hero.png"}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
