import Link from 'next/link';
import { Layout } from '~/components/Layout';
import { About } from './About';
import { Interest } from './Interest';

export function AboutContent() {
  return (
    <Layout>
      <About />
      <Interest />
      <Link href='/'>Back To Home</Link>
    </Layout>
  );
}
