"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CircularProgress from "@mui/material/CircularProgress";
import "swiper/css";
import "swiper/css/pagination";

import { useProducts } from "@/queries/products";
import { Card } from "@/components/discover/Card";

export default function ProductSlider() {
  const { products, loading, error } = useProducts();

  if (loading)
    return (
      <div className="flex justify-center py-8">
        <CircularProgress />
      </div>
    );
  if (error)
    return <p className="text-center py-8 text-red-500">Error: {error}</p>;

  return (
    <div className="w-full max-w-6xl mx-auto pb-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={2}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="!pb-10"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <Card
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
