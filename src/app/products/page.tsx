import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '中島一徳 - Products | PortFolio',
  description: '過去の制作実績・コーディングについてご紹介',
  viewport: 'width=device-width, initial-scale=1',
};

export default function Products() {
  return (
    <section>
      <h1>Products</h1>
      <section>
        <h2>成果物</h2>
        <p>載せれるものがないので、完成し次第掲載します</p>
      </section>
    </section>
  );
}
