import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Faq = () => {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>FAQ</title>
      </Head>
      <h1>{router.pathname} In proggress....</h1>
    </div>
  );
};

export default Faq;
