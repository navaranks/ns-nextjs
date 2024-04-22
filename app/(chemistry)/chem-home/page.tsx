import ChemQuickLinks from '@/components/chemistry/chemquicklinks'
import IntroMessage from '@/components/chemistry/intromessage'
import Head from 'next/head'
import React from 'react'


export default function chemhome() {
  return (
    <div>
      <Head>
        <title>Chemistry Home</title>
        <meta property="og:title" content="Chemistry Home" key="title" />
      </Head>
      <IntroMessage />
      <ChemQuickLinks />
    </div>
  )
}
