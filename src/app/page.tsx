import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '中島一徳 - Home | PortFolio',
  description: '中島一徳(なかじま いっとく)のポートフォリオサイトにようこそ',
  viewport: 'width=device-width, initial-scale=1',
};

export default function Home() {
  return (
    <section>
      <h1>Portfolio</h1>
      <div>
        <div>
          <p>顔写真を載せたい</p>
        </div>
        <div>
          <p>自己紹介</p>
          <p>名前</p>
          <p>誕生日</p>
          <p>性別</p>
        </div>
      </div>
    </section>
  );
}
