import { Layout } from '~/components/Layout';
import { About } from './About';
import { Interest } from './Interest';

export function AboutContent() {
  return (
    <Layout>
      <About />
      <Interest />
    </Layout>
  );
}
