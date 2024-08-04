import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Register = () => {
  const router = useRouter();
  return (
    <div className="container">
      <Head>
        <title>Register</title>
      </Head>
      <h1>{router.pathname} In proggress....</h1>
    </div>
  );
};

export default Register;
