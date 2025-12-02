'use client'

import { Luckiest_Guy } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { FiDownloadCloud, FiLink2, FiMusic, FiPlay, FiStopCircle } from 'react-icons/fi'
import Lottie from 'lottie-react'
import pausebutton from '@/animations/pausebutton.json'
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })

const Music = () => {
    const believe = useRef<any>()
    const [playStatus, setPlayStatus] = useState(true)

    const handleAudio = (ref: any) => {
        setPlayStatus(prev => !prev)
        {
            playStatus ? ref.current.play() : (<>{ref.current.pause()}{ref.current.currentTime = 0}</>)
        }
    }
    return (
        <>
            <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
                <div className='flex gap-4 items-center'>
                    <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>My Songs <span className="text-5xl"></span></h1>
                    <hr className="w-[50rem]" />
                </div>

                <div className="grid lg:grid-cols-3 gap-5 mt-5">
                    <div className="bg-[#FFEBD1] p-5 rounded-xl">
                        <Image className='hover:scale-150 transition duration-500 rounded-lg mb-4' src={'/believe.jpeg'} width={10000} height={2} alt='believe' />

                        <div className="flex justify-between items-center">
                            <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                                <Link href={'/believeme.mp3'} target='_blank'>
                                    <FiDownloadCloud size={22} />
                                </Link>
                                <Link href={'https://linktr.ee/godsonpius?fbclid=PAAaaqY81nM6AwKO1WKSxNvO1K3o9foPNY-LG5EYh0NRl6ZwBdDzeu2A11AZg'} target='_blank' className="font-bold text-lg">Believe Me</Link>
                            </div>
                            { playStatus ? (<FiMusic onClick={() => handleAudio(believe)} className='ring-2 ring-black p-1 rounded-full cursor-pointer' size={30} />) : (<div className='w-[7rem] cursor-pointer'><Lottie onClick={() => handleAudio(believe)} animationData={pausebutton} /></div>) }
                            <audio src="/believeme.mp3" ref={believe}></audio>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Music