// NOTE: Page RouterからApp Routerに移行は「https://nextjs.org/docs/pages/building-your-application/upgrading/app-router-migration#migrating-from-pages-to-app」を見ると良い
import Home from './home-page';

/**
 * NOTE: 現段階では利用していないが、getServerSidePropsとgetStaticPropsはより簡単になった
 * getServerSidePropsと同じような挙動をしたい場合は、fetchで取得するときにcache: no-storeとすることで似た表現が可能
 * getStaticPropsと同じような挙動をしたい場合は、fetchで取得するときcacheは特に記載しないことで似た表現が可能（デフォルトでcache: force-cacheになっている）
 */

export default async function Page() {
  return <Home />;
}
