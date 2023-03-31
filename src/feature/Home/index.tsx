import { Layout } from '~/components/Layout';
import { About } from './About';
import { Career } from './Career';
import { Skills } from './Skills';
import { Contact } from './Contact';

export function HomeContent() {
  return (
    <Layout>
      <About />
      <Career />
      <Skills />
      <Contact />
    </Layout>
  )
}