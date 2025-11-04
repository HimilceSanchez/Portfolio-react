import { IoLogoGithub, IoLogoLinkedin, IoHome, IoPerson, IoCode, IoFolder, IoGlobe, IoMail } from 'react-icons/io5';

interface SideBarProps {
  isOpen: boolean;
}

function SideBar({ isOpen }: SideBarProps) {
  // Let's change w-64 sm:w-72 to w-56 for a smaller mobile sidebar.
  // You can experiment with other values like w-48, w-52, etc.
  const mobileWidthClass = "w-56"; // New smaller width for mobile

  return (
    <div
      className={`
        fixed top-0 border-r-[1px] border-purple-100 bg-white 
        flex flex-col justify-around items-center 
        transition-transform duration-300 ease-in-out
        
        md:w-[90px] md:translate-x-0 md:h-screen md:left-0 md:z-20 /* Desktop styles: always visible, fixed width */
        
        ${isOpen ? `translate-x-0 ${mobileWidthClass} left-0 h-screen z-50` : `-translate-x-full ${mobileWidthClass} left-0 h-screen z-20`} /* Mobile styles: slides in/out */
        md:flex /* Ensure display flex on desktop */
      `}
    >
        <div className="flex flex-col gap-6 mb-10">
            <a href="#inicio" className='text-[24px] cursor-pointer hover:scale-110 transition-all ease-in-out text-purple-600'><IoHome /></a>
            <a href="#sobre-mi" className='text-[24px] cursor-pointer hover:scale-110 transition-all ease-in-out text-purple-600'><IoPerson /></a>
            <a href="#habilidades" className='text-[24px] cursor-pointer hover:scale-110 transition-all ease-in-out text-purple-600'><IoCode /></a>
            <a href="#proyectos" className='text-[24px] cursor-pointer hover:scale-110 transition-all ease-in-out text-purple-600'><IoFolder /></a>
            <a href="#paginas" className='text-[24px] cursor-pointer hover:scale-110 transition-all ease-in-out text-purple-600'><IoGlobe /></a>
            <a href="#contacto" className='text-[24px] cursor-pointer hover:scale-110 transition-all ease-in-out text-purple-600'><IoMail /></a>
        </div>
        <div className="flex flex-col gap-4 mb-10 text-[20px]">
            <a href="https://github.com/HimilceSanchez" target="_blank" rel="noopener noreferrer"><IoLogoGithub className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
            <a href='https://www.linkedin.com/in/himilce-sanchez-guevara-91b742334/' target="_blank" rel="noopener noreferrer"> <IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
        </div>
    </div>
  );
}

export default SideBar;