import type { NextPage } from 'next';
import { Layout } from '~/components/Layout';
import { About } from '~/components/About';
import { Career } from '~/components/Career';
import { Skills } from '~/components/Skills';
import { Interest } from '~/components/Interest';
import { Contact } from '~/components/Contact';

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
      <Career />
      <Skills />
      <Interest />
      <Contact />
    </Layout>
  )
}

export default Home
