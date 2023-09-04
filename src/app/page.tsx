import { Metadata } from 'next';
import { ClientHome } from './(RootComponents)/home';

export const metadata: Metadata = {
  title: '中島一徳 - Home | PortFolio',
  description: '中島一徳(なかじま いっとく)のポートフォリオサイトにようこそ',
  viewport: 'width=device-width, initial-scale=1',
};

export default function Home() {
  return <ClientHome />;
}
