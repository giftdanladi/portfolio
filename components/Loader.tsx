'use client'

import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

interface LoaderProps {
    animationData: any
    children: React.ReactNode
}

const Loader: React.FC<LoaderProps> = ({ animationData, children }) => {
    const [preloader, setPreloader] = useState(true)

    useEffect(() => { 
        setTimeout(() => {
            setPreloader(false)
        }, 1000)
     })
    return (
        <>
            {preloader ? (
                <div className='flex justify-center items-center w-full'>
                    <Lottie animationData={animationData} />
                </div>
            ) : (children)}
        </>
    )
}

export default Loader