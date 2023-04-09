import styled from '@emotion/styled';
import { career } from './config';
import { Heading_1 } from '~/designSystems/Heading';

const Content = styled.section`
  margin: 0 auto;
  padding: 0;
`;

export function Career() {
  return (
    <Content>
      <Heading_1>Career</Heading_1>
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
