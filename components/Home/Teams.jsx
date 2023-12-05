import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
const Teams = () => {
  return (
    <div id="teams" className="container py-20">
      <div className="font-extrabold mb-10 text-4xl md:text-6xl flex flex-col gap-2 text-transparent text-center  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
        Our Teams
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="teams-swiper !pb-10 "
        loop
      >
        <SwiperSlide>
          <div className="flex flex-col  rounded-lg overflow-hidden  bg-main-lightBlue">
            <div className="w-full aspect-[5/4] relative">
              <Image
                className="object-cover"
                fill
                src={"/assets/person1.jpeg"}
                alt="person1"
              />
            </div>
            <div className="text-white p-3 flex flex-col gap-2">
              <div className="font-semibold text-xl">Ashton Freeman</div>
              <div className="text-sm text-gray-300/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem error, vero aliquam placeat obcaecati, dolores saepe
                quas ratione quidem sint, vitae repellendus adipisci. Impedit ex
                sed, facere reiciendis fugiat porro?
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col  rounded-lg  overflow-hidden bg-main-lightBlue">
            <div className="w-full aspect-[5/4] relative">
              <Image
                className="object-cover"
                fill
                src={"/assets/person2.png"}
                alt="person1"
              />
            </div>
            <div className="text-white p-3 flex flex-col gap-2">
              <div className="font-semibold text-xl">Ezekiel Wood</div>
              <div className="text-sm text-gray-300/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem error, vero aliquam placeat obcaecati, dolores saepe
                quas ratione quidem sint, vitae repellendus adipisci. Impedit ex
                sed, facere reiciendis fugiat porro?
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col  rounded-lg overflow-hidden  bg-main-lightBlue">
            <div className="w-full aspect-[5/4] relative">
              <Image
                className="object-cover"
                fill
                src={"/assets/person3.jpg"}
                alt="person1"
              />
            </div>
            <div className="text-white p-3 flex flex-col gap-2">
              <div className="font-semibold text-xl">Dylan Joseph Soto</div>
              <div className="text-sm text-gray-300/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem error, vero aliquam placeat obcaecati, dolores saepe
                quas ratione quidem sint, vitae repellendus adipisci. Impedit ex
                sed, facere reiciendis fugiat porro?
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col  rounded-lg overflow-hidden  bg-main-lightBlue">
            <div className="w-full aspect-[5/4] relative">
              <Image
                className="object-cover"
                fill
                src={"/assets/person1.jpeg"}
                alt="person1"
              />
            </div>
            <div className="text-white p-3 flex flex-col gap-2">
              <div className="font-semibold text-xl">Ashton Freeman</div>
              <div className="text-sm text-gray-300/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem error, vero aliquam placeat obcaecati, dolores saepe
                quas ratione quidem sint, vitae repellendus adipisci. Impedit ex
                sed, facere reiciendis fugiat porro?
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col  rounded-lg  overflow-hidden bg-main-lightBlue">
            <div className="w-full aspect-[5/4] relative">
              <Image
                className="object-cover"
                fill
                src={"/assets/person2.png"}
                alt="person1"
              />
            </div>
            <div className="text-white p-3 flex flex-col gap-2">
              <div className="font-semibold text-xl">Ezekiel Wood</div>
              <div className="text-sm text-gray-300/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem error, vero aliquam placeat obcaecati, dolores saepe
                quas ratione quidem sint, vitae repellendus adipisci. Impedit ex
                sed, facere reiciendis fugiat porro?
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col  rounded-lg overflow-hidden  bg-main-lightBlue">
            <div className="w-full aspect-[5/4] relative">
              <Image
                className="object-cover"
                fill
                src={"/assets/person3.jpg"}
                alt="person1"
              />
            </div>
            <div className="text-white p-3 flex flex-col gap-2">
              <div className="font-semibold text-xl">Dylan Joseph Soto</div>
              <div className="text-sm text-gray-300/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem error, vero aliquam placeat obcaecati, dolores saepe
                quas ratione quidem sint, vitae repellendus adipisci. Impedit ex
                sed, facere reiciendis fugiat porro?
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Teams;
