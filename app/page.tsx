/**
 * 公式URL
 * * PageRouterからAppRouterへの移行は以下を参考にする
 * * https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app
 */

/**
 * 方針としてのメモ
 * * page.tsxで行うことはサーバー側で実行したい内容を記載
 * * Client Componentsが依存しない内容
 * * client Componentsに依存してしまう実装を行う際は、page.tsx以外で記載することにする
 */

/**
 * 気になり
 * * サーバ側でのfetch処理とかが膨大になったり、contextを実装し、そこから値を取得したい場合Client Components依存にはならないか？
 */

import { Metadata } from 'next';
import Home from './home-page';

/**
 * MetaDataについて
 * * 全ページで共通したい場合は、layout.tsxに宣言すると良いかもしれない
 * * * layout.tsxがClient Componentsに依存してしまう場合は、use clientとmetadataの併用ができない
 */
export const metadata: Metadata = {
  title: 'TKTK - PortFolio',
  description: 'welcome to My PortFolio',
};

export default async function Page() {
  return <Home />;
}
