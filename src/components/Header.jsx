import { useEffect, useState } from 'react'

const Header = () => {
    const [edad, setEdad] = useState(0);
    useEffect(() => {
        const edad = new  Date().getFullYear() - 2001;
        setEdad(edad);

    }, [])
  return (
    <>
        <div className='w-full h-screen flex flex-row justify-center transition delay-700 duration-300 ease-in-out bg-gradient-to-l hover:bg-gradient-to-r from-purple-500 to-pink-500 '>
            <div className='w-1/2 my-auto flex flex-col gap-4'>
                <h1 className='text-5xl font-bold text-center underline decoration-sky-500'>Sergio Merino</h1>
                <h1 className='text-5xl font-bold text-center underline decoration-sky-500'>Saceda</h1>

                
                <p className='text-center text-xl underline decoration-red-500'>Edad: {edad}</p>
                
            </div>
            <div className='w-1/2'>

            </div>
        </div>
    </>
  )
}

export default Header