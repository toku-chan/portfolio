// NOTE: クライアントで実装しているcomponentsをimportする場合は'use client'をつけておく必要がある
// NOTE: 'use client'を記載することで、このファイルはclient components扱いになる
'use client';

import { H1 } from '~/feature/Heading';

export default function Home() {
  return (
    <>
      <H1>About</H1>
    </>
  );
}
