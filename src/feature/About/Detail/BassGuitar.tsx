import styled from '@emotion/styled';
import { Heading_2 } from '~/designSystems';

// TODO: 他の場所もこのサイズ感にするが共通化するべきかは検討する
const Content = styled.section`
  margin: 36px auto 0;
  padding: 0;
`;

export function BassGuitar() {
  return (
    // MEMO: 持っているベースの写真とか載せても良いかも
    <Content>
      <Heading_2>ベース</Heading_2>
      <p>
        趣味程度で弾いてます。コピーするだけです。
        <br />
        「ぼっち・ざ・ろっく」を見て、大学生ぶりに弾き始めました。
      </p>
    </Content>
  );
}
