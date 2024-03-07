import Link from 'next/link'
import React from 'react'

function HomeCards() {
  return (
    <div className="flex flex-col mb-32 md:mb-0 md:flex-row">
        <Link href={'/chemistry'} className="px-5 py-4 transition-colors border border-transparent rounded-lg group">
          <img src='https://placehold.co/500x500/DA4453/white' className='w-64 mx-auto '/>
        </Link>
        <Link href={'/physics'} className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-blue-300 hover:bg-blue-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <img src='https://placehold.co/500x500/4A89DC/white' className='w-64 mx-auto '/>
        </Link>
        <Link href={'/about'} className="px-5 py-4 transition-colors border border-transparent rounded-lg group hover:border-purple-300 hover:bg-purple-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <img src='https://placehold.co/500x500/967ADC/white' className='w-64 mx-auto '/>
        </Link>
      </div>
  )
}

export default HomeCards