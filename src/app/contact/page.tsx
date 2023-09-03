import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '中島一徳 - Contact | PortFolio',
  description: 'ご依頼はコンタクトページより',
  viewport: 'width=device-width, initial-scale=1',
};

export default function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>依頼フォームを作成中</p>
    </section>
  );
}
