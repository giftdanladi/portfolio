import Image from "next/image";
import { FiDownloadCloud, FiFacebook, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiInstagram } from 'react-icons/fi'
import { Luckiest_Guy, Pacifico } from 'next/font/google'
import Link from "next/link";
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export default function Aside() {
    return (
        <main className="h-[37rem] bg-white dark:bg-slate-700 w-80 rounded-3xl lg:flex flex-col justify-center items-center px-5 hidden">
            {/* Image */}
            <div className="pimage w-40 h-40 bg-[#FF9C1A] -mt-32 rounded-2xl" style={{ backgroundImage: 'url(/1.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

            </div>

            {/* Text */}
            <h1 className={`text-3xl font-bold mt-3`}>Gift Danladi</h1>
            <p className="text-sm mt-5 text-gray-400">Software Developer</p>

            <div className="icons flex gap-3 mt-3">
                <Link href={'https://www.facebook.com/gift.danladi.3192'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiFacebook size={16} className='text-blue-500' />
                </Link>
                <Link href={'https://www.linkedin.com/in/gift-danladi-73381a272'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiLinkedin size={16} className='text-sky-500' />
                </Link>
                <Link href={'https://www.instagram.com/gift_shatty/'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiInstagram size={16} className='text-indigo-500' />
                </Link>
                <Link href={'https://github.com/giftdanladi'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiGithub size={16} className='text-black' />
                </Link>
            </div>

            <div className="bg-[#F2F7FC] dark:bg-slate-900 w-full mt-4 p-5 flex flex-col items-start rounded-2xl divide-y">
                <div className="py-4 flex justify-center items-center gap-4">
                    <FiPhone className='text-red-500' />
                    <div className="text-sm">
                        <p className="text-xs text-gray-500">Phone</p>
                        <p>+44 7721704181</p>
                    </div>
                </div>

                <div className="py-4 flex justify-center items-center gap-4">
                    <FiMail className='text-orange-500' />
                    <div className="text-sm">
                        <p className="text-xs text-gray-500">Email</p>
                        <p>danladigifttoluwayi@gmail.com</p>
                    </div>
                </div>

                <div className="py-4 flex justify-center items-center gap-4">
                    <FiMapPin className='text-red-500' />
                    <div className="text-sm">
                        <p className="text-xs text-gray-500">Location</p>
                        <p>United Kingdom</p>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                        <FiDownloadCloud className='text-white' />
                        <Link href={'/GodsonAzubuike.pdf'} target="_blank" className="capitalize rounded-full text-sm">Download Resume</Link>
                    </button>
                </div>
            </div>
        </main>
    )
}