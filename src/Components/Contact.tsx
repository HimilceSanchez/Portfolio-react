const Contact = () => {
    return (
        <div className='px-12 mt-12'>
            <div className='flex items-center'>
                <div className="w-[20px] h-[7px] bg-purple-300 rounded-full"></div>
                <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                <h2 className='text-[24px] font-bold'>Contacta conmigo</h2>
                <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
                <div className="w-[20px] h-[7px] bg-purple-300 rounded-full"></div>
            </div>
            <div className='text-center mt-6'>
                <a
                    href="https://tally.so/r/yPoBQd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='bg-purple-500 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition-colors duration-300 inline-block'
                >
                    Enviame un mensaje
                </a>
            </div>
        </div>
    );
};

export default Contact;
