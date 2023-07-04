// NOTE: クライアントで実装しているcomponentsをimportする場合は'use client'をつけておく必要がある
// NOTE: 'use client'を記載することで、このファイルはclient components扱いになる
'use client';

import { HomeContent } from '~/feature/Home';

export default function Home() {
  return <HomeContent />;
}
