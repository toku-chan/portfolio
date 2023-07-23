import styled from '@emotion/styled';
import { career } from './config';
import { SpaceSize } from '~/config';

const Wrapper = styled.div`
  padding-top: ${SpaceSize.base_x2}px;
`;

export function Career() {
  return (
    <Wrapper>
      <ul>
        {career.map(item => (
          // TODO: idとかにしておきたいが、暫定でdetailにしておく
          <li key={item.detail}>
            {item.date}: {item.detail}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
