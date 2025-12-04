import Aside from "@/components/Aside"
import Resume from "@/components/Resume"
import pageanim from '@/animations/pageanim.json'
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/Loader"), {
  ssr: false,
});

const page = () => {
    return (
        <main className='w-full flex mt-32 gap-5'>
            <Aside />
            <Loader animationData={pageanim}>
                <Resume />
            </Loader>
        </main>
    )
}

export default page