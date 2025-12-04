import { Luckiest_Guy, Pacifico } from 'next/font/google'
import { 
    FiLock, 
    FiShield, 
    FiFileText, 
    FiDatabase 
} from 'react-icons/fi'
import Link from "next/link";

const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export default function PrivacyPolicy() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full min-h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto hover:shadow-lg duration-700'>
            
            <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>
                Privacy Policy
            </h1>

            <p className="mt-4">
                This Privacy Policy explains how we collect, use, share, and protect your personal information when 
                you use our applications, websites, and services (“Services”). By using any of our apps, you agree to 
                the practices described in this policy.
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
                        We may collect personal data you provide directly such as your name, email address, 
                        login details, profile information, or any data you submit voluntarily through forms or input fields.
                    </p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiDatabase />
                        <h6 className="font-bold text-2xl">Device & Usage Data</h6>
                    </div>

                    <p className="text-sm">
                        We automatically collect information such as device type, operating system, IP address, 
                        general location, app usage statistics, crash logs, and performance data to help improve 
                        the stability and functionality of our Services.
                    </p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiShield />
                        <h6 className="font-bold text-2xl">Feature-Specific Data</h6>
                    </div>

                    <p className="text-sm">
                        Depending on the app, we may request optional permissions for features such as 
                        location, camera access, photos, files, payment information (processed by secure third parties), 
                        contacts, or AI-processing inputs. These features only activate with your permission.
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiLock />
                        <h6 className="font-bold text-2xl">How We Use Data</h6>
                    </div>

                    <p className="text-sm">
                        Your information is used to operate and maintain the Services, personalize features, 
                        improve performance, process transactions, support AI-powered features, prevent fraud, 
                        comply with legal obligations, and communicate necessary updates or service-related notices.
                    </p>
                </div>

            </div>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl my-6">Sharing & Security</h1>

            <p className="text-sm mb-3">
                We may share your information with trusted service providers who assist us with hosting, analytics, 
                payment processing, security, and customer support. We do not sell your personal data.
            </p>

            <p className="text-sm">
                To protect your information, we use industry-standard safeguards including encryption, secure 
                authentication, restricted access, and regular monitoring.
            </p>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl mb-4">Your Rights</h1>

            <p className="text-sm">
                Depending on your region, you may have the right to access, correct, delete, restrict, or object to the 
                processing of your personal data. You may also request a copy of your data or withdraw consent 
                for optional features.
            </p>

            <p className="text-sm mt-3 font-semibold">
                Contact: <Link href="mailto:danladigifttoluwayi@gmail.com" className="underline">danladigifttoluwayi@gmail.com</Link>
            </p>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl mb-4">Policy Updates</h1>

            <p className="text-sm">
                We may update this Privacy Policy periodically. Continued use of our Services following updates 
                means you agree to the revised terms. The “Last updated” date will reflect the latest version.
            </p>

        </main>
    )
}
