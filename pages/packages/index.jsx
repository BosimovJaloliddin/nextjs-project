import About from "@/components/About";
import Location from "@/components/Location";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Packages = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Packages</title>
      </Head>
      <div>
        <About />
        <Location />
      </div>
    </>
  );
};

export default Packages;
