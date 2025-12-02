import { Luckiest_Guy, Pacifico } from 'next/font/google'
import { FiDroplet, FiDownloadCloud, FiFacebook, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import Link from "next/link";
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export default function About() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>About Me <span className="text-6xl"></span></h1>
            <p className="mt-4">Welcome to my portfolio! I&apos;m a dynamic software developer specializing in React, Next.js, React Native. My journey is a fusion of innovation and expertise. Beyond tech skills, I&apos;m a dedicated mentor fostering collaborative learning, a Business Management Consultant/Managerial Leader, Data Analyst specialist/Budding Researcher to identify and solve complex businesses.</p>

            <div className="icons flex gap-3 mt-3 lg:hidden">
                <Link href={'https://web.facebook.com/godson.azubuike.7'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiFacebook size={16} className='text-blue-500' />
                </Link>
                <Link href={'https://www.linkedin.com/in/godson-azubuike-9b462b1b1'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiLinkedin size={16} className='text-sky-500' />
                </Link>
                <Link href={'https://twitter.com/azubuike_godson'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiTwitter size={16} className='text-indigo-500' />
                </Link>
                <Link href={'https://github.com/godson-pius'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FiGithub size={16} className='text-black' />
                </Link>
            </div>

            <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gray-500 lg:hidden rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                <FiDownloadCloud className='text-white' />
                <Link href={'#'} target="_blank" className="capitalize rounded-full text-sm">Download Resume</Link>
            </button>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl flex items-center gap-2 my-6">What i do</h1>

            <div className="grid lg:grid-cols-2 gap-7">
                
                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Web Development</h6>
                    </div>

                    <p className="text-sm">As a developer, I find myself most captivated by the power and flexibility of NEXT.js. I&apos;m always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">App Development</h6>
                    </div>

                    <p className="text-sm">With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people&apos;s lives. Let&apos;s turn ideas into reality and shape the future together.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Project Management</h6>
                    </div>

                    <p className="text-sm">As a project manager, I excel in strategic planning, team coordination, and achieving project goals efficiently. My track record reflects a commitment to excellence in diverse domains. </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Mentorship</h6>
                    </div>

                    <p className="text-sm">I have also found great joy in sharing my knowledge with others. Being a technical mentor allows me to give back to the community that has supported me throughout my career. </p>
                </div>
            </div>
        </main>
    )
}