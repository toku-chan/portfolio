import { Heading } from '~/designSystems';
import { DetailWrapper } from '../../styles';

export function Games() {
  return (
    <DetailWrapper>
      <Heading.sectionTitle>ゲーム</Heading.sectionTitle>
      <ul>
        <li>OverWatch2</li>
        <li>LINEモンスターファーム（スマホゲーム）</li>
        <li>ガーディアンテイルズ（スマホゲーム）</li>
      </ul>
      <p>最近はこの辺のゲームをちょこちょこやってます。</p>
    </DetailWrapper>
  );
}
