import React from 'react';

export const useMediaQueryScreenWidth = () => {
  const [flg, setFlg] = React.useState(false);

  // HACK: windowを扱いたいためにuseEffectを利用している。
  // TODO: typeof windowで判定してもエラーが解消されなかったので、原因を特定して切り替えたほうが良さそう
  React.useEffect(() => {
    // 最大幅が768px以下の時にtrueを返す
    const mediaQueryList = window.matchMedia('(max-width: 768px)');
    mediaQueryList.addEventListener('change', (ev: MediaQueryListEvent) => {
      setFlg(ev.matches);
    });
  }, []);

  return flg;
};
