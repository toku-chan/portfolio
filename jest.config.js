import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // テスト環境のnext.config.jsと.envファイルを読み込むために、Next.jsアプリへのパスを指定
  dir: './',
});

// Jestに渡すカスタムコンフィグを定義
/** @type {import('jest').Config} */
const config = {
  // jest.setup.jsを定義するときのみ有効化する
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // tsconfig.jsonに定義したpathと同じpathを定義
    '~/*': './src/*',
  },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfigは、next/jestが非同期であるNext.jsの設定を読み込めるようにするためにエクスポートする
export default createJestConfig(config);
