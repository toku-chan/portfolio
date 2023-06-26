// NOTE: クライアントで実装しているcomponentsをimportする場合は'use client'をつけておく必要がある？
// NOTE: 'use client'を記載することで、このファイルはclient components扱いになる？
// Question: getServerSidePropsとかを記載しているときは'use client'はない方が良いのか？公式を見る限りファイルを分けて管理している。
'use client';

import { HomeContent } from '~/feature/Home';

export default function Home() {
  return <HomeContent />;
}
