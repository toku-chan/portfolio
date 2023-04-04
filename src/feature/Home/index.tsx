import { Layout } from '~/components/Layout';
import { Career } from './Career';
import { Skills } from './Skills';
import { Contact } from './Contact';

export function HomeContent() {
  return (
    <Layout>
      <Career />
      <Skills />
      <Contact />
    </Layout>
  );
}
