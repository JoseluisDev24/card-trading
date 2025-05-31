"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { useProducts } from "@/queries/products";
import { Card } from "@/components/discover/Card";

export default function ProductSlider() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="text-center py-8">Cargando productos...</p>;
  if (error)
    return <p className="text-center py-8 text-red-500">Error: {error}</p>;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={1}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id} className="flex justify-center">
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
