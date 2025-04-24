
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5'

function SideBar() {
  return (
    <div className="w-[90px] h-screen border-r-[1px] border-purple-100 fixed
    flex flex-col justify-around items-center">
        <h2 className='-rotate-90 tracking-widest'>PAGINA DE INICIO</h2>
        <div className="flex flex-col gap-8 mb-10 text-[30px]">
            <a href="https://github.com/HimilceSanchez"><IoLogoGithub className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
            <a href='https://www.linkedin.com/in/himilce-sanchez-guevara-91b742334/'> <IoLogoLinkedin className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
            <a href='https://www.youtube.com/@H4ch3s'><IoLogoYoutube className='cursor-pointer hover:scale-110 transition-all ease-in-out' /></a>
        </div>
    </div>
  )
}

export default SideBar