import Aside from "@/components/Aside"
import Loader from "@/components/Loader"
import musicanim from '@/animations/musicanim.json'
import Music from "@/components/Music"

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