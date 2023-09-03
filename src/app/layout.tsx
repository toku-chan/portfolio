import { headers } from 'next/headers';
import { Navigation } from './(components)/Navi';
import { RestStyled } from './(components)/RestStyled';
import { Provider } from './(components)/Provider';

// HACK: UAがいつ利用できなくなるかはわからないが、それまでは利用し続ける
// NOTE: next/headerはclientでは実行できない
function getDevice() {
  const userAgent = headers().get('user-agent') as string;
  const isIOS = userAgent.indexOf('iPhone') > 0;
  const isAndroid =
    userAgent.indexOf('Android') > 0 && userAgent.indexOf('Mobile') > 0;
  const deviceType = isIOS || isAndroid ? 'sp' : 'pc';

  return {
    deviceType,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { deviceType } = getDevice();
  return (
    <html lang='ja'>
      <body>
        <Provider deviceType={deviceType}>
          <RestStyled>
            <Navigation />
            {children}
          </RestStyled>
        </Provider>
      </body>
    </html>
  );
}
