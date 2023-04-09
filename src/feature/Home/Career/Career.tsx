import styled from '@emotion/styled';
import { career } from './config';
import { Heading } from '~/designSystems';

const Content = styled.section`
  margin: 0 auto;
  padding: 0;
`;

export function Career() {
  return (
    <Content>
      <Heading.screenTitle>Career</Heading.screenTitle>
      <ul>
        {career.map(item => (
          // TODO: idとかにしておきたいが、暫定でdetailにしておく
          <li key={item.detail}>
            {item.date}: {item.detail}
          </li>
        ))}
      </ul>
    </Content>
  );
}
