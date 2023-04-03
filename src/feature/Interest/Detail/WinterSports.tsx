import styled from '@emotion/styled';
import { Heading_2 } from '~/designSystems';

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function WinterSports() {
  // MEMO: ブログ作ったらそっちに誘導するとかでも良いかも
  return (
    <Content>
      <Heading_2>スノボー</Heading_2>
      <p>毎シーズン滑りに行ってます。</p>
    </Content>
  );
}
