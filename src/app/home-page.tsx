// NOTE: クライアントで実装しているcomponentsをimportする場合は'use client'をつけておく必要がある
// NOTE: 'use client'を記載することで、このファイルはclient components扱いになる
'use client';

import { H1 } from '~/feature/Heading';
import { Section } from '~/feature/Section';
import { Introduction } from '~/feature/Introduction';
import { Career } from '~/feature/Career';
import { Skills } from '~/feature/Skills';
import { Products } from '~/feature/Products';
import { Contact } from '~/feature/Contact';

export default function Home() {
  // TODO: Aboutのコンポーネントを作成とかしていないが、全体を作ったときに煩雑に感じた場合は検討し直す
  return (
    <>
      <Section>
        {/* ICON */}
        <H1>ABOUT</H1>
        <Introduction />
        <Career />
      </Section>
      <Section>
        <H1>SKILL</H1>
        <Skills />
      </Section>
      <Section>
        <H1>PRODUCT</H1>
        <Products />
      </Section>
      <Section>
        <H1>CONTACT</H1>
        <Contact />
      </Section>
    </>
  );
}
