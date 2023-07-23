import styled from '@emotion/styled';
import { mySkillSets } from './config';
import { SpaceSize } from '~/config';

const Wrapper = styled.div`
  padding-top: ${SpaceSize.base_x2}px;
`;

export function Skills() {
  return (
    <Wrapper data-testid='skills'>
      <ul>
        {mySkillSets.map(item => (
          <li key={item.skill}>{item.skill}</li>
        ))}
      </ul>
    </Wrapper>
  );
}
