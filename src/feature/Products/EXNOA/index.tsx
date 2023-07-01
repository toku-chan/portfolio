import styled from '@emotion/styled';
import { simulatedProductsList } from './config';

const DetailWrapper = styled.section``;

export function Exnoa() {
  return (
    <DetailWrapper>
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
