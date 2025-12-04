import Aside from "@/components/Aside"
import musicanim from '@/animations/musicanim.json'
import Music from "@/components/Music"
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/Loader"), {
  ssr: false,
});

const page = () => {
    return (
        <main className='w-full flex mt-32 gap-5'>
            <Aside />
            <Loader animationData={musicanim}>
                <Music />
            </Loader>
        </main>
    )
}

export default page