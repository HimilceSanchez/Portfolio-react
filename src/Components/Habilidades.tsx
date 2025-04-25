import Strings from '../Shared/Strings'

function Habilidades() {
    const HabilidadesList = [
        {
          id: 1,
          title: Strings.JAVA,
          desc: Strings.JAVA_DESC,
          logo: "/java.jpg",
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
        <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-8 mt-8 md:mt-16'>
            {HabilidadesList.map((item)=>(
                <div key={item.id} className='text-center flex flex-col justify-center items-center gap-4 md:gap-6 w-full max-w-[300px]'>
                    <div className='bg-gray-200 rounded-full w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px]'>
                        <img 
                            src={item.logo} 
                            alt={item.title}
                            className='w-full h-full p-3 sm:p-4 md:p-5 hover:scale-110 transition-all cursor-pointer'
                        />
                    </div>
                    <h2 className='mt-2 md:mt-5 font-bold text-sm sm:text-base md:text-lg'>{item.title}</h2>
                    <p className='text-gray-400 text-xs sm:text-sm md:text-base'>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Habilidades