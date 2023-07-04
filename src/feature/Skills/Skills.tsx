import styled from '@emotion/styled';
import { mySkillSets } from './config';

const Content = styled.section`
  padding: 0;
`;

export function Skills() {
  return (
    <Content data-testid='skills'>
      <ul>
        {mySkillSets.map(item => (
          <li key={item.skill}>{item.skill}</li>
        ))}
      </ul>
    </Content>
  );
}
