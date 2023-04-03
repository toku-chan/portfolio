import styled from '@emotion/styled';

const HeaderStyle = styled.header`
  width: 100%;
  padding: 18px 0;
`;

const Title = styled.div`
  margin-left: 18px;
  font-size: 21px;
`;

export function Header() {
  return (
    <HeaderStyle>
      <Title>Portfolio</Title>
    </HeaderStyle>
  );
}
