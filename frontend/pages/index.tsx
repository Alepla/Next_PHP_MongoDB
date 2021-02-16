import Head from "next/head";
import Contents from "../components/contents/Contents";
const IndexPage = () => (
  <>
    <Head>
      <title>HOME</title>
      <meta name="description" content="Home"/>
    </Head>
    <Contents />
  </>
);

export default IndexPage;
