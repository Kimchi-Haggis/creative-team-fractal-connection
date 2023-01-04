import Layout from '@layouts/Layout'

import Hero from '@components/section/Hero'
import About from '@components/section/About'
import Member from '@components/section/Member'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Member />
    </Layout>
  )
}
