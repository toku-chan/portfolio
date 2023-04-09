import { Heading } from '~/designSystems';
import * as Detail from './Detail';
import * as S from '../styles';

export function Interest() {
  return (
    <S.Content>
      <Heading.screenTitle>趣味・興味あること・関心事</Heading.screenTitle>
      {/* NOTE: 最近やっている順番で表示。その時のブームよって並び替えすること */}
      <Detail.BassGuitar />
      <Detail.Games />
      <Detail.WinterSports />
      <Detail.Camping />
    </S.Content>
  );
}
