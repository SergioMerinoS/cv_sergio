import { useEffect, useState } from 'react'
import mapache from '../assets/img/mapache.png'
import NavBar from './NavBar';
import InfoBase from '../pages/InfoBase';
const Header = () => {

    return (
        <>
            <div className='w-full h-screen flex flex-row gap-5  justify-center py-10'>
                <div className='my-auto flex flex-col gap-2 mx-2'>
                    <div className='my-auto flex flex-row gap-4 rounded-md p-5  bg-slate-50 shadow-lg' >
                        <div className='my-auto flex flex-col gap-4'>
                            <h1 className='text-5xl font-bold text-center'><span className=' underline decoration-sky-500'>Sergio</span> Merino</h1>
                            <h1 className='text-5xl font-bold text-center'>Saceda</h1>
                        </div>
                        <div>
                            <img src={mapache} className='rounded-md w-[300px]' />
                        </div>

                    </div>

                    <NavBar/>


                    <InfoBase/>


                </div>


            </div>
        </>
    )
}

export default Header