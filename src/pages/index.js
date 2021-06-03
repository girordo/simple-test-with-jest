import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => (
  <div className="flex flex-col min-h-screen">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="flex flex-1 items-center justify-center">
      <h1 className="text-6xl font-bold">
        Hehe here we are again on a pre holiday studying night
      </h1>
    </main>
    <Footer />
  </div>
);

export default Home;
