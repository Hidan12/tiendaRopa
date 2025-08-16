'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import "./carrusel.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useRef } from 'react';


export default function Carrusel ({Card, cantCardMobil, cantCardDesktop, data, estiloNavigate, handler, estiloCarrusel, flechas = false, cardMitad = false}){
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
            {
                flechas &&
                <div className='w-full relative'>
                    <button ref={prevRef} className="custom-prev absolute top-0 z-2 py-2 ">
                        
                    </button>
                    <button ref={nextRef} className="custom-next absolute top-60 z-2  right-0 text-black py-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </button>
                </div>
            }
            <Swiper
                className={estiloCarrusel}
                modules={[Navigation, Pagination]}
                slidesPerView={!cardMitad ? cantCardMobil : cantCardMobil - 0.5}
                spaceBetween={20}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                pagination={ flechas ? false : { clickable: true } } 
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