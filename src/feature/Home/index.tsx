import { Layout } from '~/components/Layout';
import { Career } from './Career';
import { Skills } from './Skills';

export function HomeContent() {
  return (
    <Layout>
      <Career />
      <Skills />
    </Layout>
  );
}
