'use client'

import About from '@/components/About'
import Aside from '@/components/Aside'
import pageanim from '@/animations/pageanim.json';
import {useState } from 'react'
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/Loader"), {
  ssr: false,
});

export default function Home() {

  const [value, setValue] = useState()

  return (
    <>
      <main className='w-full flex mt-32 gap-5'>
        <Aside />
        <Loader animationData={pageanim}>
          <About />
        </Loader>
      </main>
    </>
  )
}
