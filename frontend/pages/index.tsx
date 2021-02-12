import Head from "next/head";
import Login from "../pages/user/login";

const IndexPage = () => (
  <>
    <Head>
      <title>HOME</title>
      <meta name="description" content="Home"/>
      <Login/>
    </Head>
  </>
);

export default IndexPage;
