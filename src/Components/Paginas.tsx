import { IoOpenOutline } from 'react-icons/io5';
import Strings from '../Shared/Strings';

function Paginas() {
  const paginas = [
    {
      nombre: "LudoMusic",
      url: "https://ludomusic.es",
      descripcion: "Plataforma de música interactiva",
      tecnologias: "App creada con Angular, hice los logos y banners con canva, e hice el diseño de la web en figma "
    },
    {
      nombre: "Cactus Aventures",
      url: "https://cactus-aventures.com/taxonomyofthecactaceae.html",
      descripcion: "Seccion para la venta de una coleccion de libros sobre cactus",
      tecnologias: "Seccion creada con Angular, implemente la pasarela de pagos de redsis y de paypal, e hice el diseño con figma"
    }
  ];

  return (
    <div className='p-5 mt-5'>
      <h2 className='text-[40px] font-bold'>{Strings.PAGINAS_HEADING}</h2>
      <p className='text-gray-600'>{Strings.PAGINAS_SUBHEADING}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
        {paginas.map((pagina, index) => (
          <div key={index} className='border border-purple-300 rounded-lg p-4 hover:shadow-lg transition-shadow'>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='text-xl font-semibold'>{pagina.nombre}</h3>
              <a 
                href={pagina.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-purple-600 hover:text-purple-800 transition-colors'
              >
                <IoOpenOutline size={24} />
              </a>
            </div>
            <p className='text-gray-600 mb-3'>{pagina.descripcion}</p>
            <a 
              href={pagina.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-purple-600 hover:underline text-sm'
            >
              {pagina.url}
            </a>
            <p className='text-gray-500 text-sm mt-2'>{pagina.tecnologias}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paginas;