import React from 'react'
import { Card, CardContent } from '../ui/card'

function IntroMessage() {
  return (
    <div className='bg-[#f4f4f4] py-2 px-4 space-y-4'>
        <Card className='max-w-screen-xl mx-auto'>
            <CardContent className='flex flex-col md:flex-row px-4 py-3'>
                <div className='mx-auto p-2'>
                    <img src="/images/cintro.jpg" className=' max-w-xs' alt="demo" />
                </div>
                <div className='w-full m-auto px-5'>
                    <h1 className='text-3xl font-bold text-center py-2'> WELCOME CLASS OF 2023-2024</h1>
                    <p className='text-pretty '>Welcome Scientists to our Chemistry Class Web Page! You are going to be using this page alot so make sure to bookmark it. I am very excited to have all of you in my classroom as we embark on this journey together called Chemistry. We are all going to work together, learn together, and grow together. I hope that you are equally as excited to learn about chemistry as I am to teach it. Use the tabs below to view our schedule, policies and handouts.</p>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default IntroMessage