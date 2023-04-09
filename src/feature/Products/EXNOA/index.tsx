import styled from '@emotion/styled';
import { Heading_2 } from '~/designSystems/Heading';
import { simulatedProductsList } from './config';

const DetailWrapper = styled.section`
  margin-top: 18px;
`;

export function Exnoa() {
  return (
    <DetailWrapper>
      <Heading_2>合同会社EXNOA</Heading_2>
      <ul>
        {simulatedProductsList.map(item => (
          <li key={item.title}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </DetailWrapper>
  );
}
