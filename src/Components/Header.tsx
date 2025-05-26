import { useState } from 'react';
import Strings from '../Shared/Strings';

interface HeaderProps {
  toggleSidebar: () => void;
}

function Header({ toggleSidebar }: HeaderProps) {
    const menu = [ //
        {
            name: "INICIO",
            id: 1,
            // link: "#introduction" // Example if using scroll-to-id
        },
        {
            name: "HABILIDADES", //
            id: 2
            // link: "#habilidades"
        },
        { // New menu item for Proyectos
            name: "PROYECTOS",
            id: 4 // New ID
            // link: "#proyectos"
        },
        {
            name: "CONTACTO", //
            id: 3
            // link: "#contacto"
        },
    ];
    // Sort menu by ID if order matters, or arrange manually
    menu.sort((a, b) => a.id - b.id);


    const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

    const toggleContactDropdown = () => {
        setIsContactDropdownOpen(!isContactDropdownOpen);
    };

    // Function to handle smooth scroll (if you implement it)
    // const scrollToSection = (sectionId: string) => {
    //     document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    // };


    return (
        <div className="flex items-center w-full justify-between border-b-[1px] border-purple-100 fixed top-0 left-0 right-0 bg-white z-30">
            <div 
              className="w-[90px] h-[90px] bg-purple-100 flex items-center justify-center cursor-pointer"
              onClick={toggleSidebar}
            >
                <img src="/logo.png" alt="logo" className="p-1" />
            </div>
            <div className="hidden md:flex gap-10 xl:gap-16"> {/* Adjusted gap for more items */}
                {menu.map((item) => (
                    <div 
                        key={item.id} 
                        className="cursor-pointer hover:underline font-medium text-sm lg:text-base"
                        // onClick={() => item.link && scrollToSection(item.link.substring(1))}
                    >
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
            <div className="relative">
                <div 
                    className="w-[90px] h-[90px] bg-purple-300 flex justify-center items-center cursor-pointer"
                    onClick={toggleContactDropdown}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-9 h-9 text-black">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
                {isContactDropdownOpen && (
                    <div className="absolute right-0 mt-1 w-64 bg-white border border-purple-200 rounded-md shadow-lg py-2 z-30">
                        <div className="px-4 py-2 text-sm text-gray-700">
                            <p className="font-semibold">Nombre:</p>
                            <p>{Strings.MY_FULL_NAME}</p>
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700">
                            <p className="font-semibold">Email:</p>
                            <p className="truncate">{Strings.MY_EMAIL}</p>
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700">
                            <p className="font-semibold">Edad:</p>
                            <p>{Strings.MY_AGE} años</p>
                        </div>
                        <div className="px-4 py-2 text-sm text-gray-700">
                            <p className="font-semibold">Ciudad:</p>
                            <p>{Strings.MY_CITY}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;