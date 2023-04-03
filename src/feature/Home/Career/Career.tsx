import Link from 'next/link';
import styled from '@emotion/styled';
import { career } from './config';
import { Heading_1 } from '~/designSystems';

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function Career() {
  return (
    <Content>
      <Heading_1>Career</Heading_1>
      <ul>
        {career.map(item => (
          // TODO: idとかにしておきたいが、暫定でdetailにしておく
          <li key={item.detail}>
            {item.date}: {item.detail}
          </li>
        ))}
      </ul>
      <Link href='/works'>制作実績はこちら</Link>
    </Content>
  );
}
