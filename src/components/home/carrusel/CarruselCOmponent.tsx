import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface CarruselItems {
  img: string;
}

export const CarruselComponent = () => {
  const items: CarruselItems[] = [
    { img: "/Images/home/imagen1.jpg" },
    { img: "/Images/home/Imagen2.jpg" },
    { img: "/Images/home/Imagen3.jpg" },
    { img: "/Images/home/Imagen4.jpg" },
  ];

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper"
    >
      {items.map((item) => (
        <SwiperSlide key={item.img}>
          <div className="flex justify-center items-center">
            <img
              src={item.img}
              alt="Imagen de los productos"
              className="size-96 rounded-xl"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
