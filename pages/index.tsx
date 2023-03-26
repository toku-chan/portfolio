import type { NextPage } from 'next';
import { Layout } from '../src/components/Layout';
import { About } from '../src/components/About';
import { Career } from '../src/components/Career';
import { Skills } from '../src/components/Skills';

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
