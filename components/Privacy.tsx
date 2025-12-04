import { Luckiest_Guy, Pacifico } from 'next/font/google'
import { FiLock, FiShield, FiFileText, FiDatabase } from 'react-icons/fi'
import Link from "next/link";

const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export default function PrivacyPolicy() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full min-h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto hover:shadow-lg duration-700'>

            <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>
                Privacy Policy <span className="text-6xl"></span>
            </h1>

            <p className="mt-4">
                This Privacy Policy outlines how FreelanceMate collects, uses, stores, and protects your personal information.
                We are committed to safeguarding your data in compliance with the UK GDPR and Data Protection Act 2018.
                By using the app, you agree to the practices described below.
            </p>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl flex items-center gap-2 my-6">Information We Collect</h1>

            <div className="grid lg:grid-cols-2 gap-7">

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiFileText />
                        <h6 className="font-bold text-2xl">Personal Data</h6>
                    </div>
                    <p className="text-sm">
                        We collect data you provide, such as your name, email, business details,
                        invoices, clients, expenses, and communication generated inside the app.
                    </p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiDatabase />
                        <h6 className="font-bold text-2xl">Usage & Device Data</h6>
                    </div>
                    <p className="text-sm">
                        We automatically collect device type, IP address, app performance logs,
                        crash reports, and general activity to improve the app’s stability and performance.
                    </p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiShield />
                        <h6 className="font-bold text-2xl">AI Processing Data</h6>
                    </div>
                    <p className="text-sm">
                        To generate smart suggestions, invoices, and messages, the app may process
                        invoice items, client info, expenses, and text inputs. This data is handled securely.
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiLock />
                        <h6 className="font-bold text-2xl">How We Use Your Data</h6>
                    </div>
                    <p className="text-sm">
                        Data is used to provide services, sync your account, generate AI content,
                        process billing, enhance user experience, and comply with legal obligations.
                    </p>
                </div>

            </div>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl my-6">Sharing & Security</h1>
            <p className="text-sm mb-4">
                We only share your data with trusted service providers such as cloud hosting,
                analytics platforms, and infrastructure tools necessary to run FreelanceMate.
                We do not sell user data.
            </p>
            <p className="text-sm">
                Strong security measures such as encryption, secure authentication,
                and restricted access controls are used to protect your information.
            </p>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl mb-4">Your Rights</h1>
            <p className="text-sm">
                Under UK GDPR, you have the right to access, correct, delete, or port your data,
                as well as restrict or object to certain types of processing. You may contact us at:
            </p>

            <p className="text-sm mt-3 font-semibold">
                Email: <Link href="mailto:danladigifttoluwayi@gmail.com" className="underline">danladigifttoluwayi@gmail.com</Link>
            </p>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl mb-4">Policy Updates</h1>
            <p className="text-sm">
                We may update this Privacy Policy periodically. Updates will be posted in the app,
                and continued use signifies your acceptance of the revised policy.
            </p>

        </main>
    )
}
