import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
// import images from local folder
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={70}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slide1} alt="slide 1 picture for category" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl'>salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="slide 2 picture for category" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl'>pizzas</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="slide 3 picture for category" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl'>soups</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="slide 4 picture for category" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl'>desserts</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="slide 5 picture for category" />
                <h3 className='text-4xl uppercase text-center -mt-16 text-white drop-shadow-2xl'>salads</h3>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;