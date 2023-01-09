import { PropsWithChildren } from 'react'
import Head from 'next/head'

import Navbar from '@components/common/navbar/Navbar'

interface Props {
  title?: string,
  transparent?: boolean
}


const Layout = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>Fractal Connection</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar/>
      {props.children}
    </>
  )
}

export default Layout;