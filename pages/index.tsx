import type { NextPage } from 'next';
import { Layout } from '~/components/Layout';
import { About } from '~/components/About';
import { Career } from '~/components/Career';
import { Skills } from '~/components/Skills';

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
      <Career />
      <Skills />
    </Layout>
  )
}

export default Home
