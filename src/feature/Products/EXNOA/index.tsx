import styled from '@emotion/styled';
import { Heading, spacingSize } from '~/designSystems';
import { simulatedProductsList } from './config';

const DetailWrapper = styled.section`
  margin-top: ${spacingSize.level2_0x}px;
`;

export function Exnoa() {
  return (
    <DetailWrapper>
      <Heading.sectionTitle>合同会社EXNOA</Heading.sectionTitle>
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
