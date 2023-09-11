import { Metadata } from 'next';
import { H1 } from '~/designSystem';

import { Note } from './(note)';

export const metadata: Metadata = {
  title: '中島一徳 - Products | PortFolio',
  description: '過去の制作実績・コーディングについてご紹介',
  viewport: 'width=device-width, initial-scale=1',
};

export default async function Products() {
  return (
    <section>
      <H1>Products</H1>
      <Note />
    </section>
  );
}
