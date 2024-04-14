import React from 'react'
import { Card, CardContent } from '../ui/card'

function ChemHero() {
  return (
    <div className='bg-[#f4f4f4] py-2 px-4 '>
        <Card className='max-w-screen-xl mx-auto'>
            <CardContent className='px-4 py-3 '>
                <img src='/images/cbanner.png' className='object-cover h-32 mx-auto md:h-40 '></img>
            </CardContent>
        </Card>
    </div>
  )
}

export default ChemHero