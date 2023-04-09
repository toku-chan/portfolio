import styled from '@emotion/styled';
import { Heading, spacingSize } from '~/designSystems';
import { mySkillSets } from './config';

const Content = styled.section`
  margin: ${spacingSize.level4_0x}px auto 0;
  padding: 0;
`;

export function Skills() {
  return (
    <Content>
      <Heading.screenTitle>スキル</Heading.screenTitle>
      <ul>
        {mySkillSets.map(item => (
          <li key={item.skill}>{item.skill}</li>
        ))}
      </ul>
    </Content>
  );
}
