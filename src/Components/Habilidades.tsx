import Strings from '../Shared/Strings'

type Habilidad = { id: number; title: string; desc: string; logo: string }

function HabilidadCard({ item }: { item: Habilidad }) {
    return (
        <div className='text-center flex flex-col items-center gap-4 w-[140px] sm:w-[160px] md:w-[180px]'>
            <div className='bg-purple-100 rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]'>
                <img
                    src={item.logo}
                    alt={item.title}
                    className='w-full h-full p-3 sm:p-4 md:p-5 hover:scale-110 transition-all cursor-pointer'
                />
            </div>
            <h2 className='font-bold text-sm sm:text-base md:text-lg'>{item.title}</h2>
            <p className='text-gray-400 text-xs sm:text-sm md:text-base'>{item.desc}</p>
        </div>
    )
}

function Habilidades() {
    const HabilidadesList = [
        {
          id: 1,
          title: Strings.JAVA,
          desc: Strings.JAVA_DESC,
          logo: "/java.png",
        },
        {
          id: 2,
          title: Strings.REACT,
          desc: Strings.REACT_DESC,
          logo: "/react.png",
        },
        {
          id: 3,
          title: Strings.CSS,
          desc: Strings.CSS_DESC,
          logo: "/css.png",
        },
        {
          id: 4,
          title: Strings.ANGULAR,
          desc: Strings.ANGULAR_DESC,
          logo: "/angular.png",
        },
        {
          id: 5,
          title: Strings.VUE,
          desc: Strings.VUE_DESC,
          logo: "/vue.png",
        },
      ];
      
  return (
    <div className='px-4 sm:px-8 md:px-12 mt-8 md:mt-12'>
        {/* Sección del título */}
        <div className='flex items-center'>
            <div className="w-[15px] h-[5px] sm:w-[20px] sm:h-[7px] bg-purple-300 rounded-full"></div>
            <div className='w-full border-[1px] mx-2 sm:mx-4 mt-[-2px]'></div>
            <h2 className='text-[18px] sm:text-[22px] md:text-[24px] font-bold whitespace-nowrap'>
                {Strings.HABILIDADES}
            </h2>
            <div className='w-full border-[1px] mt-[-2px] mx-2 sm:mx-4'></div>
            <div className="w-[15px] h-[5px] sm:w-[20px] sm:h-[7px] bg-purple-300 rounded-full"></div>
        </div>
        
        {/* Lista de habilidades */}
        <div className='flex flex-col items-center gap-10 md:gap-12 mt-8 md:mt-16'>
            <div className='flex justify-center gap-10 md:gap-12 w-full'>
                {HabilidadesList.slice(0, 3).map((item) => (
                    <HabilidadCard key={item.id} item={item} />
                ))}
            </div>
            <div className='flex justify-center gap-10 md:gap-12 w-full'>
                {HabilidadesList.slice(3).map((item) => (
                    <HabilidadCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Habilidades