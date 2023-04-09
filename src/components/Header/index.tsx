import Link from 'next/link';
import styled from '@emotion/styled';
import { spacingSize } from '~/designSystems';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: ${spacingSize.level2_0x}px 0;

  // NOTE: タブレットは考慮しない
  // レスポンシブでSP表示は767pxまで
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-left: ${spacingSize.level2_0x}px;
    padding-right: ${spacingSize.level2_0x}px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // HACK: Headerの幅は適当。コンテンツ幅960pxよりもちょっと大きい方がよく見るという理由から1080pxに指定。
  width: 1080px;
`;

const Title = styled.span`
  font-size: 21px;

  a {
    color: #333;
    text-decoration: none;
  }
`;

export function Header() {
  return (
    <HeaderStyle>
      <ContentWrapper>
        <Title>
          <Link href='/'>Portfolio</Link>
        </Title>
      </ContentWrapper>
    </HeaderStyle>
  );
}
