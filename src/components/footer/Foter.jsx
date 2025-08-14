import { useEffect, useState } from "react"

const Mobile = ()=>{
  return(
    <div className="w-full grid gird-cols-2">
      <div className="col-span-2 flex flex-col w-full items-center">
        <h5 className="text-[20px] font-semibold"> ESTILO REAL</h5>
        <span className="text-lg text-start w-full">En Tienda Estilo Real entendemos que la moda es tu forma de expreción. Por eso, nos comprometemos a traerte las piezas mas trendy antes que nadie, para que siempre estés un paso por adelante en el mundo fashion</span>
      </div>
      <div className="flex flex-col items-start mt-5">
        <h5 className="text-[15px] font-semibold">Información</h5>
        <span className="text-lg">Nosotros</span>
        <span className="text-lg">Publicaciones</span>
        <span className="text-lg">Press</span>
        <span className="text-lg">Preguntas</span>
      </div>
      <div className="flex flex-col items-start mt-5">
        <h5 className="text-[15px] font-semibold">Tienda</h5>
        <span className="text-lg">Nuevos productos</span>
        <span className="text-lg">Ofertas</span>
        <span className="text-lg">Mejor valorados</span>
        <span className="text-lg">Tarjeta de regalos</span>
      </div>
      <div className="flex flex-col items-start mt-5">
        <h5 className="text-[15px] font-semibold">Servicios al cliente</h5>
        <span className="text-lg">Contactanos</span>
        <span className="text-lg">Envios y Devoluciones</span>
        <span className="text-lg">Politicas de Privacidad</span>
        <span className="text-lg">Terminos y condiciones</span>
      </div>
      <div className="flex flex-col items-start mt-5">
        <h5 className="text-[15px] font-semibold">Mi Cuenta</h5>
        <span className="text-lg">Mi Cuenta</span>
        <span className="text-lg">Historial de pedidos</span>
        <span className="text-lg">Lista de deseos</span>
        <span className="text-lg">Boletin</span>
      </div>
    </div>
  )
}

const Desktop = ()=>{
  return(
    <div className="w-full grid grid-cols-6">
      <div className="col-span-2 flex flex-col items-start w-full">
        <h5 className="text-[28px] font-semibold"> ESTILO REAL</h5>
        <span className="text-sm w-[85%] text-start mt-5">En Tienda Estilo Real entendemos que la moda es tu forma de expreción. Por eso, nos comprometemos a traerte las piezas mas trendy antes que nadie, para que siempre estés un paso por adelante en el mundo fashion</span>
      </div>
      <div className="flex flex-col items-start">
        <h5 className="text-[20px] font-semibold">Información</h5>
        <span className="text-lg">Nosotros</span>
        <span className="text-lg">Publicaciones</span>
        <span className="text-lg">Press</span>
        <span className="text-lg">Preguntas</span>
      </div>
      <div className="flex flex-col items-start">
        <h5 className="text-[20px] font-semibold">Tienda</h5>
        <span className="text-lg">Nuevos productos</span>
        <span className="text-lg">Ofertas</span>
        <span className="text-lg">Mejor valorados</span>
        <span className="text-lg">Tarjeta de regalos</span>
      </div>
      <div className="flex flex-col items-start">
        <h5 className="text-[20px] font-semibold">Servicios al cliente</h5>
        <span className="text-lg">Contactanos</span>
        <span className="text-lg">Envios y Devoluciones</span>
        <span className="text-lg">Politicas de Privacidad</span>
        <span className="text-lg">Terminos y condiciones</span>
      </div>
      <div className="flex flex-col items-start">
        <h5 className="text-[20px] font-semibold">Mi Cuenta</h5>
        <span className="text-lg">Mi Cuenta</span>
        <span className="text-lg">Historial de pedidos</span>
        <span className="text-lg">Lista de deseos</span>
        <span className="text-lg">Boletin</span>
      </div>
    </div>
  )
}

export default function Footer() {
  const [tamPantalla, setTamPantalla] = useState(0)
  
    useEffect(() => {
      const manejarResize = () => {
        setTamPantalla(window.innerWidth);
      };
      manejarResize();
      window.addEventListener("resize", manejarResize);
      return () => {
        window.removeEventListener("resize", manejarResize);
      };
    }, [])
  return (
    <footer className="bg-white w-full px-20 py-20  xl:px-20 xl:py-20 text-center">
      {tamPantalla > 800 ? <Desktop/> : <Mobile/>}
    </footer>
  )
}