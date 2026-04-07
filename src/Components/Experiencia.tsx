import Strings from '../Shared/Strings'

const experiencias = [
    {
        id: 1,
        empresa: 'COSENTINO',
        puesto: 'Estudiante en Prácticas',
        periodo: 'Marzo 2026 - Actualidad',
        descripcion: 'Desarrollo de aplicaciones web con Angular y TypeScript. Resolución de issues en paginas web ',
    },
    {
        id: 2,
        empresa: 'Ayuntamiento de Cuevas del Almanzora',
        puesto: 'Estudiante en Prácticas',
        periodo: 'Abril 2025 - Junio 2025',
        descripcion: 'Configuracion de aplicacion de tickets para el PAC',
    },
]

function Experiencia() {
    return (
        <div className='px-4 sm:px-8 md:px-12 mt-8 md:mt-12'>
            <div className='flex items-center'>
                <div className="w-[15px] h-[5px] sm:w-[20px] sm:h-[7px] bg-purple-300 rounded-full"></div>
                <div className='w-full border-[1px] mx-2 sm:mx-4 mt-[-2px]'></div>
                <h2 className='text-[18px] sm:text-[22px] md:text-[24px] font-bold whitespace-nowrap'>
                    {Strings.EXPERIENCIA}
                </h2>
                <div className='w-full border-[1px] mt-[-2px] mx-2 sm:mx-4'></div>
                <div className="w-[15px] h-[5px] sm:w-[20px] sm:h-[7px] bg-purple-300 rounded-full"></div>
            </div>

            <div className='flex flex-col gap-6 mt-8 md:mt-12'>
                {experiencias.map((item) => (
                    <div key={item.id} className='border-l-4 border-purple-300 pl-4 md:pl-6'>
                        <span className='text-xs text-gray-400'>{item.periodo}</span>
                        <h3 className='font-bold text-base md:text-lg'>{item.puesto}</h3>
                        <p className='text-purple-500 text-sm font-medium'>{item.empresa}</p>
                        <p className='text-gray-400 text-sm mt-1'>{item.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experiencia
