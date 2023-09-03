import * as S from './styles';
import { H3 } from '~/feature/Heading';

export function Ys() {
  return (
    <S.Section>
      <H3>
        株式会社{`Y's`}
        <S.Span>2019/05~</S.Span>
      </H3>
      <S.Paragraph>
        フロントエンドエンジニアとして所属しております。
        <br />
        普段の業務は他社へ常駐し開発業務を行っております。
      </S.Paragraph>
      <S.Paragraph>
        社員の学習管理サイトをフロントエンド5名で分業して実装を行いました。
        <br />
        React.js、TypeScriptで開発を行いました。
      </S.Paragraph>
    </S.Section>
  );
}
