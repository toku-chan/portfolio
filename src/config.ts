/**
 * NOTE
 * * feature共通のconfigを管理する
 */

export const breakPoint = {
  mediaQuerySp: '@media (max-width: 768px)',
  mediaQueryPc: '@media (min-width: 769px)',
};

/**
 * NOTE
 * * 以下の利用を目的に共通の数値を管理している（8の倍数）
 * * font-size
 * * margin
 * * padding
 */
export const SpaceSize = {
  base_x0_5: 8,
  base_x0_75: 12,
  base: 16,
  base_x1_25: 20,
  base_x1_5: 24,
  base_x2: 32,
  base_x2_5: 40,
  base_x3: 48,
  base_x4: 64,
} as const;
