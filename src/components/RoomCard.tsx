import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import type { Room } from "../assets/data/rooms";

type Props = {
  room: Room;
  phone: string;
};

export default function RoomCard({ room, phone }: Props) {
  const [fav, setFav] = useState(false);
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // example rating; replace with real rating if available
  const rating = (4.5 + ((room.id % 5) * 0.06)).toFixed(2);

  const priceFormatted = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(room.price);

  const openWhatsApp = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const message = encodeURIComponent(
      `Hi, I'm interested in ${room.title} (Room ID: ${room.id}). Please share availability & price.`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  // prevent clicks on pagination from bubbling to the card (which opens WhatsApp)
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const onClickCapture = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest(".swiper-pagination")) {
        e.stopPropagation();
      }
    };
    root.addEventListener("click", onClickCapture, true);
    return () => root.removeEventListener("click", onClickCapture, true);
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={openWhatsApp}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") openWhatsApp();
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Image / Swiper */}
      <div className="relative w-full h-60 md:h-56 lg:h-64 bg-gray-100">
        <Swiper
          onSwiper={(s) => (swiperRef.current = s)}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full room-swiper"
        >
          {room.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`${room.title} ${i + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* badge */}
        <div className="absolute left-3 top-3 z-20">
          <div className="bg-white/95 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
            Guest favourite
          </div>
        </div>

        {/* favorite heart */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setFav((s) => !s);
          }}
          className="absolute right-3 top-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm transition transform hover:scale-105 z-20"
          aria-label="toggle favorite"
        >
          {fav ? <FaHeart className="text-red-600 w-4 h-4" /> : <FaRegHeart className="text-gray-700 w-4 h-4" />}
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* title + rating on same row */}
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{room.title}</h3>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaStar className="text-yellow-400 w-4 h-4" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        {/* price + book */}
        <div className="mt-2 flex items-center justify-between">
          <div className="text-gray-800 font-semibold">{priceFormatted}</div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              openWhatsApp(e);
            }}
            className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs font-semibold transition"
          >
            Book
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-3 line-clamp-2">{room.description}</p>
      </div>
    </div>
  );
}
