import Aside from "@/components/Aside"
import Work from "@/components/Work"
import pageanim from '@/animations/pageanim.json'
import dynamic from "next/dynamic";
import PrivacyPolicy from "@/components/Privacy";

const Loader = dynamic(() => import("@/components/Loader"), {
  ssr: false,
});

const page = () => {
    return (
        <main className='w-full flex mt-32 gap-5'>
            <Aside />
            <Loader animationData={pageanim}>
                <PrivacyPolicy />
            </Loader>
        </main>
    )
}

export default page