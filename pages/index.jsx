import Banner from "@/components/Home/Banner";
import FAQ from "@/components/Home/FAQ";
import Feautures from "@/components/Home/Feautures";
import Teams from "@/components/Home/Teams";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Home</title>
      </Head>
      <Banner />
      <Feautures />
      <Teams />
      <FAQ />
    </div>
  );
};

export default Home;
