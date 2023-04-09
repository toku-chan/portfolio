import styled from '@emotion/styled';
import { Heading } from '~/designSystems';
import { simulatedProductsList } from './config';

const DetailWrapper = styled.section`
  margin-top: 18px;
`;

export function Ys() {
  return (
    <DetailWrapper>
      <Heading.sectionTitle>株式会社{`Y's`}</Heading.sectionTitle>
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
