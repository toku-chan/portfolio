import { Heading } from '~/designSystems';
import { DetailWrapper } from '../../styles';

export function Camping() {
  // MEMO: ブログ作ったらそっちに誘導するとかでも良いかも
  return (
    <DetailWrapper>
      <Heading.sectionTitle>キャンプ</Heading.sectionTitle>
      <p>
        昔やっていたけど、ずっとできていないのでやりたい。
        <br />
        在宅でずっと家だから、無になりにいきたい。焚き火を一生眺めていたい。
      </p>
    </DetailWrapper>
  );
}
