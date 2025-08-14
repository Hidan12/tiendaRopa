'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import "./carrusel.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';


export default function Carrusel ({Card, cantCardMobil, cantCardDesktop, data, estiloNavigate, handler, estiloCarrusel}){
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;
        if (!prevRef.current || !nextRef.current) return;
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.destroy();
        swiper.navigation.init();
        swiper.navigation.update();
    }, []);
    return(
        <div className="w-full relative">
            <button ref={prevRef} className="custom-prev absolute top-0 z-2 py-2 bg-gray-400 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
                </svg>
            </button>
            <button ref={nextRef} className="custom-next absolute top-0 z-2 bg-gray-400 right-0 text-white py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </button>
            <Swiper
                className={estiloCarrusel}
                modules={[Navigation, Pagination]}
                slidesPerView={cantCardMobil}
                spaceBetween={20}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    1024: {
                        slidesPerView: cantCardDesktop,
                        spaceBetween: 30,
                    },
                }}
            >
                {data.map((d,k)=> <SwiperSlide className='h-full' key={k}><Card content={d} handler={handler}/></SwiperSlide>)}
            </Swiper>
            
        </div>
    )
}