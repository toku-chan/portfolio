import styled from '@emotion/styled';

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 36px;
  padding: 18px 0;
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
