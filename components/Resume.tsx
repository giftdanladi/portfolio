import { Luckiest_Guy, Pacifico } from 'next/font/google'
import { FiPocket } from 'react-icons/fi'
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })

export default function Resume() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>Skills <span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-5">
                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">JavaScript</h6>
                    </div>

                    <p className="text-sm">JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Next Js</h6>
                    </div>

                    <p className="text-sm">Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">React Js</h6>
                    </div>

                    <p className="text-sm">React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Tailwind CSS</h6>
                    </div>

                    <p className="text-sm">Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Git</h6>
                    </div>

                    <p className="text-sm">Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Mongo DB</h6>
                    </div>

                    <p className="text-sm">MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">React Native</h6>
                    </div>

                    <p className="text-sm">React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.</p>
                </div>
            </div>
        </main>
    )
}