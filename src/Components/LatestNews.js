import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Import Swiper core styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const LatestNews = () => {
  const newsItems = [
    {
      text: "Text for Box 1",
      imgUrl: "https://i.pinimg.com/236x/62/ea/92/62ea92884a7c7bc08faa546ce6102321.jpg",
    },
    {
      text: "Text for Box 2",
      imgUrl: "https://i.pinimg.com/236x/43/97/4c/43974caa8c4f54e970ae55af2069e15e.jpg",
    },
    {
      text: "Text for Box 3",
      imgUrl: "https://i.pinimg.com/236x/43/97/4c/43974caa8c4f54e970ae55af2069e15e.jpg",
    },
    {
      text: "Text for Box 4",
      imgUrl: "https://i.pinimg.com/236x/43/97/4c/43974caa8c4f54e970ae55af2069e15e.jpg",
    },
    {
      text: "Text for Box 5",
      imgUrl: "https://i.pinimg.com/236x/43/97/4c/43974caa8c4f54e970ae55af2069e15e.jpg",
    },
  ];

  return (
    <section className="latest-news-section py-10 bg-gray-100"> {/* Updated background color */}
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-8">Latest News</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className="mx-5"
      >
        {newsItems.map((news, index) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"> {/* Added rounded corners and shadow */}
              <img src={news.imgUrl} alt={`news-${index}`} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{news.text}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LatestNews;
