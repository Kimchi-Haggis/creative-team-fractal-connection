import Layout from '@layouts/Layout'

import Hero from '@components/section/Hero'
import About from '@components/section/About'
import Member from '@components/section/Member'
import Contact from '@components/section/Contact'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Member />
      <Contact />
    </Layout>
  )
}
