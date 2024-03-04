import React from 'react'
import { Card, CardContent } from '../ui/card'

function HeroCard() {
  return (
    <Card className='px-4 py-5 text-center bg-red-400 border-none'>
        <CardContent className='p-0'>
            <img src='https://placehold.co/1600x500/orange/white'></img>
        </CardContent>
    </Card>
  )
}

export default HeroCard