import styled from '@emotion/styled';
import { Heading_2 } from '~/designSystems';

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function Camping() {
  // MEMO: ブログ作ったらそっちに誘導するとかでも良いかも
  return (
    <section>
      <Heading_2>キャンプ</Heading_2>
      <p>
        昔やっていたけど、ずっとできていないのでやりたい。
        <br />
        在宅でずっと家だから、無になりにいきたい。焚き火を一生眺めていたい。
      </p>
    </section>
  );
}
