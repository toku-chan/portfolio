import Link from 'next/link';
import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 18px 0;

  // NOTE: タブレットは考慮しない
  // レスポンシブでSP表示は767pxまで
  @media screen and (max-width: 767px) {
    width: 100%;
    padding-left: 18px;
    padding-right: 18px;
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
`;

// TODO: レスポンシブでSP表示は767px以下になった時の表示を検討する（ハンバーガーメニューでいいかな？）
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;

  li {
    // 14px*1.2の大きさにしてみた
    font-size: 16px;
  }
`;

export function Header() {
  return (
    <HeaderStyle>
      <ContentWrapper>
        <Title>Portfolio</Title>
        <nav>
          <List>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/works'>Works</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </List>
        </nav>
      </ContentWrapper>
    </HeaderStyle>
  );
}
