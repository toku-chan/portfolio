import { Metadata } from 'next';

type LayoutProps = {
  children: React.ReactNode;
};

// NOTE: 全ページ共通で利用するメタの場合はLayoutに指定しても良いかも
// NOTE: ページごとに宣言したい場合は、page.tsx内に定義するとできるっぽい
export const metadata: Metadata = {
  title: 'TKTK - PortFolio',
  description: 'welcome to My PortFolio',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: LayoutProps) {
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  );
}
