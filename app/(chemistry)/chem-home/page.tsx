
import ChemQuickLinks from '@/components/chemistry/chemquicklinks'
import IntroMessage from '@/components/chemistry/intromessage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Chemistry Home',
}
export default function chemhome() {
  return (
    <div>
      <IntroMessage />
      <ChemQuickLinks />
    </div>
  )
}
