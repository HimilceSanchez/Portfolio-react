import Strings from '../Shared/Strings';

// Define your project data here
const projectsData = [
    {
        id: 1,
        title: '3Deluxe',
        description: 'Proyecto de pagina web para una empresa ficticia hecha con angular ',
        // Replace VIDEO_ID_1 with your actual YouTube video ID
        videoEmbedUrl: 'https://www.youtube.com/embed/-Yz1fRRTz0I?si=XeXon6-dSWzrVbRq' 
    },
    {
        id: 2,
        title: 'Diseño Portfolio Personal',
        description: 'Creación de un portfolio dinámico y responsivo para mostrar habilidades y proyectos, construido con TypeScript y Tailwind CSS.',
        // Replace VIDEO_ID_2 with your actual YouTube video ID
        videoEmbedUrl: 'https://www.youtube.com/embed/VIDEO_ID_2'
    },
    // Add more projects like this:
    // {
    //     id: 3,
    //     title: 'Nombre del Proyecto 3',
    //     description: 'Descripción del proyecto 3.',
    //     videoEmbedUrl: 'https://www.youtube.com/embed/VIDEO_ID_3'
    // },
];

function Proyectos() {
  return (
    <div className='px-4 sm:px-8 md:px-12 mt-12 md:mt-16'>
        {/* Section Title - similar to Habilidades */}
        <div className='flex items-center'>
            <div className="w-[15px] h-[5px] sm:w-[20px] sm:h-[7px] bg-purple-300 rounded-full"></div>
            <div className='w-full border-[1px] mx-2 sm:mx-4 mt-[-2px]'></div>
            <h2 className='text-[18px] sm:text-[22px] md:text-[24px] font-bold whitespace-nowrap'>
                {Strings.PROYECTOS_HEADING}
            </h2>
            <div className='w-full border-[1px] mt-[-2px] mx-2 sm:mx-4'></div>
            <div className="w-[15px] h-[5px] sm:w-[20px] sm:h-[7px] bg-purple-300 rounded-full"></div>
        </div>
        <p className='text-center text-gray-500 mt-4 mb-8 md:mb-12 text-sm sm:text-base'>
            {Strings.PROYECTOS_SUBHEADING}
        </p>

        {/* Projects Grid/List */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            {projectsData.map((project) => (
                <div key={project.id} className='bg-white border border-purple-100 rounded-lg shadow-lg overflow-hidden'>
                    <div className='aspect-w-16 aspect-h-9 bg-gray-200'>
                        <iframe
                            className="w-full h-full"
                            src={project.videoEmbedUrl}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className='p-4 sm:p-6'>
                        <h3 className='text-lg sm:text-xl font-bold text-purple-700 mb-2'>{project.title}</h3>
                        <p className='text-gray-600 text-xs sm:text-sm'>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Proyectos;