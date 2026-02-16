import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import SwiperCore from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import mapIcon from "../assets/map.png";

SwiperCore.use([Autoplay, Pagination]);

const hotelMapUrl = "https://maps.app.goo.gl/rk49GZSnVmdKTJEk6";

export default function HeroCarousel() {
  const slides = [
    {
      image:
        "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201105251659093640-d8cfca340ffa11e8a0820224510f5e5b.jpg?&output-quality=75&crop=520:350;2,0&output-format=jpg&downsize=1080:*",
      title: "Hotel Shimla - Exterior View",
    },
    {
      image:
        "https://r1imghtlak.mmtcdn.com/a67f5ef82c5211ee96340a58a9feac02.jpg?&output-quality=75&crop=520:350;2,0&output-format=jpg&downsize=1080:*",
      title: "Luxury Room Interior",
    },
    {
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/32/09/d3/e9/exterior.jpg",
      title: "Mountain Side View",
    },
    {
      image:
        "https://r1imghtlak.mmtcdn.com/d897ca95-5cc5-47d6-816d-e8837bab0d83.jpg?downsize=810:*",
      title: "Premium Stay Experience",
    },
  ];

  return (
    <div className="w-full px-3 md:px-0">
      <div className="w-full h-[35vh] sm:h-[45vh] md:h-[70vh] mt-4 rounded-lg overflow-hidden">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => window.open(hotelMapUrl, "_blank")}
                className="h-full w-full cursor-pointer bg-center bg-cover flex items-end"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black/40 w-full text-white px-4 sm:px-6 md:px-8 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Responsive Title */}
                    <h2 className="text-sm sm:text-lg md:text-2xl font-semibold">
                      {slide.title}
                    </h2>

                    {/* Responsive Map Icon */}
                    <img
                      src={mapIcon}
                      alt="Map icon"
                      className="w-6 h-6 sm:w-10 sm:h-10 md:w-16 md:h-14 object-contain"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
