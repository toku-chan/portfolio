import styled from '@emotion/styled';
import { ProfileIcon } from './ProfileIcon';
import { Personal } from './Personal';
import { Career } from './Career';
import { Skills } from '../Skills';
import { Products } from '../Products';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function HomeContent() {
  return (
    <>
      <Container>
        {/* 左ナビ */}
        <div>
          <ProfileIcon />
          <Personal />
        </div>
        {/* メインコンテンツ */}
        <div>
          <Career />
          <Skills />
          <Products />
        </div>
      </Container>
    </>
  );
}
