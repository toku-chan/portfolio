import { Metadata } from 'next';
import { headers } from 'next/headers';
import RestStyledComponent from './RestStyledComponent';
import { Header } from '~/feature/Layout/Header';
import { MainContent } from '~/feature/Layout/MainContent';
import { Footer } from '~/feature/Layout/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

/**
 * MetaDataについて
 * * 全ページで共通したい場合は、layout.tsxに宣言すると良いかもしれない
 * * 注意：use client宣言されたページではmetadataは利用できるない
 */
export const metadata: Metadata = {
  title: 'TKTK - PortFolio',
  description: 'welcome to My PortFolio',
  viewport: 'width=device-width, initial-scale=1',
};

// HACk: UAがいつ利用できなくなるかはわからないが、それまでは利用し続ける
// TODO: contextで持ち、どこでも利用できるようにしたい
function getDevice() {
  const userAgent = headers().get('user-agent') as string;
  const isIOS = userAgent.indexOf('iPhone') > 0;
  const isAndroid =
    userAgent.indexOf('Android') > 0 && userAgent.indexOf('Mobile') > 0;
  const isSp = isIOS || isAndroid;

  return {
    isSp,
    isIOS,
    isAndroid,
  };
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: LayoutProps) {
  const { isSp, isIOS, isAndroid } = getDevice();
  console.log(isSp, isIOS, isAndroid);
  return (
    <html lang='ja'>
      <body>
        <RestStyledComponent>
          <Header />
          <MainContent>{children}</MainContent>
          <Footer />
        </RestStyledComponent>
      </body>
    </html>
  );
}
