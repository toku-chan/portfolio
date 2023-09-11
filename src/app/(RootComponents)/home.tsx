'use client';

import Link from 'next/link';
import styled from '@emotion/styled';

// TODO: flexでやる必要ないかも。GridLayoutでやるように修正する
// https://developer.mozilla.org/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
const Section = styled.section`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Container = styled.div`
  width: 100%;
`;

function SnsLink() {
  return (
    <section>
      <h2>SNS</h2>
      <ul>
        <li>
          <a href='https://github.com/toku-chan' target='_blank' rel='noopener'>
            Github
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/web_ittokun'
            target='_blank'
            rel='noopener'
          >
            X(Twitter)
          </a>
        </li>
        <li>
          <a href='https://qiita.com/ittokun' target='_blank' rel='noopener'>
            Qiita
          </a>
        </li>
        <li>
          <a href='https://zenn.dev/toku' target='_blank' rel='noopener'>
            Zenn
          </a>
        </li>
        <li>
          <a
            href='https://note.com/tktk_ittokun'
            target='_blank'
            rel='noopener'
          >
            note
          </a>
        </li>
      </ul>
    </section>
  );
}

export function ClientHome() {
  return (
    <Section>
      <Wrapper>
        <Container>
          <p>顔写真を載せたい</p>
        </Container>
        <Container>
          <section>
            <h2>名前</h2>
            <p>中島 一徳</p>
          </section>
          <section>
            <h2>自己紹介</h2>
            <p>
              1993年神奈川県生まれ。千葉県在住。2017年に日本大学商学部を卒業。
            </p>
            <p>
              2019年から小売業界からIT業界に転職。フロントエンドエンジニアとして業務しています。
              <br />
              実際にどういったことをやってきたかは
              <Link href='/about'>Aboutページ</Link>をご確認ください。
            </p>
            <section>
              <h3>好きなこと・趣味</h3>
              <dl>
                <dt>FPSゲーム</dt>
                <dd>最近はちょっとした息抜き程度でしかやっていません</dd>

                <dt>スノーボード</dt>
                <dd>毎シーズン行っています</dd>

                <dt>キャンプ</dt>
                <dd>昔はやっていたのですが、久しくやっていないので行きたい…</dd>
              </dl>
            </section>
          </section>
          <SnsLink />
        </Container>
      </Wrapper>
    </Section>
  );
}
