import Aside from "@/components/Aside"
import Loader from "@/components/Loader"
import Resume from "@/components/Resume"
import pageanim from '@/animations/pageanim.json'

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