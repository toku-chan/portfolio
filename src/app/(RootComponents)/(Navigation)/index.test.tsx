import { render } from '@testing-library/react';
import { Navigation } from '.';

// NOTE: テストがないことでActionsがこけるので、clientのNavigationコンポーネントで仮のテストを実行
describe('Navigation', () => {
  test('テスト｜リンクが表示されている', () => {
    const { getByText } = render(<Navigation />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Products')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });
});
