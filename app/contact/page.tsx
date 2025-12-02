import Aside from "@/components/Aside"
import Contact from "@/components/Contact"
import Loader from "@/components/Loader"
import pageanim from '@/animations/pageanim.json'

const page = () => {
    return (
        <main className='w-full flex mt-32 gap-5'>
            <Aside />
            <Loader animationData={pageanim}>
                <Contact />
            </Loader>
        </main>
    )
}

export default page