import React, { useState } from "react";

const Contact = () => {
    const [name, setName] = useState<string>('');
    const [asunto, setAsunto] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [color, setColor] = useState<string>('bg-purple-400 hover:bg-purple-200');
    const [formulario, setFormulario] = useState<string>('block');
    const [thanks, setThanks] = useState<string>('hidden');
    const [boton, setBoton] = useState<string>('block');
    const [label, setLabel] = useState<string>('SEND');

    const send = () => {
        if (description && asunto && name) {
            const contenido = {
                "content": "Mensaje:",
                "embeds": [
                    {
                        "title": asunto,
                        "description": description,
                        "footer": {
                            "text": "De: " + name
                        }
                    }
                ]
            };

            fetch('https://discord.com/api/webhooks/1365078436615426219/wx-7BlkeoNpUSgRr7GEkUxi-ZjxDcRhSDkUd70DsNYXXyoeMyu1tTgOsrJQQoA8tqvAi', {
                method: 'POST',
                body: JSON.stringify(contenido),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                setDescription('');
                setAsunto('');
                setName('');
                setFormulario('hidden');
                setThanks('block');
                setBoton('hidden');
            })
        } else {
            setColor('bg-red-500 hover:bg-red-600');
            setLabel('Error, try again');
        }
    };

    return (
        <div className='px-12 mt-12'>
                <div className='flex items-center'>
                    <div className="w-[20px] h-[7px] bg-purple-300 rounded-full"></div>
                    <div className='w-full border-[1px] mx-4 mt-[-2px]'></div>
                    <h2 className='text-[24px] font-bold'>Contacta conmigo</h2>
                    <div className="w-full border-[1px] mt-[-2px] mx-4"></div>
                    <div className="w-[20px] h-[7px] bg-purple-300 rounded-full"></div>
                </div>
        
            <div className={formulario}>
                <div className="mb-3">
                    <label className='block mb-2 font-medium '>Nombre</label>
                    <input 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        type='text' 
                        placeholder='Escribe tu nombre' 
                        className='w-full p-2 rounded text-gray-800 bg-purple-100' 
                    />
                </div>
                <div className="mb-3">
                    <label className='block mb-2 font-medium'>Asunto</label>
                    <input 
                        value={asunto} 
                        onChange={e => setAsunto(e.target.value)} 
                        type='text' 
                        placeholder='Escribeme lo que necesites' 
                        className='w-full p-2 rounded text-gray-800 bg-purple-100' 
                    />
                </div>
                <div className="mb-3">
                    <label className='block mb-2 font-medium'>Descripción</label>
                    <textarea 
                        value={description} 
                        onChange={e => setDescription(e.target.value)} 
                        placeholder='Te contestare lo antes posible' 
                        className='w-full p-2 rounded text-gray-800 bg-purple-100' 
                        rows={3}
                    ></textarea>
                </div>
            </div>
            <div className={`${thanks} text-center`}>
                <h3 className='text-xl font-bold p-2'>GRACIAS POR CONTACTAR CONMIGO</h3>
            </div>
            <div className={`${boton} text-center mt-3`}>
                <button 
                    onClick={send} 
                    className={`${color} text-white py-2 px-6 rounded-full transition-colors duration-300`}
                >
                    {label}
                </button>
            </div>
        </div>
    );
};

export default Contact;