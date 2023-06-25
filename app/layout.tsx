import { Metadata } from 'next';
import RestStyledComponent from './RestStyledComponent';

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
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: LayoutProps) {
  return (
    <html lang='ja'>
      <body>
        <RestStyledComponent>{children}</RestStyledComponent>
      </body>
    </html>
  );
}
