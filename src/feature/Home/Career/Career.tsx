import styled from '@emotion/styled';
import { career } from './config';

const Content = styled.section`
  margin: 0 auto;
  padding: 0;
`;

export function Career() {
  return (
    <Content>
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
