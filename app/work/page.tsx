import Aside from "@/components/Aside"
import Work from "@/components/Work"
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
                <Work />
            </Loader>
        </main>
    )
}

export default page