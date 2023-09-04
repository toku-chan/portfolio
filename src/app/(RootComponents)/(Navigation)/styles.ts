import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 40px;
  background-color: black;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 0;
`;

export const Item = styled.li`
  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
