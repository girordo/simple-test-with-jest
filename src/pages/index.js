import Head from "next/head";
import Footer from "../components/Footer";

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="text-6xl">
        Hehe here we are again on a pre holiday studying night
      </h1>
      <Footer />
    </main>
  </div>
);

export default Home;
