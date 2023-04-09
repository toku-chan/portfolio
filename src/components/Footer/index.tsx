import styled from '@emotion/styled';
import { spacingSize } from '~/designSystems';

// TODO: Footerをページの最下部に固定する
const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: ${spacingSize.level4_0x}px;
  padding: ${spacingSize.level2_0x}px 0;
`;

const Copyright = styled.div`
  font-size: 11px;
`;

export function Footer() {
  return (
    <FooterStyle>
      <Copyright>コピーライト</Copyright>
    </FooterStyle>
  );
}
