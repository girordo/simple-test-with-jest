import Head from "next/head";
import Footer from "../components/Footer";

const Home = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">
        Hehe here we are again on a pre holiday studying night
      </h1>
    </main>
    <Footer />
  </div>
);

export default Home;
