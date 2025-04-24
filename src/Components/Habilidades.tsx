import Strings from '../Shared/Strings'
import { IoArrowForwardOutline } from "react-icons/io5";
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
    <div className='px-12 mt-12'>
        <div className='flex items-center'>
            <div className="w-[20px] h-[7px] bg-purple-300 rounded-full"></div>
            <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
            <h2 className='text-[24px] font-bold'>{Strings.HABILIDADES}</h2>
            <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
            <div className="w-[20px] h-[7px] bg-purple-300 rounded-full"></div>
        </div>
        <div className='flex justify-around mt-16'>
            {HabilidadesList.map((item)=>(
                <div className='text-center flex flex-col justify-center items-center
                gap-6'>
                    <div className='bg-gray-200 rounded-full w-[80px] h-[80px]'>
                        <img src={item.logo} className='w-[80px] h-[80px]
                        p-5 hover:scale-110 transition-all cursor-pointer'/>
                    </div>
                    <h2 className='mt-5 font-bold'>{item.title}</h2>
                    <h2 className='text-gray-400'>{item.desc}</h2>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Habilidades