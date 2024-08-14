import React from "react";
import Head from "next/head";
// import { useRouter } from "next/router";
import About from "../../components/About";

const AboutPage = () => {
  // const router = useRouter();
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div>
        <About />
      </div>
    </>
  );
};

export default AboutPage;
