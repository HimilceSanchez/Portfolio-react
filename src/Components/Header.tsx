function Header() {
    const menu = [
        {
            name: "INICIO",
            id: 1,
            
        },
        {
            name: "HABILIDADES",
            id: 2

        },
        {
            name: "CONTACTO",
            id: 3
            
        },
    ];

    return (
        <div className="flex items-center w-full max-w-[100vw] justify-between border-b-[1px] border-purple-100 overflow-x-hidden">
            <div className="w-[90px] h-[90px] bg-purple-100">
                <img src="/logo.png" alt="logo" className="p-1" />
            </div>
            <div className="hidden md:flex gap-16">
                {menu.map((item) => (
                    <div key={item.id} className="cursor-pointer hover:underline font-medium">
                        <h2>{item.name}</h2>
                    </div>
                ))}
            </div>
            <div className="w-[90px] h-[90px] bg-purple-300 flex justify-center items-center">
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
        </div>
    );
}

export default Header;
