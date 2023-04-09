import { Heading } from '~/designSystems';
import { DetailWrapper } from '../../styles';

export function BassGuitar() {
  return (
    // MEMO: 持っているベースの写真とか載せても良いかも
    <DetailWrapper>
      <Heading.sectionTitle>ベース</Heading.sectionTitle>
      <p>
        趣味程度で弾いてます。コピーするだけです。
        <br />
        「ぼっち・ざ・ろっく」を見て、大学生ぶりに弾き始めました。
      </p>
    </DetailWrapper>
  );
}
