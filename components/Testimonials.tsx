import React from "react";
import styles from "../styles/components/Testimonials.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Autoplay } from "swiper";
import Image from "next/image";
import reviews from "../lib/reviews";

function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <h3 className={styles.title}>What our customers say</h3>
      </div>
      <Swiper
        modules={[Navigation, Mousewheel, Autoplay]}
        navigation={true}
        mousewheel={{
          forceToAxis: true,
        }}
        spaceBetween={50}
        slidesPerView="auto"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.carousel}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.4,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2.7,
          },
          1024: {
            slidesPerView: 3.7,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className={styles.review}>
            <p className={styles.quote}>{review.quote}</p>
            <p className={styles.name}>{review.name}</p>
            <Image
              src={review.avatar}
              alt="profile img"
              width={300}
              height={300}
              className={styles.picture}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Testimonials;
