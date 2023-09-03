import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '中島一徳 - About | PortFolio',
  description: '過去の経歴やスキルについてご説明',
  viewport: 'width=device-width, initial-scale=1',
};

export default function About() {
  return (
    <section>
      <h1>About</h1>
      <section>
        <h2>経歴</h2>
        <p>ざっくり経歴紹介</p>
        <p>現場ごとに扱ったスキルも記載</p>
      </section>
      <section>
        <h2>スキルセット</h2>
        <p>
          今までに業務で扱ったことのある言語・ライブラリ・フレームワークを列挙
        </p>
      </section>
    </section>
  );
}
