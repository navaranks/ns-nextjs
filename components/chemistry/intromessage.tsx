import React from 'react'
import { Card, CardContent } from '../ui/card'

function IntroMessage() {
  return (
    <div className='bg-[#f4f4f4] py-2 px-4 space-y-4'>
        <Card className='max-w-screen-xl mx-auto'>
            <CardContent className='flex flex-col md:flex-row px-4 py-3'>
                <div className='mx-auto p-2'>
                    <img src="https://placehold.co/500x500/DA4453/white" alt="" />
                </div>
                <div className='mx-auto p-2'>
                    <img src="https://placehold.co/500x500/DA4453/white" alt="" />
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default IntroMessage