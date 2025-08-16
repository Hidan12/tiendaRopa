'use client'
import { useEffect, useState } from "react";
import "./globals.css"
import Carrusel from "@/components/carrusel/Carrusel";

const CardCategory = ({content, handler})=>{
  
  
  return(
    <div className="w-full h-full relative">
      <img src={content.img} className="w-full h-full object-cover" alt={content.tiulo} />
      <div className="absolute top-0 h-full  z-50 left-0 w-full flex justify-center items-center bg-black/15">
        <button className="border mt-[40%] border-white px-4 py-1.5 text-white rounded-sm" onClick={()=>handler(content.titulo)}>
          {content.titulo}
        </button>
      </div>
    </div>
  )
}
const categorias = [{img: "./products/vestido-04.jpg", titulo:"Vestidos"}, {img: "./products/set-penelope-02-scaled.jpg", titulo:"Sets"},{img: "./products/conjunto-afrodita-01.jpg", titulo:"Blusas y Tops"}]
const categoriasDos = [{img: "./products/vestido-hera-01.jpg", titulo:"Vestidos"}, {img: "./products/set-penelope-03-scaled.jpg", titulo:"Sets"},{img: "./products/corset-victoriano-blanco-01.jpg", titulo:"Blusas y Tops"}, {img: "./products/falda-arandela-bodylove-03.jpeg", titulo:"Faldas Y Shores"}]
const set = [{img:"./products/conjunto-afrodita-02.jpg", titulo:"Set Afrodita"}, {img:"./products/set-liz-01-scaled.jpg", titulo:"Set Liz"}, {img:"./products/set-penelope-04-scaled.jpg", titulo:"Set Penelope"},{img:"./products/conjunto-afrodita-02.jpg", titulo:"Set Afrodita"}, {img:"./products/set-liz-01-scaled.jpg", titulo:"Set Liz"}, {img:"./products/set-penelope-04-scaled.jpg", titulo:"Set Penelope"}]

const productos = [
  {img: "./products/vestido-hera-01.jpg", categoria:"Vestidos", titulo: "Vestido Hera", precio: 90000}, 
  {img: "./products/set-penelope-03-scaled.jpg", categoria:"Sets", titulo: "Set Penelope", precio: 130000},
  {img: "./products/corset-victoriano-blanco-01.jpg", categoria:"Blusas y Tops", titulo:"Corset Victoriano blanco", precio:190000}, 
  {img: "./products/falda-arandela-bodylove-03.jpeg", categoria:"Faldas y Shores", titulo: "Arandela Bodylove", precio: 80000},
  {img: "./products/corset-victoriano-negro-03.jpg", categoria:"Faldas y Shores", titulo: "Corset Victoriano negro", precio: 280000},
  {img: "./products/falda-arandelas-01.jpg", categoria:"Faldas y Shores", titulo: "Falda Arandelas", precio: 70000},
  {img: "./products/vestido-agatha-01.jpg", categoria:"Vestidos", titulo: "Vestido Agatha", precio: 2150000},
  {img: "./products/vestido-ally-01.jpg", categoria:"Vestidos", titulo: "Vestido Ally", precio: 190000},
  {img: "./products/vestido-artemisa-amarillo-05.jpeg", categoria:"Vestidos", titulo: "Vestido Artemisa amarillo", precio: 180000},
  {img: "./products/vestido-barbie-blanco-01.jpg", categoria:"Vestidos", titulo: "Vestido Barbie Blanco", precio: 80000},
  {img: "./products/vestido-barbie-negro-05.jpg", categoria:"Vestidos", titulo: "Vestido Barbie Negro", precio: 270000},
  {img: "./products/vestido-persefone-01.jpg", categoria:"Vestidos", titulo: "Vestido Persefone", precio: 1750000},
  {img: "./products/vestido-sasha-negro-03-scaled.jpg", categoria:"Vestidos", titulo: "Vestido Sasha Negro", precio: 280000},
  {img: "./products/vestido-sasha-rojo-01-scaled.jpg", categoria:"Vestidos", titulo: "Vestido Sasha Rojo", precio: 300000},
  {img: "./products/vestido-irma-01-scaled.jpg", categoria:"Vestidos", titulo: "Vestido Irma", precio: 150000},
  {img: "./products/set-liz-01-scaled.jpg", categoria:"Sets", titulo: "Set Liz", precio: 70000}, 
]


const cortarArray = (array, cantidadPorVista) => {
  const arrayTemp = [];
  let controlador = 0;
  while (controlador < array.length) {
    const empezar = controlador;
    const finalizar = controlador + cantidadPorVista;
    arrayTemp.push(array.slice(empezar, finalizar));
    controlador += cantidadPorVista;
  }
  return arrayTemp;
};

const Desktop = ({ data }) => {
  const [precio, setPrecio] = useState(true);
  const [categoria, setCategoria] = useState(true);
  const [calificacion, setCalificacion] = useState(true);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(1300000000);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [calificacionesSeleccionadas, setCalificacionesSeleccionadas] = useState([]);
  
  // Estados para paginación
  const [pagina, setPagina] = useState(0);
  const [productos, setProductos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  

  useEffect(() => {
    let productosFiltrados = [...data];
    
    productosFiltrados = productosFiltrados.filter(
      p => p.precio >= precioMin && p.precio <= precioMax
    );
    
    if (categoriasSeleccionadas.length > 0) {
      productosFiltrados = productosFiltrados.filter(
        p => categoriasSeleccionadas.includes(p.categoria)
      );
    }
    
    if (calificacionesSeleccionadas.length > 0) {
      productosFiltrados = productosFiltrados.filter(p => {
        const estrellas = Math.floor(p.calificacion);
        return calificacionesSeleccionadas.includes(estrellas);
      });
    }
    
    const nuevosGrupos = cortarArray(productosFiltrados, 12);
    setGrupos(nuevosGrupos);
    setPagina(0);
    setProductos(nuevosGrupos[0] || []);
    
  }, [data, precioMin, precioMax, categoriasSeleccionadas, calificacionesSeleccionadas]);

  const handlerVerMas = () => {
    if (grupos[pagina + 1]) {
      setProductos(prev => [...prev, ...grupos[pagina + 1]]);
      setPagina(prev => prev + 1);
    }
  };

  
  const handleCategoriaChange = (categoria) => {
    setCategoriasSeleccionadas(prev => 
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    );
  };

  const handleCalificacionChange = (stars) => {
    setCalificacionesSeleccionadas(prev => 
      prev.includes(stars)
        ? prev.filter(s => s !== stars)
        : [...prev, stars]
    );
  };

  return(
    <div className="w-[95%] flex mt-10 justify-between">
      <div className="w-[25%] flex flex-col items-center">
        
        <button onClick={() => setPrecio(p => !p)} className="w-full flex justify-between">
          <span className="text-lg font-semibold">Precio</span>
          <div className={`text-black ${precio ? "" : "rotate-180"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
          </div>
        </button>
        {precio && (
          <div className="w-full flex flex-col mt-1.5">
            <div className="w-full grid grid-cols-2">
              <div className="w-[80%] flex bg-white border rounded-sm border-slate-300 items-center py-1 px-2">
                <span className="text-sm font-semibold">$</span>
                <input 
                  type="number" 
                  name="precioMinimo" 
                  id="precioMinimo" 
                  value={precioMin}
                  onChange={(e) => setPrecioMin(Number(e.target.value))}
                  className="w-full focus:outline-none"
                />
              </div>
              <div className="w-[80%] flex bg-white border rounded-sm border-slate-300 items-center py-1 px-2">
                <span className="text-sm font-semibold">$</span>
                <input 
                  type="number" 
                  name="precioMaximo" 
                  id="precioMaximo" 
                  value={precioMax}
                  onChange={(e) => setPrecioMax(Number(e.target.value))}
                  className="w-full focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        <button onClick={() => setCategoria(p => !p)} className="w-full mt-3 flex justify-between">
          <span className="text-lg font-semibold">Categorías</span>
          <div className={`text-black ${categoria ? "" : "rotate-180"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
          </div>
        </button>
        {categoria && (
          <div className="w-full mt-1.5 flex flex-col gap gap-y-1.5">
            {['Blusas y Tops', 'Carrusel', 'Faldas y Shores', 'Más Vendidos', 'Nueva Colección', 'Sets', 'Vestidos'].map((cat, index) => (
              <label key={index} className="w-full flex">
                <input 
                  type="checkbox"
                  className="mr-3"
                  checked={categoriasSeleccionadas.includes(cat)}
                  onChange={() => handleCategoriaChange(cat)}
                />
                {cat}
              </label>
            ))}
          </div>
        )}

        {/* Filtro Calificación */}
        <button onClick={() => setCalificacion(p => !p)} className="w-full mt-3 flex justify-between">
          <span className="text-lg font-semibold">Calificación</span>
          <div className={`text-black ${calificacion ? "" : "rotate-180"}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
          </div>
        </button>
        {calificacion && (
          <div className="w-full mt-1.5 flex flex-col gap-y-1.5">
            {[5, 4, 3, 2, 1].map((stars, index) => (
              <label key={index} className="w-full flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="calificacion"
                  checked={calificacionesSeleccionadas.includes(stars)}
                  onChange={() => handleCalificacionChange(stars)}
                  className="mr-3"
                />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill={i < stars ? "#facc15" : "#d1d5db"}
                      className="w-5 h-5"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="w-[70%] overflow-x-hidden">
        <div className="grid grid-cols-4 gap-4">
          {productos.map((p, k) => (
            <div key={k}>
              <img src={p.img} className="w-full h-60 object-cover" alt={p.titulo}/>
              <h4 className="text-sm text-black pl-2">{p.titulo}</h4>
              <span className="text-sm font-semibold pl-2">$ {p.precio.toLocaleString("es-CO")}</span>
            </div>
          ))}
        </div>
        
        {grupos.length > pagina + 1 && (
          <div className="flex justify-center mt-4">
            <button 
              onClick={handlerVerMas} 
              className="py-2 px-8 bg-white rounded-sm text-lg font-semibold shadow"
            >
              Ver más
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const Mobil = ({ data }) => {
  const [precio, setPrecio] = useState(false);
  const [categoria, setCategoria] = useState(false);
  const [calificacion, setCalificacion] = useState(false);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(1300000000);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [calificacionesSeleccionadas, setCalificacionesSeleccionadas] = useState([]);
  
  // Estados para paginación
  const [pagina, setPagina] = useState(0);
  const [productos, setProductos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  

  useEffect(() => {
    let productosFiltrados = [...data];
    
    productosFiltrados = productosFiltrados.filter(
      p => p.precio >= precioMin && p.precio <= precioMax
    );
    
    if (categoriasSeleccionadas.length > 0) {
      productosFiltrados = productosFiltrados.filter(
        p => categoriasSeleccionadas.includes(p.categoria)
      );
    }
    
    if (calificacionesSeleccionadas.length > 0) {
      productosFiltrados = productosFiltrados.filter(p => {
        const estrellas = Math.floor(p.calificacion);
        return calificacionesSeleccionadas.includes(estrellas);
      });
    }
    
    const nuevosGrupos = cortarArray(productosFiltrados, 6);
    setGrupos(nuevosGrupos);
    setPagina(0);
    setProductos(nuevosGrupos[0] || []);
    
  }, [data, precioMin, precioMax, categoriasSeleccionadas, calificacionesSeleccionadas]);

  const handlerVerMas = () => {
    if (grupos[pagina + 1]) {
      setProductos(prev => [...prev, ...grupos[pagina + 1]]);
      setPagina(prev => prev + 1);
    }
  };

  
  const handleCategoriaChange = (categoria) => {
    setCategoriasSeleccionadas(prev => 
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    );
  };

  const handleCalificacionChange = (stars) => {
    setCalificacionesSeleccionadas(prev => 
      prev.includes(stars)
        ? prev.filter(s => s !== stars)
        : [...prev, stars]
    );
  };

  return(
    <div className="w-[95%] flex flex-col mt-10 justify-between">
      <div className="w-full justify-items-center grid grid-cols-3 gap gap-x-1">
        <div className="w-full flex flex-col relative">
          <button onClick={() => setPrecio(p => !p)} className="w-full flex justify-between mt-3 bg-white p-2">
            <span className="text-[15px] font-semibold">Precio</span>
            <div className={`text-black ${precio ? "" : "rotate-180"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
              </svg>
            </div>
          </button>
          {precio && (
            <div className="w-full bg-white p-2 flex flex-col mt-1.5 absolute -bottom-20">
              <div className="w-full grid grid-cols-1 gap gap-y-1">
                <div className="w-full flex bg-white border rounded-sm border-slate-300 items-center py-1 px-2">
                  <span className="text-sm font-semibold">$</span>
                  <input 
                    type="number" 
                    name="precioMinimo" 
                    id="precioMinimo" 
                    value={precioMin}
                    onChange={(e) => setPrecioMin(Number(e.target.value))}
                    className="w-full focus:outline-none"
                  />
                </div>
                <div className="w-full flex bg-white border rounded-sm border-slate-300 items-center py-1 px-2">
                  <span className="text-sm font-semibold">$</span>
                  <input 
                    type="number" 
                    name="precioMaximo" 
                    id="precioMaximo" 
                    value={precioMax}
                    onChange={(e) => setPrecioMax(Number(e.target.value))}
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col relative">
          <button onClick={() => setCategoria(p => !p)} className="w-full mt-3 flex justify-between bg-white p-2">
            <span className="text-[15px] font-semibold">Categorías</span>
            <div className={`text-black ${categoria ? "" : "rotate-180"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
              </svg>
            </div>
          </button>
          {categoria && (
            <div className="w-full mt-1.5 flex flex-col gap gap-y-1.5 absolute -bottom-52 bg-white p-2">
              {['Blusas y Tops', 'Carrusel', 'Faldas y Shores', 'Más Vendidos', 'Nueva Colección', 'Sets', 'Vestidos'].map((cat, index) => (
                <label key={index} className="w-full flex text-[12px]">
                  <input 
                    type="checkbox"
                    className="mr-3"
                    checked={categoriasSeleccionadas.includes(cat)}
                    onChange={() => handleCategoriaChange(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="w-full flex flex-col relative">
          <button onClick={() => setCalificacion(p => !p)} className="w-full mt-3 flex justify-between bg-white p-2">
            <span className="text-[15px] font-semibold">Calificación</span>
            <div className={`text-black ${calificacion ? "" : "rotate-180"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
              </svg>
            </div>
          </button>
          {calificacion && (
            <div className="w-full mt-1.5 flex flex-col gap-y-1 absolute -bottom-39 bg-white">
              {[5, 4, 3, 2, 1].map((stars, index) => (
                <label key={index} className="w-full flex items-center cursor-pointer p-1">
                  <input
                    type="checkbox"
                    name="calificacion"
                    checked={calificacionesSeleccionadas.includes(stars)}
                    onChange={() => handleCalificacionChange(stars)}
                    className="mr-2"
                  />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={i < stars ? "#facc15" : "#d1d5db"}
                        className="w-5 h-5"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

      </div>

      <div className="w-full mt-8">
        <div className="grid grid-cols-2 gap-4">
          {productos.map((p, k) => (
            <div key={k}>
              <img src={p.img} className="w-full h-60 object-cover" alt={p.titulo}/>
              <h4 className="text-sm text-black pl-2">{p.titulo}</h4>
              <span className="text-sm font-semibold pl-2">$ {p.precio.toLocaleString("es-CO")}</span>
            </div>
          ))}
        </div>
        
        {grupos.length > pagina + 1 && (
          <div className="flex justify-center mt-4">
            <button 
              onClick={handlerVerMas} 
              className="py-2 px-8 bg-white rounded-sm text-lg font-semibold shadow"
            >
              Ver más
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const Cardtes = ({content})=>{
  return(
    <div className="w-full h-[300px] xl:h-[500px] flex flex-col justify-center items-center">
      <img src={content.img} className="w-full h-[80%] object-cover" alt={content.titulo}/>
      <span className="text-sm font-medium mt-2.5 w-full text-start">{content.titulo}</span>
    </div>
  )
}

export default function Home() {
  const [tamPantalla, setTamPantalla] = useState()
  
  const handlerCategoria = (titulo)=>{
    console.log(titulo);
  }

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
    <div className="w-full flex flex-col justify-center items-center bg-[#F5F5F5] pb-0 xl:pb-11">
      <div className="w-full mt-0 xl:mt-8 xl:w-[80%]">
        <Carrusel handler={handlerCategoria} cantCardDesktop={3} cantCardMobil={1} data={categorias} Card={CardCategory} estiloCarrusel={"w-full h-[500px] xl:h-[400px]"}/>
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-5 xl:mt-10">
        <h3 className="text-[18px] xl:text-[28px] font-semibold mb-4 mt-6 text-center">Ten la libertad de usar lo que te {tamPantalla < 900 ? <br/> : ""} haga feliz</h3>
        <div className="w-full xl:w-[80%]">
          <div className="w-full">
            <Carrusel data={set} flechas={true} cardMitad={true} cantCardMobil={3} cantCardDesktop={4} Card={Cardtes} estiloCarrusel={"w-full h-[300px] xl:h-[450px]"}/>
          </div>
        </div>  
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-5 xl:mt-10">
        <h3 className="text-[15px] xl:text-[28px] font-semibold">CATEGORÍAS</h3>
        <div className="w-[90%] xl:W-[85%] grid grid-cols-2 xl:grid-cols-4 justify-items-center gap gap-x-2 xl:gap-4">
          {categoriasDos.map((s, k)=>(
            <div key={k} className="w-full h-[300px] xl:h-[500px] flex flex-col  ">
              <img src={s.img} className="w-full h-[80%] object-cover" alt={s.titulo}/>
              <span className="text-sm mt-2.5">{s.titulo}</span>
            </div>
          ))}
        </div>
        
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-5 xl:mt-10">
        <h3 className="text-[15px] xl:text-[28px] font-semibold">FAVORITOS</h3>
        <div className="w-full xl:w-[80%]">
          
          <div className="w-full">
            <Carrusel data={set} flechas={true} cardMitad={true} cantCardMobil={3} cantCardDesktop={4} Card={Cardtes} estiloCarrusel={"w-full h-[300px] xl:h-[450px]"}/>
          </div>

        </div>  
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-5 xl:mt-10">
        <h3 className="text-[15px] xl:text-[28px] font-semibold">TIENDA</h3>
          {tamPantalla > 900 ? <Desktop data={productos}/> : <Mobil data={productos}/>}
      </div>

    </div>
  );
}
