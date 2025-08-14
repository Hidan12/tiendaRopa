import { useEffect, useRef, useState } from 'react';

const Desktop = () => {
  return (
    <div className="w-[90%] grid grid-cols-3 items-center pb-1.5 mx-auto">
      <div>
        <span className="text-black text-[30px]">ESTILO REAL</span>
      </div>

      <div className="w-full flex justify-between items-center">
        <button className="text-black text-[1vw]">Categorias</button>
        <button className="text-black text-[1vw]">Destacados</button>
        <button className="text-black text-[1vw]">Favoritos</button>
      </div>

      <div className="w-full flex justify-end items-center">
        <input
          type="text"
          placeholder="Buscar"
          className="border-b text-gray-600 pb-0.5 mr-1.5 outline-none"
        />
        <button className="text-black relative pt-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg>
          <div className="absolute top-0 -right-1 text-[10px] px-1 bg-green-600 text-white rounded-full">
            1
          </div>
        </button>
      </div>
    </div>
  );
};

const Mobil = ()=>{
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)

  const BurgerMenu = ({btn})=>{
    return(
      <div className='w-screen h-screen z-40 bg-black/80 absolute top-0'>
        <div className='w-[80%] h-full flex-col justify-between bg-white p-4'>
          <div className='w-full flex justify-end'>
              <button onClick={()=> btn(b=>!b)} className='text-black'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
              </button>
          </div>
          <div className='px-5'>
            <button onClick={()=>btn(b => !b)} className='text-black text-[4vw] font-semibold'>Categorias</button>
          </div>
          <div className='px-5'>
            <button onClick={()=>btn(b => !b)} className='text-black text-[4vw] font-semibold'>Destacados</button>
          </div>
          <div onClick={()=>btn(b => !b)} className='px-5'>
            <button className='text-black text-[4vw] font-semibold'>Favorito</button>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className='w-screen flex justify-center items-center'>
      <div className='w-[95%] flex justify-between items-center'>
        <div className='flex  justify-between'>
          <button onClick={()=> setMenu(m => !m)} type="button" className='text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
        </div>
        <div className='flex justify-center'>
          <span className='text-[30px] text-black'>ESTILO REAL</span>
        </div>
        <div className='relative flex justify-end items-center gap gap-x-4'>
          <button className="text-black relative pt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            <div className="absolute top-0 -right-1 text-[10px] px-1 bg-green-600 text-white rounded-full">
              1
            </div>
          </button>
          <button onClick={()=> setSearch(s => !s)} className='text-black'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>

        </div>
        {
          search &&
          <div className='absolute z-30 -bottom-17 left-0 w-[100vw] p-4 bg-white'>
            <input type="text" className='border-b-black py-1.5 text-gray-700' placeholder='Buscar' />
          </div>
        }
      </div>
      {
        menu && <BurgerMenu btn={setMenu}/>
      }
      
    </div>
  )
}



export default function Header() {
  const [anchoPantalla, setAnchoPantalla] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const bannerRef = useRef(null);
  
  useEffect(() => {
    const manejarResize = () => {
      setAnchoPantalla(window.innerWidth);
    };
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 1);
    };

    manejarResize();
    window.addEventListener("resize", manejarResize);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("resize", manejarResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-[#F5F5F5] w-full z-5 text-white overflow-x-hidden">
      {/* Banner animado - Solo visible sin scroll */}
      <div className='bg-white'>
        <div 
          ref={bannerRef}
          className={`w-full bg-white animate-marquee lg:!animate-none py-2.5 lg:text-center lg:flex lg:justify-center lg:items-center transition-all duration-300 ${
            isScrolled ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-20 xl:max-h-0opacity-100'
          }`}
        >
          <span className="text-black text-[3.5vw] xl:text-lg">
            ENVÍO GRATIS POR COMPRAS SUPERIORES A $300.000 📦
          </span>
        </div>

      </div>
      
      {/* Menú fijo - Siempre visible */}
      <div className={`fixed left-0 right-0 z-10 flex justify-center bg-[#F5F5F5] items-center w-full transition-transform duration-300 ${
        isScrolled ? 'shadow-md top-0' : ''
      }`}>
        {anchoPantalla > 1001 ? <Desktop /> : <Mobil />}
      </div>
      
      {/* Espacio para compensar el menú fijo */}
      <div className={`transition-all duration-300 ${
        isScrolled ? 'pt-[60px]' : bannerRef.current ? `pt-[${bannerRef.current.offsetHeight + 60}px]` : 'pt-[100px]'
      }`}></div>
      <div className={`${!isScrolled ? "h-15":"h-2"}`}></div>
    </header>
  );
}




