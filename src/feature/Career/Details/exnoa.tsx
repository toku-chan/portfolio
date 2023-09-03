import { H3 } from '~/feature/Heading';
import * as S from './styles';

export function Exnoa() {
  return (
    <S.Section>
      <H3>
        合同会社EXNOA<S.Span>2019/05~2023/08</S.Span>
      </H3>
      <S.Paragraph>
        <a href='https://games.dmm.com/'>ゲームプラットフォーム</a>
        の開発を行いました。
      </S.Paragraph>
      <S.Paragraph>
        プラットフォームに新規機能の追加・改修・保守・運用や、ランディングページのコーディング、開発環境構築・改善、フロントエンドチームのリーダー兼テックリードの経験があります。
      </S.Paragraph>
      <S.Paragraph>
        Next.js, TypeScript, GraphQL, Laravelで開発をしていました。（一部抜粋）
      </S.Paragraph>
    </S.Section>
  );
}
