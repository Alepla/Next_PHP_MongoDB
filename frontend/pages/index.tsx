import Head from "next/head";
import ContentsList from "../components/contents/ContentsList";
const IndexPage = () => (
  <>
    <Head>
      <title>HOME</title>
      <meta name="description" content="Home"/>
    </Head>
    <ContentsList />
  </>
);

export default IndexPage;
