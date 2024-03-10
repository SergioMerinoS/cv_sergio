import { useEffect, useState } from 'react'

const InfoBase = () => {
    const [edad, setEdad] = useState(0);
    useEffect(() => {
        const edad = new Date().getFullYear() - 2001;
        setEdad(edad);

    }, [])
    return (
        <div className=' flex flex-col gap-4 rounded-md p-3 bg-slate-50 shadow-lg'>
            <p className='underline decoration-sky-500 text-xl text-center'>Info:</p>
            <p className=' text-xl'>Edad: {edad}</p>
            <p className='text-xl'> Hospitalet</p>
        </div>

    )
}

export default InfoBase