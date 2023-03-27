import type { NextPage } from 'next';
import { Layout } from '~/components/Layout';
import { About } from '~/components/About';
import { Career } from '~/components/Career';
import { Skills } from '~/components/Skills';
import { Interest } from '~/components/Interest';

const Home: NextPage = () => {
  return (
    <Layout>
      <About />
      <Career />
      <Skills />
      <Interest />
    </Layout>
  )
}

export default Home
