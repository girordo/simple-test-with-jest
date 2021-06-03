import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Simple test with jest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="min-h-screen flex items-center">
        <h1 className="text-6xl font-bold">Not Found Page</h1>
        <p>Simple text from a not found page</p>
        <Link href="/" className="text-2xl hover:bg-purple-600">
          Take me back again to the home page
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
