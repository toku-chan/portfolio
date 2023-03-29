import { Layout } from '~/components/Layout';
import { About } from './About';
import { Career } from './Career';
import { Skills } from './Skills';
import { Interest } from './Interest';
import { Contact } from './Contact';

export function HomeContent() {
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