import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import images from "../assets/images";
const stores = [images.store_0, images.store_00, images.store_3, images.store_2, images.store_1]

const StoreCarousel = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ 
            clickable: true,
            type: "bullets"
         }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {stores.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StoreCarousel;
